{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
    flake-parts.url = "github:hercules-ci/flake-parts";
    devshell = {
      url = "github:deemp/devshell";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        flake-utils.inputs.systems.follows = "systems";
      };
    };
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import inputs.systems;
      imports = [
        inputs.devshell.flakeModule
        inputs.treefmt-nix.flakeModule
      ];
      perSystem =
        {
          self',
          system,
          lib,
          config,
          pkgs,
          ...
        }:
        let
          packages = {
            bot = pkgs.writeShellApplication {
              runtimeInputs = [ 
                pkgs.docker
                pkgs.poetry
              ];
              name = "default";
              text = builtins.readFile ./scripts/up.sh;
              meta.description = "Run the bot";
            };

            docs = pkgs.writeShellApplication {
              name = "docs";
              runtimeInputs = [ pkgs.mdsh ];
              text = ''mdsh'';
              meta.description = "Run mdsh on README.md";
            };
          };

          devshells.default = {
            commands = {
              tools = [
                pkgs.poetry
                pkgs.docker
              ];
              scripts = [
                {
                  packages = {
                    inherit (config.packages) bot docs;
                  };
                  prefix = "nix run .#";
                }
              ];
            };
          };
        in
        {
          inherit devshells packages;
          treefmt = {
            projectRootFile = "flake.nix";
            programs.black.enable = true;
          };
        };
    };
}
