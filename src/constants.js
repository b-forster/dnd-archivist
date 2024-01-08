// from https://api.open5e.com/v1/races/

const RACES = {
    'Dwarf': {
        'modifiers': [
            {
                'attr': 'Constitution',
                'value': 2
            }
        ],
        'subraces': {
            'Hill Dwarf': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
            },
        },
    },
    'Elf': {
        'modifiers': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'High Elf': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Halfling': {
        'modifiers': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'Stoor Halfling': {
                'modifiers': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
            'Lightfoot': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Human': {
        'modifiers': [
            {
                'attr': 'Strength',
                'value': 1
            },
            {
                'attr': 'Dexterity',
                'value': 1
            },
            {
                'attr': 'Constitution',
                'value': 1
            },
            {
                'attr': 'Intelligence',
                'value': 1
            },
            {
                'attr': 'Wisdom',
                'value': 1
            },
            {
                'attr': 'Charisma',
                'value': 1
            }
        ],
    },
    'Dragonborn': {
        'modifiers': [
            {
                'attr': 'Strength',
                'value': 2
            },
            {
                'attr': 'Charisma',
                'value': 1
            }
        ],
    },
    'Gnome': {
        'modifiers': [
            {
                'attr': 'Intelligence',
                'value': 2
            }
        ],
        'subraces': {
            'Rock Gnome': {
                'modifiers': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Half-Elf': {
        'modifiers': [
            {
                'attr': 'Charisma',
                'value': 2
            },
            {
                'attr': 'Any',
                'value': 1
            },
            {
                'attr': 'Any',
                'value': 1
            }
        ],
    },
    'Half-Orc': {
        'modifiers': [
            {
                'attr': 'Strength',
                'value': 2
            },
            {
                'attr': 'Constitution',
                'value': 1
            }
        ],
    },
    'Tiefling': {
        'modifiers': [
            {
                'attr': 'Intelligence',
                'value': 1
            },
            {
                'attr': 'Charisma',
                'value': 2
            }
        ],
    },
    'Alseid': {
        'modifiers': [
            {
                'attr': 'Dexterity',
                'value': 2
            },
            {
                'attr': 'Wisdom',
                'value': 1
            }
        ],
    },
    'Catfolk': {
        'modifiers': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'Malkin': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
            },
            'Pantheran': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Darakhul': {
        'modifiers': [
            {
                'attr': 'Constitution',
                'value': 1
            }
        ],
        'subraces': {
            'Derro Heritage': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 2
                    }
                ],
            },
            'Dragonborn Heritage': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 2
                    }
                ],
            },
            'Drow Heritage': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
            },
            'Dwarf Heritage': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 2
                    }
                ],
            },
            'Elf Heritage': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
            },
            'Gnome Heritage': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
            },
            'Half-Elf Heritage': {
                'modifiers': [
                    {
                        'attr': 'Any',
                        'value': 2
                    }
                ],
            },
            'Halfling Heritage': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
            },
            'Human Heritage': {
                'modifiers': [
                    {
                        'attr': 'Any',
                        'value': 2
                    }
                ],
            },
            'Kobold Heritage': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
            },
            'Ravenfolk': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }]
            },
            'Shadow Fey Heritage': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
            },
            'Tiefling Heritage': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
            'Trollkin Heritage': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 2
                    }
                ],
            },

        }
    },
    'Derro': {
        'modifiers': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'Far-Touched': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
            'Mutated': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 1
                    }
                ],
            },
            'Uncorrupted': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Drow': {
        'modifiers': [
            {
                'attr': 'Intelligence',
                'value': 2
            }
        ],
        'subraces': {
            'Delver': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 1
                    },
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
            },
            'Fever-Bit': {
                'modifiers': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
            'Purified': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Erina': {
        'modifiers': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
    },
    'Gearforged': {
        'modifiers': [
            {
                'attr': 'Any',
                'value': 1
            },
            {
                'attr': 'Any',
                'value': 1
            }],
        'subraces': {
            'Dwarf Chassis': {
                'modifiers': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
            'Gnome Chassis': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
            },
            'Human Chassis': {
                'modifiers': [
                    {
                        'attr': 'Any',
                        'value': 1
                    }
                ],
            },
            'Kobold Chassis': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Minotaur': {
        'modifiers': [
            {
                'attr': 'Strength',
                'value': 2
            },
            {
                'attr': 'Constitution',
                'value': 1
            }
        ],
        'subraces': {
            'Bhain Kwai': {
                'modifiers': [
                    {
                        'attr': 'Constitution',
                        'value': 2
                    },
                    {
                        'attr': 'Strength',
                        'value': 1
                    }
                ],
            },
            'Boghaid': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 2
                    },
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
        },
    },
    'Mushroomfolk': {
        'modifiers': [
            {
                'attr': 'Wisdom',
                'value': 2
            }
        ],
        'subraces': {
            'Acid Cap': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 1
                    }
                ],
            },
            'Favored': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
            'Morel': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
            },
        },
    },
    'Satarre': {
        'modifiers': [
            {
                'attr': 'Constitution',
                'value': 2
            },
            {
                'attr': 'Intelligence',
                'value': 1
            }
        ],
    },
    'Shade': {
        'modifiers': [
            {
                'attr': 'Charisma',
                'value': 1
            }
        ],
    },
}

const ABILITIES = {
    'Strength': {
        abbr: 'str',
    },
    'Dexterity': {
        abbr: 'dex',
    },
    'Constitution': {
        abbr: 'con',
    },
    'Intelligence': {
        abbr: 'int',
    },
    'Wisdom': {
        abbr: 'wis',
    },
    'Charisma': {
        abbr: 'cha',
    },
}

const RACES_LIST = Object.keys(RACES);
const ABILITIES_LIST = Object.keys(ABILITIES);

Object.freeze(RACES);
Object.freeze(RACES_LIST);
Object.freeze(ABILITIES);
Object.freeze(ABILITIES_LIST);

export { RACES, RACES_LIST, ABILITIES, ABILITIES_LIST };
