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
                'desc': 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.'
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
                'desc': 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.'
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
                'desc': 'Stoor halflings earn their moniker from an archaic word for \"strong\" or \"large,\" and indeed the average stoor towers some six inches taller than their lightfoot cousins. They are also particularly hardy by halfling standards, famous for being able to hold down the strongest dwarven ales, for which they have also earned a reputation of relative boorishness. Still, most stoor halflings are good natured and simple folk, and any lightfoot would be happy to have a handful of stoor cousins to back them up in a barroom brawl.'
            },
            'Lightfoot': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
                'desc': 'As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You\'re inclined to be affable and get along well with others.\nLightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.'
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
                'desc': 'As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.'
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
                'desc': "It\'s often said curiosity killed the cat, and this applies with equal frequency to catfolk.As a malkin catfolk you are adept at finding clever solutions to escape difficult situations, even(or perhaps especially) situations of your own making.Your diminutive size also gives you an uncanny nimbleness that helps you avoid the worst consequences of your intense inquisitiveness.Most often found in densely populated regions, these catfolk are as curious about the comings and goings of other humanoids as they are about natural or magical phenomena and artifacts. While malkins are sometimes referred to as \"housecats\" by other humanoids and even by other catfolk, doing so in a malkin's hearing is a surefire way to get a face full of claws...",
            },
            'Pantheran': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
                'desc': "Pantheran catfolk are a wise, observant, and patient people who pride themselves on being resourceful and self-sufficient. Less social than many others of their kind, these catfolk typically dwell in small, close-knit family groups in the forests, jungles, and grasslands of the world, away from larger population centers or cities. Their family clans teach the importance of living off of and protecting the natural world, and pantherans act swiftly and mercilessly when their forest homes are threatened by outside forces. Conversely, pantherans can be the most fierce and loyal of neighbors to villages who respect nature and who take from the land and forest no more than they need. As a pantheran, you value nature and kinship, and your allies know they can count on your wisdom and, when necessary, your claws.",
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
                'desc': "Your darakhul character was a derro before transforming into a darakhul. For you, the quieting of the otherworldly voices did not bring peace and tranquility. The impulses simply became more focused, and the desire to feast on flesh overwhelmed other urges. The darkness is still there; it just has a new, clearer form.",
            },
            'Dragonborn Heritage': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a dragonborn before transforming into a darakhul. The dark power of undeath overwhelmed your elemental nature, replacing it with the foul energy and strength of the undead. Occasionally, your draconic heritage echoes a peal of raw power through your form, but it is quickly converted into necrotic waves.",
            },
            'Drow Heritage': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a drow before transforming into a darakhul. Your place within the highly regimented drow society doesn't feel that much different from your new place in the darakhul empires. But an uncertainty buzzes in your mind, and a hunger gnaws at your gut. You are now what you once hated and feared. Does it feel right, or is it something you fight against?",
            },
            'Dwarf Heritage': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a dwarf before transforming into a darakhul. The hum of the earth, the tranquility of the stone and the dust, drained from you as the darakhul fever overwhelmed your once-resilient body. The stone is still there, but its touch has gone from a welcome embrace to a cold grip of death. But it's all the same to you now. ",
            },
            'Elf/Shadow Fey Heritage': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was an elf or shadow fey before transforming into a darakhul. The deathly power coursing through you reminds you of the lithe beauty and magic of your former body. If you just use your imagination, the blood tastes like wine once did. The smell of rotting flesh has the bouquet of wildflowers. The moss beneath the surface feels like the leaves of the forest.",
            },
            'Gnome Heritage': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a gnome before transforming into a darakhul. The spark of magic that drove you before your transformation still burns inside of you, but now it is a constant ache instead of a source of creation and inspiration. This ache is twisted by your hunger, making you hunger for magic itself. ",
            },
            'Human/Half-Elf Heritage': {
                'modifiers': [
                    {
                        'attr': 'Any',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a human or half-elf before transforming into a darakhul. Where there was once light there is now darkness. Where there was once love there is now hunger. You know if the darkness and hunger become all-consuming, you are truly lost. But the powers of your new form are strangely comfortable. How much of your old self is still there, and what can this new form give you that your old one couldn't? ",
            },
            'Halfling Heritage': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a halfling before transforming into a darakhul. Everything you loved as a halfling—food, drink, exploration, adventure— still drives you in your undead form; it is simply a more ghoulish form of those pleasures now: raw flesh instead of stew, warm blood instead of cold mead. You still want to explore the dark corners of the world, but now you seek something different. ",
            },
            'Kobold Heritage': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a kobold before transforming into a darakhul. The dark, although it was often your home, generally held terrors that you needed to survive. Now you are the dark, and its pull on your soul is strong. You fight to keep a grip on the intellect and cunning that sustained you in your past life. Sometimes it is easy, but often the driving hunger inside you makes it hard to think as clearly as you once did.",
            },
            'Ravenfolk': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 2
                    }],
                'desc': "Your darakhul character was a ravenfolk before transforming into a darakhul. Your new form feels different. It is more powerful and less fidgety, and your beak has become razor sharp. There is still room for trickery, of course. But with your new life comes a disconnection from the All Father. Does this loss gnaw at you like your new hunger or do you feel freed from the destiny of your people?",
            },
            'Tiefling Heritage': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
                'desc': "Your darakhul character was a tiefling before transforming into a darakhul. You are no stranger to the pull of powerful forces raging through your blood. You have traded one dark pull for another, and this one seems much stronger. Is that a good feeling, or do you miss your old one?",
            },
            'Trollkin Heritage': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 2
                    }
                ],
                'desc': "Your darakhul character was a trollkin before transforming into a darakhul. Others saw you as a monster because of your ancestry. You became inured to the fearful looks and hurried exits of those around you. If only they could see you now. Does your new state make you seek revenge on them, or are you able to maintain your self-control despite the new urges you feel?",
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
                'desc': "You grew up firmly ensconced in the mad traditions of the derro, your mind touched by the raw majesty and power of your society's otherworldly deities. Your abilities in other areas have made you more than a typical derro, of course. But no matter how well-trained and skilled you get in other magical or martial arts, the voices of your gods forever reverberate in your ears, driving you forward to do great or terrible things.",
            },
            'Mutated': {
                'modifiers': [
                    {
                        'attr': 'Strength',
                        'value': 1
                    }
                ],
                'desc': "Most derro go through the process of indoctrination into their society and come out of it with visions and delusion, paranoia and mania. You, on the other hand, were not affected as much mentally as you were physically. The connection to the dark deities of your people made you stronger and gave you a physical manifestation of their gift that other derro look upon with envy and awe.",
            },
            'Uncorrupted': {
                'modifiers': [
                    {
                        'attr': 'Wisdom',
                        'value': 1
                    }
                ],
                'desc': "Someone in your past failed to do their job of driving you to the brink of insanity. It might have been a doting parent that decided to buck tradition. It might have been a touched seer who had visions of your future without the connections to the mad gods your people serve. It might have been a whole outcast community of derro rebels who refused to serve the madness of your ancestors. Whatever happened in your past, you are quite sane—or at least quite sane for a derro.",
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
                'desc': "You are one of the workers whose labors prop up most of drow society. You were trained from birth to follow orders and serve the collective. You learned your trade well, whether it was building or fighting or erecting the traps that protected passages to your population centers.",
            },
            'Fever-Bit': {
                'modifiers': [
                    {
                        'attr': 'Constitution',
                        'value': 1
                    }
                ],
                'desc': "You were once a typical drow, then you fell victim to the ravaging claws and teeth of a darakhul. The deadly darakhul fever almost took your life, but, when you were on the verge of succumbing, you rallied and survived. You were changed, however, in ways that even the greatest healers of your people can't fathom. But now that you are immune to darakhul fever, your commanders have a job for you.",

            },
            'Purified': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
                'desc': "You were born into the caste that produces the leaders and planners, the priests and wizards, the generals and officers of drow society. Your people, it is believed, were tested by the beneficent powers you worship, and you passed those tests to become something more. Your innate magic proves your superiority over your fellows.",

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
                'desc': "The original dwarven gearforged engineers valued function over form, eschewing aesthetics in favor of instilling their chassis with toughness and strength. The chassis' metal face is clearly crafted to look dwarven, but its countenance is entirely unactuated and forged of a dark metal—often brass—sometimes with a lighter-colored mane of hair and a braided beard and mustaches made of fine metal strands. The gearforged's eyes glow a dark turquoise, staring dispassionately with a seemingly blank expression. Armor and helms worn by the gearforged are often styled to appear as if they were integrated into its chassis, making it all-but-impossible to tell where the armor ends and the gearforged begins.",
            },
            'Gnome Chassis': {
                'modifiers': [
                    {
                        'attr': 'Intelligence',
                        'value': 1
                    }
                ],
                'desc': "Crafted for both exceptional functionality and aesthetic beauty, a gnome chassis' skin is clearly metallic but is meticulously colored to closely match gnomish skin tones, except at the joints, where gears and darker steel pistons are visible. Gnome chassis are almost always bald, with elaborate artistic patterns painted or etched on the face and skull in lieu of hair. Their eyes are vivid and lifelike, as is the chassis' gnomish face, which has a sculpted metal nose and articulated mouth and jaw. The gnome artisans who pioneered the first gearforged chassis saw it as an opportunity to not merely build a better body but to make it a work of art.",
            },
            'Human Chassis': {
                'modifiers': [
                    {
                        'attr': 'Any',
                        'value': 1
                    }
                ],
                'desc': "As humans invented the first gearforged, it should be no surprise that the human chassis remains the one that is most frequently encountered. However, it would be a mistake to assume that simply because the original chassis is more commonplace that there is anything common about them. While dwarves, gnomes, and kobolds have made clever additions and changes to the base model, the human chassis remains extremely versatile and is battle-proven.",
            },
            'Kobold Chassis': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
                'desc': "Kobolds are naturally curious tinkerers, constantly modifying their devices and tools. As such, kobolds, in spite of what many dwarf or gnome engineers might say, were the second race to master the nuances of gearforged creation after studying human gearforged. However, most of these early kobold gearforged no longer exist, as the more draconic forms (homages to the kobolds' draconic masters) proved too alien to the kobold soul gems to maintain stable, long-term connections with the bodies. Kobold engineers have since resolved that problem, and kobold gearforged can be found among many kobold communities, aiding its members and tinkering right alongside their scale-and-blood brethren.",
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
                'desc': 'You are a minotaur adapted to life in the bogs and wetlands of the world.',
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
                'desc': 'You are a minotaur adapted to life in cold climates and high altitudes.'
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
                'desc': "You were one of the warriors and guardians of your clan, using your strength and acid spores to protect your clanmates and your territory.",
            },
            'Favored': {
                'modifiers': [
                    {
                        'attr': 'Charisma',
                        'value': 1
                    }
                ],
                'desc': "A few special mushroomfolk grow to become shamans, generals, and other types of leaders. Your spores invite cooperation, peace, and healing among your allies. Others look to you for guidance and succor in the harsh underground environs.",
            },
            'Morel': {
                'modifiers': [
                    {
                        'attr': 'Dexterity',
                        'value': 1
                    }
                ],
                'desc': "Your specialty for your clan was acting as a scout and a wayfinder. Your abilities to avoid problems and locate new sources of food for your clan was instrumental in their survival, and your interactions with other clans helped keep your people alive and well.",
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
};

const CLASSES = {
    'Barbarian': {},
    'Bard': {},
    'Cleric': {},
    'Druid': {},
    'Fighter': {},
    'Monk': {},
    'Paladin': {},
    'Ranger': {},
    'Rogue': {},
    'Sorcerer': {},
    'Warlock': {},
    'Wizard': {},
};

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
};

const RACES_LIST = Object.keys(RACES);
const ABILITIES_LIST = Object.keys(ABILITIES);
const CLASSES_LIST = Object.keys(CLASSES);

Object.freeze(RACES);
Object.freeze(RACES_LIST);
Object.freeze(ABILITIES);
Object.freeze(ABILITIES_LIST);
Object.freeze(CLASSES);
Object.freeze(CLASSES_LIST);

export {
    RACES, RACES_LIST,
    ABILITIES, ABILITIES_LIST,
    CLASSES, CLASSES_LIST
};
