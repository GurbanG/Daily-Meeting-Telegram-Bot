import { createMachine } from "xstate";

export const machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QHpZgC4H0AOYBOsA9gHYCGANpgO6F4DWAlsVJugwLZgB0AqmnlwCSEcmADEAZQwACXARIVpNekyjS2nANoAGALqJQ2QrAZsSBkAA9EAWgBsAVgDMXAOwAmOwEYAHA4faDq4AnK4OADQgAJ62QVxO7g4+ACw+3slewY7BAL45kagYOPhEZJTKjMysHNwAQoToXAASpMQiYOoAFh0AxoTs7K0QXADC3T100kwAZoTSpABGhACu6F0dfPhiOvpIIEYmZsQW1ghOdllc7sHBydquacmuCRHRiGFcDr7OyXZ+gYE8gU0Fg5KUKNRaJUWBo6g1mkNROtpH0BkNRuNJjM5osVmt0N1pJs8NsvLtDMZTAxzHtTncnA4uCl3NpkudPCEvHZIjEELcuMkHO5fF4vK4vO4fK57kCQIVQSUFOUoapqpwuPVGi02kiCb1+oM2rx+NJOqRYNIAFaEJiQaScDCqWBiTXSNBtWA7CwHKk00CnLzabzxXzBQNc5KhP48xBPZJcbRpILisVs36y+XFeRlSEqKqwjXw7XtZGow3DYmm83qObWpj2sCO5gW6YMAjoMSWWDoUjobikaZ9vAACgC2gAlGJM2ClbnoWq4VrER09SiDejK2aLehazbiA2m1AW23u169j6jidEKK7PGxSzgk4fNonE-XDGEL8Ez4fE5E8-fHcDxEgzEEs3BZU8xhGouAAUWIAA3NsSE4YgO0rQhcGIbdCR6M10DPClDmpY5aVsQMngFP4nF+W8fHcJwwg-TImQ8RN7kydxUk8UCihnHMKlVAsxl7eJXEFX9kk7bte37Qd8FHbQJynMD+IhQT8xgkTGkYiSaMI-ZKUvMiEBsDJgiZG4fxFcTrgcbk3gQYUxPcYU43-C5cnyOVVMVASVU09VtPiYJJK8KSux7PsuAHIdFOU6c-PUgLoKC-CQrC5IDIvEirwQCVPC4Ow7CfX5tGuB4nA-ew7C4LIQjc1zfxlbzEuzZKoIXDFRLuICny8MQKCoUgok9PRvSM3KTLM586pSLwvl6rkuI-ZJkncLgbw8Yrbnov5XF4hV2sg+dhPS3rnh8AbKx7bALTwO0FlWHd92IMBSDwZEqEbOgIBG7LJr9Kxr1vOqJSFZ5nlZcV30cjIvCK7QxSDe4fxfNlDvA2cNNS7hgou-qxBu0g7ukAByGwyYB4igdOYJWSZBIuV-P9RVCj8mc2x9pUCJIkZSTG1JOoStPO8rLuuk1botMmAGoqfG89AdI-1Y1czbWSDMMkbFV5eTCVx4hSZxubsa4zcFpLhcCvGxb6q6ialkmLSgB6wH3J70Be6Q3o+r6fr+qJqd9FXgactk5vEpH6XZKrHMlWrBWKgJQl+W53Et465xFtKevFwnidJkgpjQ-AEIoYPjNVhBipcfxPOlJ8ElcWHeV-CzHyyX4fBuVknC84E+Kt7Obe6xp1uccUnG2RWiJDvLhV-Jk0iUxwhWfdbmJZHwmQcLIuOeRIsicTOIJH3Gx4FRJGK8afNDJCaadD04gODG-GMYy7+638LPlcNfGKshZgdVqvks44y6vjTwdhtqO3wOoZ25MRitB6GAcgCtySGSfgvLIjJQrhSlP4IIqQHK8gWvcAUqREyuS5OJBwyRT7YxSpA860DYGVymtXRIKQqLQzfGKP4etrwBA2hDfqv4QgvgzqAoe4DmFnVEgAETANMUgyxyD4hqLAcgDQUQPV7CRF0uiej6L7BaBiCA942AsXvEuQ5y7kBLsiHsCxRAcNpogP8tVOJBGWtoR8SRmKBHjGGSMzJ-HXC8Iw-ynUFGNFdFQPApg4DIiYPYxQ9ZlhSzAJYNYTBsCrGkK2NBEA4GfXyasBA0gAA8Sx0AAD4amwjsWXCg9T3HP2vKKQ2QQhT+N6akLwQSYHxCSBkDwdDhR2GiR1U6otRIAHVSBUmYEU2gyIsnwNhNo4xZpmAdE4LAWApAYBlJRHsmA24clrCGG6d2EAcIHLgMcmAHS8rfARpKV8FxziXSeEE548QuJXSTJGOwrIZnWwvsFESzBVDOJJrgCALS8AOKMWsPCrRLkIOwEilFDj5g9D6HgCA8KdzSE2XgMmFpDkvI6LciAaCMApLEBPd+byTILRZFcMcC0+a+GYgyDaLdwXhXobeFkUSZFHTPhAuJowUFoPOVi+FaTWnkHRdIRlogzHSFZWwzweqMhm3GRy6uf4gxMkEX4RIbJirMRgbVfwDFyEeBSALaVWMYlzNzo0AAShgPAURlVwtWWq1FFBNXauZRafVxVtpGuWqa2eWD54mWvt44+BVQp0OSA6p8dUDbBF6bfRwkLz4sNEgG9ghAkKrNXOGtFroHo1oQikhtpcI2OOmHgfoCLXFgDNWHCitUwj0JFfRcqooObBA2sW7wwLi3+EYuWuV8zGgAEEIDItXIHGsyJYB4UgOo8QtRnrF0xfs7ccxXaNn3Lcw93QIAnq1QwWA2ByAjUeYStgbb1A1GkIQaYyI909r7bu3sixzQdAYMB0g5cGCfoHUO04NgFoWXBQ8QUvgYHBI-P4CyEpMhBn8OVcqA8fKyNlfI9dXBq21pXISUDvb2AHqPc+0QLpz37kvdi8lD1kUPvYy+iAhAUnEF0aS99n7g2tGDdsnR6ALT1gJG+rV-0U05Q8flRkrk7i3nsl8+uQizgBAFNZNkKNfDiTyN5CTjL4B7DatR2JNRH5purmhtaLhtaOFSLOn8DJqrNz-s8GiFnQggMHjKphrn1TEnc1XMONhny6d8TDFkki468nsIbQU9wYGRlfn+Hwq6aPxf4EIdoiXOHJYNjymG957j02y9eCyUo9NipZE4TIC0ytxcXDV7TDJUifCeHvFuzw1rPGqlxbQPK2RH1+eVYq-WfWLgRDqRj+o0RtCG500zlxx0TZbjRJ4rXTJcrqj1nrnliMtzWznDbxZdS4XXEaMYYAJgl1mPMJYhTVwJaVtgkyjFZppGLXcCS3w82OXsIycFzUN4piAo90empNsllXGWDcJotxWj3HaB0bBmz7byucNaY2wiRam+d5ioU6rlX8GO2y4kT6eqFhWgsGOXvbbXLtisePqzkrrPuYnToiknnQGT0H9UipXWs8bLusPeTQM+C+Wd5DzvPDRxfeCSFe3EFQtL4HHnku32LWDEj-nJS-hM9YhiTIInkMlI3KLlGYveqe2PGXnmgKfLCwkHNvX3DVU4lTwMrv1rw115WnSdDJK+7DvQ+bzhnDWSAlxX4gqEz6cCK+QMDIy0c+Hmu31GUaLhSTy-a4VFHAMi5F8RMa1qo3AFLtCUul-ElXd852L63L4EyutXxAMCEa-ASLXei-uVexn8UVRwXFm5mylFKWP8q2VTxH05IC82gxrWuEpVITxSHXhW-Ecqtr6bPguL3sBLmB9QPjZ4bfnhf5p6+IGFrQEt6ArCBcXwSMXpJ8dfWjAABQeiQhWBpWeROTgG3wdxcD6lfGuClBD1Dzh0DF0zm07muDWm8FAPL2UVUXUU0UOUUz0XeiSy0wO0YgsjjHCm8HCwyB8A-Hpk+SISulcnpiCGkWiy9VmW92CgSSSV1Q7XSUcUyWyVyRLgKTWGKXIAgG3xTATG8AeB-FnTCCGUckDCXgCDNjFC5F8H7gcEINtkWWWRJzUFmE+lXEpX-XIN2SxSeSOTgO33CnWjBmvluCDGs2GUNgZHmgmUFEXjMMvlhSgDJUJFujxUbQoFf2IwTD3ilH-0CEm0FSFDcH-mjnFXWjCJhUVUcV41VU7QcW3z-HVglBbj8GlB7m2gdSUjcBSBKlvAmVfAYRLzkQG0vgDXQCDRDUiLDVKPiNNySxfnslTx-E8ikUCGCGYgmKuHIUi3CklBfHyPSnozrTUHEPVXcKqM+Ey0fGbx-AwN5FfHm0lAlH2i4P8QZHWNEi3R3SYxGn3VXEfWPVEAQNnQ1hfH8WLUTAXQu0GQFCP3uGPyfHojvyo37yEI2LAFbT52Y3A0JHeI4zAC+LvFvl-G4LoLCFnychCDcH6mTnoT3kTFsxyCAA */
  context: {},
  id: "/set_personal_working_time",
  initial: "Environment",
  states: {
    User: {
      initial: "Idle",
      states: {
        Idle: {
          on: {
            "Set personal working time": {
              target:
                "#/set_personal_working_time.Chat.3983414",

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
              on: {
                "Bot sends": {
                  target: "#/set_personal_working_time.Chat.4027381",
                  reenter: true
                }
              }
            },

            "User has to join meetings first": {
              after: {
                "500": {
                  target: "#/set_personal_working_time.Chat.3745834",
                  reenter: true
                }
              }
            },
          },

          initial: "Check info about the User"
        }
      }
    },
    
    Environment: {
      description: "- Definition: \"Chat\" is a private chat or Telegram group without topics or a topic.\n- Definition: \"Interval\" is a block of time.\n- User and Bot are members of a Chat\n- The Bot may read messages and respond in the Chat\n- The Bot username is <bot>",

      on: {
        "User opens the chat": {
          target: "User.Idle",
          reenter: true
        }
      }
    },

    "Chat": {

      states: {
        "Previous messages": {},

        "4027381": {
              description: "Here's your schedule",
              on: {
                "always": {
                  target: "#/set_personal_working_time.User.Idle",
                  reenter: true
                },

                "User presses red button near the weekday": {
                  target: "#/set_personal_working_time.Chat.Add the day to the schedule",
                  reenter: true
                },

                "User presses '-'": {
                  target: "#/set_personal_working_time.Chat.Removing the interval",
                  reenter: true
                },

                "User presses '+'": {
                  target: "#/set_personal_working_time.Chat.Default timeslot creation",
                  reenter: true
                },

                "User presses green button near the weekday": {
                  target: "#/set_personal_working_time.Chat.Remove the day from the schedule",
                  reenter: true
                },

                "User presses an interval": {
                  target: "#/set_personal_working_time.Chat.Bot writes the interval in user text input field",
                  reenter: true
                }
              }
            },

        "Default timeslot creation": {
          on: {
            "Bot creates 23:59-23:59 interval in the table": {
                  target: "#/set_personal_working_time.Chat.Bot writes the interval in user text input field",
                  reenter: true
                }
          }
        },

        "Bot writes the interval in user text input field": {
          on: {
            "User input: <bot> <time interval>": {
              target: "#/set_personal_working_time.Chat.Waiting for the user timeslot change message",
              reenter: true,
            },
          }
        },

        "Waiting for the user timeslot change message": {
          on: {
            "User changes text and sends the message": {
              target: "#/set_personal_working_time.Chat.4253713",
              reenter: true,
            }
          }
        },

        "4253713": {
          description: "Expected message in '<bot> hh:mm-hh:mm' format, \n\n\ may be incorrect format",
          always: [{
            target: "Changing the tapped interval",
            reenter: true,
            guard: "User's message is in the correct format"
          }, "4266726"]
        },

        "Changing the tapped interval": {
          on: {
            "Bot changes tapped interval according to user's message and deletes #4253713": {
              target: "4027381",
              reenter: true,
            }
          }
        },

        "4266726": {
          description: "Reply to 4162417: \n\n\"The interval <interval from the message> is not in the format 'hh:mm-hh:mm'.\n\nPress 'Enter again' to enter the interval again.\n\nPress 'Cancel' to cancel editing this interval.\" \n\nThe message contains two buttons: 'Enter again' and 'Cancel'.",

          on: {
            "User presses 'Cancel'": {
              target: "#/set_personal_working_time.Chat.Cancel changing interval",
              reenter: true
            }
          },

          always: {
            target: "#/set_personal_working_time.Chat.Retry changing interval",
            reenter: true,
            guard: "User presses 'Enter again'"
          }
        },

        "Cancel changing interval": {
          on: {
            "Bot deletes #4266726 #4162417": {
              target: "#/set_personal_working_time.Chat.4027381",
              reenter: true
            }
          }
        },

        "Retry changing interval": {
          on: {
            "Bot deletes #4266726 #4162417": {
              target: "#/set_personal_working_time.Chat.Bot writes the interval in user text input field",
              reenter: true
            }
          }
        },

        "Removing the interval": {
              on: {
                "Bot removes the interval from the table": {
                  target: "#/set_personal_working_time.Chat.4027381",
                  reenter: true
                }
              }
            },

        "Add the day to the schedule": {
          on: {
            "Button changes to green and schedule displays the active time of the day from the database if available": {
              target: "#/set_personal_working_time.Chat.4027381",
              reenter: true
            }
          }
        },

        "Remove the day from the schedule": {
          on: {
            "Button changes to red and schedule does not display any timeslots in this day": {
              target: "#/set_personal_working_time.Chat.4027381",
              reenter: true
            }
          }
        },

        "3983414": {
          description: "\"/set_personal_working_time",

          after: {
            "500": {
              target: "#/set_personal_working_time.Bot.Handle the command",
              reenter: true
            }
          }
        },

        "3745834": {
          description: "Reply to 3983414: \n\n\"You have to join daily meetings first!\n\nUse the /join command.\"",

          after: {
            "500": {
              target: "#/set_personal_working_time.User.Idle",
              reenter: true
            }
          }
        }
      },

      initial: "Previous messages",
      
    },
    
  },
});