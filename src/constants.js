// from https://api.open5e.com/v1/races/

const RACES = {
    'Dwarf': {
        'subraces': {
            'Hill Dwarf': {},
        }
    },
    'Elf': {
        'subraces': {
            'High Elf': {},
        }
    },
    'Halfling': {
        'subraces': {
            'Stoor Halfling': {},
            'Lightfoot': {},
        }
    },
    'Human': {},
    'Dragonborn': {},
    'Gnome': {
        'subraces': {
            'Rock Gnome': {},
        }
    },
    'Half-Elf': {},
    'Half-Orc': {},
    'Tiefling': {},
    'Alseid': {},
    'Catfolk': {
        'subraces': {
            'Malkin': {},
            'Pantheran': {},
        }
    },
    'Darakhul': {
        'subraces': {
            'Derro Heritage': {},
            'Dragonborn Heritage': {},
            'Drow Heritage': {},
            'Dwarf Heritage': {},
            'Elf Heritage': {},
            'Gnome Heritage': {},
            'Half-Elf Heritage': {},
            'Halfling Heritage': {},
            'Human Heritage': {},
            'Kobold Heritage': {},
            'Ravenfolk': {},
            'Shadow Fey Heritage': {},
            'Tiefling Heritage': {},
            'Trollkin Heritage': {},

        }
    },
    'Derro': {
        'subraces': {
            'Far-Touched': {},
            'Mutated': {},
            'Uncorrupted': {},
        }
    },
    'Drow': {
        'subraces': {
            'Delver': {},
            'Fever-Bit': {},
            'Purified': {},
        }
    },
    'Erina': {},
    'Gearforged': {
        'subraces': {
            'Dwarf Chassis': {},
            'Gnome Chassis': {},
            'Human Chassis': {},
            'Kobold Chassis': {},
        }
    },
    'Minotaur': {
        'subraces': {
            'Bhain Kwai': {},
            'Boghaid': {},
        },
    },
    'Mushroomfolk': {
        'subraces': {
            'Acid Cap': {},
            'Favored': {},
            'Morel': {},
        },
    },
    'Satarre': {},
    'Shade': {},
}

const ABILITIES = {
    'Strength': {},
    'Dexterity': {},
    'Constitution': {},
    'Intelligence': {},
    'Wisdom': {},
    'Charisma': {},
}

const RACES_LIST = Object.keys(RACES);
const ABILITIES_LIST = Object.keys(ABILITIES);

Object.freeze(RACES);
Object.freeze(RACES_LIST);
Object.freeze(ABILITIES);
Object.freeze(ABILITIES_LIST);

export { RACES, RACES_LIST, ABILITIES, ABILITIES_LIST };