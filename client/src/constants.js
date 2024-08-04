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
    'Barbarian': {
        "desc": "### Rage \n \nIn battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. \n \nWhile raging, you gain the following benefits if you aren't wearing heavy armor: \n \n* You have advantage on Strength checks and Strength saving throws. \n* When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. \n* You have resistance to bludgeoning, piercing, and slashing damage. \n \nIf you are able to cast spells, you can't cast them or concentrate on them while raging. \n \nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. \n \nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again. \n \n### Unarmored Defense \n \nWhile you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit. \n \n### Reckless Attack \n \nStarting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn. \n \n### Danger Sense \n \nAt 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. \n \nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated. \n \n### Primal Path \n \nAt 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Fast Movement \n \nStarting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor. \n \n### Feral Instinct \n \nBy 7th level, your instincts are so honed that you have advantage on initiative rolls. \n \nAdditionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn. \n \n### Brutal Critical \n \nBeginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. \n \nThis increases to two additional dice at 13th level and three additional dice at 17th level. \n \n### Relentless Rage \n \nStarting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. \n \nEach time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10. \n \n### Persistent Rage \n \nBeginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it. \n \n### Indomitable Might \n \nBeginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total. \n \n### Primal Champion \n \nAt 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
    },
    'Bard': {
        "desc": "### Spellcasting \n \nYou have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. \n \nYour spells are part of your vast repertoire, magic that you can tune to different situations. \n \n#### Cantrips \n \nYou know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table. \n \n#### Spell Slots \n \nThe Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nFor example, if you know the 1st-level spell *cure wounds* and have a 1st-level and a 2nd-level spell slot available, you can cast *cure wounds* using either slot. \n \n#### Spells Known of 1st Level and Higher \n \nYou know four 1st-level spells of your choice from the bard spell list. \n \nThe Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Ritual Casting \n \nYou can cast any bard spell you know as a ritual if that spell has the ritual tag. \n \n#### Spellcasting Focus \n \nYou can use a musical instrument (see chapter 5, “Equipment”) as a spellcasting focus for your bard spells. \n \n### Bardic Inspiration \n \nYou can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. \n \nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. \n \nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. \n \nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level. \n \n### Jack of All Trades \n \nStarting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus. \n \n### Song of Rest \n \nBeginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. \n \nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level. \n \n### Bard College \n \nAt 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of \n \nthe class description. Your choice grants you features at 3rd level and again at 6th and 14th level. \n \n### Expertise \n \nAt 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. \n \nAt 10th level, you can choose another two skill proficiencies to gain this benefit. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Font of Inspiration \n \nBeginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest. \n \n### Countercharm \n \nAt 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required). \n \n### Magical Secrets \n \nBy 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. \n \nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. \n \nYou learn two additional spells from any class at 14th level and again at 18th level. \n \n### Superior Inspiration \n \nAt 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.",

    },
    'Cleric': {
        "desc": "### Spellcasting \n \nAs a conduit for divine power, you can cast cleric spells. \n \n#### Cantrips \n \nAt 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table. \n \n#### Preparing and Casting Spells \n \nThe Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you are a 3rd-level cleric, you have four \n1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell *cure wounds*, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n \n#### Spellcasting Ability \n \nWisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier \n \n#### Ritual Casting \n \nYou can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared. \n \n#### Spellcasting Focus \n \nYou can use a holy symbol (see chapter 5, “Equipment”) as a spellcasting focus for your cleric spells. \n \n### Divine Domain \n \nChoose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Each domain is detailed at the end of the class description, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels. \n \n#### Domain Spells \n \nEach domain has a list of spells-its domain spells- that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. \n \nIf you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you. \n \n### Channel Divinity \n \nAt 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description. \n \nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again. \n \nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC. \n \nBeginning at 6th level, you can use your Channel \n \nDivinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses. \n \n#### Channel Divinity: Turn Undead \n \nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. \n \nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Destroy Undead \n \nStarting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. \n \n**Destroy Undead (table)** \n \n| Cleric Level | Destroys Undead of CR... | \n|--------------|--------------------------| \n| 5th          | 1/2 or lower             | \n| 8th          | 1 or lower               | \n| 11th         | 2 or lower               | \n| 14th         | 3 or lower               | \n| 17th         | 4 or lower               | \n \n### Divine Intervention \n \nBeginning at 10th level, you can call on your deity to intervene on your behalf when your need is great. \n \nImploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. \n \nIf your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest. \n \nAt 20th level, your call for intervention succeeds automatically, no roll required.",

    },
    'Druid': {
        "desc": "### Druidic \n \nYou know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic. \n \n### Spellcasting \n \nDrawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. \n \n#### Cantrips \n \nAt 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table. \n \n#### Preparing and Casting Spells \n \nThe Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell *cure wounds,* you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n \n### Spellcasting Ability \n \nWisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier \n \n### Ritual Casting \n \nYou can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared. \n \n#### Spellcasting Focus \n \nYou can use a druidic focus (see chapter 5, “Equipment”) as a spellcasting focus for your druid spells. \n \n### Wild Shape \n \nStarting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. \n \nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed. \n \n**Beast Shapes (table)** \n \n| Level | Max. CR | Limitations                 | Example     | \n|-------|---------|-----------------------------|-------------| \n| 2nd   | 1/4     | No flying or swimming speed | Wolf        | \n| 4th   | 1/2     | No flying speed             | Crocodile   | \n| 8th   | 1       | -                           | Giant eagle | \n \nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die. \n \nWhile you are transformed, the following rules apply: \n \n* Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them. \n* When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious. \n* You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as *call lightning*, that you've already cast. \n* You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense. \n* You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form. \n \n### Druid Circle \n \nAt 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Timeless Body \n \nStarting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year. \n \n### Beast Spells \n \nBeginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components. \n \n### Archdruid \n \nAt 20th level, you can use your Wild Shape an unlimited number of times. \n \nAdditionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",

    },
    'Fighter': {
        "desc": "### Fighting Style \n \nYou adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. \n \n#### Archery \n \nYou gain a +2 bonus to attack rolls you make with ranged weapons. \n \n#### Defense \n \nWhile you are wearing armor, you gain a +1 bonus to AC. \n \n#### Dueling \n \nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. \n \n#### Great Weapon Fighting \n \nWhen you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit. \n \n#### Protection \n \nWhen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield. \n \n#### Two-Weapon Fighting \n \nWhen you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack. \n \n### Second Wind \n \nYou have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again. \n \n### Action Surge \n \nStarting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. \n \nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn. \n \n### Martial Archetype \n \nAt 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class. \n \n### Indomitable \n \nBeginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. \n \nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.\n \n### Martial Archetypes \n \nDifferent fighters choose different approaches to perfecting their fighting prowess. The martial archetype you choose to emulate reflects your approach.",

    },
    'Monk': {
        "desc": "### Unarmored Defense \n \nBeginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier. \n \n### Martial Arts \n \nAt 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property. \n \nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield: \n \n* You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. \n* You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. \n* When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn. \n \nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon. \n \n### Ki \n \nStarting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table. \n \nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class. \n \nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points. \n \nSome of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows: \n \n**Ki save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n#### Flurry of Blows \n \nImmediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action. \n \n#### Patient Defense \n \nYou can spend 1 ki point to take the Dodge action as a bonus action on your turn. \n \n#### Step of the Wind \n \nYou can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn. \n \n### Unarmored Movement \n \nStarting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table. \n \nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move. \n \n### Monastic Tradition \n \nWhen you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level. \n \n### Deflect Missiles \n \nStarting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level. \n \nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Slow Fall \n \nBeginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Stunning Strike \n \nStarting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn. \n \n### Ki-Empowered Strikes \n \nStarting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. \n \n### Evasion \n \nAt 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a *fireball* spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail. \n \n### Stillness of Mind \n \nStarting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened. \n \n### Purity of Body \n \nAt 10th level, your mastery of the ki flowing through you makes you immune to disease and poison. \n \n### Tongue of the Sun and Moon \n \nStarting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say. \n \n### Diamond Soul \n \nBeginning at 14th level, your mastery of ki grants you proficiency in all saving throws. \n \nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result. \n \n### Timeless Body \n \nAt 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water. \n \n### Empty Body \n \nBeginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. \n \nAdditionally, you can spend 8 ki points to cast the *astral projection* spell, without needing material components. When you do so, you can't take any other creatures with you. \n \n### Perfect Self \n \nAt 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points. \n \n### Monastic Traditions \n \nThree traditions of monastic pursuit are common in the monasteries scattered across the multiverse. Most monasteries practice one tradition exclusively, but a few honor the three traditions and instruct each monk according to his or her aptitude and interest. All three traditions rely on the same basic techniques, diverging as the student grows more adept. Thus, a monk need choose a tradition only upon reaching 3rd level.",
    },
    'Paladin': {
        "desc": "### Divine Sense \n \nThe presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire \n \nCount Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the *hallow* spell. \n \nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses. \n \n### Lay on Hands \n \nYour blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5. \n \nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. \n \nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. \n \nThis feature has no effect on undead and constructs. \n \n### Fighting Style \n \nAt 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. \n \n#### Defense \n \nWhile you are wearing armor, you gain a +1 bonus to AC. \n \n#### Dueling \n \nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. \n \n#### Great Weapon Fighting \n \nWhen you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit. \n \n#### Protection \n \nWhen a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield. \n \n### Spellcasting \n \nBy 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. \n \n#### Preparing and Casting Spells \n \nThe Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell *cure wounds,* you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Spellcasting Focus \n \nYou can use a holy symbol as a spellcasting focus for your paladin spells. \n \n### Divine Smite \n \nStarting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend. \n \n### Divine Health \n \nBy 3rd level, the divine magic flowing through you makes you immune to disease.\n\n ### Sacred Oath \n\nWhen you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description. \n \nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature. \n \n#### Oath Spells \n \nEach oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day. \n \nIf you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you. \n \n#### Channel Divinity \n \nYour oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it. \n \nWhen you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again. \n \nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.\n\n>### Breaking Your Oath \n>\n> A paladin tries to hold to the highest standards of conduct, but even the most virtuous paladin is fallible. Sometimes the right path proves too demanding, sometimes a situation calls for the lesser of two evils, and sometimes the heat of emotion causes a paladin to transgress his or her oath. \n> \n> A paladin who has broken a vow typically seeks absolution from a cleric who shares his or her faith or from another paladin of the same order. The paladin might spend an all- night vigil in prayer as a sign of penitence, or undertake a fast or similar act of self-denial. After a rite of confession and forgiveness, the paladin starts fresh. \n> \n> If a paladin willfully violates his or her oath and shows no sign of repentance, the consequences can be more serious. At the GM's discretion, an impenitent paladin might be forced to abandon this class and adopt another.\n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Aura of Protection \n \nStarting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. \n \nAt 18th level, the range of this aura increases to 30 feet. \n \n### Aura of Courage \n \nStarting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious. \n \nAt 18th level, the range of this aura increases to 30 feet. \n \n### Improved Divine Smite \n \nBy 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite. \n \n### Cleansing Touch \n \nBeginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. \n \nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest. \n \n### Sacred Oaths \n \nBecoming a paladin involves taking vows that commit the paladin to the cause of righteousness, an active path of fighting wickedness. The final oath, taken when he or she reaches 3rd level, is the culmination of all the paladin's training. Some characters with this class don't consider themselves true paladins until they have reached 3rd level and made this oath. For others, the actual swearing of the oath is a formality, an official stamp on what has always been true in the paladin's heart.",
    },
    'Ranger': {
        "desc": "### Favored Enemy \n \nBeginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. \n \nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. \n \nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. \n \nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. \n \nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures. \n \n### Natural Explorer \n \nYou are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in. \n \nWhile traveling for an hour or more in your favored terrain, you gain the following benefits: \n* Difficult terrain doesn't slow your group's travel. \n* Your group can't become lost except by magical means. \n* Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. \n* If you are traveling alone, you can move stealthily at a normal pace. \n* When you forage, you find twice as much food as you normally would. \n* While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area. \n \nYou choose additional favored terrain types at 6th and 10th level. \n \n### Fighting Style \n \nAt 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again. \n \n#### Archery \n \nYou gain a +2 bonus to attack rolls you make with ranged weapons. \n \n#### Defense \n \nWhile you are wearing armor, you gain a +1 bonus to AC. \n \n#### Dueling \n \nWhen you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon. \n \n#### Two-Weapon Fighting \n \nWhen you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack. \n \n### Spellcasting \n \nBy the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See chapter 10 for the general rules of spellcasting and chapter 11 for the ranger spell list. \n \n#### Spell Slots \n \nThe Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nFor example, if you know the 1st-level spell *animal friendship* and have a 1st-level and a 2nd-level spell slot available, you can cast *animal friendship* using either slot. \n \n#### Spells Known of 1st Level and Higher \n \nYou know two 1st-level spells of your choice from the ranger spell list. \n \nThe Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nWisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Wisdom modifier \n \n**Spell attack modifier** = your proficiency bonus + your Wisdom modifier \n \n### Ranger Archetype \n \nAt 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level. \n \n### Primeval Awareness \n \nBeginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Extra Attack \n \nBeginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. \n \n### Land's Stride \n \nStarting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. \n \nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the *entangle* spell. \n \n### Hide in Plain Sight \n \nStarting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. \n \nOnce you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit. \n \n### Vanish \n \nStarting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail. \n \n### Feral Senses \n \nAt 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. \n \nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened. \n \n### Foe Slayer \n \nAt 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.",

    },
    'Rogue': {
        "desc": "### Expertise \n \nAt 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. \n \nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit. \n \n### Sneak Attack \n \nBeginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. \n \nYou don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. \n \nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table. \n \n### Thieves' Cant \n \nDuring your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. \n \nIn addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run. \n \n### Cunning Action \n \nStarting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action. \n \n### Roguish Archetype \n \nAt 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, Assassin, or Arcane Trickster, all detailed at the end of the class description. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Uncanny Dodge \n \nStarting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you. \n \n### Evasion \n \nBeginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an *ice storm* spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail. \n \n### Reliable Talent \n \nBy 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10. \n \n### Blindsense \n \nStarting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you. \n \n### Slippery Mind \n \nBy 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws. \n \n### Elusive \n \nBeginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated. \n \n### Stroke of Luck \n \nAt 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. \n \nOnce you use this feature, you can't use it again until you finish a short or long rest. \n \n### Roguish Archetypes \n \nRogues have many features in common, including their emphasis on perfecting their skills, their precise and deadly approach to combat, and their increasingly quick reflexes. But different rogues steer those talents in varying directions, embodied by the rogue archetypes. Your choice of archetype is a reflection of your focus-not necessarily an indication of your chosen profession, but a description of your preferred techniques.",
    },
    'Sorcerer': {
        "desc": "### Spellcasting \n \nAn event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. \n \n#### Cantrips \n \nAt 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table. \n \n#### Spell Slots \n \nThe Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nFor example, if you know the 1st-level spell *burning hands* and have a 1st-level and a 2nd-level spell slot available, you can cast *burning hands* using either slot. \n \n#### Spells Known of 1st Level and Higher \n \nYou know two 1st-level spells of your choice from the sorcerer spell list. \n \nThe Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Spellcasting Focus \n \nYou can use an arcane focus as a spellcasting focus for your sorcerer spells. \n \n### Sorcerous Origin \n \nChoose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description. \n \nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level. \n \n### Font of Magic \n \nAt 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects. \n \n#### Sorcery Points \n \nYou have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest. \n \n#### Flexible Casting \n \nYou can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels. \n \n**_Creating Spell Slots._** You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. \n \nAny spell slot you create with this feature vanishes when you finish a long rest. \n \n**Creating Spell Slots (table)** \n \n| Spell Slot Level | Sorcery Point Cost | \n|------------------|--------------------| \n| 1st              | 2                  | \n| 2nd              | 3                  | \n| 3rd              | 5                  | \n| 4th              | 6                  | \n| 5th              | 7                  | \n \n**_Converting a Spell Slot to Sorcery Points._** As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level. \n \n### Metamagic \n \nAt 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level. \n \nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted. \n \n#### Careful Spell \n \nWhen you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell. \n \n#### Distant Spell \n \nWhen you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell. \n \nWhen you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet. \n \n#### Empowered Spell \n \nWhen you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. \n \nYou can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell. \n \n#### Extended Spell \n \nWhen you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours. \n \n#### Heightened Spell \n \nWhen you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell. \n \n#### Quickened Spell \n \nWhen you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting. \n \n#### Subtle Spell \n \nWhen you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components. \n \n#### Twinned Spell \n \nWhen you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). \n \nTo be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, *magic missile* and *scorching ray* aren't eligible, but *ray of frost* and *chromatic orb* are. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Sorcerous Restoration \n \nAt 20th level, you regain 4 expended sorcery points whenever you finish a short rest. \n \n### Sorcerous Origins \n \nDifferent sorcerers claim different origins for their innate magic. Although many variations exist, most of these origins fall into two categories: a draconic bloodline and wild magic.",
    },
    'Warlock': {
        "desc": "### Otherworldly Patron \n \nAt 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level. \n \n### Pact Magic \n \nYour arcane research and the magic bestowed on you by your patron have given you facility with spells. \n \n#### Cantrips \n \nYou know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table. \n \n#### Spell Slots \n \nThe Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest. \n \nFor example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell *thunderwave*, you must spend one of those slots, and you cast it as a 3rd-level spell. \n \n#### Spells Known of 1st Level and Higher \n \nAt 1st level, you know two 1st-level spells of your choice from the warlock spell list. \n \nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level. \n \nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots. \n \n#### Spellcasting Ability \n \nCharisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Charisma modifier \n \n**Spell attack modifier** = your proficiency bonus + your Charisma modifier \n \n#### Spellcasting Focus \n \nYou can use an arcane focus as a spellcasting focus for your warlock spells. \n \n### Eldritch Invocations \n \nIn your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. \n \nAt 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. \n \nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level. \n \n### Pact Boon \n \nAt 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice. \n \n#### Pact of the Chain \n \nYou learn the *find familiar* spell and can cast it as a ritual. The spell doesn't count against your number of spells known. \n \nWhen you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite. \n \nAdditionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction. \n \n#### Pact of the Blade \n \nYou can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. \n \nYour pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die. \n \nYou can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks. \n \n#### Pact of the Tome \n \nYour patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you. \n \nIf you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.\n\n\n \n> ### Your Pact Boon \n> \n> Each Pact Boon option produces a special creature or an object that reflects your patron's nature. \n> \n> **_Pact of the Chain._** Your familiar is more cunning than a typical familiar. Its default form can be a reflection of your patron, with sprites and pseudodragons tied to the Archfey and imps and quasits tied to the Fiend. Because the Great Old One's nature is inscrutable, any familiar form is suitable for it. \n> \n> **_Pact of the Blade._** If your patron is the Archfey, your weapon might be a slender blade wrapped in leafy vines. If you serve the Fiend, your weapon could be an axe made of black metal and adorned with decorative flames. If your patron is the Great Old One, your weapon might be an ancient-looking spear, with a gemstone embedded in its head, carved to look like a terrible unblinking eye. \n> \n> **_Pact of the Tome._** Your Book of Shadows might be a fine, gilt-edged tome with spells of enchantment and illusion, gifted to you by the lordly Archfey. It could be a weighty tome bound in demon hide studded with iron, holding spells of conjuration and a wealth of forbidden lore about the sinister regions of the cosmos, a gift of the Fiend. Or it could be the tattered diary of a lunatic driven mad by contact with the Great Old One, holding scraps of spells that only your own burgeoning insanity allows you to understand and cast. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Mystic Arcanum \n \nAt 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum. \n \nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again. \n \nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest. \n \n### Eldritch Master \n \nAt 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again. \n \n### Eldritch Invocations \n \nIf an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class. \n \n#### Agonizing Blast \n \n*Prerequisite:* eldritch blast *cantrip* \n \nWhen you cast *eldritch blast*, add your Charisma modifier to the damage it deals on a hit. \n \n#### Armor of Shadows \n \nYou can cast *mage armor* on yourself at will, without expending a spell slot or material components. \n \n#### Ascendant Step \n \n*Prerequisite: 9th level* \n \nYou can cast *levitate* on yourself at will, without expending a spell slot or material components. \n \n#### Beast Speech \n \nYou can cast *speak with animals* at will, without expending a spell slot. \n \n#### Beguiling Influence \n \nYou gain proficiency in the Deception and Persuasion skills. \n \n#### Bewitching Whispers \n \n*Prerequisite: 7th level* \n \nYou can cast *compulsion* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Book of Ancient Secrets \n \n*Prerequisite: Pact of the Tome feature* \n \nYou can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list (the two needn't be from the same list). The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag. \n \nOn your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it. \n \n#### Chains of Carceri \n \n*Prerequisite: 15th level, Pact of the Chain feature* \n \nYou can cast *hold monster* at will-targeting a celestial, fiend, or elemental-without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again. \n \n#### Devil's Sight \n \nYou can see normally in darkness, both magical and nonmagical, to a distance of 120 feet. \n \n#### Dreadful Word \n \n*Prerequisite: 7th level* \n \nYou can cast *confusion* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Eldritch Sight \n \nYou can cast *detect magic* at will, without expending a spell slot. \n \n#### Eldritch Spear \n \n*Prerequisite:* eldritch blast *cantrip* \n \nWhen you cast *eldritch blast*, its range is 300 feet. \n \n#### Eyes of the Rune Keeper \n \nYou can read all writing. \n \n#### Fiendish Vigor \n \nYou can cast *false life* on yourself at will as a 1st-level spell, without expending a spell slot or material components. \n \n#### Gaze of Two Minds \n \nYou can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings. \n \n#### Lifedrinker \n \n*Prerequisite: 12th level, Pact of the Blade feature* \n \nWhen you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1). \n \n#### Mask of Many Faces \n \nYou can cast *disguise self* at will, without expending a spell slot. \n \n#### Master of Myriad Forms \n \n*Prerequisite: 15th level* \n \nYou can cast *alter self* at will, without expending a spell slot. \n \n#### Minions of Chaos \n \n*Prerequisite: 9th level* \n \nYou can cast *conjure elemental* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Mire the Mind \n \n*Prerequisite: 5th level* \n \nYou can cast *slow* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Misty Visions \n \nYou can cast *silent image* at will, without expending a spell slot or material components. \n \n#### One with Shadows \n \n*Prerequisite: 5th level* \n \nWhen you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction. \n \n#### Otherworldly Leap \n \n*Prerequisite: 9th level* \n \nYou can cast *jump* on yourself at will, without expending a spell slot or material components. \n \n#### Repelling Blast \n \n*Prerequisite:* eldritch blast *cantrip* \n \nWhen you hit a creature with *eldritch blast*, you can push the creature up to 10 feet away from you in a straight line. \n \n#### Sculptor of Flesh \n \n*Prerequisite: 7th level* \n \nYou can cast *polymorph* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Sign of Ill Omen \n \n*Prerequisite: 5th level* \n \nYou can cast *bestow curse* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Thief of Five Fates \n \nYou can cast *bane* once using a warlock spell slot. You can't do so again until you finish a long rest. \n \n#### Thirsting Blade \n \n*Prerequisite: 5th level, Pact of the Blade feature* \n \nYou can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn. \n \n#### Visions of Distant Realms \n \n*Prerequisite: 15th level* \n \nYou can cast *arcane eye* at will, without expending a spell slot. \n \n#### Voice of the Chain Master \n \n*Prerequisite: Pact of the Chain feature* \n \nYou can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech. \n \n#### Whispers of the Grave \n \n*Prerequisite: 9th level* \n \nYou can cast *speak with dead* at will, without expending a spell slot. \n \n#### Witch Sight \n \n*Prerequisite: 15th level* \n \nYou can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight. \n \n### Otherworldly Patrons \n \nThe beings that serve as patrons for warlocks are mighty inhabitants of other planes of existence-not gods, but almost godlike in their power. Various patrons give their warlocks access to different powers and invocations, and expect significant favors in return. \n \nSome patrons collect warlocks, doling out mystic knowledge relatively freely or boasting of their ability to bind mortals to their will. Other patrons bestow their power only grudgingly, and might make a pact with only one warlock. Warlocks who serve the same patron might view each other as allies, siblings, or rivals.",
    },
    'Wizard': {
        "desc": "### Spellcasting \n \nAs a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. \n \n#### Cantrips \n \nAt 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table. \n \n#### Spellbook \n \nAt 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.\n \n> ### Your Spellbook \n> \n> The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library. \n> \n> **_Copying a Spell into the Book._** When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it. \n> \n> Copying that spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation. \n> \n> For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells. \n> \n> **_Replacing the Book._** You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. \n> \n> If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place. \n> \n> **_The Book's Appearance._** Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.\n \n#### Preparing and Casting Spells \n \nThe Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. \n \nYou prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots. \n \nFor example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell *magic missile,* you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. \n \nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list. \n \n#### Spellcasting Ability \n \nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one. \n \n**Spell save DC** = 8 + your proficiency bonus + your Intelligence modifier \n \n**Spell attack modifier** = your proficiency bonus + your Intelligence modifier \n \n#### Ritual Casting \n \nYou can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared. \n \n#### Spellcasting Focus \n \nYou can use an arcane focus as a spellcasting focus for your wizard spells. \n \n#### Learning Spells of 1st Level and Higher \n \nEach time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the “Your Spellbook” sidebar).\n \n### Arcane Recovery \n \nYou have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. \n \nFor example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots. \n \n### Arcane Tradition \n \nWhen you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description. \n \nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level. \n \n### Ability Score Improvement \n \nWhen you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n \n### Spell Mastery \n \nAt 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal. \n \nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels. \n \n### Signature Spells \n \nWhen you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest. \n \nIf you want to cast either spell at a higher level, you must expend a spell slot as normal. \n \n### Arcane Traditions \n \nThe study of wizardry is ancient, stretching back to the earliest mortal discoveries of magic. It is firmly established in fantasy gaming worlds, with various traditions dedicated to its complex study. \n \nThe most common arcane traditions in the multiverse revolve around the schools of magic. Wizards through the ages have cataloged thousands of spells, grouping them into eight categories called schools. In some places, these traditions are literally schools; a wizard might study at the School of Illusion while another studies across town at the School of Enchantment. In other institutions, the schools are more like academic departments, with rival faculties competing for students and funding. Even wizards who train apprentices in the solitude of their own towers use the division of magic into schools as a learning device, since the spells of each school require mastery of different techniques.",

    },
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
