// from https://api.open5e.com/v1/races/

const RACES = {
    'Dwarf': {
        'bonuses': [
            {
                'attr': 'Constitution',
                'value': 2
            }
        ],
        'subraces': {
            'Hill Dwarf': {
                'bonuses': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
            },
        },
    },
    'Elf': {
        'bonuses': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'High Elf': {
                'bonuses': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Halfling': {
        'bonuses': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'Stoor Halfling': {
                'bonuses': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
            'Lightfoot': {
                'bonuses': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Human': {
        'bonuses': [
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
        'bonuses': [
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
        'bonuses': [
            {
                'attr': 'Intelligence',
                'value': 2
            }
        ],
        'subraces': {
            'Rock Gnome': {
                'bonuses': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Half-Elf': {
        'bonuses': [
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
        'bonuses': [
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
        'bonuses': [
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
        'bonuses': [
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
        'bonuses': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'Malkin': {
                'bonuses': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
            },
            'Pantheran': {
                'bonuses': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Darakhul': {
        'bonuses': [
            {
                'attr': 'Constitution',
                'value': 1
            }
        ],
        'subraces': {
            'Derro Heritage': {
                'bonuses': [
                    {
                        'attr': 'Charisma',
                        'value': 2
                    }
                ],
            },
            'Dragonborn Heritage': {
                'bonuses': [
                    {
                        'attr': 'Strength',
                        'value': 2
                    }
                ],
            },
            'Drow Heritage': {
                'bonuses': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
            },
            'Dwarf Heritage': {
                'bonuses': [
                    {
                        'attr': 'Wisdom',
                        'value': 2
                    }
                ],
            },
            'Elf Heritage': {
                'bonuses': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
            },
            'Gnome Heritage': {
                'bonuses': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
            },
            'Half-Elf Heritage': {
                'bonuses': [
                    {
                        'attr': 'Any',
                        'value': 2
                    }
                ],
            },
            'Halfling Heritage': {
                'bonuses': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
            },
            'Human Heritage': {
                'bonuses': [
                    {
                        'attr': 'Any',
                        'value': 2
                    }
                ],
            },
            'Kobold Heritage': {
                'bonuses': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
            },
            'Ravenfolk': {
                'bonuses': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }]
            },
            'Shadow Fey Heritage': {
                'bonuses': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
            },
            'Tiefling Heritage': {
                'bonuses': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
            'Trollkin Heritage': {
                'bonuses': [
                    {
                        'attr': 'Strength',
                        'value': 2
                    }
                ],
            },

        }
    },
    'Derro': {
        'bonuses': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
        'subraces': {
            'Far-Touched': {
                'bonuses': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
            'Mutated': {
                'bonuses': [
                    {
                        'attr': 'Strength',
                        'value': 1
                    }
                ],
            },
            'Uncorrupted': {
                'bonuses': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Drow': {
        'bonuses': [
            {
                'attr': 'Intelligence',
                'value': 2
            }
        ],
        'subraces': {
            'Delver': {
                'bonuses': [
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
                'bonuses': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
            'Purified': {
                'bonuses': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Erina': {
        'bonuses': [
            {
                'attr': 'Dexterity',
                'value': 2
            }
        ],
    },
    'Gearforged': {
        'bonuses': [
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
                'bonuses': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
            },
            'Gnome Chassis': {
                'bonuses': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
            },
            'Human Chassis': {
                'bonuses': [
                    {
                        'attr': 'Any',
                        'value': 1
                    }
                ],
            },
            'Kobold Chassis': {
                'bonuses': [
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
            },
        }
    },
    'Minotaur': {
        'bonuses': [
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
                'bonuses': [
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
                'bonuses': [
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
        'bonuses': [
            {
                'attr': 'Wisdom',
                'value': 2
            }
        ],
        'subraces': {
            'Acid Cap': {
                'bonuses': [
                    {
                        'attr': 'Strength',
                        'value': 1
                    }
                ],
            },
            'Favored': {
                'bonuses': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
            },
            'Morel': {
                'bonuses': [
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
            },
        },
    },
    'Satarre': {
        'bonuses': [
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
        'bonuses': [
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
