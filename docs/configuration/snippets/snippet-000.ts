import { createMachine } from "xstate";

export const machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QHpZgC4H0AOYBOsA9gHYCGANphKQJbkCemeYAtjcRPjvjYRAHQBVNHn4BJCOTABiAMoYABOgAWYBczYd8C3Hl4QA2gAYAuolDZCsGul7FzIAB6IAbAGYAHPwDsAFg9uAExGbkYArB6BEQA0IPSIALT+-G6+vi4AjBEuRi4eLmEAnAC+xbGoGNwEJBRUtAxMrOyceFX6-ABChOj8ABKkHFJKqgoAxoQsLAMCAMKqowDWCuwAZoQKpABGhACu6MNqwvjSxmZIIJbWtiQOzgiBGRmB-JkugfmF3oUeRbHxCAlAi5+BlvLkXGkPL53llfGFSuU0FhdEQyJRqHRGBpmlxdO0uj1+oM1Co1ONJtN+HMwItlsQ1httnsDgojngThkzhYrDY7LdEFFIikwkYjGkMkZAu8XH9EkCQWCXBD-NCPLD4WUQBVkfhUbUMQ1sVpWni+J1un1pkNSWMJlMOEIRAplKRYAoAFaEdiQBQsMAYdhQWAnUwOS68m7nO7BJX8CJhDIuL6FYIZDyyhCJjL8DxGDKFNxhUK+Nyg6EIrVIqp69H1LFNY1tM0Ey3Elnk+0CNnO10er3EH1+gPEIMcrkXHnXexRgXpIxxqWg3MhFMZDNZMIpQKFdyFEsuQrhbwaxGVFE1WuYxqaFpNgQtomSEkjDuU7sut3odae9i+-22Ec3RWGgCHQaRHFgdBSHQMB+FIFYYLwAAKEUjAASmkbVqwvOoryNW9TXvC1H2tF87TfJ0PyUb9+z-YcgwUYDQNOMNJz5Gd7jTYFRSeJNCkeQswgzTx5yMb58wlUU3AhfIKyw880Vww0GwInhm2Iq1nzJciHXkfZ8O0QjwMg6DYPgxCUNFDD5N1HCDXrG9cTUojCU09sdIEPT1BUwznJY85wynflM3yecIl8UUS2k-igQzKVfBzPNQUlMVfAlEpNRs6pFPs68cRNZzzVctsbVfB1317L8xmYUyNgUAAFPQADdatGF19gAdxsZQFAJYyoJguCEPwSz0MwqsFP1Os8sbQiitbJ93IpcrKMq9ZRhqmC6samgWq2troIULqVF67p-O5K52NAO5QRTF5c28HJwgPfM3AzMJMn4XIPGPMIIjcQt3jkibbJy6aDIKvQzQAUWIJqQJIP1iDA7tCFwYhPxGeqdk2cgaFGMZ2vOidLsja7ECeUT3h+osS0TQsZTiRJHi8CFPDVentyeYGz1Bqa8J8yH2mx3H8cJ6D+G3AI-ECfrTKGizUOskHsv55THKFs0RbxgmDp6KW3Bl4nAqupxEDBbx+BTCLJVCIx8l8bx10d-hoUTCFCgTSS0h5nVVcvdX8rvfhtbFvWUj8f7fDlwbzJGpXxt5-2lIcoO5tD3X2ojuEAl8Y22LJs2EG8UsXkCfwHkPQtUkKYSkzjXM91SEUwmPDLTz9msU5m1SoYEDPxZ6NxvlSDJo4ggazOG5CE6yrvcoh4OB-D4fc7H-PSencmQpd0I1XtjwAg+yUMwSJ5Cldn64UVUFUN8X3sLBgWNaXnGdcHq33mhIIY6nxWrMTp3Oy4NBav1FpnCWKYoSBCCBvCMW8i4-GzEqJMzcfhghTO9IIOY9wFDTECfwkpSiamIHwOADg57AOfmnZyrFN7BW8M8SUh9jypFLO4D6p9-BuC+mqPIxZgjpECA-SaAdU6zUKmyOh8DgrSS8IfSIKUeIRSTKfNUKRMipElCqIsbgRF8zET3JyfdHT4HEE+aRQUOJpWBAo4IwRlG5CdkzBAm4dxZG8GPBRWREz6OTgvUBc0CSWNNjdT4YUkF8RTHmdMLjAS5hBGqDwh4vihAhBkPx88QEvyCRpEqZFloQBCYXaMMSG4JiiamWJ-wz53R+MkiIhRPbHwLJkqhgcJEmIfG5UqHkqTzCWKsdYWxdj7BtFIgKBcEHRieNmB23xy4yUZjUiUm4iw5EdoKbciy2lPw6b3fEeTFq9MKaYvAPY3Q-gHBAOiAEgzFOmQKMSm5jz7n4lCEUhZ3peBFJEPwaY0ieLCOkXZatxEHPUsVY5BTOxnIudRPsv4hx3KAiBSCDzgpRG+FbGmh4AVpTrpbKUbwISigKP9UFhjF65KhaRbSpyvIQx0LQyZ9COIPDzF9MIwQRTHi+AmN6Lj4o4s8EmNKR4x4uEpd3alhVun5PpbCiqn51qbTUKQBqzVWrtSOt1U66AMXsvBOUxMyYqnvSKJLIEBCyV-QCNKgJOTCqw3hngRGYBkaGu3lkHhgRGFFD+vmIsO5T7DxeREbwnjiyRsjQ67JNCTHL3al6ou3wErDwlPmZprc1xxIeKzblkQfrxQhHG6hnThZvzDlnA2MsU03VLDwmxnwYEhFekJFxjxLYFBLh9CEEIiygjLfs4xlbwEf0NjnVI9aKalmeADBmbd-D5Gcf8II2ZI3uAivxAoaph3gtHVrKtECh4jzSr4GdmYQgJVyAmRpjsx5ii4RfWZEQMiGx3CEVI+6jGa37sej+UDv6BEve+p4cYEzJKVPbDZHb-gtxeGKsEngPEhB-bKxNAHw6NTAPDXYbo-SwFgKQGA8BWUyI4hKbBGa8xNL+jm0+YGtxNMTN8BMzThHEKAA */
  context: {},
  id: "/set_personal_daily_reminder_period",
  initial: "Environment",
  states: {
    User: {
      initial: "Idle",
      states: {
        Idle: {
          on: {
            "Set the reminder period": {
              target:
                "#/set_personal_daily_reminder_period.Public chat.3983414",

              reenter: true,
            }
          }
        }
      },
    },

    Bot: {
      states: {
        "Handle the command": {
          states: {
            "Check info about the User": {
              always: [{
                target: "User has joined meetings",
                reenter: true,
                guard: "User has joined meetings"
              }, {
                target: "User has to join meetings first",
                reenter: true
              }]
            },

            "User has joined meetings": {
              always: [{
                target: "Set reminder period",
                reenter: true,
                guard: "User has a Private chat with Bot"
              }, {
                target: "User has to create a Private chat with Bot",
                reenter: true
              }]
            },

            "User has to join meetings first": {
              after: {
                "500": {
                  target: "#/set_personal_daily_reminder_period.Public chat.3745834",
                  reenter: true
                }
              }
            },

            "Set reminder period": {
              after: {
                "500": {
                  target: "#/set_personal_daily_reminder_period.Public chat.2983742",
                  reenter: true,
                }
              },
              description: "- Set reminder period for this User in this Public chat to <period> minutes.\n- Update scheduled reminders for today's daily meeting if the User participates in today's meeting"
            },

            "User has to create a Private chat with Bot": {
              after: {
                "500": {
                  target: "#/set_personal_daily_reminder_period.Public chat.9284232",
                  reenter: true
                }
              }
            }
          },

          initial: "Check info about the User"
        }
      }
    },
    
    Environment: {
      description: "\n- Definition: \"Chat\" is a Telegram group without topics or a topic\n- Definition: \"Private chat\" is a Telegram chat (not a group) of two Telegram users\n- User and Bot are members of a Chat\n- The Bot may read messages and respond in the Chat\n- The Bot username is <bot>",

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

        "3983414": {
          description: "\"/set_personal_daily_reminder_period <period>\"\n- <period> - a number of minutes, e.g. 15.",

          after: {
            "500": {
              target: "#/set_personal_daily_reminder_period.Bot.Handle the command",
              reenter: true
            }
          }
        },

        "2983742": {
          description: "Reply to 3983414:\n\n\"OK, I'll remind you in our chat every <period> minutes after the start of a daily meeting to reply to missed daily meeting questions.\"",

          after: {
            "500": {
              target: "#/set_personal_daily_reminder_period.User.Idle",
              reenter: true
            }
          }
        },

        "3745834": {
          description: "Reply to 3983414: \n\n\"You have to join daily meetings first!\n\nUse the /join command.\"",

          after: {
            "500": {
              target: "#/set_personal_daily_reminder_period.User.Idle",
              reenter: true
            }
          }
        },

        "9284232": {
          description: "Reply to 3983414: \n\n\"You should first create a Private chat with <bot> (it's me).\"",

          after: {
            "500": {
              target: "#/set_personal_daily_reminder_period.User.Idle",
              reenter: true
            }
          }
        }
      },

      initial: "Previous messages"
    }
  },
});
