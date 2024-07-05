import { createMachine } from "xstate";

export const machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCUwGMwEsBuYAEATmALaYB2EYBseAhgEYD2ArgC56wDWmADj5Hgi1MAGwCeeYmDCtyUPAEdmcWYzKwAdAFVYVDQEkIIsAGIAKgAt8aZgSJl2sqXkywEeADwARAIL6AMgCaAPoAsgCi4Wb6AHIA4sHREQB8ANoADAC6iKA8jLCYqmQ5IAAeiABMVRoAHADMFTXpdQBsACwAjOlNAJwANCBiiAC0FQDsNRoArBPpUzUtU1NtNRUtLQC+GwOoGDj4RKQUVDQMLOxcvPwQgsLiktKyZPJKKphqmjp6hsYmXwR4NAWWjPOCEEjkSgA-gEd4QDLZJAgPIFIolcoIOrNDQNdo9KZ1Go1KY9Ho1AZDBBtKY4sYVHp1akNOldHqbbYgXZYXDgo5Q05MNgcbh8ARCUQSKQyOSKZSwIqfXQEDQABVoBFkaF4tFYYPIeFYVluEoe0ueJlQPBEmDBrEYeDU9zU+Fe8veZARJRRhXd6MQHTZGg6HTGPXSFQ6JJDHRaFMQLUjGjWYzaWJaa2D7J26G5Bwhx2odEFFxF12N9ylTxecoV2iVGi8jDBsEYUkNchM+lYAHIaE58AAzRgA2i8yFUT1I71opEY4YNCrTNqNAltTrpMk9NpxhAMuoafFsqrtFqkqYdLbZvY8w7jwtnIWXUU3cUVx4y121-4Nps0FttiwO3+QFgVBGhbwLPAYThSdcnyH01D9BAKg3JMt0aUMEyJdIUx3YY2haDR0g6GpIzGDo6jGSj1jGLNORzfYxwLAVzmFK4xTuSV32eWU3g+Os9DVDVMC1HgdT1MgDSNV8uLNeRaCgYQyD+JUODAChYFg5F4JnUAMTGVC1koqpCRmUj+kGRAajGMYcRWAM6g6cZ8Uoy96OvPM+ROItWKfMsZNNKteLdfiACFGFYDQAAkQSMTy7ygqg4RAkEYBMLTp19WdEAadID3IsYpnTFo6lKgzY0shAnLy0kmTmKZmlPVM3K5RiIP5HzH1LDiTUrD8a3dTRwsimKKGMJioUS2FGBuIFUtMVIOkRODUSyvTEHSHd0hahib3zDqHxLdiX04wL+r49QNGGhtTr655oti8b2qoPAhwBb8fDIWhxAALxlYCiFgPJ1DgdKsi9HS1rKSoqkXU8ioanoU3GCid2DYMkxWLEmiqay6imHaPIm7zDrY59y1koLP0Gq6Ipu3ruKgB6xviyC3rwb8AGV1JuUdnoIMHlu01bEOyqrlxpVMVlI9I2g3akKspLpzzs0qWm6Ci1x6Qnc2J+9izJ-zbsZ4La2urxjbk5m4r117hw5+tuYoOg9fSpaIZF4oxZjJGNDaLc6iR+l6iaRXEDZDogwaJzT1x6ydba-aSYNvyerfOTTZp83Lara2nqTgF2e-UabeGlwaHoERGDQThIBMUp5XEjRaAHXUCAACga9IAEoLV21mDpT7qToZjPqbCumLdH3OS-zrzC-t4vHvwMvXDwSvq9r+FwanSHRfWqr5jaJdV3xakKLDhB6kI9WWnqCpGRTNME72+eWK646KbOnjx8u7Pp7kBoAAwmoCAzA0COGkjnDsZddAaQynvL2B8OgERpEVaybQbILEjKsHcNQejTDDE5c8jUSJORfgPZOvlh5fzutWC6Q1J7QPursYcNxG6sGYDQRgA5aFwFgApMERclTuBBLAAA7lQSAAB6ZgX11CSKIBAeuHCwDN1blQTu6Qe59yJvzd+R1yYBToZnCekUp7p1zqwgg7DWA6i4Q6Xhxj+GCJoMIqgoiFFSIgLI+REjvEIM9khXGhEKINVhmSQk6RL5ORIkRKY9J8QJIwvjChesDGGzTpTc6IVLrhDINgTABA1BSAcCpF6jB+DqCkvgFUzBK4iRSqwQJCEkHQwQJtSq20OStVfneDJqcR6WJybWOpDS0BNKDD0RoatzBWEksBOBEBNI7xWq0pC5UcQRmIurUM4Zplo2DMfcqBFKKFQjATHp-d0mdUMUbABP8Br8TGdaCZc1IrjBmZg8pAIiC0GWTUh4sABEwBabpdpoxZYHhmNM2qOENwWUpC0UM0xVgRhqP7Mk5EahpP0bczJQzsmPIYaqeprzJmrEogRMYgsPbrLFmsA8jkzmMgDBUBJqNKro0ItsqlFFpmlQqLiguAyaHOLHk8y6LzGnvIPA-DF7KVF2N1OotuWidG9Mofrahn9xVU0lZoaVbzgSRQFQqqYYKoYYgvoRQqy4bLjHqCROoO5zw30KgsaJ1Lr7CrfviwZfCJUkqNZMixRL5BSGBa4n54J-k0EjSCuAlr97tMcouaJNk9kzCWHfHcVRI6B2RZg88VEExjF9f0-1YrmH0NyYaslMqTX02GTxBNri5X4wVXM9S68IpqXgas4W9LkEbjQdM-ZG4UHdDRgkpM1kejozWLLYMFbmJVt1TW0xUqG3Gp1M28NQLE2aDNcjbtkkmAXB5isoWmUU3WtHYQlCdIEYUQqDuZkGhsVrCJNi6WdFNU3NJgGvVIyab-F7HgFUsJsDiSaXgcRhQLB4GunjDFhVaW7yCWLRkeVCpYjmBMO+5UXVcofrZWWKwwxHwWEKq5eiRXrqMZu3+ioqAQagzgWD7z4OIeQ3TVDxa3Y3sQUhdGmN+UzO0RfbcXLHIEIWBMAy-t6SLHLW5MgM04AlAA3ioD1aHm1oVHS8Fc55i2Uomy9FpFSIycpPhAiWzWj4yRiSZ9q7B46qYwZrdrGCDGatSMdleVrLaLWLfEiMw32VXZYRfEBkQztAqARDc7mqEfy8y2wzYH6w-DAP5u9IwUFJjKgk-E7RokYsvoyY+zkiTspC2SC8dHda6aHhu7zLGBLKiEpqbUuoaD6kNPgEDzx8ttIxFUSW2i1x3wSYHEMUXKTLkIssCMy57UoWmal7V6X7mZZ811n8zZWwyEAqNzDw6IUoUXCF8M6xokRbpDuTBxyiqphJMigMdJtuiva-tzr34esiT6xJQFI35KKXIGN0TIZP2TrmAyTB6sQw7losffBSX1YEhKjGHFzXE5+r039g9nXhrQ+9ksfc-tUxB0iaHPCKYgwEgZDZ+FGLLlXhawxonGWScGtpiNZettoIzRSqCcnyDkd+wDrTkO0S0aBwIUl+o3RwwpI5+5LnhO2u8+-llsx+69cS-aTGYi0uad0jp-L2TQY75BypdM1Y4YfuMb23zkl-9Mt5y1Xbd6SpjfWrxObwOlu5dVcDkmNlDRA6lSnXUF3PO3d64O578N3vbbuOVJ9b6Yg-o8QBnAYGuh4AXZM-6BY+5FgLqRnSOkxFFuIGW0uKzmCzzO-x30tdiesnJ9J0wgz6f+a+4dnoJ2vM9YB-L4ztccxVcs4vjuBMBCkbmQSRMU3-7rmtc80nkxffzE1sHwXYfS8WZ8fYGvDeNdICT6qkSSYjQYwhi3AZMM5JKrWXIxudYyLlduY71qr9rrnvvzqnnrsAqAuApAsNjWrfiGJRLSFXosBimuCgmjNotLiRKsPgnMO0MSAnjrrvibPvobnQhoNYrYvYtwk4sbFGjAG4ovCInQF4kor4mIoojfqXgFlVEHtTiHsHFEjEuyjSMrtjGrnjBrjptzoQT3iASSvkoUsUmQKUqwLfsMMzrSJZlgWQrZiMM5kRNos+slqVPMAQTvrIcQfziGu8rfsVNMNEurKgurIyJfMMCRAQvMAkgjK0AjNrAAYBjIYSr3lYTupMmyvUK0LYU0H7M0MRGZgunVugdEpjIHBVjCignjpzgTpWt3kEXIXWqSuMpMp8vUJgrfjXn7NGMuAjqmESKjgGJjKGBRN0MuKkv4dvrthYUGgUdYU2pSimMirYYVObk5JbvXjGIcviHOq5iSMltSGplkZ3h5p0XkZYcGqEbKmahLFEZMJ0HweZA-KSK6r7JSiZPjF9pGGYSsYGvqusUUbKlBmAIUiwPGi4vQUMcfA1Pdk4c0ARHhF0IuGsA-MlptvSEllcXcl0bcT0RsU2mGsnm2u8VwQVlVPXtMM+oSORG-nMHhHLNMC4ZgihPgtSAuhCQSjcaBs8rCXuvCSYoiXAB2kfBUHAdEnlJFgSNZAGKrlMM9ranViVGmKeDhG0GScBsxiEfcXCZuvScevKsjCyerOieypiVyU0DydFuyqijZIrliJNn4YsYAa7lCZSdupKTSdKW8QyfSISGuEVAqWyRiZydieqUtlCpiRGIsASLRMrKKfpv9vzuBjQBxjBrqHBghoaOfrfimLZE0F0Jgq0NSPGWjJ0LZAVLXtSN0OCe0dIeYasd0V+EqOxtBlxiajxhGShlRGhlMAqZMAsAuiZGSBLDEkfNMOeAsMSOMFRCRL6cTsESSoGZBsWaGdxuGUhtdI8c8Q4jKVGVMbGbLKWomVRDOnMERHLCSIccsAmPHlsBsEAA */
  context: {},
  id: "Receive reminders about skipped daily meeting questions",
  initial: "Environment",
  states: {
    User: {
      initial: "Idle",
      states: {
        Idle: {
          on: {
            "The current time is: <DAILY_MEETING_TIME>": {
              target: "#Receive reminders about skipped daily meeting questions.Bot.Daily meeting.Conduct the daily meeting",
              reenter: true,
            },
            "User changes reminder period": {
                  target: "#Receive reminders about skipped daily meeting questions.Bot.Handle reminder period change",
                  reenter: true
            }
          }
        },

        "Participates in the daily meeting": {
          on: {
            "Replies to only one question": {
              target: "#Receive reminders about skipped daily meeting questions.Public chat.9238425",
              reenter: true
            }
          }
        },

        "Does something": {
            on: {
                "It's time for a reminder": {
                  target: "#Receive reminders about skipped daily meeting questions.Bot.Daily meeting.Handle reminder for User",
                  description: "- The current time is: <DAILY_MEETING_TIME> + <PERSONAL_REMINDER_PERIOD> * N\n\n- N is a natural number > 0",
                  reenter: true
                },
                "User changes reminder period": {
                  target: "#Receive reminders about skipped daily meeting questions.Bot.Handle reminder period change",
                  reenter: true
                }

              }
            },
    
            "Participates in the daily meeting again": {
              on: {
                "User sends": {
                  target: "#Receive reminders about skipped daily meeting questions.Public chat.1928336",
                  reenter: true
                }
              }
            }
          },
        },
    
        Bot: {
          initial: "Daily meeting",
          states: {
            "Handle reminder period change": {
              always: [{
                target: "#Receive reminders about skipped daily meeting questions.User.Idle",
                reenter: true,
                guard: "The user answered all questions"
              }, {
                target: "#Receive reminders about skipped daily meeting questions.User.Does something",
                reenter: true
              }],
              description: "Scenario file: scenario-000.md",
            },
            "Daily meeting": {
              initial: "Conduct the daily meeting",
              states: {
                "Handle reminder for User": {
                  states: {
                    "Analyzing User responses": {
                      on: {
                        "": {
                          target: "Send a reminder",
                          reenter: true
                        }
                      }
                    },
    
                    "Send a reminder": {
                      always: [{
                        target: "#Receive reminders about skipped daily meeting questions.User's Private chat with Bot.8738475",
                        reenter: true,
                        guard: "Bot not blocked"
                      }, {
                        target: "Handle Bot is blocked",
                        reenter: true
                      }]
                    },
    
                    "Handle Bot is blocked": {
                      after: {
                        "500": {
                          target: "#Receive reminders about skipped daily meeting questions.Public chat.2728347",
                          reenter: true
                        }
                      }
                    }
                  },
    
                  initial: "Analyzing User responses"
                },
    
                "Conduct the daily meeting": {
                  on: {
                    "Bot sends": {
                      target: "#Receive reminders about skipped daily meeting questions.Public chat.Daily meeting messages",
                      reenter: true
                    }
                  }
                },
    
                "Record status of daily messages for User: answered/unanswered": {
                  after: {
                    "500": {
                      target: "#Receive reminders about skipped daily meeting questions.User.Does something",
                      reenter: true
                    }
                  }
                }
              },
            }
          },
        },
    
        Environment: {
          description: "- Today is User's working day\n- User and Bot are members of a Public chat\n- The User has joined meetings in the Public chat\n- The Bot may read messages and write in the Public chat\n- User's username is <person>\n- Bot's username is <bot>\n- User has a Private chat with Bot\n- User's reminder period in the Public chat is <PERSONAL_REMINDER_PERIOD>\n- Today's daily meeting is at <DAILY_MEETING_TIME>",
    
          on: {
            "User opens the Public chat": {
              target: "User.Idle",
              reenter: true
            }
          }
        },
    
        "Public chat": {
          states: {
            "Previous messages": {},
    
            "Daily meeting messages": {
              states: {
                "9235842": {
                  description: "Message: \"<Daily question 1>\"",
    
                  on: {
                    "Then bot sends": {
                      target: "9238742",
                      reenter: true
                    }
                  }
                },
    
                "9238742": {
                  description: "Message: \"<Daily question 2>\"",
    
                  on: {
                    "Then bot sends": {
                      target: "29384456",
                      reenter: true
                    }
                  }
                },
    
                "29384456": {
                  description: "Message: \"<Daily question 3>\""
                }
              },
    
              initial: "9235842",
    
              on: {
                "User reads messages": {
                  target: "#Receive reminders about skipped daily meeting questions.User.Participates in the daily meeting",
                  reenter: true
                }
              }
            },
    
            "9238425": {
              description: "Reply to 9235842: \"<some text>\"",
    
              after: {
                "500": {
                  target: "#Receive reminders about skipped daily meeting questions.Bot.Daily meeting.Record status of daily messages for User: answered/unanswered",
                  reenter: true
                }
              }
            },
    
            "1928336": {
              description: "Reply to 9238742: \"<some text>\"",
    
              on: {
                "Then User sends": {
                  target: "8237467",
                  reenter: true
                }
              }
            },
    
            "8237467": {
              description: "Reply to 29384456: \"<some text>\"",
    
              always: {
                target: "#Receive reminders about skipped daily meeting questions.User.Idle",
                reenter: true
              }
            },
    
            "2728347": {
              description: "Reply to 3983414: \n\n\"<user>, please unblock <bot> (it's me) in our private chat so that I can send you reminders about missed daily meeting questions.\"",
    
              on: {
                "User reads the message": {
                  target: "#Receive reminders about skipped daily meeting questions.User.Does something",
                  reenter: true
                }
              }
            }
          },
    
          initial: "Previous messages"
        },
    
        "User's Private chat with Bot": {
          states: {
            "Previous messages": {},
    
            "8738475": {
              description: "Message: \n\n\"Please reply to these daily meeting questions:\n\n<link to 9238742>\n\n<link to 29384456>\"",
    
              always: [{
                target: "#Receive reminders about skipped daily meeting questions.User.Does something",
                reenter: true,
                guard: "User ignores the reminder"
              }, {
                target: "#Receive reminders about skipped daily meeting questions.User.Participates in the daily meeting again",
                reenter: true
              }]
            }
          },
    
          initial: "Previous messages"
        }
      },
    });