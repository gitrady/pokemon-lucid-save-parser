// --- DATA ARRAYS ---
// (Your lucidSpeciesAbilities, moves, mons, abilities, natures, charMap)
// ... PASTE ALL YOUR DATA ARRAYS HERE ...
const lucidSpeciesAbilities = {
    // Bulbasaur (ID 1)
    1: { regular: ["Overgrow", null], hidden: "Chlorophyll" },
    // Ivysaur (ID 2)
    2: { regular: ["Overgrow", null], hidden: "Chlorophyll" },
    // Venusaur (ID 3)
    3: { regular: ["Overgrow", null], hidden: "Chlorophyll" },
    // Charmander (ID 4)
    4: { regular: ["Blaze", null], hidden: "Solar Power" },
    // Charmeleon (ID 5)
    5: { regular: ["Blaze", null], hidden: "Solar Power" },
    // Charizard (ID 6)
    6: { regular: ["Blaze", null], hidden: "Solar Power" },
    // Squirtle (ID 7)
    7: { regular: ["Torrent", null], hidden: "Rain Dish" },
    // Wartortle (ID 8)
    8: { regular: ["Torrent", null], hidden: "Rain Dish" },
    // Blastoise (ID 9)
    9: { regular: ["Torrent", null], hidden: "Rain Dish" },
    // Caterpie (ID 10)
    10: { regular: ["Shield Dust", null], hidden: "Run Away" },
    // Metapod (ID 11)
    11: { regular: ["Shed Skin", null], hidden: null },
    // Butterfree (ID 12)
    12: { regular: ["Shield Dust", null], hidden: "Tinted Lens" },
    // Weedle (ID 13)
    13: { regular: ["Shield Dust", null], hidden: "Run Away" },
    // Kakuna (ID 14)
    14: { regular: ["Shed Skin", null], hidden: null },
    // Beedrill (ID 15)
    15: { regular: ["Swarm", null], hidden: "Sniper" },
    // Pidgey (ID 16)
    16: { regular: ["Quick Feet", null], hidden: "Big Pecks" },
    // Pidgeotto (ID 17)
    17: { regular: ["Quick Feet", null], hidden: "Big Pecks" },
    // Pidgeot (ID 18)
    18: { regular: ["Quick Feet", null], hidden: "Big Pecks" },
    // Rattata (ID 19)
    19: { regular: ["Guts", null], hidden: "Hustle" },
    // Raticate (ID 20)
    20: { regular: ["Guts", null], hidden: "Hustle" },
    // Spearow (ID 21)
    21: { regular: ["Sniper", null], hidden: "Keen Eye" },
    // Fearow (ID 22)
    22: { regular: ["Sniper", null], hidden: "Keen Eye" },
    // Ekans (ID 23)
    23: { regular: ["Intimidate", null], hidden: "Unnerve" },
    // Arbok (ID 24)
    24: { regular: ["Intimidate", null], hidden: "Unnerve" },
    // Pikachu (ID 25)
    25: { regular: ["Static", null], hidden: "Lightning Rod" },
    // Raichu (ID 26)
    26: { regular: ["Static", null], hidden: "Lightning Rod" },
    // Sandshrew (ID 27)
    27: { regular: ["Sand Rush", null], hidden: "Sand Veil" },
    // Sandslash (ID 28)
    28: { regular: ["Sand Rush", null], hidden: "Sand Veil" },
    // Nidoran-F (ID 29)
    29: { regular: ["Poison Point", null], hidden: "Hustle" },
    // Nidorina (ID 30)
    30: { regular: ["Poison Point", null], hidden: "Hustle" },
    // Nidoqueen (ID 31)
    31: { regular: ["Acid Coat", null], hidden: "Sheer Force" },
    // Nidoran-M (ID 32)
    32: { regular: ["Poison Point", null], hidden: "Hustle" },
    // Nidorino (ID 33)
    33: { regular: ["Poison Point", null], hidden: "Hustle" },
    // Nidoking (ID 34)
    34: { regular: ["Acid Coat", null], hidden: "Sheer Force" },
    // Clefairy (ID 35)
    35: { regular: ["Magic Guard", null], hidden: "Friend Guard" },
    // Clefable (ID 36)
    36: { regular: ["Magic Guard", null], hidden: "Unaware" },
    // Vulpix (ID 37)
    37: { regular: ["Flash Fire", null], hidden: "Drought" },
    // Ninetales (ID 38)
    38: { regular: ["Flash Fire", null], hidden: "Drought" },
    // Jigglypuff (ID 39)
    39: { regular: ["Cute Charm", "Competitive"], hidden: "Friend Guard" },
    // Wigglytuff (ID 40)
    40: { regular: ["Cute Charm", "Competitive"], hidden: "Frisk" },
    // Zubat (ID 41)
    41: { regular: ["Inner Focus", null], hidden: "Infiltrator" },
    // Golbat (ID 42)
    42: { regular: ["Inner Focus", null], hidden: "Infiltrator" },
    // Oddish (ID 43)
    43: { regular: ["Chlorophyll", null], hidden: "Run Away" },
    // Gloom (ID 44)
    44: { regular: ["Chlorophyll", null], hidden: "Stench" },
    // Vileplume (ID 45)
    45: { regular: ["Chlorophyll", null], hidden: "Effect Spore" },
    // Paras (ID 46)
    46: { regular: ["Effect Spore", null], hidden: "Dry Skin" },
    // Parasect (ID 47)
    47: { regular: ["Effect Spore", null], hidden: "Dry Skin" },
    // Venonat (ID 48)
    48: { regular: ["Compound Eyes", "Tinted Lens"], hidden: "Run Away" },
    // Venomoth (ID 49)
    49: { regular: ["Shield Dust", "Tinted Lens"], hidden: "Wonder Skin" },
    // Diglett (ID 50)
    50: { regular: ["Sand Veil", "Arena Trap"], hidden: "Sand Force" },
    // Dugtrio (ID 51)
    51: { regular: ["Sand Veil", "Arena Trap"], hidden: "Sand Force" },
    // Meowth (ID 52)
    52: { regular: ["Pickup", "Technician"], hidden: "Unnerve" },
    // Persian (ID 53)
    53: { regular: ["Limber", "Technician"], hidden: "Unnerve" },
    // Psyduck (ID 54)
    54: { regular: ["Swift Swim", "Cloud Nine"], hidden: "Damp" },
    // Golduck (ID 55)
    55: { regular: ["Swift Swim", "Cloud Nine"], hidden: "Damp" },
    // Mankey (ID 56)
    56: { regular: ["Vital Spirit", null], hidden: "Defiant" },
    // Primeape (ID 57)
    57: { regular: ["Vital Spirit", null], hidden: "Defiant" },
    // Growlithe (ID 58)
    58: { regular: ["Intimidate", null], hidden: "Justified" },
    // Arcanine (ID 59)
    59: { regular: ["Intimidate", null], hidden: "Justified" },
    // Poliwag (ID 60)
    60: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Poliwhirl (ID 61)
    61: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Poliwrath (ID 62)
    62: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Abra (ID 63)
    63: { regular: ["Synchronize", "Inner Focus"], hidden: "Magic Guard" },
    // Kadabra (ID 64)
    64: { regular: ["Synchronize", "Inner Focus"], hidden: "Magic Guard" },
    // Alakazam (ID 65)
    65: { regular: ["Synchronize", "Inner Focus"], hidden: "Magic Guard" },
    // Machop (ID 66)
    66: { regular: ["Guts", "No Guard"], hidden: "Steadfast" },
    // Machoke (ID 67)
    67: { regular: ["Guts", "No Guard"], hidden: "Steadfast" },
    // Machamp (ID 68)
    68: { regular: ["Guts", "No Guard"], hidden: "Steadfast" },
    // Bellsprout (ID 69)
    69: { regular: ["Chlorophyll", null], hidden: "Gluttony" },
    // Weepinbell (ID 70)
    70: { regular: ["Chlorophyll", null], hidden: "Gluttony" },
    // Victreebel (ID 71)
    71: { regular: ["Chlorophyll", null], hidden: "Gluttony" },
    // Tentacool (ID 72)
    72: { regular: ["Rain Dish", "Liquid Ooze"], hidden: "Clear Body" },
    // Tentacruel (ID 73)
    73: { regular: ["Rain Dish", "Liquid Ooze"], hidden: "Clear Body" },
    // Geodude (ID 74)
    74: { regular: ["Rock Head", "Sturdy"], hidden: "Sand Veil" },
    // Graveler (ID 75)
    75: { regular: ["Rock Head", "Sturdy"], hidden: "Sand Veil" },
    // Golem (ID 76)
    76: { regular: ["Rock Head", "Sturdy"], hidden: "Sand Veil" },
    // Ponyta (ID 77)
    77: { regular: ["Fiery Charge", null], hidden: "Flame Body" },
    // Rapidash (ID 78)
    78: { regular: ["Fiery Charge", null], hidden: "Flame Body" },
    // Slowpoke (ID 79)
    79: { regular: ["Oblivious", "Own Tempo"], hidden: "Regenerator" },
    // Slowbro (ID 80)
    80: { regular: ["Oblivious", "Own Tempo"], hidden: "Regenerator" },
    // Magnemite (ID 81)
    81: { regular: ["Magnet Pull", "Sturdy"], hidden: "Analytic" },
    // Magneton (ID 82)
    82: { regular: ["Magnet Pull", "Sturdy"], hidden: "Analytic" },
    // Farfetchd (ID 83)
    83: { regular: ["Keen Eye", "Inner Focus"], hidden: "Defiant" },
    // Doduo (ID 84)
    84: { regular: ["Technician", null], hidden: "Tangled Feet" },
    // Dodrio (ID 85)
    85: { regular: ["Technician", null], hidden: "Tangled Feet" },
    // Seel (ID 86)
    86: { regular: ["Thick Fat", null], hidden: "Ice Body" },
    // Dewgong (ID 87)
    87: { regular: ["Thick Fat", null], hidden: "Ice Body" },
    // Grimer (ID 88)
    88: { regular: ["Stench", "Sticky Hold"], hidden: "Poison Touch" },
    // Muk (ID 89)
    89: { regular: ["Stench", "Sticky Hold"], hidden: "Poison Touch" },
    // Shellder (ID 90)
    90: { regular: ["Shell Armor", "Skill Link"], hidden: "Overcoat" },
    // Cloyster (ID 91)
    91: { regular: ["Shell Armor", "Skill Link"], hidden: "Overcoat" },
    // Gastly (ID 92)
    92: { regular: ["Levitate", null], hidden: null },
    // Haunter (ID 93)
    93: { regular: ["Levitate", null], hidden: null },
    // Gengar (ID 94)
    94: { regular: ["Cursed Body", null], hidden: null },
    // Onix (ID 95)
    95: { regular: ["Rock Head", "Sturdy"], hidden: "Weak Armor" },
    // Drowzee (ID 96)
    96: { regular: ["Insomnia", "Forewarn"], hidden: "Inner Focus" },
    // Hypno (ID 97)
    97: { regular: ["Insomnia", "Forewarn"], hidden: "Inner Focus" },
    // Krabby (ID 98)
    98: { regular: ["Shell Armor", null], hidden: "Sheer Force" },
    // Kingler (ID 99)
    99: { regular: ["Shell Armor", null], hidden: "Sheer Force" },
    // Voltorb (ID 100)
    100: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },
    // Electrode (ID 101)
    101: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },
    // Exeggcute (ID 102)
    102: { regular: ["Harvest", null], hidden: "Chlorophyll" },
    // Exeggutor (ID 103)
    103: { regular: ["Harvest", null], hidden: "Chlorophyll" },
    // Cubone (ID 104)
    104: { regular: ["Battle Armor", null], hidden: "Lightning Rod" },
    // Marowak (ID 105)
    105: { regular: ["Battle Armor", null], hidden: "Lightning Rod" },
    // Hitmonlee (ID 106)
    106: { regular: ["Striker", null], hidden: "Unburden" },
    // Hitmonchan (ID 107)
    107: { regular: ["Iron Fist", null], hidden: "Inner Focus" },
    // Lickitung (ID 108)
    108: { regular: ["Own Tempo", "Oblivious"], hidden: "Cloud Nine" },
    // Koffing (ID 109)
    109: { regular: ["Levitate", "Neutralizing Gas"], hidden: "Stench" },
    // Weezing (ID 110)
    110: { regular: ["Levitate", "Neutralizing Gas"], hidden: "Stench" },
    // Rhyhorn (ID 111)
    111: { regular: ["Rock Head", null], hidden: "Lightning Rod" },
    // Rhydon (ID 112)
    112: { regular: ["Rock Head", null], hidden: "Lightning Rod" },
    // Chansey (ID 113)
    113: { regular: ["Natural Cure", "Serene Grace"], hidden: "Healer" },
    // Tangela (ID 114)
    114: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Regenerator" },
    // Kangaskhan (ID 115)
    115: { regular: ["Inner Focus", null], hidden: "Scrappy" },
    // Horsea (ID 116)
    116: { regular: ["Swift Swim", "Sniper"], hidden: "Damp" },
    // Seadra (ID 117)
    117: { regular: ["Poison Point", "Sniper"], hidden: "Damp" },
    // Goldeen (ID 118)
    118: { regular: ["Swift Swim", null], hidden: "Lightning Rod" },
    // Seaking (ID 119)
    119: { regular: ["Swift Swim", null], hidden: "Lightning Rod" },
    // Staryu (ID 120)
    120: { regular: ["Analytic", null], hidden: "Natural Cure" },
    // Starmie (ID 121)
    121: { regular: ["Analytic", null], hidden: "Natural Cure" },
    // Mr. Mime (ID 122)
    122: { regular: ["Soundproof", "Filter"], hidden: "Technician" },
    // Scyther (ID 123)
    123: { regular: ["Swarm", "Technician"], hidden: "Steadfast" },
    // Jynx (ID 124)
    124: { regular: ["Rain Dish", null], hidden: "Hydration" },
    // Electabuzz (ID 125)
    125: { regular: ["Static", null], hidden: "Vital Spirit" },
    // Magmar (ID 126)
    126: { regular: ["Flame Body", null], hidden: "Vital Spirit" },
    // Pinsir (ID 127)
    127: { regular: ["Hyper Cutter", "Mold Breaker"], hidden: "Moxie" },
    // Tauros (ID 128)
    128: { regular: ["Intimidate", null], hidden: "Sheer Force" },
    // Magikarp (ID 129)
    129: { regular: ["Swift Swim", null], hidden: "Rattled" },
    // Gyarados (ID 130)
    130: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Lapras (ID 131)
    131: { regular: ["Shell Armor", null], hidden: "Hydration" },
    // Ditto (ID 132)
    132: { regular: ["Limber", null], hidden: "Imposter" },
    // Eevee (ID 133)
    133: { regular: ["Run Away", "Adaptability"], hidden: "Anticipation" },
    // Vaporeon (ID 134)
    134: { regular: ["Hydration", null], hidden: "Water Absorb" },
    // Jolteon (ID 135)
    135: { regular: ["Quick Feet", null], hidden: "Volt Absorb" },
    // Flareon (ID 136)
    136: { regular: ["Guts", null], hidden: "Flash Fire" },
    // Porygon (ID 137)
    137: { regular: ["Trace", "Download"], hidden: "Analytic" },
    // Omanyte (ID 138)
    138: { regular: ["Solid Rock", "Shell Armor"], hidden: "Swift Swim" },
    // Omastar (ID 139)
    139: { regular: ["Solid Rock", "Shell Armor"], hidden: "Swift Swim" },
    // Kabuto (ID 140)
    140: { regular: ["Sharpness", "Battle Armor"], hidden: "Swift Swim" },
    // Kabutops (ID 141)
    141: { regular: ["Sharpness", "Battle Armor"], hidden: "Swift Swim" },
    // Aerodactyl (ID 142)
    142: { regular: ["Rock Head", "Pressure"], hidden: "Unnerve" },
    // Snorlax (ID 143)
    143: { regular: ["Immunity", "Thick Fat"], hidden: "Gluttony" },
    // Articuno (ID 144)
    144: { regular: ["Pressure", null], hidden: "Snow Cloak" },
    // Zapdos (ID 145)
    145: { regular: ["Pressure", null], hidden: "Static" },
    // Moltres (ID 146)
    146: { regular: ["Pressure", null], hidden: "Flame Body" },
    // Dratini (ID 147)
    147: { regular: ["Shed Skin", null], hidden: "Marvel Scale" },
    // Dragonair (ID 148)
    148: { regular: ["Shed Skin", null], hidden: "Marvel Scale" },
    // Dragonite (ID 149)
    149: { regular: ["Inner Focus", null], hidden: "Multiscale" },
    // Mewtwo (ID 150)
    150: { regular: ["Pressure", null], hidden: "Unnerve" },
    // Mew (ID 151)
    151: { regular: ["Synchronize", null], hidden: null },
    // Chikorita (ID 152)
    152: { regular: ["Overgrow", null], hidden: "Leaf Guard" },
    // Bayleef (ID 153)
    153: { regular: ["Overgrow", null], hidden: "Leaf Guard" },
    // Meganium (ID 154)
    154: { regular: ["Overgrow", null], hidden: "Leaf Guard" },
    // Cyndaquil (ID 155)
    155: { regular: ["Flame Body", null], hidden: "Blaze" },
    // Quilava (ID 156)
    156: { regular: ["Flame Body", null], hidden: "Blaze" },
    // Typhlosion (ID 157)
    157: { regular: ["Flame Body", null], hidden: "Blaze" },
    // Totodile (ID 158)
    158: { regular: ["Torrent", null], hidden: "Sheer Force" },
    // Croconaw (ID 159)
    159: { regular: ["Torrent", null], hidden: "Sheer Force" },
    // Feraligatr (ID 160)
    160: { regular: ["Torrent", null], hidden: "Sheer Force" },
    // Sentret (ID 161)
    161: { regular: ["Run Away", "Keen Eye"], hidden: "Frisk" },
    // Furret (ID 162)
    162: { regular: ["Run Away", "Keen Eye"], hidden: "Frisk" },
    // Hoothoot (ID 163)
    163: { regular: ["Tinted Lens", "Insomnia"], hidden: "Keen Eye" },
    // Noctowl (ID 164)
    164: { regular: ["Tinted Lens", "Insomnia"], hidden: "Keen Eye" },
    // Ledyba (ID 165)
    165: { regular: ["Swarm", "Early Bird"], hidden: "Rattled" },
    // Ledian (ID 166)
    166: { regular: ["Swarm", "Early Bird"], hidden: "Iron Fist" },
    // Spinarak (ID 167)
    167: { regular: ["Swarm", "Insomnia"], hidden: "Sniper" },
    // Ariados (ID 168)
    168: { regular: ["Swarm", "Insomnia"], hidden: "Sniper" },
    // Crobat (ID 169)
    169: { regular: ["Inner Focus", null], hidden: "Infiltrator" },
    // Chinchou (ID 170)
    170: { regular: ["Volt Absorb", null], hidden: "Water Absorb" },
    // Lanturn (ID 171)
    171: { regular: ["Volt Absorb", null], hidden: "Water Absorb" },
    // Pichu (ID 172)
    172: { regular: ["Static", null], hidden: "Lightning Rod" },
    // Cleffa (ID 173)
    173: { regular: ["Magic Guard", null], hidden: "Friend Guard" },
    // Igglybuff (ID 174)
    174: { regular: ["Cute Charm", "Competitive"], hidden: "Friend Guard" },
    // Togepi (ID 175)
    175: { regular: ["Hustle", "Super Luck"], hidden: "Serene Grace" },
    // Togetic (ID 176)
    176: { regular: ["Hustle", "Super Luck"], hidden: "Serene Grace" },
    // Natu (ID 177)
    177: { regular: ["Synchronize", "Early Bird"], hidden: "Magic Bounce" },
    // Xatu (ID 178)
    178: { regular: ["Synchronize", "Early Bird"], hidden: "Magic Bounce" },
    // Mareep (ID 179)
    179: { regular: ["Static", null], hidden: "Plus" },
    // Flaaffy (ID 180)
    180: { regular: ["Static", null], hidden: "Plus" },
    // Ampharos (ID 181)
    181: { regular: ["Static", null], hidden: "Plus" },
    // Bellossom (ID 182)
    182: { regular: ["Chlorophyll", null], hidden: "Healer" },
    // Marill (ID 183)
    183: { regular: ["Huge Power", null], hidden: "Sap Sipper" },
    // Azumarill (ID 184)
    184: { regular: ["Huge Power", null], hidden: "Sap Sipper" },
    // Sudowoodo (ID 185)
    185: { regular: ["Sturdy", "Rock Head"], hidden: "Rattled" },
    // Politoed (ID 186)
    186: { regular: ["Swift Swim", null], hidden: "Drizzle" },
    // Hoppip (ID 187)
    187: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Infiltrator" },
    // Skiploom (ID 188)
    188: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Infiltrator" },
    // Jumpluff (ID 189)
    189: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Infiltrator" },
    // Aipom (ID 190)
    190: { regular: ["Skill Link", "Technician"], hidden: "Run Away" },
    // Sunkern (ID 191)
    191: { regular: ["Chlorophyll", "Solar Power"], hidden: "Early Bird" },
    // Sunflora (ID 192)
    192: { regular: ["Chlorophyll", "Solar Power"], hidden: "Early Bird" },
    // Yanma (ID 193)
    193: { regular: ["Speed Boost", "Compound Eyes"], hidden: "Frisk" },
    // Wooper (ID 194)
    194: { regular: ["Water Absorb", null], hidden: "Unaware" },
    // Quagsire (ID 195)
    195: { regular: ["Water Absorb", null], hidden: "Unaware" },
    // Espeon (ID 196)
    196: { regular: ["Synchronize", null], hidden: "Magic Bounce" },
    // Umbreon (ID 197)
    197: { regular: ["Synchronize", null], hidden: "Inner Focus" },
    // Murkrow (ID 198)
    198: { regular: ["Super Luck", null], hidden: "Prankster" },
    // Slowking (ID 199)
    199: { regular: ["Oblivious", "Own Tempo"], hidden: "Regenerator" },
    // Misdreavus (ID 200)
    200: { regular: ["Levitate", null], hidden: null },
    // Wobbuffet (ID 202)
    202: { regular: ["Shadow Tag", null], hidden: "Telepathy" },
    // Girafarig (ID 203)
    203: { regular: ["Inner Focus", "Early Bird"], hidden: "Sap Sipper" },
    // Pineco (ID 204)
    204: { regular: ["Sturdy", null], hidden: "Overcoat" },
    // Forretress (ID 205)
    205: { regular: ["Sturdy", null], hidden: "Overcoat" },
    // Dunsparce (ID 206)
    206: { regular: ["Serene Grace", null], hidden: "Rattled" },
    // Gligar (ID 207)
    207: { regular: ["Hyper Cutter", null], hidden: "Immunity" },
    // Steelix (ID 208)
    208: { regular: ["Rock Head", "Sturdy"], hidden: "Sheer Force" },
    // Snubbull (ID 209)
    209: { regular: ["Intimidate", null], hidden: "Run Away" },
    // Granbull (ID 210)
    210: { regular: ["Intimidate", null], hidden: "Quick Feet" },
    // Qwilfish (ID 211)
    211: { regular: ["Intimidate", "Swift Swim"], hidden: "Poison Point" },
    // Scizor (ID 212)
    212: { regular: ["Swarm", "Technician"], hidden: "Light Metal" },
    // Shuckle (ID 213)
    213: { regular: ["Sturdy", "Gluttony"], hidden: "Contrary" },
    // Heracross (ID 214)
    214: { regular: ["Swarm", "Guts"], hidden: "Moxie" },
    // Sneasel (ID 215)
    215: { regular: ["Inner Focus", null], hidden: "Pickpocket" },
    // Teddiursa (ID 216)
    216: { regular: ["Quick Feet", null], hidden: "Honey Gather" },
    // Ursaring (ID 217)
    217: { regular: ["Quick Feet", null], hidden: "Unnerve" },
    // Slugma (ID 218)
    218: { regular: ["Magma Armor", "Flame Body"], hidden: "Weak Armor" },
    // Magcargo (ID 219)
    219: { regular: ["Magma Armor", "Flame Body"], hidden: "Weak Armor" },
    // Swinub (ID 220)
    220: { regular: ["Thick Fat", null], hidden: "Snow Cloak" },
    // Piloswine (ID 221)
    221: { regular: ["Thick Fat", null], hidden: "Snow Cloak" },
    // Corsola (ID 222)
    222: { regular: ["Hustle", "Natural Cure"], hidden: "Regenerator" },
    // Remoraid (ID 223)
    223: { regular: ["Hustle", "Sniper"], hidden: "Moody" },
    // Octillery (ID 224)
    224: { regular: ["Suction Cups", "Sniper"], hidden: "Moody" },
    // Delibird (ID 225)
    225: { regular: ["Vital Spirit", "Hustle"], hidden: "Insomnia" },
    // Mantine (ID 226)
    226: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Skarmory (ID 227)
    227: { regular: ["Keen Eye", "Sturdy"], hidden: "Weak Armor" },
    // Houndour (ID 228)
    228: { regular: ["Unnerve", null], hidden: "Flash Fire" },
    // Houndoom (ID 229)
    229: { regular: ["Unnerve", null], hidden: "Flash Fire" },
    // Kingdra (ID 230)
    230: { regular: ["Swift Swim", "Sniper"], hidden: "Damp" },
    // Phanpy (ID 231)
    231: { regular: ["Sturdy", null], hidden: "Sand Veil" },
    // Donphan (ID 232)
    232: { regular: ["Sturdy", null], hidden: "Sand Veil" },
    // Porygon2 (ID 233)
    233: { regular: ["Trace", "Download"], hidden: "Analytic" },
    // Stantler (ID 234)
    234: { regular: ["Intimidate", "Frisk"], hidden: "Sap Sipper" },
    // Smeargle (ID 235)
    235: { regular: ["Own Tempo", "Technician"], hidden: "Moody" },
    // Tyrogue (ID 236)
    236: { regular: ["Guts", null], hidden: "Vital Spirit" },
    // Hitmontop (ID 237)
    237: { regular: ["Intimidate", null], hidden: "Steadfast" },
    // Smoochum (ID 238)
    238: { regular: ["Rain Dish", null], hidden: "Hydration" },
    // Elekid (ID 239)
    239: { regular: ["Static", null], hidden: "Vital Spirit" },
    // Magby (ID 240)
    240: { regular: ["Flame Body", null], hidden: "Vital Spirit" },
    // Miltank (ID 241)
    241: { regular: ["Thick Fat", "Scrappy"], hidden: "Sap Sipper" },
    // Blissey (ID 242)
    242: { regular: ["Natural Cure", "Serene Grace"], hidden: "Healer" },
    // Raikou (ID 243)
    243: { regular: ["Pressure", null], hidden: "Inner Focus" },
    // Entei (ID 244)
    244: { regular: ["Pressure", null], hidden: "Inner Focus" },
    // Suicune (ID 245)
    245: { regular: ["Pressure", null], hidden: "Inner Focus" },
    // Larvitar (ID 246)
    246: { regular: ["Sand Veil", null], hidden: "Guts" },
    // Pupitar (ID 247)
    247: { regular: ["Shed Skin", null], hidden: null },
    // Tyranitar (ID 248)
    248: { regular: ["Unnerve", null], hidden: "Sand Stream" },
    // Lugia (ID 249)
    249: { regular: ["Pressure", null], hidden: "Multiscale" },
    // Ho-Oh (ID 250)
    250: { regular: ["Pressure", null], hidden: "Regenerator" },
    // Celebi (ID 251)
    251: { regular: ["Natural Cure", null], hidden: null },
    // Treecko (ID 252)
    252: { regular: ["Overgrow", null], hidden: "Unburden" },
    // Grovyle (ID 253)
    253: { regular: ["Overgrow", null], hidden: "Unburden" },
    // Sceptile (ID 254)
    254: { regular: ["Overgrow", null], hidden: "Unburden" },
    // Torchic (ID 255)
    255: { regular: ["Blaze", null], hidden: "Speed Boost" },
    // Combusken (ID 256)
    256: { regular: ["Blaze", null], hidden: "Speed Boost" },
    // Blaziken (ID 257)
    257: { regular: ["Blaze", null], hidden: "Speed Boost" },
    // Mudkip (ID 258)
    258: { regular: ["Torrent", null], hidden: "Damp" },
    // Marshtomp (ID 259)
    259: { regular: ["Torrent", null], hidden: "Damp" },
    // Swampert (ID 260)
    260: { regular: ["Torrent", null], hidden: "Damp" },
    // Poochyena (ID 261)
    261: { regular: ["Run Away", null], hidden: "Rattled" },
    // Mightyena (ID 262)
    262: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Zigzagoon (ID 263)
    263: { regular: ["Pickup", "Gluttony"], hidden: "Quick Feet" },
    // Linoone (ID 264)
    264: { regular: ["Pickup", "Gluttony"], hidden: "Quick Feet" },
    // Wurmple (ID 265)
    265: { regular: ["Shield Dust", null], hidden: "Run Away" },
    // Silcoon (ID 266)
    266: { regular: ["Shed Skin", null], hidden: null },
    // Beautifly (ID 267)
    267: { regular: ["Swarm", null], hidden: "Rivalry" },
    // Cascoon (ID 268)
    268: { regular: ["Shed Skin", null], hidden: null },
    // Dustox (ID 269)
    269: { regular: ["Shield Dust", null], hidden: "Compound Eyes" },
    // Lotad (ID 270)
    270: { regular: ["Swift Swim", "Rain Dish"], hidden: "Own Tempo" },
    // Lombre (ID 271)
    271: { regular: ["Swift Swim", "Rain Dish"], hidden: "Own Tempo" },
    // Ludicolo (ID 272)
    272: { regular: ["Swift Swim", "Rain Dish"], hidden: "Own Tempo" },
    // Seedot (ID 273)
    273: { regular: ["Wind Rider", "Chlorophyll"], hidden: "Pickpocket" },
    // Nuzleaf (ID 274)
    274: { regular: ["Wind Rider", "Chlorophyll"], hidden: "Pickpocket" },
    // Shiftry (ID 275)
    275: { regular: ["Wind Rider", "Chlorophyll"], hidden: "Pickpocket" },
    // Taillow (ID 276)
    276: { regular: ["Guts", null], hidden: "Scrappy" },
    // Swellow (ID 277)
    277: { regular: ["Guts", null], hidden: "Scrappy" },
    // Wingull (ID 278)
    278: { regular: ["Rain Dish", null], hidden: "Keen Eye" },
    // Pelipper (ID 279)
    279: { regular: ["Rain Dish", null], hidden: "Drizzle" },
    // Ralts (ID 280)
    280: { regular: ["Pixilate", null], hidden: "Telepathy" },
    // Kirlia (ID 281)
    281: { regular: ["Pixilate", null], hidden: "Telepathy" },
    // Gardevoir (ID 282)
    282: { regular: ["Pixilate", null], hidden: "Telepathy" },
    // Surskit (ID 283)
    283: { regular: ["Swift Swim", null], hidden: "Rain Dish" },
    // Masquerain (ID 284)
    284: { regular: ["Intimidate", null], hidden: "Unnerve" },
    // Shroomish (ID 285)
    285: { regular: ["Effect Spore", "Poison Heal"], hidden: "Quick Feet" },
    // Breloom (ID 286)
    286: { regular: ["Effect Spore", "Poison Heal"], hidden: "Technician" },
    // Slakoth (ID 287)
    287: { regular: ["Truant", null], hidden: null },
    // Vigoroth (ID 288)
    288: { regular: ["Vital Spirit", null], hidden: null },
    // Slaking (ID 289)
    289: { regular: ["Truant", null], hidden: null },
    // Nincada (ID 290)
    290: { regular: ["Compound Eyes", null], hidden: "Run Away" },
    // Ninjask (ID 291)
    291: { regular: ["Speed Boost", null], hidden: "Infiltrator" },
    // Shedinja (ID 292)
    292: { regular: ["Wonder Guard", null], hidden: null },
    // Whismur (ID 293)
    293: { regular: ["Soundproof", null], hidden: "Rattled" },
    // Loudred (ID 294)
    294: { regular: ["Soundproof", null], hidden: "Scrappy" },
    // Exploud (ID 295)
    295: { regular: ["Soundproof", null], hidden: "Scrappy" },
    // Makuhita (ID 296)
    296: { regular: ["Guts", null], hidden: "Thick Fat" },
    // Hariyama (ID 297)
    297: { regular: ["Guts", null], hidden: "Thick Fat" },
    // Azurill (ID 298)
    298: { regular: ["Huge Power", null], hidden: "Sap Sipper" },
    // Nosepass (ID 299)
    299: { regular: ["Sturdy", "Magnet Pull"], hidden: "Sand Force" },
    // Skitty (ID 300)
    300: { regular: ["Cute Charm", "Normalize"], hidden: "Wonder Skin" },
    // Delcatty (ID 301)
    301: { regular: ["Cute Charm", "Normalize"], hidden: "Wonder Skin" },
    // Sableye (ID 302)
    302: { regular: ["Prankster", null], hidden: "Stall" },
    // Mawile (ID 303)
    303: { regular: ["Intimidate", null], hidden: "Sheer Force" },
    // Aron (ID 304)
    304: { regular: ["Sturdy", "Rock Head"], hidden: "Heavy Metal" },
    // Lairon (ID 305)
    305: { regular: ["Sturdy", "Rock Head"], hidden: "Heavy Metal" },
    // Aggron (ID 306)
    306: { regular: ["Sturdy", "Filter"], hidden: "Heavy Metal" },
    // Meditite (ID 307)
    307: { regular: ["Pure Power", null], hidden: "Telepathy" },
    // Medicham (ID 308)
    308: { regular: ["Pure Power", null], hidden: "Telepathy" },
    // Electrike (ID 309)
    309: { regular: ["Galvanize", null], hidden: "Lightning Rod" },
    // Manectric (ID 310)
    310: { regular: ["Galvanize", null], hidden: "Lightning Rod" },
    // Plusle (ID 311)
    311: { regular: ["Plus", null], hidden: "Lightning Rod" },
    // Minun (ID 312)
    312: { regular: ["Minus", null], hidden: "Volt Absorb" },
    // Volbeat (ID 313)
    313: { regular: ["Illuminate", "Swarm"], hidden: "Prankster" },
    // Illumise (ID 314)
    314: { regular: ["Oblivious", "Tinted Lens"], hidden: "Prankster" },
    // Roselia (ID 315)
    315: { regular: ["Leaf Guard", "Poison Point"], hidden: "Natural Cure" },
    // Gulpin (ID 316)
    316: { regular: ["Liquid Ooze", "Sticky Hold"], hidden: "Gluttony" },
    // Swalot (ID 317)
    317: { regular: ["Liquid Ooze", "Sticky Hold"], hidden: "Gluttony" },
    // Carvanha (ID 318)
    318: { regular: ["Speed Boost", "Strong Jaw"], hidden: "Rough Skin" },
    // Sharpedo (ID 319)
    319: { regular: ["Speed Boost", "Strong Jaw"], hidden: "Rough Skin" },
    // Wailmer (ID 320)
    320: { regular: ["Water Veil", "Oblivious"], hidden: "Pressure" },
    // Wailord (ID 321)
    321: { regular: ["Water Veil", "Oblivious"], hidden: "Pressure" },
    // Numel (ID 322)
    322: { regular: ["Oblivious", null], hidden: "Own Tempo" },
    // Camerupt (ID 323)
    323: { regular: ["Magma Armor", null], hidden: "Anger Point" },
    // Torkoal (ID 324)
    324: { regular: ["Shell Armor", null], hidden: "Drought" },
    // Spoink (ID 325)
    325: { regular: ["Thick Fat", "Own Tempo"], hidden: "Gluttony" },
    // Grumpig (ID 326)
    326: { regular: ["Thick Fat", "Own Tempo"], hidden: "Gluttony" },
    // Spinda (ID 327)
    327: { regular: ["Own Tempo", "Tangled Feet"], hidden: "Contrary" },
    // Trapinch (ID 328)
    328: { regular: ["Hyper Cutter", "Arena Trap"], hidden: "Sheer Force" },
    // Vibrava (ID 329)
    329: { regular: ["Levitate", null], hidden: null },
    // Flygon (ID 330)
    330: { regular: ["Levitate", null], hidden: null },
    // Cacnea (ID 331)
    331: { regular: ["Sand Veil", null], hidden: "Water Absorb" },
    // Cacturne (ID 332)
    332: { regular: ["Sand Veil", null], hidden: "Water Absorb" },
    // Swablu (ID 333)
    333: { regular: ["Natural Cure", null], hidden: "Cloud Nine" },
    // Altaria (ID 334)
    334: { regular: ["Natural Cure", null], hidden: "Cloud Nine" },
    // Zangoose (ID 335)
    335: { regular: ["Immunity", null], hidden: "Toxic Boost" },
    // Seviper (ID 336)
    336: { regular: ["Shed Skin", null], hidden: "Infiltrator" },
    // Lunatone (ID 337)
    337: { regular: ["Levitate", null], hidden: null },
    // Solrock (ID 338)
    338: { regular: ["Levitate", null], hidden: null },
    // Barboach (ID 339)
    339: { regular: ["Hydration", null], hidden: "Anticipation" },
    // Whiscash (ID 340)
    340: { regular: ["Hydration", null], hidden: "Anticipation" },
    // Corphish (ID 341)
    341: { regular: ["Shell Armor", null], hidden: "Adaptability" },
    // Crawdaunt (ID 342)
    342: { regular: ["Shell Armor", null], hidden: "Adaptability" },
    // Baltoy (ID 343)
    343: { regular: ["Levitate", null], hidden: null },
    // Claydol (ID 344)
    344: { regular: ["Levitate", null], hidden: null },
    // Lileep (ID 345)
    345: { regular: ["Suction Cups", null], hidden: "Storm Drain" },
    // Cradily (ID 346)
    346: { regular: ["Suction Cups", null], hidden: "Storm Drain" },
    // Anorith (ID 347)
    347: { regular: ["Battle Armor", null], hidden: "Swift Swim" },
    // Armaldo (ID 348)
    348: { regular: ["Battle Armor", null], hidden: "Swift Swim" },
    // Feebas (ID 349)
    349: { regular: ["Swift Swim", "Adaptability"], hidden: "Oblivious" },
    // Milotic (ID 350)
    350: { regular: ["Marvel Scale", "Cute Charm"], hidden: "Competitive" },
    // Castform-Normal (ID 351)
    351: { regular: ["Forecast", null], hidden: null },
    // Kecleon (ID 352)
    352: { regular: ["Color Change", null], hidden: "Protean" },
    // Shuppet (ID 353)
    353: { regular: ["Insomnia", "Frisk"], hidden: "Cursed Body" },
    // Banette (ID 354)
    354: { regular: ["Insomnia", "Frisk"], hidden: "Cursed Body" },
    // Duskull (ID 355)
    355: { regular: ["Levitate", null], hidden: "Frisk" },
    // Dusclops (ID 356)
    356: { regular: ["Pressure", null], hidden: "Frisk" },
    // Tropius (ID 357)
    357: { regular: ["Chlorophyll", "Solar Power"], hidden: "Harvest" },
    // Chimecho (ID 358)
    358: { regular: ["Levitate", null], hidden: null },
    // Absol (ID 359)
    359: { regular: ["Sharpness", null], hidden: "Super Luck" },
    // Wynaut (ID 360)
    360: { regular: ["Shadow Tag", null], hidden: "Telepathy" },
    // Snorunt (ID 361)
    361: { regular: ["Inner Focus", null], hidden: "Moody" },
    // Glalie (ID 362)
    362: { regular: ["Inner Focus", null], hidden: "Moody" },
    // Spheal (ID 363)
    363: { regular: ["Thick Fat", null], hidden: "Ice Body" },
    // Sealeo (ID 364)
    364: { regular: ["Thick Fat", null], hidden: "Ice Body" },
    // Walrein (ID 365)
    365: { regular: ["Thick Fat", null], hidden: "Ice Body" },
    // Clamperl (ID 366)
    366: { regular: ["Shell Armor", null], hidden: "Rattled" },
    // Huntail (ID 367)
    367: { regular: ["Swift Swim", null], hidden: "Water Veil" },
    // Gorebyss (ID 368)
    368: { regular: ["Swift Swim", null], hidden: "Hydration" },
    // Relicanth (ID 369)
    369: { regular: ["Swift Swim", null], hidden: "Sturdy" },
    // Luvdisc (ID 370)
    370: { regular: ["Swift Swim", null], hidden: "Hydration" },
    // Bagon (ID 371)
    371: { regular: ["Rock Head", null], hidden: "Sheer Force" },
    // Shelgon (ID 372)
    372: { regular: ["Rock Head", null], hidden: "Overcoat" },
    // Salamence (ID 373)
    373: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Beldum (ID 374)
    374: { regular: ["Clear Body", null], hidden: "Light Metal" },
    // Metang (ID 375)
    375: { regular: ["Clear Body", null], hidden: "Light Metal" },
    // Metagross (ID 376)
    376: { regular: ["Clear Body", null], hidden: "Light Metal" },
    // Regirock (ID 377)
    377: { regular: ["Clear Body", null], hidden: "Sturdy" },
    // Regice (ID 378)
    378: { regular: ["Clear Body", null], hidden: "Ice Body" },
    // Registeel (ID 379)
    379: { regular: ["Clear Body", null], hidden: "Light Metal" },
    // Latias (ID 380)
    380: { regular: ["Levitate", null], hidden: null },
    // Latios (ID 381)
    381: { regular: ["Levitate", null], hidden: null },
    // Kyogre (ID 382)
    382: { regular: ["Drizzle", null], hidden: null },
    // Groudon (ID 383)
    383: { regular: ["Drought", null], hidden: null },
    // Rayquaza (ID 384)
    384: { regular: ["Air Lock", null], hidden: null },
    // Jirachi (ID 385)
    385: { regular: ["Serene Grace", null], hidden: null },
    // Deoxys-Normal (ID 386)
    386: { regular: ["Pressure", null], hidden: null },
    // Turtwig (ID 387)
    387: { regular: ["Overgrow", null], hidden: "Shell Armor" },
    // Grotle (ID 388)
    388: { regular: ["Overgrow", null], hidden: "Shell Armor" },
    // Torterra (ID 389)
    389: { regular: ["Overgrow", null], hidden: "Shell Armor" },
    // Chimchar (ID 390)
    390: { regular: ["Blaze", null], hidden: "Iron Fist" },
    // Monferno (ID 391)
    391: { regular: ["Blaze", null], hidden: "Iron Fist" },
    // Infernape (ID 392)
    392: { regular: ["Blaze", null], hidden: "Iron Fist" },
    // Piplup (ID 393)
    393: { regular: ["Torrent", null], hidden: "Competitive" },
    // Prinplup (ID 394)
    394: { regular: ["Torrent", null], hidden: "Competitive" },
    // Empoleon (ID 395)
    395: { regular: ["Torrent", null], hidden: "Competitive" },
    // Starly (ID 396)
    396: { regular: ["Keen Eye", null], hidden: "Reckless" },
    // Staravia (ID 397)
    397: { regular: ["Intimidate", null], hidden: "Reckless" },
    // Staraptor (ID 398)
    398: { regular: ["Intimidate", null], hidden: "Reckless" },
    // Bidoof (ID 399)
    399: { regular: ["Simple", "Unaware"], hidden: "Moody" },
    // Bibarel (ID 400)
    400: { regular: ["Simple", "Unaware"], hidden: "Moody" },
    // Kricketot (ID 401)
    401: { regular: ["Shed Skin", null], hidden: "Run Away" },
    // Kricketune (ID 402)
    402: { regular: ["Swarm", null], hidden: "Technician" },
    // Shinx (ID 403)
    403: { regular: ["Intimidate", "Strong Jaw"], hidden: "Guts" },
    // Luxio (ID 404)
    404: { regular: ["Intimidate", "Strong Jaw"], hidden: "Guts" },
    // Luxray (ID 405)
    405: { regular: ["Intimidate", "Strong Jaw"], hidden: "Guts" },
    // Budew (ID 406)
    406: { regular: ["Leaf Guard", "Poison Point"], hidden: "Natural Cure" },
    // Roserade (ID 407)
    407: { regular: ["Technician", "Poison Point"], hidden: "Natural Cure" },
    // Cranidos (ID 408)
    408: { regular: ["Mold Breaker", null], hidden: "Sheer Force" },
    // Rampardos (ID 409)
    409: { regular: ["Mold Breaker", null], hidden: "Sheer Force" },
    // Shieldon (ID 410)
    410: { regular: ["Sturdy", null], hidden: "Soundproof" },
    // Bastiodon (ID 411)
    411: { regular: ["Sturdy", null], hidden: "Soundproof" },
    // Burmy-Plant-Cloak (ID 412)
    412: { regular: ["Shed Skin", null], hidden: "Overcoat" },
    // Wormadam-Plant-Cloak (ID 413)
    413: { regular: ["Anticipation", null], hidden: "Overcoat" },
    // Mothim (ID 414)
    414: { regular: ["Swarm", null], hidden: "Tinted Lens" },
    // Combee (ID 415)
    415: { regular: ["Honey Gather", null], hidden: "Hustle" },
    // Vespiquen (ID 416)
    416: { regular: ["Pressure", null], hidden: "Unnerve" },
    // Pachirisu (ID 417)
    417: { regular: ["Static", "Pickup"], hidden: "Volt Absorb" },
    // Buizel (ID 418)
    418: { regular: ["Swift Swim", null], hidden: "Water Veil" },
    // Floatzel (ID 419)
    419: { regular: ["Swift Swim", null], hidden: "Water Veil" },
    // Cherubi (ID 420)
    420: { regular: ["Chlorophyll", null], hidden: null },
    // Cherrim-Overcast (ID 421)
    421: { regular: ["Flower Gift", null], hidden: null },
    // Shellos (ID 422)
    422: { regular: ["Sticky Hold", "Sand Force"], hidden: "Storm Drain" },
    // Gastrodon (ID 423)
    423: { regular: ["Sticky Hold", "Sand Force"], hidden: "Storm Drain" },
    // Ambipom (ID 424)
    424: { regular: ["Skill Link", "Technician"], hidden: "Run Away" },
    // Drifloon (ID 425)
    425: { regular: ["Aftermath", "Unburden"], hidden: "Flare Boost" },
    // Drifblim (ID 426)
    426: { regular: ["Aftermath", "Unburden"], hidden: "Flare Boost" },
    // Buneary (ID 427)
    427: { regular: ["Limber", null], hidden: "Run Away" },
    // Lopunny (ID 428)
    428: { regular: ["Limber", null], hidden: "Cute Charm" },
    // Mismagius (ID 429)
    429: { regular: ["Levitate", null], hidden: null },
    // Honchkrow (ID 430)
    430: { regular: ["Super Luck", null], hidden: "Prankster" },
    // Glameow (ID 431)
    431: { regular: ["Limber", "Own Tempo"], hidden: "Keen Eye" },
    // Purugly (ID 432)
    432: { regular: ["Thick Fat", "Own Tempo"], hidden: "Defiant" },
    // Chingling (ID 433)
    433: { regular: ["Levitate", null], hidden: null },
    // Stunky (ID 434)
    434: { regular: ["Stench", "Aftermath"], hidden: "Keen Eye" },
    // Skuntank (ID 435)
    435: { regular: ["Stench", "Aftermath"], hidden: "Keen Eye" },
    // Bronzor (ID 436)
    436: { regular: ["Levitate", "Heatproof"], hidden: "Heavy Metal" },
    // Bronzong (ID 437)
    437: { regular: ["Levitate", "Heatproof"], hidden: "Heavy Metal" },
    // Bonsly (ID 438)
    438: { regular: ["Sturdy", "Rock Head"], hidden: "Rattled" },
    // Mime Jr. (ID 439)
    439: { regular: ["Soundproof", "Filter"], hidden: "Technician" },
    // Happiny (ID 440)
    440: { regular: ["Natural Cure", "Serene Grace"], hidden: "Friend Guard" },
    // Chatot (ID 441)
    441: { regular: ["Keen Eye", "Tangled Feet"], hidden: "Big Pecks" },
    // Spiritomb (ID 442)
    442: { regular: ["Pressure", null], hidden: "Infiltrator" },
    // Gible (ID 443)
    443: { regular: ["Sand Veil", null], hidden: "Rough Skin" },
    // Gabite (ID 444)
    444: { regular: ["Sand Veil", null], hidden: "Rough Skin" },
    // Garchomp (ID 445)
    445: { regular: ["Sand Veil", null], hidden: "Rough Skin" },
    // Munchlax (ID 446)
    446: { regular: ["Pickup", "Thick Fat"], hidden: "Gluttony" },
    // Riolu (ID 447)
    447: { regular: ["Inner Focus", null], hidden: "Prankster" },
    // Lucario (ID 448)
    448: { regular: ["Inner Focus", null], hidden: "Justified" },
    // Hippopotas (ID 449)
    449: { regular: ["Sand Force", null], hidden: "Sand Stream" },
    // Hippowdon (ID 450)
    450: { regular: ["Sand Force", null], hidden: "Sand Stream" },
    // Skorupi (ID 451)
    451: { regular: ["Battle Armor", null], hidden: "Sniper" },
    // Drapion (ID 452)
    452: { regular: ["Battle Armor", null], hidden: "Sniper" },
    // Croagunk (ID 453)
    453: { regular: ["Poison Touch", "Poison Point"], hidden: "Dry Skin" },
    // Toxicroak (ID 454)
    454: { regular: ["Poison Touch", "Poison Point"], hidden: "Dry Skin" },
    // Carnivine (ID 455)
    455: { regular: ["Levitate", null], hidden: null },
    // Finneon (ID 456)
    456: { regular: ["Swift Swim", null], hidden: "Storm Drain" },
    // Lumineon (ID 457)
    457: { regular: ["Swift Swim", null], hidden: "Storm Drain" },
    // Mantyke (ID 458)
    458: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Snover (ID 459)
    459: { regular: ["Snow Warning", null], hidden: "Soundproof" },
    // Abomasnow (ID 460)
    460: { regular: ["Snow Warning", null], hidden: "Soundproof" },
    // Weavile (ID 461)
    461: { regular: ["Pressure", null], hidden: "Pickpocket" },
    // Magnezone (ID 462)
    462: { regular: ["Magnet Pull", "Sturdy"], hidden: "Analytic" },
    // Lickilicky (ID 463)
    463: { regular: ["Own Tempo", "Oblivious"], hidden: "Cloud Nine" },
    // Rhyperior (ID 464)
    464: { regular: ["Solid Rock", null], hidden: "Lightning Rod" },
    // Tangrowth (ID 465)
    465: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Regenerator" },
    // Electivire (ID 466)
    466: { regular: ["Iron Fist", null], hidden: "Vital Spirit" },
    // Magmortar (ID 467)
    467: { regular: ["Flame Body", null], hidden: "Vital Spirit" },
    // Togekiss (ID 468)
    468: { regular: ["Aerilate", "Super Luck"], hidden: "Serene Grace" },
    // Yanmega (ID 469)
    469: { regular: ["Speed Boost", "Tinted Lens"], hidden: "Frisk" },
    // Leafeon (ID 470)
    470: { regular: ["Technician", null], hidden: "Chlorophyll" },
    // Glaceon (ID 471)
    471: { regular: ["Slush Rush", null], hidden: "Ice Body" },
    // Gliscor (ID 472)
    472: { regular: ["Hyper Cutter", null], hidden: "Poison Heal" },
    // Mamoswine (ID 473)
    473: { regular: ["Thick Fat", null], hidden: "Snow Cloak" },
    // Porygon-Z (ID 474)
    474: { regular: ["Adaptability", "Download"], hidden: "Analytic" },
    // Gallade (ID 475)
    475: { regular: ["Sharpness", null], hidden: "Justified" },
    // Probopass (ID 476)
    476: { regular: ["Sturdy", "Magnet Pull"], hidden: "Sand Force" },
    // Dusknoir (ID 477)
    477: { regular: ["Pressure", null], hidden: "Frisk" },
    // Froslass (ID 478)
    478: { regular: ["Snow Cloak", null], hidden: "Cursed Body" },
    // Rotom (ID 479)
    479: { regular: ["Levitate", null], hidden: null },
    // Uxie (ID 480)
    480: { regular: ["Levitate", null], hidden: null },
    // Mesprit (ID 481)
    481: { regular: ["Levitate", null], hidden: null },
    // Azelf (ID 482)
    482: { regular: ["Levitate", null], hidden: null },
    // Dialga (ID 483)
    483: { regular: ["Pressure", null], hidden: "Telepathy" },
    // Palkia (ID 484)
    484: { regular: ["Pressure", null], hidden: "Telepathy" },
    // Heatran (ID 485)
    485: { regular: ["Flash Fire", null], hidden: "Flame Body" },
    // Regigigas (ID 486)
    486: { regular: ["Slow Start", null], hidden: null },
    // Giratina-Altered (ID 487)
    487: { regular: ["Pressure", null], hidden: "Telepathy" },
    // Cresselia (ID 488)
    488: { regular: ["Levitate", null], hidden: null },
    // Phione (ID 489)
    489: { regular: ["Hydration", null], hidden: null },
    // Manaphy (ID 490)
    490: { regular: ["Hydration", null], hidden: null },
    // Darkrai (ID 491)
    491: { regular: ["Bad Dreams", null], hidden: null },
    // Shaymin-Land (ID 492)
    492: { regular: ["Natural Cure", null], hidden: null },
    // Arceus-Normal (ID 493)
    493: { regular: ["Multitype", null], hidden: null },
    // Victini (ID 494)
    494: { regular: ["Victory Star", null], hidden: null },
    // Snivy (ID 495)
    495: { regular: ["Overgrow", null], hidden: "Contrary" },
    // Servine (ID 496)
    496: { regular: ["Overgrow", null], hidden: "Contrary" },
    // Serperior (ID 497)
    497: { regular: ["Overgrow", null], hidden: "Contrary" },
    // Tepig (ID 498)
    498: { regular: ["Blaze", null], hidden: "Thick Fat" },
    // Pignite (ID 499)
    499: { regular: ["Blaze", null], hidden: "Thick Fat" },
    // Emboar (ID 500)
    500: { regular: ["Blaze", null], hidden: "Reckless" },
    // Oshawott (ID 501)
    501: { regular: ["Shell Armor", null], hidden: "Torrent" },
    // Dewott (ID 502)
    502: { regular: ["Shell Armor", null], hidden: "Torrent" },
    // Samurott (ID 503)
    503: { regular: ["Shell Armor", null], hidden: "Torrent" },
    // Patrat (ID 504)
    504: { regular: ["Run Away", "Keen Eye"], hidden: "Analytic" },
    // Watchog (ID 505)
    505: { regular: ["Illuminate", "Keen Eye"], hidden: "Analytic" },
    // Lillipup (ID 506)
    506: { regular: ["Vital Spirit", "Sand Rush"], hidden: "Run Away" },
    // Herdier (ID 507)
    507: { regular: ["Intimidate", "Sand Rush"], hidden: "Scrappy" },
    // Stoutland (ID 508)
    508: { regular: ["Intimidate", "Sand Rush"], hidden: "Scrappy" },
    // Purrloin (ID 509)
    509: { regular: ["Limber", "Unburden"], hidden: "Prankster" },
    // Liepard (ID 510)
    510: { regular: ["Limber", "Unburden"], hidden: "Prankster" },
    // Pansage (ID 511)
    511: { regular: ["Gluttony", null], hidden: "Overgrow" },
    // Simisage (ID 512)
    512: { regular: ["Gluttony", null], hidden: "Overgrow" },
    // Pansear (ID 513)
    513: { regular: ["Gluttony", null], hidden: "Blaze" },
    // Simisear (ID 514)
    514: { regular: ["Gluttony", null], hidden: "Blaze" },
    // Panpour (ID 515)
    515: { regular: ["Gluttony", null], hidden: "Torrent" },
    // Simipour (ID 516)
    516: { regular: ["Gluttony", null], hidden: "Torrent" },
    // Munna (ID 517)
    517: { regular: ["Telepathy", null], hidden: "Synchronize" },
    // Musharna (ID 518)
    518: { regular: ["Telepathy", null], hidden: "Synchronize" },
    // Pidove (ID 519)
    519: { regular: ["Quick Feet", null], hidden: "Rivalry" },
    // Tranquill (ID 520)
    520: { regular: ["Quick Feet", null], hidden: "Rivalry" },
    // Unfezant (ID 521)
    521: { regular: ["Quick Feet", null], hidden: "Rivalry" },
    // Blitzle (ID 522)
    522: { regular: ["Lightning Rod", "Motor Drive"], hidden: "Sap Sipper" },
    // Zebstrika (ID 523)
    523: { regular: ["Lightning Rod", "Motor Drive"], hidden: "Sap Sipper" },
    // Roggenrola (ID 524)
    524: { regular: ["Sturdy", "Solid Rock"], hidden: "Weak Armor" },
    // Boldore (ID 525)
    525: { regular: ["Sturdy", "Solid Rock"], hidden: "Weak Armor" },
    // Gigalith (ID 526)
    526: { regular: ["Sturdy", "Solid Rock"], hidden: "Sand Stream" },
    // Woobat (ID 527)
    527: { regular: ["Unaware", "Klutz"], hidden: "Simple" },
    // Swoobat (ID 528)
    528: { regular: ["Unaware", "Klutz"], hidden: "Simple" },
    // Drilbur (ID 529)
    529: { regular: ["Sand Rush", "Sand Force"], hidden: "Mold Breaker" },
    // Excadrill (ID 530)
    530: { regular: ["Sand Rush", "Sand Force"], hidden: "Mold Breaker" },
    // Audino (ID 531)
    531: { regular: ["Healer", "Regenerator"], hidden: "Klutz" },
    // Timburr (ID 532)
    532: { regular: ["Iron Fist", null], hidden: "Guts" },
    // Gurdurr (ID 533)
    533: { regular: ["Iron Fist", null], hidden: "Guts" },
    // Conkeldurr (ID 534)
    534: { regular: ["Iron Fist", null], hidden: "Guts" },
    // Tympole (ID 535)
    535: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Palpitoad (ID 536)
    536: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Seismitoad (ID 537)
    537: { regular: ["Swift Swim", null], hidden: "Water Absorb" },
    // Throh (ID 538)
    538: { regular: ["Guts", "Inner Focus"], hidden: "Mold Breaker" },
    // Sawk (ID 539)
    539: { regular: ["Sturdy", "Inner Focus"], hidden: "Mold Breaker" },
    // Sewaddle (ID 540)
    540: { regular: ["Swarm", null], hidden: "Chlorophyll" },
    // Swadloon (ID 541)
    541: { regular: ["Leaf Guard", null], hidden: "Chlorophyll" },
    // Leavanny (ID 542)
    542: { regular: ["Sharpness", null], hidden: "Chlorophyll" },
    // Venipede (ID 543)
    543: { regular: ["Poison Point", "Swarm"], hidden: "Speed Boost" },
    // Whirlipede (ID 544)
    544: { regular: ["Poison Point", "Swarm"], hidden: "Speed Boost" },
    // Scolipede (ID 545)
    545: { regular: ["Poison Point", "Swarm"], hidden: "Speed Boost" },
    // Cottonee (ID 546)
    546: { regular: ["Wind Rider", null], hidden: "Prankster" },
    // Whimsicott (ID 547)
    547: { regular: ["Wind Rider", null], hidden: "Prankster" },
    // Petilil (ID 548)
    548: { regular: ["Chlorophyll", "Own Tempo"], hidden: "Leaf Guard" },
    // Lilligant (ID 549)
    549: { regular: ["Chlorophyll", "Own Tempo"], hidden: "Leaf Guard" },
    // Basculin (ID 550)
    550: { regular: ["Reckless", "Adaptability"], hidden: "Mold Breaker" },
    // Sandile (ID 551)
    551: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Krokorok (ID 552)
    552: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Krookodile (ID 553)
    553: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Darumaka (ID 554)
    554: { regular: ["Hustle", null], hidden: "Inner Focus" },
    // Darmanitan-Standard-Mode (ID 555)
    555: { regular: ["Sheer Force", null], hidden: "Zen Mode" },
    // Maractus (ID 556)
    556: { regular: ["Chlorophyll", null], hidden: "Storm Drain" },
    // Dwebble (ID 557)
    557: { regular: ["Sturdy", "Shell Armor"], hidden: "Weak Armor" },
    // Crustle (ID 558)
    558: { regular: ["Sturdy", "Shell Armor"], hidden: "Weak Armor" },
    // Scraggy (ID 559)
    559: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Scrafty (ID 560)
    560: { regular: ["Intimidate", null], hidden: "Moxie" },
    // Sigilyph (ID 561)
    561: { regular: ["Wonder Skin", "Magic Guard"], hidden: "Tinted Lens" },
    // Yamask (ID 562)
    562: { regular: ["Mummy", null], hidden: null },
    // Cofagrigus (ID 563)
    563: { regular: ["Mummy", null], hidden: null },
    // Tirtouga (ID 564)
    564: { regular: ["Solid Rock", "Sturdy"], hidden: "Swift Swim" },
    // Carracosta (ID 565)
    565: { regular: ["Solid Rock", "Sturdy"], hidden: "Swift Swim" },
    // Archen (ID 566)
    566: { regular: ["Defeatist", null], hidden: null },
    // Archeops (ID 567)
    567: { regular: ["Defeatist", null], hidden: null },
    // Trubbish (ID 568)
    568: { regular: ["Stench", "Sticky Hold"], hidden: "Aftermath" },
    // Garbodor (ID 569)
    569: { regular: ["Stench", "Weak Armor"], hidden: "Aftermath" },
    // Zorua (ID 570)
    570: { regular: ["Eclipsate", null], hidden: "Illusion" },
    // Zoroark (ID 571)
    571: { regular: ["Eclipsate", null], hidden: "Illusion" },
    // Minccino (ID 572)
    572: { regular: ["Skill Link", "Technician"], hidden: "Cute Charm" },
    // Cinccino (ID 573)
    573: { regular: ["Skill Link", "Technician"], hidden: "Cute Charm" },
    // Gothita (ID 574)
    574: { regular: ["Frisk", "Competitive"], hidden: "Shadow Tag" },
    // Gothorita (ID 575)
    575: { regular: ["Frisk", "Competitive"], hidden: "Shadow Tag" },
    // Gothitelle (ID 576)
    576: { regular: ["Frisk", "Competitive"], hidden: "Shadow Tag" },
    // Solosis (ID 577)
    577: { regular: ["Regenerator", "Magic Guard"], hidden: "Overcoat" },
    // Duosion (ID 578)
    578: { regular: ["Regenerator", "Magic Guard"], hidden: "Overcoat" },
    // Reuniclus (ID 579)
    579: { regular: ["Regenerator", "Magic Guard"], hidden: "Overcoat" },
    // Ducklett (ID 580)
    580: { regular: ["No Guard", null], hidden: "Hydration" },
    // Swanna (ID 581)
    581: { regular: ["No Guard", null], hidden: "Hydration" },
    // Vanillite (ID 582)
    582: { regular: ["Ice Body", "Snow Cloak"], hidden: "Weak Armor" },
    // Vanillish (ID 583)
    583: { regular: ["Ice Body", "Snow Cloak"], hidden: "Weak Armor" },
    // Vanilluxe (ID 584)
    584: { regular: ["Ice Body", "Snow Warning"], hidden: "Weak Armor" },
    // Deerling (ID 585)
    585: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Sawsbuck (ID 586)
    586: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Emolga (ID 587)
    587: { regular: ["Static", null], hidden: "Motor Drive" },
    // Karrablast (ID 588)
    588: { regular: ["Swarm", "Shed Skin"], hidden: "No Guard" },
    // Escavalier (ID 589)
    589: { regular: ["Swarm", "Shell Armor"], hidden: "Overcoat" },
    // Foongus (ID 590)
    590: { regular: ["Effect Spore", null], hidden: "Regenerator" },
    // Amoonguss (ID 591)
    591: { regular: ["Effect Spore", null], hidden: "Regenerator" },
    // Frillish (ID 592)
    592: { regular: ["Damp", "Cursed Body"], hidden: "Water Absorb" },
    // Jellicent (ID 593)
    593: { regular: ["Damp", "Cursed Body"], hidden: "Water Absorb" },
    // Alomomola (ID 594)
    594: { regular: ["Healer", "Hydration"], hidden: "Regenerator" },
    // Joltik (ID 595)
    595: { regular: ["Compound Eyes", "Unnerve"], hidden: "Swarm" },
    // Galvantula (ID 596)
    596: { regular: ["Compound Eyes", "Unnerve"], hidden: "Swarm" },
    // Ferroseed (ID 597)
    597: { regular: ["Iron Barbs", null], hidden: null },
    // Ferrothorn (ID 598)
    598: { regular: ["Iron Barbs", null], hidden: "Anticipation" },
    // Klink (ID 599)
    599: { regular: ["Clear Body", null], hidden: null },
    // Klang (ID 600)
    600: { regular: ["Clear Body", null], hidden: null },
    // Klinklang (ID 601)
    601: { regular: ["Clear Body", null], hidden: null },
    // Tynamo (ID 602)
    602: { regular: ["Levitate", null], hidden: null },
    // Eelektrik (ID 603)
    603: { regular: ["Levitate", null], hidden: null },
    // Eelektross (ID 604)
    604: { regular: ["Levitate", null], hidden: null },
    // Elgyem (ID 605)
    605: { regular: ["Telepathy", "Synchronize"], hidden: "Analytic" },
    // Beheeyem (ID 606)
    606: { regular: ["Telepathy", "Synchronize"], hidden: "Analytic" },
    // Litwick (ID 607)
    607: { regular: ["Flame Body", null], hidden: "Infiltrator" },
    // Lampent (ID 608)
    608: { regular: ["Flame Body", null], hidden: "Infiltrator" },
    // Chandelure (ID 609)
    609: { regular: ["Flame Body", null], hidden: "Infiltrator" },
    // Axew (ID 610)
    610: { regular: ["Rivalry", "Mold Breaker"], hidden: "Unnerve" },
    // Fraxure (ID 611)
    611: { regular: ["Rivalry", "Mold Breaker"], hidden: "Unnerve" },
    // Haxorus (ID 612)
    612: { regular: ["Rivalry", "Mold Breaker"], hidden: "Unnerve" },
    // Cubchoo (ID 613)
    613: { regular: ["Snow Cloak", "Slush Rush"], hidden: "Rattled" },
    // Beartic (ID 614)
    614: { regular: ["Snow Cloak", "Slush Rush"], hidden: "Swift Swim" },
    // Cryogonal (ID 615)
    615: { regular: ["Levitate", null], hidden: null },
    // Shelmet (ID 616)
    616: { regular: ["Hydration", "Shell Armor"], hidden: "Overcoat" },
    // Accelgor (ID 617)
    617: { regular: ["Hydration", "Sticky Hold"], hidden: "Unburden" },
    // Stunfisk (ID 618)
    618: { regular: ["Static", "Limber"], hidden: "Sand Veil" },
    // Mienfoo (ID 619)
    619: { regular: ["Inner Focus", "Regenerator"], hidden: "Reckless" },
    // Mienshao (ID 620)
    620: { regular: ["Inner Focus", "Regenerator"], hidden: "Reckless" },
    // Druddigon (ID 621)
    621: { regular: ["Rough Skin", "Sheer Force"], hidden: "Mold Breaker" },
    // Golett (ID 622)
    622: { regular: ["Iron Fist", "No Guard"], hidden: "Klutz" },
    // Golurk (ID 623)
    623: { regular: ["Iron Fist", "No Guard"], hidden: "Klutz" },
    // Pawniard (ID 624)
    624: { regular: ["Inner Focus", null], hidden: "Defiant" },
    // Bisharp (ID 625)
    625: { regular: ["Inner Focus", null], hidden: "Defiant" },
    // Bouffalant (ID 626)
    626: { regular: ["Reckless", "Sap Sipper"], hidden: "Soundproof" },
    // Rufflet (ID 627)
    627: { regular: ["Keen Eye", "Sheer Force"], hidden: "Hustle" },
    // Braviary (ID 628)
    628: { regular: ["Keen Eye", "Sheer Force"], hidden: "Defiant" },
    // Vullaby (ID 629)
    629: { regular: ["Big Pecks", "Overcoat"], hidden: "Weak Armor" },
    // Mandibuzz (ID 630)
    630: { regular: ["Big Pecks", "Overcoat"], hidden: "Weak Armor" },
    // Heatmor (ID 631)
    631: { regular: ["Gluttony", "Flash Fire"], hidden: "White Smoke" },
    // Durant (ID 632)
    632: { regular: ["Swarm", null], hidden: "Truant" },
    // Deino (ID 633)
    633: { regular: ["Hustle", null], hidden: null },
    // Zweilous (ID 634)
    634: { regular: ["Hustle", null], hidden: null },
    // Hydreigon (ID 635)
    635: { regular: ["Levitate", null], hidden: null },
    // Larvesta (ID 636)
    636: { regular: ["Flame Body", null], hidden: "Swarm" },
    // Volcarona (ID 637)
    637: { regular: ["Flame Body", null], hidden: "Swarm" },
    // Cobalion (ID 638)
    638: { regular: ["Justified", null], hidden: null },
    // Terrakion (ID 639)
    639: { regular: ["Justified", null], hidden: null },
    // Virizion (ID 640)
    640: { regular: ["Justified", null], hidden: null },
    // Tornadus (ID 641)
    641: { regular: ["Prankster", null], hidden: "Defiant" },
    // Thundurus (ID 642)
    642: { regular: ["Prankster", null], hidden: "Defiant" },
    // Reshiram (ID 643)
    643: { regular: ["Turboblaze", null], hidden: null },
    // Zekrom (ID 644)
    644: { regular: ["Teravolt", null], hidden: null },
    // Landorus (ID 645)
    645: { regular: ["Sand Force", null], hidden: "Sheer Force" },
    // Kyurem (ID 646)
    646: { regular: ["Pressure", null], hidden: null },
    // Keldeo-Ordinary (ID 647)
    647: { regular: ["Justified", null], hidden: null },
    // Meloetta-Aria (ID 648)
    648: { regular: ["Serene Grace", null], hidden: null },
    // Genesect (ID 649)
    649: { regular: ["Download", null], hidden: null },
    // Chespin (ID 650)
    650: { regular: ["Overgrow", null], hidden: "Bulletproof" },
    // Quilladin (ID 651)
    651: { regular: ["Overgrow", null], hidden: "Bulletproof" },
    // Chesnaught (ID 652)
    652: { regular: ["Overgrow", null], hidden: "Bulletproof" },
    // Fennekin (ID 653)
    653: { regular: ["Blaze", null], hidden: "Magician" },
    // Braixen (ID 654)
    654: { regular: ["Blaze", null], hidden: "Magician" },
    // Delphox (ID 655)
    655: { regular: ["Blaze", null], hidden: "Magician" },
    // Froakie (ID 656)
    656: { regular: ["Torrent", null], hidden: "Protean" },
    // Frogadier (ID 657)
    657: { regular: ["Torrent", null], hidden: "Protean" },
    // Greninja (ID 658)
    658: { regular: ["Torrent", null], hidden: "Protean" },
    // Bunnelby (ID 659)
    659: { regular: ["Huge Power", null], hidden: "Cheek Pouch" },
    // Diggersby (ID 660)
    660: { regular: ["Huge Power", null], hidden: "Cheek Pouch" },
    // Fletchling (ID 661)
    661: { regular: ["Gale Wings", null], hidden: "Big Pecks" },
    // Fletchinder (ID 662)
    662: { regular: ["Gale Wings", null], hidden: "Flame Body" },
    // Talonflame (ID 663)
    663: { regular: ["Gale Wings", null], hidden: "Flame Body" },
    // Scatterbug (ID 664)
    664: { regular: ["Shield Dust", "Compound Eyes"], hidden: "Friend Guard" },
    // Spewpa (ID 665)
    665: { regular: ["Shed Skin", null], hidden: "Friend Guard" },
    // Vivillon (ID 666)
    666: { regular: ["Shield Dust", "Compound Eyes"], hidden: "Friend Guard" },
    // Litleo (ID 667)
    667: { regular: ["Unnerve", null], hidden: "Moxie" },
    // Pyroar (ID 668)
    668: { regular: ["Unnerve", null], hidden: "Moxie" },
    // Flabebe-Red-Flower (ID 669)
    669: { regular: ["Flower Veil", null], hidden: "Symbiosis" },
    // Floette-Red-Flower (ID 670)
    670: { regular: ["Flower Veil", null], hidden: "Symbiosis" },
    // Florges-Red-Flower (ID 671)
    671: { regular: ["Flower Veil", null], hidden: "Symbiosis" },
    // Skiddo (ID 672)
    672: { regular: ["Grass Pelt", null], hidden: "Sap Sipper" },
    // Gogoat (ID 673)
    673: { regular: ["Grass Pelt", null], hidden: "Sap Sipper" },
    // Pancham (ID 674)
    674: { regular: ["Iron Fist", null], hidden: "Mold Breaker" },
    // Pangoro (ID 675)
    675: { regular: ["Iron Fist", null], hidden: "Mold Breaker" },
    // Furfrou-Natural (ID 676)
    676: { regular: ["Fur Coat", null], hidden: null },
    // Espurr (ID 677)
    677: { regular: ["Mystic Charm", null], hidden: "Own Tempo" },
    // Meowstic (ID 678)
    678: { regular: ["Mystic Charm", null], hidden: "Prankster" },
    // Honedge (ID 679)
    679: { regular: ["No Guard", null], hidden: null },
    // Doublade (ID 680)
    680: { regular: ["No Guard", null], hidden: null },
    // Aegislash-Shield (ID 681)
    681: { regular: ["Stance Change", null], hidden: null },
    // Spritzee (ID 682)
    682: { regular: ["Healer", null], hidden: "Aroma Veil" },
    // Aromatisse (ID 683)
    683: { regular: ["Healer", null], hidden: "Aroma Veil" },
    // Swirlix (ID 684)
    684: { regular: ["Sweet Veil", null], hidden: "Unburden" },
    // Slurpuff (ID 685)
    685: { regular: ["Sweet Veil", null], hidden: "Unburden" },
    // Inkay (ID 686)
    686: { regular: ["Contrary", "Suction Cups"], hidden: "Infiltrator" },
    // Malamar (ID 687)
    687: { regular: ["Contrary", "Suction Cups"], hidden: "Infiltrator" },
    // Binacle (ID 688)
    688: { regular: ["Tough Claws", "Sharpness"], hidden: "Pickpocket" },
    // Barbaracle (ID 689)
    689: { regular: ["Tough Claws", "Sharpness"], hidden: "Pickpocket" },
    // Skrelp (ID 690)
    690: { regular: ["Poison Point", "Poison Touch"], hidden: "Adaptability" },
    // Dragalge (ID 691)
    691: { regular: ["Poison Point", "Poison Touch"], hidden: "Adaptability" },
    // Clauncher (ID 692)
    692: { regular: ["Mega Launcher", null], hidden: null },
    // Clawitzer (ID 693)
    693: { regular: ["Mega Launcher", null], hidden: null },
    // Helioptile (ID 694)
    694: { regular: ["Solar Power", "Sand Veil"], hidden: "Dry Skin" },
    // Heliolisk (ID 695)
    695: { regular: ["Solar Power", "Sand Veil"], hidden: "Dry Skin" },
    // Tyrunt (ID 696)
    696: { regular: ["Strong Jaw", null], hidden: "Sturdy" },
    // Tyrantrum (ID 697)
    697: { regular: ["Strong Jaw", null], hidden: "Rock Head" },
    // Amaura (ID 698)
    698: { regular: ["Refrigerate", null], hidden: "Snow Warning" },
    // Aurorus (ID 699)
    699: { regular: ["Refrigerate", null], hidden: "Snow Warning" },
    // Sylveon (ID 700)
    700: { regular: ["Pixilate", null], hidden: "Cute Charm" },
    // Hawlucha (ID 701)
    701: { regular: ["Limber", "Unburden"], hidden: "Mold Breaker" },
    // Dedenne (ID 702)
    702: { regular: ["Cheek Pouch", null], hidden: "Plus" },
    // Carbink (ID 703)
    703: { regular: ["Clear Body", null], hidden: "Sturdy" },
    // Goomy (ID 704)
    704: { regular: ["Gooey", "Hydration"], hidden: "Sap Sipper" },
    // Sliggoo (ID 705)
    705: { regular: ["Gooey", "Hydration"], hidden: "Sap Sipper" },
    // Goodra (ID 706)
    706: { regular: ["Gooey", "Hydration"], hidden: "Sap Sipper" },
    // Klefki (ID 707)
    707: { regular: ["Prankster", null], hidden: "Magician" },
    // Phantump (ID 708)
    708: { regular: ["Harvest", null], hidden: "Natural Cure" },
    // Trevenant (ID 709)
    709: { regular: ["Harvest", null], hidden: "Natural Cure" },
    // Pumpkaboo-Average (ID 710)
    710: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Gourgeist-Average (ID 711)
    711: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Bergmite (ID 712)
    712: { regular: ["Own Tempo", "Ice Body"], hidden: "Sturdy" },
    // Avalugg (ID 713)
    713: { regular: ["Own Tempo", "Ice Body"], hidden: "Sturdy" },
    // Noibat (ID 714)
    714: { regular: ["Aerilate", "Infiltrator"], hidden: "Telepathy" },
    // Noivern (ID 715)
    715: { regular: ["Aerilate", "Infiltrator"], hidden: "Telepathy" },
    // Xerneas-Neutral (ID 716)
    716: { regular: ["Fairy Aura", null], hidden: null },
    // Yveltal (ID 717)
    717: { regular: ["Dark Aura", null], hidden: null },
    // Zygarde-50-Aura-Break (ID 718)
    718: { regular: ["Aura Break", null], hidden: null },
    // Diancie (ID 719)
    719: { regular: ["Clear Body", null], hidden: null },
    // Hoopa-Confined (ID 720)
    720: { regular: ["Magician", null], hidden: null },
    // Volcanion (ID 721)
    721: { regular: ["Water Absorb", null], hidden: null },
    // Rowlet (ID 722)
    722: { regular: ["Long Reach", null], hidden: "Overgrow" },
    // Dartrix (ID 723)
    723: { regular: ["Long Reach", null], hidden: "Overgrow" },
    // Decidueye (ID 724)
    724: { regular: ["Long Reach", null], hidden: "Overgrow" },
    // Litten (ID 725)
    725: { regular: ["Blaze", null], hidden: "Intimidate" },
    // Torracat (ID 726)
    726: { regular: ["Blaze", null], hidden: "Intimidate" },
    // Incineroar (ID 727)
    727: { regular: ["Blaze", null], hidden: "Intimidate" },
    // Popplio (ID 728)
    728: { regular: ["Torrent", null], hidden: "Liquid Voice" },
    // Brionne (ID 729)
    729: { regular: ["Torrent", null], hidden: "Liquid Voice" },
    // Primarina (ID 730)
    730: { regular: ["Torrent", null], hidden: "Liquid Voice" },
    // Pikipek (ID 731)
    731: { regular: ["Keen Eye", "Skill Link"], hidden: "Pickup" },
    // Trumbeak (ID 732)
    732: { regular: ["Keen Eye", "Skill Link"], hidden: "Pickup" },
    // Toucannon (ID 733)
    733: { regular: ["Keen Eye", "Skill Link"], hidden: "Sheer Force" },
    // Yungoos (ID 734)
    734: { regular: ["Stakeout", "Strong Jaw"], hidden: "Adaptability" },
    // Gumshoos (ID 735)
    735: { regular: ["Stakeout", "Strong Jaw"], hidden: "Adaptability" },
    // Grubbin (ID 736)
    736: { regular: ["Swarm", null], hidden: null },
    // Charjabug (ID 737)
    737: { regular: ["Battery", null], hidden: null },
    // Vikavolt (ID 738)
    738: { regular: ["Levitate", null], hidden: null },
    // Crabrawler (ID 739)
    739: { regular: ["Hyper Cutter", "Iron Fist"], hidden: "Anger Point" },
    // Crabominable (ID 740)
    740: { regular: ["Hyper Cutter", "Iron Fist"], hidden: "Anger Point" },
    // Oricorio-Baile (ID 741)
    741: { regular: ["Dancer", null], hidden: null },
    // Cutiefly (ID 742)
    742: { regular: ["Shield Dust", null], hidden: "Sweet Veil" },
    // Ribombee (ID 743)
    743: { regular: ["Shield Dust", null], hidden: "Sweet Veil" },
    // Rockruff (ID 744)
    744: { regular: ["Keen Eye", "Vital Spirit"], hidden: "Steadfast" },
    // Lycanroc (ID 745)
    745: { regular: ["Keen Eye", "Sand Rush"], hidden: "Steadfast" },
    // Wishiwashi (ID 746)
    746: { regular: ["Schooling", null], hidden: null },
    // Mareanie (ID 747)
    747: { regular: ["Merciless", "Limber"], hidden: "Regenerator" },
    // Toxapex (ID 748)
    748: { regular: ["Merciless", "Limber"], hidden: "Regenerator" },
    // Mudbray (ID 749)
    749: { regular: ["Own Tempo", "Inner Focus"], hidden: "Stamina" },
    // Mudsdale (ID 750)
    750: { regular: ["Own Tempo", "Inner Focus"], hidden: "Stamina" },
    // Dewpider (ID 751)
    751: { regular: ["Water Bubble", null], hidden: "Water Absorb" },
    // Araquanid (ID 752)
    752: { regular: ["Water Bubble", null], hidden: "Water Absorb" },
    // Fomantis (ID 753)
    753: { regular: ["Leaf Guard", null], hidden: "Contrary" },
    // Lurantis (ID 754)
    754: { regular: ["Sharpness", null], hidden: "Contrary" },
    // Morelull (ID 755)
    755: { regular: ["Illuminate", "Effect Spore"], hidden: "Rain Dish" },
    // Shiinotic (ID 756)
    756: { regular: ["Illuminate", "Effect Spore"], hidden: "Rain Dish" },
    // Salandit (ID 757)
    757: { regular: ["Corrosion", null], hidden: "Oblivious" },
    // Salazzle (ID 758)
    758: { regular: ["Corrosion", null], hidden: "Oblivious" },
    // Stufful (ID 759)
    759: { regular: ["Fluffy", null], hidden: "Cute Charm" },
    // Bewear (ID 760)
    760: { regular: ["Fluffy", null], hidden: "Unnerve" },
    // Bounsweet (ID 761)
    761: { regular: ["Sweet Veil", "Oblivious"], hidden: "Leaf Guard" },
    // Steenee (ID 762)
    762: { regular: ["Sweet Veil", "Oblivious"], hidden: "Leaf Guard" },
    // Tsareena (ID 763)
    763: { regular: ["Striker", "Queenly Majesty"], hidden: "Leaf Guard" },
    // Comfey (ID 764)
    764: { regular: ["Flower Veil", "Triage"], hidden: "Natural Cure" },
    // Oranguru (ID 765)
    765: { regular: ["Inner Focus", "Telepathy"], hidden: "Symbiosis" },
    // Passimian (ID 766)
    766: { regular: ["Receiver", null], hidden: "Defiant" },
    // Wimpod (ID 767)
    767: { regular: ["Wimp Out", null], hidden: null },
    // Golisopod (ID 768)
    768: { regular: ["Emergency Exit", null], hidden: null },
    // Sandygast (ID 769)
    769: { regular: ["Water Compaction", null], hidden: "Sand Veil" },
    // Palossand (ID 770)
    770: { regular: ["Water Compaction", null], hidden: "Sand Veil" },
    // Pyukumuku (ID 771)
    771: { regular: ["Innards Out", null], hidden: "Unaware" },
    // Type-Null (ID 772)
    772: { regular: ["Battle Armor", null], hidden: null },
    // Silvally-Normal (ID 773)
    773: { regular: ["RKS System", null], hidden: null },
    // Minior-Meteor-Red (ID 774)
    774: { regular: ["Shields Down", null], hidden: null },
    // Komala (ID 775)
    775: { regular: ["Comatose", null], hidden: null },
    // Turtonator (ID 776)
    776: { regular: ["Shell Armor", null], hidden: null },
    // Togedemaru (ID 777)
    777: { regular: ["Iron Barbs", null], hidden: "Sturdy" },
    // Mimikyu-Disguised (ID 778)
    778: { regular: ["Disguise", null], hidden: null },
    // Bruxish (ID 779)
    779: { regular: ["Dazzling", null], hidden: "Strong Jaw" },
    // Drampa (ID 780)
    780: { regular: ["Berserk", "Sap Sipper"], hidden: "Cloud Nine" },
    // Dhelmise (ID 781)
    781: { regular: ["Steelworker", null], hidden: null },
    // Jangmo-o (ID 782)
    782: { regular: ["Bulletproof", "Soundproof"], hidden: "Overcoat" },
    // Hakamo-o (ID 783)
    783: { regular: ["Bulletproof", "Soundproof"], hidden: "Overcoat" },
    // Kommo-o (ID 784)
    784: { regular: ["Bulletproof", "Soundproof"], hidden: "Overcoat" },
    // Tapu Koko (ID 785)
    785: { regular: ["Telepathy", null], hidden: "Electric Surge" },
    // Tapu Lele (ID 786)
    786: { regular: ["Telepathy", null], hidden: "Psychic Surge" },
    // Tapu Bulu (ID 787)
    787: { regular: ["Telepathy", null], hidden: "Grassy Surge" },
    // Tapu Fini (ID 788)
    788: { regular: ["Telepathy", null], hidden: "Misty Surge" },
    // Cosmog (ID 789)
    789: { regular: ["Unaware", null], hidden: null },
    // Cosmoem (ID 790)
    790: { regular: ["Sturdy", null], hidden: null },
    // Solgaleo (ID 791)
    791: { regular: ["Full Metal Body", null], hidden: null },
    // Lunala (ID 792)
    792: { regular: ["Shadow Shield", null], hidden: null },
    // Nihilego (ID 793)
    793: { regular: ["Beast Boost", null], hidden: null },
    // Buzzwole (ID 794)
    794: { regular: ["Beast Boost", null], hidden: null },
    // Pheromosa (ID 795)
    795: { regular: ["Beast Boost", null], hidden: null },
    // Xurkitree (ID 796)
    796: { regular: ["Beast Boost", null], hidden: null },
    // Celesteela (ID 797)
    797: { regular: ["Beast Boost", null], hidden: null },
    // Kartana (ID 798)
    798: { regular: ["Beast Boost", null], hidden: null },
    // Guzzlord (ID 799)
    799: { regular: ["Beast Boost", null], hidden: null },
    // Necrozma (ID 800)
    800: { regular: ["Prism Armor", null], hidden: null },
    // Magearna (ID 801)
    801: { regular: ["Soul-Heart", null], hidden: null },
    // Marshadow (ID 802)
    802: { regular: ["Technician", null], hidden: null },
    // Poipole (ID 803)
    803: { regular: ["Pressure", null], hidden: "Beast Boost" },
    // Naganadel (ID 804)
    804: { regular: ["Pressure", null], hidden: "Beast Boost" },
    // Stakataka (ID 805)
    805: { regular: ["Beast Boost", null], hidden: null },
    // Blacephalon (ID 806)
    806: { regular: ["Beast Boost", null], hidden: null },
    // Zeraora (ID 807)
    807: { regular: ["Volt Absorb", null], hidden: null },
    // Meltan (ID 808)
    808: { regular: ["Magnet Pull", null], hidden: null },
    // Melmetal (ID 809)
    809: { regular: ["Iron Fist", null], hidden: null },
    // Grookey (ID 810)
    810: { regular: ["Overgrow", null], hidden: "Grassy Surge" },
    // Thwackey (ID 811)
    811: { regular: ["Overgrow", null], hidden: "Grassy Surge" },
    // Rillaboom (ID 812)
    812: { regular: ["Overgrow", null], hidden: "Grassy Surge" },
    // Scorbunny (ID 813)
    813: { regular: ["Blaze", null], hidden: "Libero" },
    // Raboot (ID 814)
    814: { regular: ["Blaze", null], hidden: "Libero" },
    // Cinderace (ID 815)
    815: { regular: ["Blaze", null], hidden: "Libero" },
    // Sobble (ID 816)
    816: { regular: ["Torrent", null], hidden: "Sniper" },
    // Drizzile (ID 817)
    817: { regular: ["Torrent", null], hidden: "Sniper" },
    // Inteleon (ID 818)
    818: { regular: ["Torrent", null], hidden: "Sniper" },
    // Skwovet (ID 819)
    819: { regular: ["Cheek Pouch", null], hidden: "Gluttony" },
    // Greedent (ID 820)
    820: { regular: ["Cheek Pouch", null], hidden: "Gluttony" },
    // Rookidee (ID 821)
    821: { regular: ["Keen Eye", "Unnerve"], hidden: "Big Pecks" },
    // Corvisquire (ID 822)
    822: { regular: ["Keen Eye", "Unnerve"], hidden: "Big Pecks" },
    // Corviknight (ID 823)
    823: { regular: ["Pressure", "Unnerve"], hidden: "Mirror Armor" },
    // Blipbug (ID 824)
    824: { regular: ["Swarm", "Compound Eyes"], hidden: "Telepathy" },
    // Dottler (ID 825)
    825: { regular: ["Swarm", "Compound Eyes"], hidden: "Telepathy" },
    // Orbeetle (ID 826)
    826: { regular: ["Swarm", "Frisk"], hidden: "Telepathy" },
    // Nickit (ID 827)
    827: { regular: ["Run Away", "Unburden"], hidden: "Stakeout" },
    // Thievul (ID 828)
    828: { regular: ["Run Away", "Unburden"], hidden: "Stakeout" },
    // Gossifleur (ID 829)
    829: { regular: ["Cotton Down", "Regenerator"], hidden: "Effect Spore" },
    // Eldegoss (ID 830)
    830: { regular: ["Cotton Down", "Regenerator"], hidden: "Effect Spore" },
    // Wooloo (ID 831)
    831: { regular: ["Fluffy", "Run Away"], hidden: "Bulletproof" },
    // Dubwool (ID 832)
    832: { regular: ["Fluffy", "Steadfast"], hidden: "Bulletproof" },
    // Chewtle (ID 833)
    833: { regular: ["Swift Swim", "Shell Armor"], hidden: "Strong Jaw" },
    // Drednaw (ID 834)
    834: { regular: ["Swift Swim", "Shell Armor"], hidden: "Strong Jaw" },
    // Yamper (ID 835)
    835: { regular: ["Ball Fetch", null], hidden: "Rattled" },
    // Boltund (ID 836)
    836: { regular: ["Strong Jaw", null], hidden: "Competitive" },
    // Rolycoly (ID 837)
    837: { regular: ["Steam Engine", "Heatproof"], hidden: "Flash Fire" },
    // Carkol (ID 838)
    838: { regular: ["Steam Engine", "Flame Body"], hidden: "Flash Fire" },
    // Coalossal (ID 839)
    839: { regular: ["Steam Engine", "Flame Body"], hidden: "Flash Fire" },
    // Applin (ID 840)
    840: { regular: ["Ripen", null], hidden: "Bulletproof" },
    // Flapple (ID 841)
    841: { regular: ["Ripen", null], hidden: "Hustle" },
    // Appletun (ID 842)
    842: { regular: ["Ripen", null], hidden: "Thick Fat" },
    // Silicobra (ID 843)
    843: { regular: ["Sand Spit", "Shed Skin"], hidden: "Sand Veil" },
    // Sandaconda (ID 844)
    844: { regular: ["Sand Spit", "Shed Skin"], hidden: "Sand Veil" },
    // Cramorant (ID 845)
    845: { regular: ["Gulp Missile", null], hidden: null },
    // Arrokuda (ID 846)
    846: { regular: ["Swift Swim", null], hidden: "Propeller Tail" },
    // Barraskewda (ID 847)
    847: { regular: ["Swift Swim", null], hidden: "Propeller Tail" },
    // Toxel (ID 848)
    848: { regular: ["Rattled", null], hidden: "Klutz" },
    // Toxtricity (ID 849)
    849: { regular: ["Punk Rock", null], hidden: "Technician" },
    // Sizzlipede (ID 850)
    850: { regular: ["Flame Body", "White Smoke"], hidden: "Flash Fire" },
    // Centiskorch (ID 851)
    851: { regular: ["Flame Body", "White Smoke"], hidden: "Flash Fire" },
    // Clobbopus (ID 852)
    852: { regular: ["Limber", null], hidden: "Technician" },
    // Grapploct (ID 853)
    853: { regular: ["Limber", null], hidden: "Technician" },
    // Sinistea-Phony (ID 854)
    854: { regular: ["Weak Armor", null], hidden: "Cursed Body" },
    // Polteageist-Phony (ID 855)
    855: { regular: ["Weak Armor", null], hidden: "Cursed Body" },
    // Hatenna (ID 856)
    856: { regular: ["Mystic Charm", null], hidden: "Magic Bounce" },
    // Hattrem (ID 857)
    857: { regular: ["Mystic Charm", null], hidden: "Magic Bounce" },
    // Hatterene (ID 858)
    858: { regular: ["Mystic Charm", null], hidden: "Magic Bounce" },
    // Impidimp (ID 859)
    859: { regular: ["Prankster", null], hidden: "Pickpocket" },
    // Morgrem (ID 860)
    860: { regular: ["Prankster", null], hidden: "Pickpocket" },
    // Grimmsnarl (ID 861)
    861: { regular: ["Prankster", null], hidden: "Pickpocket" },
    // Obstagoon (ID 862)
    862: { regular: ["Reckless", "Guts"], hidden: "Defiant" },
    // Perrserker (ID 863)
    863: { regular: ["Battle Armor", "Steely Spirit"], hidden: "Tough Claws" },
    // Cursola (ID 864)
    864: { regular: ["Weak Armor", null], hidden: "Perish Body" },
    // Sirfetch’d (ID 865)
    865: { regular: ["Steadfast", null], hidden: "Scrappy" },
    // Mr. Rime (ID 866)
    866: { regular: ["Tangled Feet", "Screen Cleaner"], hidden: "Ice Body" },
    // Runerigus (ID 867)
    867: { regular: ["Wandering Spirit", null], hidden: null },
    // Milcery (ID 868)
    868: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Vanilla-Cream (ID 869)
    869: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Falinks (ID 870)
    870: { regular: ["Battle Armor", null], hidden: "Defiant" },
    // Pincurchin (ID 871)
    871: { regular: ["Lightning Rod", null], hidden: "Electric Surge" },
    // Snom (ID 872)
    872: { regular: ["Ice Scales", null], hidden: "Shield Dust" },
    // Frosmoth (ID 873)
    873: { regular: ["Ice Scales", null], hidden: "Shield Dust" },
    // Stonjourner (ID 874)
    874: { regular: ["Power Spot", null], hidden: null },
    // Eiscue-Ice-Face (ID 875)
    875: { regular: ["Ice Face", null], hidden: null },
    // Indeedee-Male (ID 876)
    876: { regular: ["Inner Focus", "Synchronize"], hidden: "Psychic Surge" },
    // Morpeko-Full-Belly (ID 877)
    877: { regular: ["Hunger Switch", null], hidden: null },
    // Cufant (ID 878)
    878: { regular: ["Sheer Force", null], hidden: "Heavy Metal" },
    // Copperajah (ID 879)
    879: { regular: ["Sheer Force", null], hidden: "Heavy Metal" },
    // Dracozolt (ID 880)
    880: { regular: ["Volt Absorb", "Hustle"], hidden: "Sand Rush" },
    // Arctozolt (ID 881)
    881: { regular: ["Volt Absorb", "Static"], hidden: "Slush Rush" },
    // Dracovish (ID 882)
    882: { regular: ["Water Absorb", "Strong Jaw"], hidden: "Sand Rush" },
    // Arctovish (ID 883)
    883: { regular: ["Water Absorb", "Ice Body"], hidden: "Slush Rush" },
    // Duraludon (ID 884)
    884: { regular: ["Stalwart", "Heavy Metal"], hidden: "Light Metal" },
    // Dreepy (ID 885)
    885: { regular: ["Clear Body", "Infiltrator"], hidden: "Cursed Body" },
    // Drakloak (ID 886)
    886: { regular: ["Clear Body", "Infiltrator"], hidden: "Cursed Body" },
    // Dragapult (ID 887)
    887: { regular: ["Clear Body", "Infiltrator"], hidden: "Cursed Body" },
    // Zacian-Hero-Of-Many-Battles (ID 888)
    888: { regular: ["Intrepid Sword", null], hidden: null },
    // Zamazenta-Hero-Of-Many-Battles (ID 889)
    889: { regular: ["Dauntless Shield", null], hidden: null },
    // Eternatus (ID 890)
    890: { regular: ["Pressure", null], hidden: null },
    // Kubfu (ID 891)
    891: { regular: ["Inner Focus", null], hidden: null },
    // Urshifu-Single-Strike-Style (ID 892)
    892: { regular: ["Unseen Fist", null], hidden: null },
    // Zarude (ID 893)
    893: { regular: ["Leaf Guard", null], hidden: null },
    // Regieleki (ID 894)
    894: { regular: ["Transistor", null], hidden: null },
    // Regidrago (ID 895)
    895: { regular: ["Dragon's Maw", null], hidden: null },
    // Glastrier (ID 896)
    896: { regular: ["Chilling Neigh", null], hidden: null },
    // Spectrier (ID 897)
    897: { regular: ["Grim Neigh", null], hidden: null },
    // Calyrex (ID 898)
    898: { regular: ["Unnerve", null], hidden: null },
    // Wyrdeer (ID 899)
    899: { regular: ["Intimidate", "Frisk"], hidden: "Sap Sipper" },
    // Kleavor (ID 900)
    900: { regular: ["Swarm", "Sheer Force"], hidden: "Sharpness" },
    // Ursaluna (ID 901)
    901: { regular: ["Bulletproof", null], hidden: "Unnerve" },
    // Basculegion (ID 902)
    902: { regular: ["Swift Swim", null], hidden: "Adaptability" },
    // Sneasler (ID 903)
    903: { regular: ["Poison Touch", null], hidden: "Unburden" },
    // Overqwil (ID 904)
    904: { regular: ["Intimidate", "Swift Swim"], hidden: "Poison Point" },
    // Enamorus (ID 905)
    905: { regular: ["Cute Charm", null], hidden: "Contrary" },
    // Venusaur-Mega (ID 906)
    906: { regular: ["Thick Fat", null], hidden: null },
    // Charizard-Mega-X (ID 907)
    907: { regular: ["Tough Claws", null], hidden: null },
    // Charizard-Mega-Y (ID 908)
    908: { regular: ["Drought", null], hidden: null },
    // Blastoise-Mega (ID 909)
    909: { regular: ["Mega Launcher", null], hidden: null },
    // Beedrill-Mega (ID 910)
    910: { regular: ["Adaptability", null], hidden: null },
    // Pidgeot-Mega (ID 911)
    911: { regular: ["No Guard", null], hidden: null },
    // Alakazam-Mega (ID 912)
    912: { regular: ["Trace", null], hidden: null },
    // Slowbro-Mega (ID 913)
    913: { regular: ["Shell Armor", null], hidden: null },
    // Gengar-Mega (ID 914)
    914: { regular: ["Shadow Tag", null], hidden: null },
    // Kangaskhan-Mega (ID 915)
    915: { regular: ["Parental Bond", null], hidden: null },
    // Pinsir-Mega (ID 916)
    916: { regular: ["Aerilate", null], hidden: null },
    // Gyarados-Mega (ID 917)
    917: { regular: ["Mold Breaker", null], hidden: null },
    // Aerodactyl-Mega (ID 918)
    918: { regular: ["Tough Claws", null], hidden: null },
    // Mewtwo-Mega-X (ID 919)
    919: { regular: ["Steadfast", null], hidden: null },
    // Mewtwo-Mega-Y (ID 920)
    920: { regular: ["Insomnia", null], hidden: null },
    // Ampharos-Mega (ID 921)
    921: { regular: ["Mold Breaker", null], hidden: null },
    // Steelix-Mega (ID 922)
    922: { regular: ["Sand Force", null], hidden: null },
    // Scizor-Mega (ID 923)
    923: { regular: ["Technician", null], hidden: null },
    // Heracross-Mega (ID 924)
    924: { regular: ["Skill Link", null], hidden: null },
    // Houndoom-Mega (ID 925)
    925: { regular: ["Solar Power", null], hidden: null },
    // Tyranitar-Mega (ID 926)
    926: { regular: ["Sand Stream", null], hidden: null },
    // Sceptile-Mega (ID 927)
    927: { regular: ["Lightning Rod", null], hidden: null },
    // Blaziken-Mega (ID 928)
    928: { regular: ["Speed Boost", null], hidden: null },
    // Swampert-Mega (ID 929)
    929: { regular: ["Swift Swim", null], hidden: null },
    // Gardevoir-Mega (ID 930)
    930: { regular: ["Pixilate", null], hidden: null },
    // Sableye-Mega (ID 931)
    931: { regular: ["Magic Bounce", null], hidden: null },
    // Mawile-Mega (ID 932)
    932: { regular: ["Huge Power", null], hidden: null },
    // Aggron-Mega (ID 933)
    933: { regular: ["Filter", null], hidden: null },
    // Medicham-Mega (ID 934)
    934: { regular: ["Pure Power", null], hidden: null },
    // Manectric-Mega (ID 935)
    935: { regular: ["Intimidate", null], hidden: null },
    // Sharpedo-Mega (ID 936)
    936: { regular: ["Strong Jaw", null], hidden: null },
    // Camerupt-Mega (ID 937)
    937: { regular: ["Sheer Force", null], hidden: null },
    // Altaria-Mega (ID 938)
    938: { regular: ["Pixilate", null], hidden: null },
    // Banette-Mega (ID 939)
    939: { regular: ["Prankster", null], hidden: null },
    // Absol-Mega (ID 940)
    940: { regular: ["Magic Bounce", null], hidden: null },
    // Glalie-Mega (ID 941)
    941: { regular: ["Refrigerate", null], hidden: null },
    // Salamence-Mega (ID 942)
    942: { regular: ["Aerilate", null], hidden: null },
    // Metagross-Mega (ID 943)
    943: { regular: ["Tough Claws", null], hidden: null },
    // Latias-Mega (ID 944)
    944: { regular: ["Levitate", null], hidden: null },
    // Latios-Mega (ID 945)
    945: { regular: ["Levitate", null], hidden: null },
    // Lopunny-Mega (ID 946)
    946: { regular: ["Scrappy", null], hidden: null },
    // Garchomp-Mega (ID 947)
    947: { regular: ["Sand Force", null], hidden: null },
    // Lucario-Mega (ID 948)
    948: { regular: ["Adaptability", null], hidden: null },
    // Abomasnow-Mega (ID 949)
    949: { regular: ["Snow Warning", null], hidden: null },
    // Gallade-Mega (ID 950)
    950: { regular: ["Inner Focus", null], hidden: null },
    // Audino-Mega (ID 951)
    951: { regular: ["Healer", null], hidden: null },
    // Diancie-Mega (ID 952)
    952: { regular: ["Magic Bounce", null], hidden: null },
    // Rayquaza-Mega (ID 953)
    953: { regular: ["Delta Stream", null], hidden: null },
    // Kyogre-Primal (ID 954)
    954: { regular: ["Primordial Sea", null], hidden: null },
    // Groudon-Primal (ID 955)
    955: { regular: ["Desolate Land", null], hidden: null },
    // Rattata-Alola (ID 956)
    956: { regular: ["Gluttony", "Hustle"], hidden: "Thick Fat" },
    // Raticate-Alola (ID 957)
    957: { regular: ["Gluttony", "Hustle"], hidden: "Thick Fat" },
    // Raichu-Alola (ID 958)
    958: { regular: ["Surge Surfer", null], hidden: null },
    // Sandshrew-Alola (ID 959)
    959: { regular: ["Slush Rush", null], hidden: "Snow Cloak" },
    // Sandslash-Alola (ID 960)
    960: { regular: ["Slush Rush", null], hidden: "Snow Cloak" },
    // Vulpix-Alola (ID 961)
    961: { regular: ["Snow Cloak", null], hidden: "Snow Warning" },
    // Ninetales-Alola (ID 962)
    962: { regular: ["Snow Cloak", null], hidden: "Snow Warning" },
    // Diglett-Alola (ID 963)
    963: { regular: ["Sand Veil", "Tangling Hair"], hidden: "Sand Force" },
    // Dugtrio-Alola (ID 964)
    964: { regular: ["Sand Veil", "Tangling Hair"], hidden: "Sand Force" },
    // Meowth-Alola (ID 965)
    965: { regular: ["Pickup", "Technician"], hidden: "Rattled" },
    // Persian-Alola (ID 966)
    966: { regular: ["Fur Coat", "Technician"], hidden: "Rattled" },
    // Geodude-Alola (ID 967)
    967: { regular: ["Galvanize", "Sturdy"], hidden: "Magnet Pull" },
    // Graveler-Alola (ID 968)
    968: { regular: ["Galvanize", "Sturdy"], hidden: "Magnet Pull" },
    // Golem-Alola (ID 969)
    969: { regular: ["Galvanize", "Sturdy"], hidden: "Magnet Pull" },
    // Grimer-Alola (ID 970)
    970: { regular: ["Poison Touch", "Gluttony"], hidden: "Power Of Alchemy" },
    // Muk-Alola (ID 971)
    971: { regular: ["Poison Touch", "Gluttony"], hidden: "Power Of Alchemy" },
    // Exeggutor-Alola (ID 972)
    972: { regular: ["Harvest", null], hidden: "Frisk" },
    // Marowak-Alola (ID 973)
    973: { regular: ["Rock Head", null], hidden: "Lightning Rod" },
    // Meowth-Galar (ID 974)
    974: { regular: ["Battle Armor", "Unnerve"], hidden: "Tough Claws" },
    // Ponyta-Galar (ID 975)
    975: { regular: ["Run Away", "Pastel Veil"], hidden: "Anticipation" },
    // Rapidash-Galar (ID 976)
    976: { regular: ["Run Away", "Pastel Veil"], hidden: "Anticipation" },
    // Slowpoke-Galar (ID 977)
    977: { regular: ["Gluttony", "Own Tempo"], hidden: "Regenerator" },
    // Slowbro-Galar (ID 978)
    978: { regular: ["Quick Draw", "Own Tempo"], hidden: "Regenerator" },
    // Farfetchd-Galar (ID 979)
    979: { regular: ["Steadfast", null], hidden: "Scrappy" },
    // Weezing-Galar (ID 980)
    980: { regular: ["Levitate", "Neutralizing Gas"], hidden: "Misty Surge" },
    // Mr. Mime-Galar (ID 981)
    981: { regular: ["Vital Spirit", "Screen Cleaner"], hidden: "Ice Body" },
    // Articuno-Galar (ID 982)
    982: { regular: ["Competitive", null], hidden: null },
    // Zapdos-Galar (ID 983)
    983: { regular: ["Defiant", null], hidden: null },
    // Moltres-Galar (ID 984)
    984: { regular: ["Berserk", null], hidden: null },
    // Slowking-Galar (ID 985)
    985: { regular: ["Curious Medicine", "Own Tempo"], hidden: "Regenerator" },
    // Corsola-Galar (ID 986)
    986: { regular: ["Weak Armor", null], hidden: "Cursed Body" },
    // Zigzagoon-Galar (ID 987)
    987: { regular: ["Gluttony", "Quick Feet"], hidden: "Pickup" },
    // Linoone-Galar (ID 988)
    988: { regular: ["Gluttony", "Quick Feet"], hidden: "Pickup" },
    // Darumaka-Galar (ID 989)
    989: { regular: ["Hustle", null], hidden: "Inner Focus" },
    // Darmanitan-Galar-Standard-Mode (ID 990)
    990: { regular: ["Gorilla Tactics", null], hidden: "Zen Mode" },
    // Yamask-Galar (ID 991)
    991: { regular: ["Wandering Spirit", null], hidden: null },
    // Stunfisk-Galar (ID 992)
    992: { regular: ["Mimicry", null], hidden: null },
    // Growlithe-Hisui (ID 993)
    993: { regular: ["Intimidate", null], hidden: "Rock Head" },
    // Arcanine-Hisui (ID 994)
    994: { regular: ["Intimidate", null], hidden: "Rock Head" },
    // Voltorb-Hisui (ID 995)
    995: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },
    // Electrode-Hisui (ID 996)
    996: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },
    // Typhlosion-Hisui (ID 997)
    997: { regular: ["Frisk", null], hidden: "Blaze" },
    // Qwilfish-Hisui (ID 998)
    998: { regular: ["Intimidate", "Swift Swim"], hidden: "Poison Point" },
    // Sneasel-Hisui (ID 999)
    999: { regular: ["Inner Focus", null], hidden: "Pickpocket" },
    // Samurott-Hisui (ID 1000)
    1000: { regular: ["Sharpness", null], hidden: "Torrent" },
    // Lilligant-Hisui (ID 1001)
    1001: { regular: ["Chlorophyll", "Striker"], hidden: "Leaf Guard" },
    // Zorua-Hisui (ID 1002)
    1002: { regular: ["Illusion", null], hidden: null },
    // Zoroark-Hisui (ID 1003)
    1003: { regular: ["Illusion", null], hidden: null },
    // Braviary-Hisui (ID 1004)
    1004: { regular: ["Keen Eye", "Sheer Force"], hidden: "Tinted Lens" },
    // Sliggoo-Hisui (ID 1005)
    1005: { regular: ["Gooey", "Shell Armor"], hidden: "Sap Sipper" },
    // Goodra-Hisui (ID 1006)
    1006: { regular: ["Gooey", "Shell Armor"], hidden: "Sap Sipper" },
    // Avalugg-Hisui (ID 1007)
    1007: { regular: ["Strong Jaw", "Ice Body"], hidden: "Sturdy" },
    // Decidueye-Hisui (ID 1008)
    1008: { regular: ["Scrappy", null], hidden: "Overgrow" },
    // Pichu-Spiky-Eared (ID 1023)
    1023: { regular: ["Static", null], hidden: "Lightning Rod" },
    // Castform-Sunny (ID 1051)
    1051: { regular: ["Forecast", null], hidden: null },
    // Castform-Rainy (ID 1052)
    1052: { regular: ["Forecast", null], hidden: null },
    // Castform-Snowy (ID 1053)
    1053: { regular: ["Forecast", null], hidden: null },
    // Deoxys-Attack (ID 1054)
    1054: { regular: ["Pressure", null], hidden: null },
    // Deoxys-Defense (ID 1055)
    1055: { regular: ["Pressure", null], hidden: null },
    // Deoxys-Speed (ID 1056)
    1056: { regular: ["Pressure", null], hidden: null },
    // Cherrim-Sunshine (ID 1061)
    1061: { regular: ["Flower Gift", null], hidden: null },
    // Rotom-Heat (ID 1064)
    1064: { regular: ["Levitate", null], hidden: null },
    // Rotom-Wash (ID 1065)
    1065: { regular: ["Levitate", null], hidden: null },
    // Rotom-Frost (ID 1066)
    1066: { regular: ["Levitate", null], hidden: null },
    // Rotom-Fan (ID 1067)
    1067: { regular: ["Levitate", null], hidden: null },
    // Rotom-Mow (ID 1068)
    1068: { regular: ["Levitate", null], hidden: null },
    // Dialga-Origin (ID 1069)
    1069: { regular: ["Pressure", null], hidden: "Telepathy" },
    // Palkia-Origin (ID 1070)
    1070: { regular: ["Pressure", null], hidden: "Telepathy" },
    // Giratina-Origin (ID 1071)
    1071: { regular: ["Levitate", null], hidden: null },
    // Shaymin-Sky (ID 1072)
    1072: { regular: ["Serene Grace", null], hidden: null },
    // Arceus-Fighting (ID 1073)
    1073: { regular: ["Multitype", null], hidden: null },
    // Arceus-Flying (ID 1074)
    1074: { regular: ["Multitype", null], hidden: null },
    // Arceus-Poison (ID 1075)
    1075: { regular: ["Multitype", null], hidden: null },
    // Arceus-Ground (ID 1076)
    1076: { regular: ["Multitype", null], hidden: null },
    // Arceus-Rock (ID 1077)
    1077: { regular: ["Multitype", null], hidden: null },
    // Arceus-Bug (ID 1078)
    1078: { regular: ["Multitype", null], hidden: null },
    // Arceus-Ghost (ID 1079)
    1079: { regular: ["Multitype", null], hidden: null },
    // Arceus-Steel (ID 1080)
    1080: { regular: ["Multitype", null], hidden: null },
    // Arceus-Fire (ID 1081)
    1081: { regular: ["Multitype", null], hidden: null },
    // Arceus-Water (ID 1082)
    1082: { regular: ["Multitype", null], hidden: null },
    // Arceus-Grass (ID 1083)
    1083: { regular: ["Multitype", null], hidden: null },
    // Arceus-Electric (ID 1084)
    1084: { regular: ["Multitype", null], hidden: null },
    // Arceus-Psychic (ID 1085)
    1085: { regular: ["Multitype", null], hidden: null },
    // Arceus-Ice (ID 1086)
    1086: { regular: ["Multitype", null], hidden: null },
    // Arceus-Dragon (ID 1087)
    1087: { regular: ["Multitype", null], hidden: null },
    // Arceus-Dark (ID 1088)
    1088: { regular: ["Multitype", null], hidden: null },
    // Arceus-Fairy (ID 1089)
    1089: { regular: ["Multitype", null], hidden: null },
    // Basculin-Blue-Striped (ID 1090)
    1090: { regular: ["Rock Head", "Adaptability"], hidden: "Mold Breaker" },
    // Basculin-White-Striped (ID 1091)
    1091: { regular: ["Rattled", null], hidden: "Adaptability" },
    // Deerling-Summer (ID 1095)
    1095: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Deerling-Autumn (ID 1096)
    1096: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Deerling-Winter (ID 1097)
    1097: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Sawsbuck-Summer (ID 1098)
    1098: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Sawsbuck-Autumn (ID 1099)
    1099: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Sawsbuck-Winter (ID 1100)
    1100: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },
    // Tornadus-Therian (ID 1101)
    1101: { regular: ["Regenerator", null], hidden: null },
    // Thundurus-Therian (ID 1102)
    1102: { regular: ["Volt Absorb", null], hidden: null },
    // Landorus-Therian (ID 1103)
    1103: { regular: ["Intimidate", null], hidden: null },
    // Enamorus-Therian (ID 1104)
    1104: { regular: ["Overcoat", null], hidden: null },
    // Kyurem-White (ID 1105)
    1105: { regular: ["Turboblaze", null], hidden: null },
    // Kyurem-Black (ID 1106)
    1106: { regular: ["Teravolt", null], hidden: null },
    // Keldeo-Resolute (ID 1107)
    1107: { regular: ["Justified", null], hidden: null },
    // Meloetta-Pirouette (ID 1108)
    1108: { regular: ["Serene Grace", null], hidden: null },
    // Genesect-Douse-Drive (ID 1109)
    1109: { regular: ["Download", null], hidden: null },
    // Genesect-Shock-Drive (ID 1110)
    1110: { regular: ["Download", null], hidden: null },
    // Genesect-Burn-Drive (ID 1111)
    1111: { regular: ["Download", null], hidden: null },
    // Genesect-Chill-Drive (ID 1112)
    1112: { regular: ["Download", null], hidden: null },
    // Greninja-Ash (ID 1113)
    1113: { regular: ["Battle Bond", null], hidden: null },
    // Meowstic-F (ID 1155)
    1155: { regular: ["Mystic Charm", null], hidden: "Competitive" },
    // Aegislash-Blade (ID 1156)
    1156: { regular: ["Stance Change", null], hidden: null },
    // Pumpkaboo-Small (ID 1157)
    1157: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Pumpkaboo-Large (ID 1158)
    1158: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Pumpkaboo-Super (ID 1159)
    1159: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Gourgeist-Small (ID 1160)
    1160: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Gourgeist-Large (ID 1161)
    1161: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Gourgeist-Super (ID 1162)
    1162: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },
    // Xerneas-Active (ID 1163)
    1163: { regular: ["Fairy Aura", null], hidden: null },
    // Zygarde-10-Aura-Break (ID 1164)
    1164: { regular: ["Aura Break", null], hidden: null },
    // Zygarde-10-Power-Construct (ID 1165)
    1165: { regular: ["Power Construct", null], hidden: null },
    // Zygarde-50-Power-Construct (ID 1166)
    1166: { regular: ["Aura Break", null], hidden: null },
    // Zygarde-Complete (ID 1167)
    1167: { regular: ["Power Construct", null], hidden: null },
    // Hoopa-Unbound (ID 1168)
    1168: { regular: ["Magician", null], hidden: null },
    // Oricorio-Pom-Pom (ID 1169)
    1169: { regular: ["Dancer", null], hidden: null },
    // Oricorio-Pau (ID 1170)
    1170: { regular: ["Dancer", null], hidden: null },
    // Oricorio-Sensu (ID 1171)
    1171: { regular: ["Dancer", null], hidden: null },
    // Rockruff-Own-Tempo (ID 1172)
    1172: { regular: ["Keen Eye", "Vital Spirit"], hidden: "Steadfast" },
    // Lycanroc-Midnight (ID 1173)
    1173: { regular: ["Keen Eye", "Vital Spirit"], hidden: "No Guard" },
    // Lycanroc-Dusk (ID 1174)
    1174: { regular: ["Tough Claws", null], hidden: null },
    // Wishiwashi-School (ID 1175)
    1175: { regular: ["Schooling", null], hidden: null },
    // Silvally-Fighting (ID 1176)
    1176: { regular: ["RKS System", null], hidden: null },
    // Silvally-Flying (ID 1177)
    1177: { regular: ["RKS System", null], hidden: null },
    // Silvally-Poison (ID 1178)
    1178: { regular: ["RKS System", null], hidden: null },
    // Silvally-Ground (ID 1179)
    1179: { regular: ["RKS System", null], hidden: null },
    // Silvally-Rock (ID 1180)
    1180: { regular: ["RKS System", null], hidden: null },
    // Silvally-Bug (ID 1181)
    1181: { regular: ["RKS System", null], hidden: null },
    // Silvally-Ghost (ID 1182)
    1182: { regular: ["RKS System", null], hidden: null },
    // Silvally-Steel (ID 1183)
    1183: { regular: ["RKS System", null], hidden: null },
    // Silvally-Fire (ID 1184)
    1184: { regular: ["RKS System", null], hidden: null },
    // Silvally-Water (ID 1185)
    1185: { regular: ["RKS System", null], hidden: null },
    // Silvally-Grass (ID 1186)
    1186: { regular: ["RKS System", null], hidden: null },
    // Silvally-Electric (ID 1187)
    1187: { regular: ["RKS System", null], hidden: null },
    // Silvally-Psychic (ID 1188)
    1188: { regular: ["RKS System", null], hidden: null },
    // Silvally-Ice (ID 1189)
    1189: { regular: ["RKS System", null], hidden: null },
    // Silvally-Dragon (ID 1190)
    1190: { regular: ["RKS System", null], hidden: null },
    // Silvally-Dark (ID 1191)
    1191: { regular: ["RKS System", null], hidden: null },
    // Silvally-Fairy (ID 1192)
    1192: { regular: ["RKS System", null], hidden: null },
    // Minior-Meteor-Orange (ID 1193)
    1193: { regular: ["Shields Down", null], hidden: null },
    // Minior-Meteor-Yellow (ID 1194)
    1194: { regular: ["Shields Down", null], hidden: null },
    // Minior-Meteor-Green (ID 1195)
    1195: { regular: ["Shields Down", null], hidden: null },
    // Minior-Meteor-Blue (ID 1196)
    1196: { regular: ["Shields Down", null], hidden: null },
    // Minior-Meteor-Indigo (ID 1197)
    1197: { regular: ["Shields Down", null], hidden: null },
    // Minior-Meteor-Violet (ID 1198)
    1198: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Red (ID 1199)
    1199: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Orange (ID 1200)
    1200: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Yellow (ID 1201)
    1201: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Green (ID 1202)
    1202: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Blue (ID 1203)
    1203: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Indigo (ID 1204)
    1204: { regular: ["Shields Down", null], hidden: null },
    // Minior-Core-Violet (ID 1205)
    1205: { regular: ["Shields Down", null], hidden: null },
    // Mimikyu-Busted (ID 1206)
    1206: { regular: ["Disguise", null], hidden: null },
    // Necrozma-Dusk-Mane (ID 1207)
    1207: { regular: ["Prism Armor", null], hidden: null },
    // Necrozma-Dawn-Wings (ID 1208)
    1208: { regular: ["Prism Armor", null], hidden: null },
    // Necrozma-Ultra (ID 1209)
    1209: { regular: ["Neuroforce", null], hidden: null },
    // Magearna-Original-Color (ID 1210)
    1210: { regular: ["Soul-Heart", null], hidden: null },
    // Cramorant-Gulping (ID 1211)
    1211: { regular: ["Gulp Missile", null], hidden: null },
    // Cramorant-Gorging (ID 1212)
    1212: { regular: ["Gulp Missile", null], hidden: null },
    // Toxtricity (ID 1213)
    1213: { regular: ["Punk Rock", null], hidden: "Technician" },
    // Sinistea-Antique (ID 1214)
    1214: { regular: ["Weak Armor", null], hidden: "Cursed Body" },
    // Polteageist-Antique (ID 1215)
    1215: { regular: ["Weak Armor", null], hidden: "Cursed Body" },
    // Alcremie-Strawberry-Ruby-Cream (ID 1216)
    1216: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Matcha-Cream (ID 1217)
    1217: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Mint-Cream (ID 1218)
    1218: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Lemon-Cream (ID 1219)
    1219: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Salted-Cream (ID 1220)
    1220: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Ruby-Swirl (ID 1221)
    1221: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Caramel-Swirl (ID 1222)
    1222: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Strawberry-Rainbow-Swirl (ID 1223)
    1223: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Eiscue-Noice-Face (ID 1224)
    1224: { regular: ["Ice Face", null], hidden: null },
    // Indeedee-Female (ID 1225)
    1225: { regular: ["Own Tempo", "Synchronize"], hidden: "Psychic Surge" },
    // Morpeko-Hangry (ID 1226)
    1226: { regular: ["Hunger Switch", null], hidden: null },
    // Zacian-Crowned-Sword (ID 1227)
    1227: { regular: ["Intrepid Sword", null], hidden: null },
    // Zamazenta-Crowned-Shield (ID 1228)
    1228: { regular: ["Dauntless Shield", null], hidden: null },
    // Eternatus-Eternamax (ID 1229)
    1229: { regular: ["Pressure", null], hidden: null },
    // Urshifu-Rapid-Strike-Style (ID 1230)
    1230: { regular: ["Unseen Fist", null], hidden: null },
    // Zarude-Dada (ID 1231)
    1231: { regular: ["Leaf Guard", null], hidden: null },
    // Calyrex-Ice-Rider (ID 1232)
    1232: { regular: ["Unnerve", null], hidden: null },
    // Calyrex-Shadow-Rider (ID 1233)
    1233: { regular: ["Unnerve", null], hidden: null },
    // Basculegion-F (ID 1234)
    1234: { regular: ["Swift Swim", null], hidden: "Adaptability" },
    // Alcremie-Berry-Vanilla-Cream (ID 1235)
    1235: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Ruby-Cream (ID 1236)
    1236: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Matcha-Cream (ID 1237)
    1237: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Mint-Cream (ID 1238)
    1238: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Lemon-Cream (ID 1239)
    1239: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Salted-Cream (ID 1240)
    1240: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Ruby-Swirl (ID 1241)
    1241: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Caramel-Swirl (ID 1242)
    1242: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Berry-Rainbow-Swirl (ID 1243)
    1243: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Vanilla-Cream (ID 1244)
    1244: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Ruby-Cream (ID 1245)
    1245: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Matcha-Cream (ID 1246)
    1246: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Mint-Cream (ID 1247)
    1247: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Lemon-Cream (ID 1248)
    1248: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Salted-Cream (ID 1249)
    1249: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Ruby-Swirl (ID 1250)
    1250: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Caramel-Swirl (ID 1251)
    1251: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Love-Rainbow-Swirl (ID 1252)
    1252: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Vanilla-Cream (ID 1253)
    1253: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Ruby-Cream (ID 1254)
    1254: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Matcha-Cream (ID 1255)
    1255: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Mint-Cream (ID 1256)
    1256: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Lemon-Cream (ID 1257)
    1257: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Salted-Cream (ID 1258)
    1258: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Ruby-Swirl (ID 1259)
    1259: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Caramel-Swirl (ID 1260)
    1260: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Star-Rainbow-Swirl (ID 1261)
    1261: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Vanilla-Cream (ID 1262)
    1262: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Ruby-Cream (ID 1263)
    1263: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Matcha-Cream (ID 1264)
    1264: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Mint-Cream (ID 1265)
    1265: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Lemon-Cream (ID 1266)
    1266: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Salted-Cream (ID 1267)
    1267: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Ruby-Swirl (ID 1268)
    1268: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Caramel-Swirl (ID 1269)
    1269: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Clover-Rainbow-Swirl (ID 1270)
    1270: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Vanilla-Cream (ID 1271)
    1271: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Ruby-Cream (ID 1272)
    1272: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Matcha-Cream (ID 1273)
    1273: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Mint-Cream (ID 1274)
    1274: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Lemon-Cream (ID 1275)
    1275: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Salted-Cream (ID 1276)
    1276: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Ruby-Swirl (ID 1277)
    1277: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Caramel-Swirl (ID 1278)
    1278: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Flower-Rainbow-Swirl (ID 1279)
    1279: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Vanilla-Cream (ID 1280)
    1280: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Ruby-Cream (ID 1281)
    1281: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Matcha-Cream (ID 1282)
    1282: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Mint-Cream (ID 1283)
    1283: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Lemon-Cream (ID 1284)
    1284: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Salted-Cream (ID 1285)
    1285: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Ruby-Swirl (ID 1286)
    1286: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Caramel-Swirl (ID 1287)
    1287: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Alcremie-Ribbon-Rainbow-Swirl (ID 1288)
    1288: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },
    // Sprigatito (ID 1289)
    1289: { regular: ["Overgrow", null], hidden: "Protean" },
    // Floragato (ID 1290)
    1290: { regular: ["Overgrow", null], hidden: "Protean" },
    // Meowscarada (ID 1291)
    1291: { regular: ["Overgrow", null], hidden: "Protean" },
    // Fuecoco (ID 1292)
    1292: { regular: ["Blaze", null], hidden: "Unaware" },
    // Crocalor (ID 1293)
    1293: { regular: ["Blaze", null], hidden: "Unaware" },
    // Skeledirge (ID 1294)
    1294: { regular: ["Blaze", null], hidden: "Unaware" },
    // Quaxly (ID 1295)
    1295: { regular: ["Torrent", null], hidden: "Moxie" },
    // Quaxwell (ID 1296)
    1296: { regular: ["Torrent", null], hidden: "Moxie" },
    // Quaquaval (ID 1297)
    1297: { regular: ["Torrent", null], hidden: "Moxie" },
    // Lechonk (ID 1298)
    1298: { regular: ["Aroma Veil", "Gluttony"], hidden: "Thick Fat" },
    // Oinkologne (ID 1299)
    1299: { regular: ["Lingering Aroma", "Gluttony"], hidden: "Thick Fat" },
    // Oinkologne-F (ID 1300)
    1300: { regular: ["Aroma Veil", "Gluttony"], hidden: "Thick Fat" },
    // Tarountula (ID 1301)
    1301: { regular: ["Insomnia", null], hidden: "Stakeout" },
    // Spidops (ID 1302)
    1302: { regular: ["Insomnia", null], hidden: "Stakeout" },
    // Nymble (ID 1303)
    1303: { regular: ["Swarm", null], hidden: "Tinted Lens" },
    // Lokix (ID 1304)
    1304: { regular: ["Swarm", null], hidden: "Tinted Lens" },
    // Pawmi (ID 1305)
    1305: { regular: ["Iron Fist", null], hidden: "Volt Absorb" },
    // Pawmo (ID 1306)
    1306: { regular: ["Iron Fist", null], hidden: "Volt Absorb" },
    // Pawmot (ID 1307)
    1307: { regular: ["Iron Fist", null], hidden: "Volt Absorb" },
    // Tandemaus (ID 1308)
    1308: { regular: ["Own Tempo", "Run Away"], hidden: "Pickup" },
    // Maushold-Family-Of-Three (ID 1309)
    1309: { regular: ["Technician", "Cheek Pouch"], hidden: "Friend Guard" },
    // Maushold-Family-Of-Four (ID 1310)
    1310: { regular: ["Technician", "Cheek Pouch"], hidden: "Friend Guard" },
    // Fidough (ID 1311)
    1311: { regular: ["Own Tempo", null], hidden: "Klutz" },
    // Dachsbun (ID 1312)
    1312: { regular: ["Well-Baked Body", null], hidden: "Aroma Veil" },

    // Smoliv (ID 1313)
    1313: { regular: ["Harvest", null], hidden: "Early Bird" },

    // Dolliv (ID 1314)
    1314: { regular: ["Harvest", null], hidden: "Early Bird" },

    // Arboliva (ID 1315)
    1315: { regular: ["Harvest", null], hidden: "Seed Sower" },

    // Squawkabilly-Green-Plumage (ID 1316)
    1316: { regular: ["Intimidate", "Quick Feet"], hidden: "Guts" },

    // Squawkabilly-Blue-Plumage (ID 1317)
    1317: { regular: ["Intimidate", "Quick Feet"], hidden: "Guts" },

    // Squawkabilly-Yellow-Plumage (ID 1318)
    1318: { regular: ["Intimidate", "Quick Feet"], hidden: "Sheer Force" }, // Assuming Guts if not specified for yellow, or Sheer Force as per some lists

    // Squawkabilly-White-Plumage (ID 1319)
    1319: { regular: ["Intimidate", "Quick Feet"], hidden: "Sheer Force" }, // Assuming Guts if not specified for white, or Sheer Force as per some lists

    // Nacli (ID 1320)
    1320: { regular: ["Purifying Salt", "Clear Body"], hidden: "Sturdy" },

    // Naclstack (ID 1321)
    1321: { regular: ["Purifying Salt", "Clear Body"], hidden: "Sturdy" },

    // Garganacl (ID 1322)
    1322: { regular: ["Purifying Salt", "Clear Body"], hidden: "Sturdy" },

    // Charcadet (ID 1323)
    1323: { regular: ["Flame Body", null], hidden: "Flash Fire" },

    // Armarouge (ID 1324)
    1324: { regular: ["Mega Launcher", null], hidden: "Weak Armor" },

    // Ceruledge (ID 1325)
    1325: { regular: ["Sharpness", null], hidden: "Weak Armor" },

    // Tadbulb (ID 1326)
    1326: { regular: ["Own Tempo", null], hidden: "Static" },

    // Bellibolt (ID 1327)
    1327: { regular: ["Own Tempo", "Electromorphosis"], hidden: "Static" },

    // Wattrel (ID 1328)
    1328: { regular: ["Wind Power", "Volt Absorb"], hidden: "Competitive" },

    // Kilowattrel (ID 1329)
    1329: { regular: ["Wind Power", "Volt Absorb"], hidden: "Competitive" },

    // Maschiff (ID 1330)
    1330: { regular: ["Intimidate", "Run Away"], hidden: "Stakeout" },

    // Mabosstiff (ID 1331)
    1331: { regular: ["Intimidate", "Guard Dog"], hidden: "Stakeout" },

    // Shroodle (ID 1332)
    1332: { regular: ["Unburden", "Pickpocket"], hidden: "Prankster" },

    // Grafaiai (ID 1333)
    1333: { regular: ["Unburden", "Poison Touch"], hidden: "Prankster" },

    // Bramblin (ID 1334)
    1334: { regular: ["Wind Rider", null], hidden: "Infiltrator" },

    // Brambleghast (ID 1335)
    1335: { regular: ["Wind Rider", null], hidden: "Infiltrator" },

    // Toedscool (ID 1336)
    1336: { regular: ["Mycelium Might", null], hidden: null },

    // Toedscruel (ID 1337)
    1337: { regular: ["Mycelium Might", null], hidden: null },

    // Klawf (ID 1338)
    1338: { regular: ["Regenerator", "Shell Armor"], hidden: "Anger Shell" },

    // Capsakid (ID 1339)
    1339: { regular: ["Chlorophyll", "Insomnia"], hidden: "Klutz" },

    // Scovillain (ID 1340)
    1340: { regular: ["Chlorophyll", "Insomnia"], hidden: "Moody" },

    // Rellor (ID 1341)
    1341: { regular: ["Compound Eyes", null], hidden: "Shed Skin" },

    // Rabsca (ID 1342)
    1342: { regular: ["Synchronize", null], hidden: "Telepathy" },

    // Flittle (ID 1343)
    1343: { regular: ["Speed Boost", null], hidden: "Anticipation" },

    // Espathra (ID 1344)
    1344: { regular: ["Speed Boost", null], hidden: "Opportunist" },

    // Tinkatink (ID 1345)
    1345: { regular: ["Mold Breaker", "Own Tempo"], hidden: "Pickpocket" },

    // Tinkatuff (ID 1346)
    1346: { regular: ["Mold Breaker", "Own Tempo"], hidden: "Pickpocket" },

    // Tinkaton (ID 1347)
    1347: { regular: ["Mold Breaker", "Own Tempo"], hidden: "Pickpocket" },

    // Wiglett (ID 1348)
    1348: { regular: ["Gooey", null], hidden: "Sand Veil" },

    // Wugtrio (ID 1349)
    1349: { regular: ["Gooey", null], hidden: "Sand Veil" },

    // Bombirdier (ID 1350)
    1350: { regular: ["Rocky Payload", null], hidden: "Big Pecks" },

    // Finizen (ID 1351)
    1351: { regular: ["Water Veil", null], hidden: null },

    // Palafin-Zero (ID 1352)
    1352: { regular: ["Zero to Hero", null], hidden: null },

    // Palafin-Hero (ID 1353)
    1353: { regular: ["Zero to Hero", null], hidden: null },

    // Varoom (ID 1354)
    1354: { regular: ["Sturdy", null], hidden: "Overcoat" },

    // Revavroom (ID 1355)
    1355: { regular: ["Filter", null], hidden: "Overcoat" },

    // Cyclizar (ID 1356)
    1356: { regular: ["Shed Skin", null], hidden: "Regenerator" },

    // Orthworm (ID 1357)
    1357: { regular: ["Earth Eater", null], hidden: "Sand Veil" },

    // Glimmet (ID 1358)
    1358: { regular: ["Corrosion", null], hidden: "Toxic Debris" },

    // Glimmora (ID 1359)
    1359: { regular: ["Corrosion", null], hidden: "Toxic Debris" },

    // Greavard (ID 1360)
    1360: { regular: ["Pickup", null], hidden: "Fluffy" },

    // Houndstone (ID 1361)
    1361: { regular: ["Sand Rush", null], hidden: "Fluffy" },

    // Flamigo (ID 1362)
    1362: { regular: ["Scrappy", null], hidden: "Costar" },

    // Cetoddle (ID 1363)
    1363: { regular: ["Thick Fat", "Snow Cloak"], hidden: "Sheer Force" },

    // Cetitan (ID 1364)
    1364: { regular: ["Thick Fat", "Slush Rush"], hidden: "Sheer Force" },

    // Veluza (ID 1365)
    1365: { regular: ["Sharpness", null], hidden: "Mold Breaker" },

    // Dondozo (ID 1366)
    1366: { regular: ["Unaware", "Oblivious"], hidden: "Water Veil" },

    // Tatsugiri (Droopy/Curly/Stretchy - ID 1367, 1368, 1369) - Assuming they share abilities
    1367: { regular: ["Commander", null], hidden: "Storm Drain" },
    1368: { regular: ["Commander", null], hidden: "Storm Drain" },
    1369: { regular: ["Commander", null], hidden: "Storm Drain" },

    // Annihilape (ID 1370)
    1370: { regular: ["Vital Spirit", null], hidden: "Defiant" },

    // Clodsire (ID 1371)
    1371: { regular: ["Poison Point", "Water Absorb"], hidden: "Unaware" },

    // Farigiraf (ID 1372)
    1372: { regular: ["Cud Chew", "Armor Tail"], hidden: "Sap Sipper" },

    // Dudunsparce (Two-Segment) (ID 1373)
    1373: { regular: ["Serene Grace", null], hidden: "Rattled" },
    // Dudunsparce (Three-Segment) (ID 1374)
    1374: { regular: ["Serene Grace", null], hidden: "Rattled" }, // Assuming same abilities

    // Kingambit (ID 1375)
    1375: { regular: ["Supreme Overlord", null], hidden: "Defiant" },

    // Great Tusk (ID 1376)
    1376: { regular: ["Protosynthesis", null], hidden: null },

    // Scream Tail (ID 1377)
    1377: { regular: ["Protosynthesis", null], hidden: null },

    // Brute Bonnet (ID 1378)
    1378: { regular: ["Protosynthesis", null], hidden: null },

    // Flutter Mane (ID 1379)
    1379: { regular: ["Protosynthesis", null], hidden: null },

    // Slither Wing (ID 1380)
    1380: { regular: ["Protosynthesis", null], hidden: null },

    // Sandy Shocks (ID 1381)
    1381: { regular: ["Protosynthesis", null], hidden: null },

    // Iron Treads (ID 1382)
    1382: { regular: ["Quark Drive", null], hidden: null },

    // Iron Bundle (ID 1383)
    1383: { regular: ["Quark Drive", null], hidden: null },

    // Iron Hands (ID 1384)
    1384: { regular: ["Quark Drive", null], hidden: null },

    // Iron Jugulis (ID 1385)
    1385: { regular: ["Quark Drive", null], hidden: null },

    // Iron Moth (ID 1386)
    1386: { regular: ["Quark Drive", null], hidden: null },

    // Iron Thorns (ID 1387)
    1387: { regular: ["Quark Drive", null], hidden: null },

    // Frigibax (ID 1388)
    1388: { regular: ["Ice Body", null], hidden: "Thermal Exchange" },

    // Arctibax (ID 1389)
    1389: { regular: ["Ice Body", null], hidden: "Thermal Exchange" },

    // Baxcalibur (ID 1390)
    1390: { regular: ["Ice Body", null], hidden: "Thermal Exchange" },

    // Gimmighoul-Chest (ID 1391)
    1391: { regular: ["Rattled", null], hidden: null },

    // Gimmighoul-Roaming (ID 1392)
    1392: { regular: ["Run Away", null], hidden: null },

    // Gholdengo (ID 1393)
    1393: { regular: ["Good as Gold", null], hidden: null },

    // Wo-Chien (ID 1394)
    1394: { regular: ["Shell Armor", null], hidden: "Tablets of Ruin" }, // From your existing list, using Shell Armor as base

    // Chien-Pao (ID 1395)
    1395: { regular: ["Mold Breaker", null], hidden: "Sword of Ruin" }, // From your existing list, using Mold Breaker as base

    // Ting-Lu (ID 1396)
    1396: { regular: ["Battle Armor", null], hidden: "Vessel of Ruin" }, // From your existing list, using Battle Armor as base

    // Chi-Yu (ID 1397)
    1397: { regular: ["Mold Breaker", null], hidden: "Beads of Ruin" }, // From your existing list, using Mold Breaker as base

    // Roaring Moon (ID 1398)
    1398: { regular: ["Protosynthesis", null], hidden: null },

    // Iron Valiant (ID 1399)
    1399: { regular: ["Quark Drive", null], hidden: null },

    // Koraidon (ID 1400)
    1400: { regular: ["Orichalcum Pulse", null], hidden: null },

    // Miraidon (ID 1401)
    1401: { regular: ["Hadron Engine", null], hidden: null },

    // Tauros-Paldea-Combat (ID 1402)
    1402: { regular: ["Intimidate", null], hidden: "Cud Chew" },

    // Tauros-Paldea-Blaze (ID 1403)
    1403: { regular: ["Intimidate", null], hidden: "Cud Chew" },

    // Tauros-Paldea-Aqua (ID 1404)
    1404: { regular: ["Intimidate", null], hidden: "Cud Chew" },

    // Wooper-Paldea (ID 1405)
    1405: { regular: ["Poison Point", "Water Absorb"], hidden: "Unaware" },

    // Walking Wake (ID 1406)
    1406: { regular: ["Protosynthesis", null], hidden: null },

    // Iron Leaves (ID 1407)
    1407: { regular: ["Quark Drive", null], hidden: null },

    // Dipplin (ID 1408)
    1408: { regular: ["Supersweet Syrup", null], hidden: "Sticky Hold" },

    // Poltchageist (Unremarkable Teacup / ID 1409)
    1409: { regular: ["Hospitality", null], hidden: "Heatproof" },
    // Poltchageist (Masterpiece Teacup / ID 1410)
    1410: { regular: ["Hospitality", null], hidden: "Heatproof" },

    // Sinistcha (Unremarkable Teacup / ID 1411)
    1411: { regular: ["Hospitality", null], hidden: "Heatproof" },
    // Sinistcha (Masterpiece Teacup / ID 1412)
    1412: { regular: ["Hospitality", null], hidden: "Heatproof" },

    // Okidogi (ID 1413)
    1413: { regular: ["Toxic Chain", null], hidden: "Guard Dog" },

    // Munkidori (ID 1414)
    1414: { regular: ["Toxic Chain", null], hidden: "Frisk" },

    // Fezandipiti (ID 1415)
    1415: { regular: ["Toxic Chain", null], hidden: "Technician" },

    // Ogerpon (Teal Mask / ID 1416)
    1416: { regular: ["Inner Focus", null], hidden: null }, // Using your original data for Ogerpon

    // Ogerpon-Wellspring (ID 1417)
    1417: { regular: ["Hydration", null], hidden: null }, // Using your original data

    // Ogerpon-Hearthflame (ID 1418)
    1418: { regular: ["Mold Breaker", null], hidden: null }, // Using your original data

    // Ogerpon-Cornerstone (ID 1419)
    1419: { regular: ["Sturdy", null], hidden: null }, // Using your original data

    // Ogerpon-Teal-Mask-Tera (ID 1420)
    1420: { regular: ["Embody Aspect (Teal)", null], hidden: null }, // Assuming same as base form, or 'Embody Aspect' if distinct
    // Ogerpon-Wellspring-Mask-Tera (ID 1421)
    1421: { regular: ["Embody Aspect (Wellspring)", null], hidden: null },
    // Ogerpon-Hearthflame-Mask-Tera (ID 1422)
    1422: { regular: ["Embody Aspect (Hearthflame)", null], hidden: null },
    // Ogerpon-Cornerstone-Mask-Tera (ID 1423)
    1423: { regular: ["Embody Aspect (Cornerstone)", null], hidden: null },
    
    // Ursaluna-Bloodmoon (ID 1424) - Note: Your mons array ends at 1434.
    // This ID would correspond to mons[1423]
    // Assuming you have a "Ursaluna-Bloodmoon" in your mons array around this ID
    1424: { regular: ["Mind's Eye", null], hidden: null },


    // Archaludon (ID 1425)
    1425: { regular: ["Stalwart", "Sturdy"], hidden: "Stamina" },

    // Hydrapple (ID 1426)
    1426: { regular: ["Supersweet Syrup", null], hidden: "Sticky Hold" },

    // Gouging Fire (ID 1427)
    1427: { regular: ["Protosynthesis", null], hidden: null },

    // Raging Bolt (ID 1428)
    1428: { regular: ["Protosynthesis", null], hidden: null },

    // Iron Boulder (ID 1429)
    1429: { regular: ["Quark Drive", null], hidden: null },

    // Iron Crown (ID 1430)
    1430: { regular: ["Quark Drive", null], hidden: null },

    // Terapagos-Normal (ID 1431)
    1431: { regular: ["Tera Shift", null], hidden: null },

    // Terapagos-Terastal (ID 1432)
    1432: { regular: ["Tera Shell", null], hidden: null },

    // Terapagos-Stellar (ID 1433)
    1433: { regular: ["Teraform Zero", null], hidden: null },

    // Pecharunt (ID 1434)
    1434: { regular: ["Poison Puppeteer", null], hidden: null }

}; // End of lucidSpeciesAbilities

const moves = [
"",
"Pound",
"Karate Chop",
"Double Slap",
"Comet Punch",
"Mega Punch",
"Pay Day",
"Fire Punch",
"Ice Punch",
"Thunder Punch",
"Scratch",
"Vise Grip",
"Guillotine",
"Razor Wind",
"Swords Dance",
"Cut",
"Gust",
"Wing Attack",
"Whirlwind",
"Fly",
"Bind",
"Slam",
"Vine Whip",
"Stomp",
"Double Kick",
"Mega Kick",
"Jump Kick",
"Rolling Kick",
"Sand Attack",
"Headbutt",
"Horn Attack",
"Fury Attack",
"Horn Drill",
"Tackle",
"Body Slam",
"Wrap",
"Take Down",
"Thrash",
"Double-Edge",
"Tail Whip",
"Poison Sting",
"Twineedle",
"Pin Missile",
"Leer",
"Bite",
"Growl",
"Roar",
"Sing",
"Supersonic",
"Sonic Boom",
"Disable",
"Acid",
"Ember",
"Flamethrower",
"Mist",
"Water Gun",
"Hydro Pump",
"Surf",
"Ice Beam",
"Blizzard",
"Psybeam",
"Bubble Beam",
"Aurora Beam",
"Hyper Beam",
"Peck",
"Drill Peck",
"Submission",
"Low Kick",
"Counter",
"Seismic Toss",
"Strength",
"Absorb",
"Mega Drain",
"Leech Seed",
"Growth",
"Razor Leaf",
"Solar Beam",
"Poison Powder",
"Stun Spore",
"Sleep Powder",
"Petal Dance",
"String Shot",
"Dragon Rage",
"Fire Spin",
"Thunder Shock",
"Thunderbolt",
"Thunder Wave",
"Thunder",
"Rock Throw",
"Earthquake",
"Fissure",
"Dig",
"Toxic",
"Confusion",
"Psychic",
"Hypnosis",
"Meditate",
"Agility",
"Quick Attack",
"Rage",
"Teleport",
"Night Shade",
"Mimic",
"Screech",
"Double Team",
"Recover",
"Harden",
"Minimize",
"Smokescreen",
"Confuse Ray",
"Withdraw",
"Defense Curl",
"Barrier",
"Light Screen",
"Haze",
"Reflect",
"Focus Energy",
"Bide",
"Metronome",
"Mirror Move",
"Self-Destruct",
"Egg Bomb",
"Lick",
"Smog",
"Sludge",
"Bone Club",
"Fire Blast",
"Waterfall",
"Clamp",
"Swift",
"Skull Bash",
"Spike Cannon",
"Constrict",
"Amnesia",
"Kinesis",
"Soft Boiled",
"High Jump Kick",
"Glare",
"Dream Eater",
"Poison Gas",
"Barrage",
"Leech Life",
"Lovely Kiss",
"Sky Attack",
"Transform",
"Bubble",
"Dizzy Punch",
"Spore",
"Flash",
"Psywave",
"Splash",
"Acid Armor",
"Crabhammer",
"Explosion",
"Fury Swipes",
"Bonemerang",
"Rest",
"Rock Slide",
"Hyper Fang",
"Sharpen",
"Conversion",
"Tri Attack",
"Super Fang",
"Slash",
"Substitute",
"Struggle",
"Sketch",
"Triple Kick",
"Thief",
"Spider Web",
"Mind Reader",
"Nightmare",
"Flame Wheel",
"Snore",
"Curse",
"Flail",
"Conversion 2",
"Aeroblast",
"Cotton Spore",
"Reversal",
"Spite",
"Powder Snow",
"Protect",
"Mach Punch",
"Scary Face",
"Feint Attack",
"Sweet Kiss",
"Belly Drum",
"Sludge Bomb",
"Mud-Slap",
"Octazooka",
"Spikes",
"Zap Cannon",
"Foresight",
"Destiny Bond",
"Perish Song",
"Icy Wind",
"Detect",
"Bone Rush",
"Lock-On",
"Outrage",
"Sandstorm",
"Giga Drain",
"Endure",
"Charm",
"Rollout",
"False Swipe",
"Swagger",
"Milk Drink",
"Spark",
"Fury Cutter",
"Steel Wing",
"Mean Look",
"Attract",
"Sleep Talk",
"Heal Bell",
"Return",
"Present",
"Frustration",
"Safeguard",
"Pain Split",
"Sacred Fire",
"Magnitude",
"Dynamic Punch",
"Megahorn",
"Dragon Breath",
"Baton Pass",
"Encore",
"Pursuit",
"Rapid Spin",
"Sweet Scent",
"Iron Tail",
"Metal Claw",
"Vital Throw",
"Morning Sun",
"Synthesis",
"Moonlight",
"Hidden Power",
"Cross Chop",
"Twister",
"Rain Dance",
"Sunny Day",
"Crunch",
"Mirror Coat",
"Psych Up",
"Extreme Speed",
"Ancient Power",
"Shadow Ball",
"Future Sight",
"Rock Smash",
"Whirlpool",
"Beat Up",
"Fake Out",
"Uproar",
"Stockpile",
"Spit Up",
"Swallow",
"Heat Wave",
"Hail",
"Torment",
"Flatter",
"Will-O-Wisp",
"Memento",
"Facade",
"Focus Punch",
"Smelling Salts",
"Follow Me",
"Nature Power",
"Charge",
"Taunt",
"Helping Hand",
"Trick",
"Role Play",
"Wish",
"Assist",
"Ingrain",
"Superpower",
"Magic Coat",
"Recycle",
"Revenge",
"Brick Break",
"Yawn",
"Knock Off",
"Endeavor",
"Eruption",
"Skill Swap",
"Imprison",
"Refresh",
"Grudge",
"Snatch",
"Secret Power",
"Dive",
"Arm Thrust",
"Camouflage",
"Tail Glow",
"Luster Purge",
"Mist Ball",
"Feather Dance",
"Teeter Dance",
"Blaze Kick",
"Mud Sport",
"Ice Ball",
"Needle Arm",
"Slack Off",
"Hyper Voice",
"Poison Fang",
"Crush Claw",
"Blast Burn",
"Hydro Cannon",
"Meteor Mash",
"Astonish",
"Weather Ball",
"Aromatherapy",
"Fake Tears",
"Air Cutter",
"Overheat",
"Odor Sleuth",
"Rock Tomb",
"Silver Wind",
"Metal Sound",
"Grass Whistle",
"Tickle",
"Cosmic Power",
"Water Spout",
"Signal Beam",
"Shadow Punch",
"Extrasensory",
"Sky Uppercut",
"Sand Tomb",
"Sheer Cold",
"Muddy Water",
"Bullet Seed",
"Aerial Ace",
"Icicle Spear",
"Iron Defense",
"Block",
"Howl",
"Dragon Claw",
"Frenzy Plant",
"Bulk Up",
"Bounce",
"Mud Shot",
"Poison Tail",
"Covet",
"Volt Tackle",
"Magical Leaf",
"Water Sport",
"Calm Mind",
"Leaf Blade",
"Dragon Dance",
"Rock Blast",
"Shock Wave",
"Water Pulse",
"Doom Desire",
"Psycho Boost",
"Roost",
"Gravity",
"Miracle Eye",
"Wake-Up Slap",
"Hammer Arm",
"Gyro Ball",
"Healing Wish",
"Brine",
"Natural Gift",
"Feint",
"Pluck",
"Tailwind",
"Acupressure",
"Metal Burst",
"U-turn",
"Close Combat",
"Payback",
"Assurance",
"Embargo",
"Fling",
"Psycho Shift",
"Trump Card",
"Heal Block",
"Wring Out",
"Power Trick",
"Gastro Acid",
"Lucky Chant",
"Me First",
"Copycat",
"Power Swap",
"Guard Swap",
"Punishment",
"Last Resort",
"Worry Seed",
"Sucker Punch",
"Toxic Spikes",
"Heart Swap",
"Aqua Ring",
"Magnet Rise",
"Flare Blitz",
"Force Palm",
"Aura Sphere",
"Rock Polish",
"Poison Jab",
"Dark Pulse",
"Night Slash",
"Aqua Tail",
"Seed Bomb",
"Air Slash",
"X-Scissor",
"Bug Buzz",
"Dragon Pulse",
"Dragon Rush",
"Power Gem",
"Drain Punch",
"Vacuum Wave",
"Focus Blast",
"Energy Ball",
"Brave Bird",
"Earth Power",
"Switcheroo",
"Giga Impact",
"Nasty Plot",
"Bullet Punch",
"Avalanche",
"Ice Shard",
"Shadow Claw",
"Thunder Fang",
"Ice Fang",
"Fire Fang",
"Shadow Sneak",
"Mud Bomb",
"Psycho Cut",
"Zen Headbutt",
"Mirror Shot",
"Flash Cannon",
"Rock Climb",
"Defog",
"Trick Room",
"Draco Meteor",
"Discharge",
"Lava Plume",
"Leaf Storm",
"Power Whip",
"Rock Wrecker",
"Cross Poison",
"Gunk Shot",
"Iron Head",
"Magnet Bomb",
"Stone Edge",
"Captivate",
"Stealth Rock",
"Grass Knot",
"Chatter",
"Judgment",
"Bug Bite",
"Charge Beam",
"Wood Hammer",
"Aqua Jet",
"Attack Order",
"Defend Order",
"Heal Order",
"Head Smash",
"Double Hit",
"Roar of Time",
"Spacial Rend",
"Lunar Dance",
"Crush Grip",
"Magma Storm",
"Dark Void",
"Seed Flare",
"Ominous Wind",
"Shadow Force",
"Hone Claws",
"Wide Guard",
"Guard Split",
"Power Split",
"Wonder Room",
"Psyshock",
"Venoshock",
"Autotomize",
"Rage Powder",
"Telekinesis",
"Magic Room",
"Smack Down",
"Storm Throw",
"Flame Burst",
"Sludge Wave",
"Quiver Dance",
"Heavy Slam",
"Synchronoise",
"Electro Ball",
"Soak",
"Flame Charge",
"Coil",
"Low Sweep",
"Acid Spray",
"Foul Play",
"Simple Beam",
"Entrainment",
"After You",
"Round",
"Echoed Voice",
"Chip Away",
"Clear Smog",
"Stored Power",
"Quick Guard",
"Ally Switch",
"Scald",
"Shell Smash",
"Heal Pulse",
"Hex",
"Sky Drop",
"Shift Gear",
"Circle Throw",
"Incinerate",
"Quash",
"Acrobatics",
"Reflect Type",
"Retaliate",
"Final Gambit",
"Bestow",
"Inferno",
"Water Pledge",
"Fire Pledge",
"Grass Pledge",
"Volt Switch",
"Struggle Bug",
"Bulldoze",
"Frost Breath",
"Dragon Tail",
"Work Up",
"Electroweb",
"Wild Charge",
"Drill Run",
"Dual Chop",
"Heart Stamp",
"Horn Leech",
"Sacred Sword",
"Razor Shell",
"Heat Crash",
"Leaf Tornado",
"Steamroller",
"Cotton Guard",
"Night Daze",
"Psystrike",
"Tail Slap",
"Hurricane",
"Head Charge",
"Gear Grind",
"Searing Shot",
"Techno Blast",
"Relic Song",
"Secret Sword",
"Glaciate",
"Bolt Strike",
"Blue Flare",
"Fiery Dance",
"Freeze Shock",
"Ice Burn",
"Snarl",
"Icicle Crash",
"V-create",
"Fusion Flare",
"Fusion Bolt",
"Flying Press",
"Mat Block",
"Belch",
"Rototiller",
"Sticky Web",
"Fell Stinger",
"Phantom Force",
"Trick-or-Treat",
"Noble Roar",
"Ion Deluge",
"Parabolic Charge",
"Forest's Curse",
"Petal Blizzard",
"Freeze-Dry",
"Disarming Voice",
"Parting Shot",
"Topsy-Turvy",
"Draining Kiss",
"Crafty Shield",
"Flower Shield",
"Grassy Terrain",
"Misty Terrain",
"Electrify",
"Play Rough",
"Fairy Wind",
"Moonblast",
"Boomburst",
"Fairy Lock",
"King's Shield",
"Play Nice",
"Confide",
"Diamond Storm",
"Steam Eruption",
"Hyperspace Hole",
"Water Shuriken",
"Mystical Fire",
"Spiky Shield",
"Aromatic Mist",
"Eerie Impulse",
"Venom Drench",
"Powder",
"Geomancy",
"Magnetic Flux",
"Happy Hour",
"Electric Terrain",
"Dazzling Gleam",
"Celebrate",
"Hold Hands",
"Baby-Doll Eyes",
"Nuzzle",
"Hold Back",
"Infestation",
"Power-Up Punch",
"Oblivion Wing",
"Thousand Arrows",
"Thousand Waves",
"Land's Wrath",
"Light of Ruin",
"Origin Pulse",
"Precipice Blades",
"Dragon Ascent",
"Hyperspace Fury",
"Shore Up",
"First Impression",
"Baneful Bunker",
"Spirit Shackle",
"Darkest Lariat",
"Sparkling Aria",
"Ice Hammer",
"Floral Healing",
"High Horsepower",
"Strength Sap",
"Solar Blade",
"Leafage",
"Spotlight",
"Toxic Thread",
"Laser Focus",
"Gear Up",
"Throat Chop",
"Pollen Puff",
"Anchor Shot",
"Psychic Terrain",
"Lunge",
"Fire Lash",
"Power Trip",
"Burn Up",
"Speed Swap",
"Smart Strike",
"Purify",
"Revelation Dance",
"Core Enforcer",
"Trop Kick",
"Instruct",
"Beak Blast",
"Clanging Scales",
"Dragon Hammer",
"Brutal Swing",
"Aurora Veil",
"Shell Trap",
"Fleur Cannon",
"Psychic Fangs",
"Stomping Tantrum",
"Shadow Bone",
"Accelerock",
"Liquidation",
"Prismatic Laser",
"Spectral Thief",
"Sunsteel Strike",
"Moongeist Beam",
"Tearful Look",
"Zing Zap",
"Nature's Madness",
"Multi-Attack",
"Mind Blown",
"Plasma Fists",
"Photon Geyser",
"Zippy Zap",
"Splishy Splash",
"Floaty Fall",
"Pika Papow",
"Bouncy Bubble",
"Buzzy Buzz",
"Sizzly Slide",
"Glitzy Glow",
"Baddy Bad",
"Sappy Seed",
"Freezy Frost",
"Sparkly Swirl",
"Veevee Volley",
"Double Iron Bash",
"Dynamax Cannon",
"Snipe Shot",
"Jaw Lock",
"Stuff Cheeks",
"No Retreat",
"Tar Shot",
"Magic Powder",
"Dragon Darts",
"Teatime",
"Octolock",
"Bolt Beak",
"Fishious Rend",
"Court Change",
"Clangorous Soul",
"Body Press",
"Decorate",
"Drum Beating",
"Snap Trap",
"Pyro Ball",
"Behemoth Blade",
"Behemoth Bash",
"Aura Wheel",
"Breaking Swipe",
"Branch Poke",
"Overdrive",
"Apple Acid",
"Grav Apple",
"Spirit Break",
"Strange Steam",
"Life Dew",
"Obstruct",
"False Surrender",
"Meteor Assault",
"Eternabeam",
"Steel Beam",
"Expanding Force",
"Steel Roller",
"Scale Shot",
"Meteor Beam",
"Shell Side Arm",
"Misty Explosion",
"Grassy Glide",
"Rising Voltage",
"Terrain Pulse",
"Skitter Smack",
"Burning Jealousy",
"Lash Out",
"Poltergeist",
"Corrosive Gas",
"Coaching",
"Flip Turn",
"Triple Axel",
"Dual Wingbeat",
"Scorching Sands",
"Jungle Healing",
"Wicked Blow",
"Surging Strikes",
"Thunder Cage",
"Dragon Energy",
"Freezing Glare",
"Fiery Wrath",
"Thunderous Kick",
"Glacial Lance",
"Astral Barrage",
"Eerie Spell",
"Dire Claw",
"Psyshield Bash",
"Power Shift",
"Stone Axe",
"Springtide Storm",
"Mystical Power",
"Raging Fury",
"Wave Crash",
"Chloroblast",
"Mountain Gale",
"Victory Dance",
"Headlong Rush",
"Barb Barrage",
"Esper Wing",
"Bitter Malice",
"Shelter",
"Triple Arrows",
"Infernal Parade",
"Ceaseless Edge",
"Bleakwind Storm",
"Wildbolt Storm",
"Sandsear Storm",
"Lunar Blessing",
"Take Heart",
"Tera Blast",
"Silk Trap",
"Axe Kick",
"Last Respects",
"Lumina Crash",
"Order Up",
"Jet Punch",
"Spicy Extract",
"Spin Out",
"Population Bomb",
"Ice Spinner",
"Glaive Rush",
"Revival Blessing",
"Salt Cure",
"Triple Dive",
"Mortal Spin",
"Doodle",
"Fillet Away",
"Kowtow Cleave",
"Flower Trick",
"Torch Song",
"Aqua Step",
"Raging Bull",
"Make It Rain",
"Ruination",
"Collision Course",
"Electro Drift",
"Shed Tail",
"Chilly Reception",
"Tidy Up",
"Snowscape",
"Pounce",
"Trailblaze",
"Chilling Water",
"Hyper Drill",
"Twin Beam",
"Rage Fist",
"Armor Cannon",
"Bitter Blade",
"Double Shock",
"Gigaton Hammer",
"Comeuppance",
"Aqua Cutter",
"Blazing Torque",
"Wicked Torque",
"Noxious Torque",
"Combat Torque",
"Magical Torque",
"Psyblade",
"Hydro Steam",
"Blood Moon",
"Matcha Gotcha",
"Syrup Bomb",
"Ivy Cudgel",
"Electro Shot",
"Tera Starstorm",
"Fickle Beam",
"Burning Bulwark",
"Thunderclap",
"Mighty Cleave",
"Tachyon Cutter",
"Hard Press",
"Dragon Cheer",
"Alluring Voice",
"Temper Flare",
"Supercell Slam",
"Psychic Noise",
"Upper Hand",
"Malignant Chain"
];
const mons = [
 "Bulbasaur",
"Ivysaur",
"Venusaur",
"Charmander",
"Charmeleon",
"Charizard",
"Squirtle",
"Wartortle",
"Blastoise",
"Caterpie",
"Metapod",
"Butterfree",
"Weedle",
"Kakuna",
"Beedrill",
"Pidgey",
"Pidgeotto",
"Pidgeot",
"Rattata",
"Raticate",
"Spearow",
"Fearow",
"Ekans",
"Arbok",
"Pikachu",
"Raichu",
"Sandshrew",
"Sandslash",
"Nidoran-F",
"Nidorina",
"Nidoqueen",
"Nidoran-M",
"Nidorino",
"Nidoking",
"Clefairy",
"Clefable",
"Vulpix",
"Ninetales",
"Jigglypuff",
"Wigglytuff",
"Zubat",
"Golbat",
"Oddish",
"Gloom",
"Vileplume",
"Paras",
"Parasect",
"Venonat",
"Venomoth",
"Diglett",
"Dugtrio",
"Meowth",
"Persian",
"Psyduck",
"Golduck",
"Mankey",
"Primeape",
"Growlithe",
"Arcanine",
"Poliwag",
"Poliwhirl",
"Poliwrath",
"Abra",
"Kadabra",
"Alakazam",
"Machop",
"Machoke",
"Machamp",
"Bellsprout",
"Weepinbell",
"Victreebel",
"Tentacool",
"Tentacruel",
"Geodude",
"Graveler",
"Golem",
"Ponyta",
"Rapidash",
"Slowpoke",
"Slowbro",
"Magnemite",
"Magneton",
"Farfetchd",
"Doduo",
"Dodrio",
"Seel",
"Dewgong",
"Grimer",
"Muk",
"Shellder",
"Cloyster",
"Gastly",
"Haunter",
"Gengar",
"Onix",
"Drowzee",
"Hypno",
"Krabby",
"Kingler",
"Voltorb",
"Electrode",
"Exeggcute",
"Exeggutor",
"Cubone",
"Marowak",
"Hitmonlee",
"Hitmonchan",
"Lickitung",
"Koffing",
"Weezing",
"Rhyhorn",
"Rhydon",
"Chansey",
"Tangela",
"Kangaskhan",
"Horsea",
"Seadra",
"Goldeen",
"Seaking",
"Staryu",
"Starmie",
"Mr. Mime",
"Scyther",
"Jynx",
"Electabuzz",
"Magmar",
"Pinsir",
"Tauros",
"Magikarp",
"Gyarados",
"Lapras",
"Ditto",
"Eevee",
"Vaporeon",
"Jolteon",
"Flareon",
"Porygon",
"Omanyte",
"Omastar",
"Kabuto",
"Kabutops",
"Aerodactyl",
"Snorlax",
"Articuno",
"Zapdos",
"Moltres",
"Dratini",
"Dragonair",
"Dragonite",
"Mewtwo",
"Mew",
"Chikorita",
"Bayleef",
"Meganium",
"Cyndaquil",
"Quilava",
"Typhlosion",
"Totodile",
"Croconaw",
"Feraligatr",
"Sentret",
"Furret",
"Hoothoot",
"Noctowl",
"Ledyba",
"Ledian",
"Spinarak",
"Ariados",
"Crobat",
"Chinchou",
"Lanturn",
"Pichu",
"Cleffa",
"Igglybuff",
"Togepi",
"Togetic",
"Natu",
"Xatu",
"Mareep",
"Flaaffy",
"Ampharos",
"Bellossom",
"Marill",
"Azumarill",
"Sudowoodo",
"Politoed",
"Hoppip",
"Skiploom",
"Jumpluff",
"Aipom",
"Sunkern",
"Sunflora",
"Yanma",
"Wooper",
"Quagsire",
"Espeon",
"Umbreon",
"Murkrow",
"Slowking",
"Misdreavus",
"Unown",
"Wobbuffet",
"Girafarig",
"Pineco",
"Forretress",
"Dunsparce",
"Gligar",
"Steelix",
"Snubbull",
"Granbull",
"Qwilfish",
"Scizor",
"Shuckle",
"Heracross",
"Sneasel",
"Teddiursa",
"Ursaring",
"Slugma",
"Magcargo",
"Swinub",
"Piloswine",
"Corsola",
"Remoraid",
"Octillery",
"Delibird",
"Mantine",
"Skarmory",
"Houndour",
"Houndoom",
"Kingdra",
"Phanpy",
"Donphan",
"Porygon2",
"Stantler",
"Smeargle",
"Tyrogue",
"Hitmontop",
"Smoochum",
"Elekid",
"Magby",
"Miltank",
"Blissey",
"Raikou",
"Entei",
"Suicune",
"Larvitar",
"Pupitar",
"Tyranitar",
"Lugia",
"Ho-Oh",
"Celebi",
"Treecko",
"Grovyle",
"Sceptile",
"Torchic",
"Combusken",
"Blaziken",
"Mudkip",
"Marshtomp",
"Swampert",
"Poochyena",
"Mightyena",
"Zigzagoon",
"Linoone",
"Wurmple",
"Silcoon",
"Beautifly",
"Cascoon",
"Dustox",
"Lotad",
"Lombre",
"Ludicolo",
"Seedot",
"Nuzleaf",
"Shiftry",
"Taillow",
"Swellow",
"Wingull",
"Pelipper",
"Ralts",
"Kirlia",
"Gardevoir",
"Surskit",
"Masquerain",
"Shroomish",
"Breloom",
"Slakoth",
"Vigoroth",
"Slaking",
"Nincada",
"Ninjask",
"Shedinja",
"Whismur",
"Loudred",
"Exploud",
"Makuhita",
"Hariyama",
"Azurill",
"Nosepass",
"Skitty",
"Delcatty",
"Sableye",
"Mawile",
"Aron",
"Lairon",
"Aggron",
"Meditite",
"Medicham",
"Electrike",
"Manectric",
"Plusle",
"Minun",
"Volbeat",
"Illumise",
"Roselia",
"Gulpin",
"Swalot",
"Carvanha",
"Sharpedo",
"Wailmer",
"Wailord",
"Numel",
"Camerupt",
"Torkoal",
"Spoink",
"Grumpig",
"Spinda",
"Trapinch",
"Vibrava",
"Flygon",
"Cacnea",
"Cacturne",
"Swablu",
"Altaria",
"Zangoose",
"Seviper",
"Lunatone",
"Solrock",
"Barboach",
"Whiscash",
"Corphish",
"Crawdaunt",
"Baltoy",
"Claydol",
"Lileep",
"Cradily",
"Anorith",
"Armaldo",
"Feebas",
"Milotic",
"Castform-Normal",
"Kecleon",
"Shuppet",
"Banette",
"Duskull",
"Dusclops",
"Tropius",
"Chimecho",
"Absol",
"Wynaut",
"Snorunt",
"Glalie",
"Spheal",
"Sealeo",
"Walrein",
"Clamperl",
"Huntail",
"Gorebyss",
"Relicanth",
"Luvdisc",
"Bagon",
"Shelgon",
"Salamence",
"Beldum",
"Metang",
"Metagross",
"Regirock",
"Regice",
"Registeel",
"Latias",
"Latios",
"Kyogre",
"Groudon",
"Rayquaza",
"Jirachi",
"Deoxys-Normal",
"Turtwig",
"Grotle",
"Torterra",
"Chimchar",
"Monferno",
"Infernape",
"Piplup",
"Prinplup",
"Empoleon",
"Starly",
"Staravia",
"Staraptor",
"Bidoof",
"Bibarel",
"Kricketot",
"Kricketune",
"Shinx",
"Luxio",
"Luxray",
"Budew",
"Roserade",
"Cranidos",
"Rampardos",
"Shieldon",
"Bastiodon",
"Burmy-Plant-Cloak",
"Wormadam-Plant-Cloak",
"Mothim",
"Combee",
"Vespiquen",
"Pachirisu",
"Buizel",
"Floatzel",
"Cherubi",
"Cherrim-Overcast",
"Shellos",
"Gastrodon",
"Ambipom",
"Drifloon",
"Drifblim",
"Buneary",
"Lopunny",
"Mismagius",
"Honchkrow",
"Glameow",
"Purugly",
"Chingling",
"Stunky",
"Skuntank",
"Bronzor",
"Bronzong",
"Bonsly",
"Mime Jr.",
"Happiny",
"Chatot",
"Spiritomb",
"Gible",
"Gabite",
"Garchomp",
"Munchlax",
"Riolu",
"Lucario",
"Hippopotas",
"Hippowdon",
"Skorupi",
"Drapion",
"Croagunk",
"Toxicroak",
"Carnivine",
"Finneon",
"Lumineon",
"Mantyke",
"Snover",
"Abomasnow",
"Weavile",
"Magnezone",
"Lickilicky",
"Rhyperior",
"Tangrowth",
"Electivire",
"Magmortar",
"Togekiss",
"Yanmega",
"Leafeon",
"Glaceon",
"Gliscor",
"Mamoswine",
"Porygon-Z",
"Gallade",
"Probopass",
"Dusknoir",
"Froslass",
"Rotom",
"Uxie",
"Mesprit",
"Azelf",
"Dialga",
"Palkia",
"Heatran",
"Regigigas",
"Giratina-Altered",
"Cresselia",
"Phione",
"Manaphy",
"Darkrai",
"Shaymin-Land",
"Arceus-Normal",
"Victini",
"Snivy",
"Servine",
"Serperior",
"Tepig",
"Pignite",
"Emboar",
"Oshawott",
"Dewott",
"Samurott",
"Patrat",
"Watchog",
"Lillipup",
"Herdier",
"Stoutland",
"Purrloin",
"Liepard",
"Pansage",
"Simisage",
"Pansear",
"Simisear",
"Panpour",
"Simipour",
"Munna",
"Musharna",
"Pidove",
"Tranquill",
"Unfezant",
"Blitzle",
"Zebstrika",
"Roggenrola",
"Boldore",
"Gigalith",
"Woobat",
"Swoobat",
"Drilbur",
"Excadrill",
"Audino",
"Timburr",
"Gurdurr",
"Conkeldurr",
"Tympole",
"Palpitoad",
"Seismitoad",
"Throh",
"Sawk",
"Sewaddle",
"Swadloon",
"Leavanny",
"Venipede",
"Whirlipede",
"Scolipede",
"Cottonee",
"Whimsicott",
"Petilil",
"Lilligant",
"Basculin",
"Sandile",
"Krokorok",
"Krookodile",
"Darumaka",
"Darmanitan-Standard-Mode",
"Maractus",
"Dwebble",
"Crustle",
"Scraggy",
"Scrafty",
"Sigilyph",
"Yamask",
"Cofagrigus",
"Tirtouga",
"Carracosta",
"Archen",
"Archeops",
"Trubbish",
"Garbodor",
"Zorua",
"Zoroark",
"Minccino",
"Cinccino",
"Gothita",
"Gothorita",
"Gothitelle",
"Solosis",
"Duosion",
"Reuniclus",
"Ducklett",
"Swanna",
"Vanillite",
"Vanillish",
"Vanilluxe",
"Deerling",
"Sawsbuck",
"Emolga",
"Karrablast",
"Escavalier",
"Foongus",
"Amoonguss",
"Frillish",
"Jellicent",
"Alomomola",
"Joltik",
"Galvantula",
"Ferroseed",
"Ferrothorn",
"Klink",
"Klang",
"Klinklang",
"Tynamo",
"Eelektrik",
"Eelektross",
"Elgyem",
"Beheeyem",
"Litwick",
"Lampent",
"Chandelure",
"Axew",
"Fraxure",
"Haxorus",
"Cubchoo",
"Beartic",
"Cryogonal",
"Shelmet",
"Accelgor",
"Stunfisk",
"Mienfoo",
"Mienshao",
"Druddigon",
"Golett",
"Golurk",
"Pawniard",
"Bisharp",
"Bouffalant",
"Rufflet",
"Braviary",
"Vullaby",
"Mandibuzz",
"Heatmor",
"Durant",
"Deino",
"Zweilous",
"Hydreigon",
"Larvesta",
"Volcarona",
"Cobalion",
"Terrakion",
"Virizion",
"Tornadus",
"Thundurus",
"Reshiram",
"Zekrom",
"Landorus",
"Kyurem",
"Keldeo-Ordinary",
"Meloetta-Aria",
"Genesect",
"Chespin",
"Quilladin",
"Chesnaught",
"Fennekin",
"Braixen",
"Delphox",
"Froakie",
"Frogadier",
"Greninja",
"Bunnelby",
"Diggersby",
"Fletchling",
"Fletchinder",
"Talonflame",
"Scatterbug",
"Spewpa",
"Vivillon",
"Litleo",
"Pyroar",
"Flabebe-Red-Flower",
"Floette-Red-Flower",
"Florges-Red-Flower",
"Skiddo",
"Gogoat",
"Pancham",
"Pangoro",
"Furfrou-Natural",
"Espurr",
"Meowstic",
"Honedge",
"Doublade",
"Aegislash-Shield",
"Spritzee",
"Aromatisse",
"Swirlix",
"Slurpuff",
"Inkay",
"Malamar",
"Binacle",
"Barbaracle",
"Skrelp",
"Dragalge",
"Clauncher",
"Clawitzer",
"Helioptile",
"Heliolisk",
"Tyrunt",
"Tyrantrum",
"Amaura",
"Aurorus",
"Sylveon",
"Hawlucha",
"Dedenne",
"Carbink",
"Goomy",
"Sliggoo",
"Goodra",
"Klefki",
"Phantump",
"Trevenant",
"Pumpkaboo-Average",
"Gourgeist-Average",
"Bergmite",
"Avalugg",
"Noibat",
"Noivern",
"Xerneas-Neutral",
"Yveltal",
"Zygarde-50-Aura-Break",
"Diancie",
"Hoopa-Confined",
"Volcanion",
"Rowlet",
"Dartrix",
"Decidueye",
"Litten",
"Torracat",
"Incineroar",
"Popplio",
"Brionne",
"Primarina",
"Pikipek",
"Trumbeak",
"Toucannon",
"Yungoos",
"Gumshoos",
"Grubbin",
"Charjabug",
"Vikavolt",
"Crabrawler",
"Crabominable",
"Oricorio-Baile",
"Cutiefly",
"Ribombee",
"Rockruff",
"Lycanroc",
"Wishiwashi",
"Mareanie",
"Toxapex",
"Mudbray",
"Mudsdale",
"Dewpider",
"Araquanid",
"Fomantis",
"Lurantis",
"Morelull",
"Shiinotic",
"Salandit",
"Salazzle",
"Stufful",
"Bewear",
"Bounsweet",
"Steenee",
"Tsareena",
"Comfey",
"Oranguru",
"Passimian",
"Wimpod",
"Golisopod",
"Sandygast",
"Palossand",
"Pyukumuku",
"Type-Null",
"Silvally-Normal",
"Minior-Meteor-Red",
"Komala",
"Turtonator",
"Togedemaru",
"Mimikyu-Disguised",
"Bruxish",
"Drampa",
"Dhelmise",
"Jangmo-o",
"Hakamo-o",
"Kommo-o",
"Tapu Koko",
"Tapu Lele",
"Tapu Bulu",
"Tapu Fini",
"Cosmog",
"Cosmoem",
"Solgaleo",
"Lunala",
"Nihilego",
"Buzzwole",
"Pheromosa",
"Xurkitree",
"Celesteela",
"Kartana",
"Guzzlord",
"Necrozma",
"Magearna",
"Marshadow",
"Poipole",
"Naganadel",
"Stakataka",
"Blacephalon",
"Zeraora",
"Meltan",
"Melmetal",
"Grookey",
"Thwackey",
"Rillaboom",
"Scorbunny",
"Raboot",
"Cinderace",
"Sobble",
"Drizzile",
"Inteleon",
"Skwovet",
"Greedent",
"Rookidee",
"Corvisquire",
"Corviknight",
"Blipbug",
"Dottler",
"Orbeetle",
"Nickit",
"Thievul",
"Gossifleur",
"Eldegoss",
"Wooloo",
"Dubwool",
"Chewtle",
"Drednaw",
"Yamper",
"Boltund",
"Rolycoly",
"Carkol",
"Coalossal",
"Applin",
"Flapple",
"Appletun",
"Silicobra",
"Sandaconda",
"Cramorant",
"Arrokuda",
"Barraskewda",
"Toxel",
"Toxtricity",
"Sizzlipede",
"Centiskorch",
"Clobbopus",
"Grapploct",
"Sinistea-Phony",
"Polteageist-Phony",
"Hatenna",
"Hattrem",
"Hatterene",
"Impidimp",
"Morgrem",
"Grimmsnarl",
"Obstagoon",
"Perrserker",
"Cursola",
"Sirfetch’d",
"Mr. Rime",
"Runerigus",
"Milcery",
"Alcremie-Strawberry-Vanilla-Cream",
"Falinks",
"Pincurchin",
"Snom",
"Frosmoth",
"Stonjourner",
"Eiscue-Ice-Face",
"Indeedee-Male",
"Morpeko-Full-Belly",
"Cufant",
"Copperajah",
"Dracozolt",
"Arctozolt",
"Dracovish",
"Arctovish",
"Duraludon",
"Dreepy",
"Drakloak",
"Dragapult",
"Zacian-Hero-Of-Many-Battles",
"Zamazenta-Hero-Of-Many-Battles",
"Eternatus",
"Kubfu",
"Urshifu-Single-Strike-Style",
"Zarude",
"Regieleki",
"Regidrago",
"Glastrier",
"Spectrier",
"Calyrex",
"Wyrdeer",
"Kleavor",
"Ursaluna",
"Basculegion",
"Sneasler",
"Overqwil",
"Enamorus",
"Venusaur-Mega",
"Charizard-Mega-X",
"Charizard-Mega-Y",
"Blastoise-Mega",
"Beedrill-Mega",
"Pidgeot-Mega",
"Alakazam-Mega",
"Slowbro-Mega",
"Gengar-Mega",
"Kangaskhan-Mega",
"Pinsir-Mega",
"Gyarados-Mega",
"Aerodactyl-Mega",
"Mewtwo-Mega-X",
"Mewtwo-Mega-Y",
"Ampharos-Mega",
"Steelix-Mega",
"Scizor-Mega",
"Heracross-Mega",
"Houndoom-Mega",
"Tyranitar-Mega",
"Sceptile-Mega",
"Blaziken-Mega",
"Swampert-Mega",
"Gardevoir-Mega",
"Sableye-Mega",
"Mawile-Mega",
"Aggron-Mega",
"Medicham-Mega",
"Manectric-Mega",
"Sharpedo-Mega",
"Camerupt-Mega",
"Altaria-Mega",
"Banette-Mega",
"Absol-Mega",
"Glalie-Mega",
"Salamence-Mega",
"Metagross-Mega",
"Latias-Mega",
"Latios-Mega",
"Lopunny-Mega",
"Garchomp-Mega",
"Lucario-Mega",
"Abomasnow-Mega",
"Gallade-Mega",
"Audino-Mega",
"Diancie-Mega",
"Rayquaza-Mega",
"Kyogre-Primal",
"Groudon-Primal",
"Rattata-Alola",
"Raticate-Alola",
"Raichu-Alola",
"Sandshrew-Alola",
"Sandslash-Alola",
"Vulpix-Alola",
"Ninetales-Alola",
"Diglett-Alola",
"Dugtrio-Alola",
"Meowth-Alola",
"Persian-Alola",
"Geodude-Alola",
"Graveler-Alola",
"Golem-Alola",
"Grimer-Alola",
"Muk-Alola",
"Exeggutor-Alola",
"Marowak-Alola",
"Meowth-Galar",
"Ponyta-Galar",
"Rapidash-Galar",
"Slowpoke-Galar",
"Slowbro-Galar",
"Farfetchd-Galar",
"Weezing-Galar",
"Mr. Mime-Galar",
"Articuno-Galar",
"Zapdos-Galar",
"Moltres-Galar",
"Slowking-Galar",
"Corsola-Galar",
"Zigzagoon-Galar",
"Linoone-Galar",
"Darumaka-Galar",
"Darmanitan-Galar-Standard-Mode",
"Yamask-Galar",
"Stunfisk-Galar",
"Growlithe-Hisui",
"Arcanine-Hisui",
"Voltorb-Hisui",
"Electrode-Hisui",
"Typhlosion-Hisui",
"Qwilfish-Hisui",
"Sneasel-Hisui",
"Samurott-Hisui",
"Lilligant-Hisui",
"Zorua-Hisui",
"Zoroark-Hisui",
"Braviary-Hisui",
"Sliggoo-Hisui",
"Goodra-Hisui",
"Avalugg-Hisui",
"Decidueye-Hisui",
"Pikachu-Cosplay",
"Pikachu-Rock-Star",
"Pikachu-Belle",
"Pikachu-Pop-Star",
"Pikachu-Ph-D",
"Pikachu-Libre",
"Pikachu-Original-Cap",
"Pikachu-Hoenn-Cap",
"Pikachu-Sinnoh-Cap",
"Pikachu-Unova-Cap",
"Pikachu-Kalos-Cap",
"Pikachu-Alola-Cap",
"Pikachu-Partner-Cap",
"Pikachu-World-Cap",
"Pichu-Spiky-Eared",
"Unown-B",
"Unown-C",
"Unown-D",
"Unown-E",
"Unown-F",
"Unown-G",
"Unown-H",
"Unown-I",
"Unown-J",
"Unown-K",
"Unown-L",
"Unown-M",
"Unown-N",
"Unown-O",
"Unown-P",
"Unown-Q",
"Unown-R",
"Unown-S",
"Unown-T",
"Unown-U",
"Unown-V",
"Unown-W",
"Unown-X",
"Unown-Y",
"Unown-Z",
"Unown-Emark",
"Unown-Qmark",
"Castform-Sunny",
"Castform-Rainy",
"Castform-Snowy",
"Deoxys-Attack",
"Deoxys-Defense",
"Deoxys-Speed",
"Burmy-Sandy-Cloak",
"Burmy-Trash-Cloak",
"Wormadam-Sandy-Cloak",
"Wormadam-Trash-Cloak",
"Cherrim-Sunshine",
"Shellos",
"Gastrodon",
"Rotom-Heat",
"Rotom-Wash",
"Rotom-Frost",
"Rotom-Fan",
"Rotom-Mow",
"Dialga-Origin",
"Palkia-Origin",
"Giratina-Origin",
"Shaymin-Sky",
"Arceus-Fighting",
"Arceus-Flying",
"Arceus-Poison",
"Arceus-Ground",
"Arceus-Rock",
"Arceus-Bug",
"Arceus-Ghost",
"Arceus-Steel",
"Arceus-Fire",
"Arceus-Water",
"Arceus-Grass",
"Arceus-Electric",
"Arceus-Psychic",
"Arceus-Ice",
"Arceus-Dragon",
"Arceus-Dark",
"Arceus-Fairy",
"Basculin-Blue-Striped",
"Basculin-White-Striped",
"Darmanitan-Zen-Mode",
"Darmanitan-Galar-Zen-Mode",
"Deerling-Summer",
"Deerling-Autumn",
"Deerling-Winter",
"Sawsbuck-Summer",
"Sawsbuck-Autumn",
"Sawsbuck-Winter",
"Tornadus-Therian",
"Thundurus-Therian",
"Landorus-Therian",
"Enamorus-Therian",
"Kyurem-White",
"Kyurem-Black",
"Keldeo-Resolute",
"Meloetta-Pirouette",
"Genesect-Douse-Drive",
"Genesect-Shock-Drive",
"Genesect-Burn-Drive",
"Genesect-Chill-Drive",
"Greninja-Battle-Bond",
"Greninja-Ash",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Vivillon",
"Flabebe-Yellow-Flower",
"Flabebe-Orange-Flower",
"Flabebe-Blue-Flower",
"Flabebe-White-Flower",
"Floette-Yellow-Flower",
"Floette-Orange-Flower",
"Floette-Blue-Flower",
"Floette-White-Flower",
"Floette-Eternal-Flower",
"Florges-Yellow-Flower",
"Florges-Orange-Flower",
"Florges-Blue-Flower",
"Florges-White-Flower",
"Furfrou-Heart-Trim",
"Furfrou-Star-Trim",
"Furfrou-Diamond-Trim",
"Furfrou-Debutante-Trim",
"Furfrou-Matron-Trim",
"Furfrou-Dandy-Trim",
"Furfrou-La-Reine-Trim",
"Furfrou-Kabuki-Trim",
"Furfrou-Pharaoh-Trim",
"Meowstic-F",
"Aegislash-Blade",
"Pumpkaboo-Small",
"Pumpkaboo-Large",
"Pumpkaboo-Super",
"Gourgeist-Small",
"Gourgeist-Large",
"Gourgeist-Super",
"Xerneas-Active",
"Zygarde-10-Aura-Break",
"Zygarde-10-Power-Construct",
"Zygarde-50-Power-Construct",
"Zygarde-Complete",
"Hoopa-Unbound",
"Oricorio-Pom-Pom",
"Oricorio-Pau",
"Oricorio-Sensu",
"Rockruff-Own-Tempo",
"Lycanroc-Midnight",
"Lycanroc-Dusk",
"Wishiwashi-School",
"Silvally-Fighting",
"Silvally-Flying",
"Silvally-Poison",
"Silvally-Ground",
"Silvally-Rock",
"Silvally-Bug",
"Silvally-Ghost",
"Silvally-Steel",
"Silvally-Fire",
"Silvally-Water",
"Silvally-Grass",
"Silvally-Electric",
"Silvally-Psychic",
"Silvally-Ice",
"Silvally-Dragon",
"Silvally-Dark",
"Silvally-Fairy",
"Minior-Meteor-Orange",
"Minior-Meteor-Yellow",
"Minior-Meteor-Green",
"Minior-Meteor-Blue",
"Minior-Meteor-Indigo",
"Minior-Meteor-Violet",
"Minior-Core-Red",
"Minior-Core-Orange",
"Minior-Core-Yellow",
"Minior-Core-Green",
"Minior-Core-Blue",
"Minior-Core-Indigo",
"Minior-Core-Violet",
"Mimikyu-Busted",
"Necrozma-Dusk-Mane",
"Necrozma-Dawn-Wings",
"Necrozma-Ultra",
"Magearna-Original-Color",
"Cramorant-Gulping",
"Cramorant-Gorging",
"Toxtricity",
"Sinistea-Antique",
"Polteageist-Antique",
"Alcremie-Strawberry-Ruby-Cream",
"Alcremie-Strawberry-Matcha-Cream",
"Alcremie-Strawberry-Mint-Cream",
"Alcremie-Strawberry-Lemon-Cream",
"Alcremie-Strawberry-Salted-Cream",
"Alcremie-Strawberry-Ruby-Swirl",
"Alcremie-Strawberry-Caramel-Swirl",
"Alcremie-Strawberry-Rainbow-Swirl",
"Eiscue-Noice-Face",
"Indeedee-Female",
"Morpeko-Hangry",
"Zacian-Crowned-Sword",
"Zamazenta-Crowned-Shield",
"Eternatus-Eternamax",
"Urshifu-Rapid-Strike-Style",
"Zarude-Dada",
"Calyrex-Ice-Rider",
"Calyrex-Shadow-Rider",
"Basculegion-F",
"Alcremie-Berry-Vanilla-Cream",
"Alcremie-Berry-Ruby-Cream",
"Alcremie-Berry-Matcha-Cream",
"Alcremie-Berry-Mint-Cream",
"Alcremie-Berry-Lemon-Cream",
"Alcremie-Berry-Salted-Cream",
"Alcremie-Berry-Ruby-Swirl",
"Alcremie-Berry-Caramel-Swirl",
"Alcremie-Berry-Rainbow-Swirl",
"Alcremie-Love-Vanilla-Cream",
"Alcremie-Love-Ruby-Cream",
"Alcremie-Love-Matcha-Cream",
"Alcremie-Love-Mint-Cream",
"Alcremie-Love-Lemon-Cream",
"Alcremie-Love-Salted-Cream",
"Alcremie-Love-Ruby-Swirl",
"Alcremie-Love-Caramel-Swirl",
"Alcremie-Love-Rainbow-Swirl",
"Alcremie-Star-Vanilla-Cream",
"Alcremie-Star-Ruby-Cream",
"Alcremie-Star-Matcha-Cream",
"Alcremie-Star-Mint-Cream",
"Alcremie-Star-Lemon-Cream",
"Alcremie-Star-Salted-Cream",
"Alcremie-Star-Ruby-Swirl",
"Alcremie-Star-Caramel-Swirl",
"Alcremie-Star-Rainbow-Swirl",
"Alcremie-Clover-Vanilla-Cream",
"Alcremie-Clover-Ruby-Cream",
"Alcremie-Clover-Matcha-Cream",
"Alcremie-Clover-Mint-Cream",
"Alcremie-Clover-Lemon-Cream",
"Alcremie-Clover-Salted-Cream",
"Alcremie-Clover-Ruby-Swirl",
"Alcremie-Clover-Caramel-Swirl",
"Alcremie-Clover-Rainbow-Swirl",
"Alcremie-Flower-Vanilla-Cream",
"Alcremie-Flower-Ruby-Cream",
"Alcremie-Flower-Matcha-Cream",
"Alcremie-Flower-Mint-Cream",
"Alcremie-Flower-Lemon-Cream",
"Alcremie-Flower-Salted-Cream",
"Alcremie-Flower-Ruby-Swirl",
"Alcremie-Flower-Caramel-Swirl",
"Alcremie-Flower-Rainbow-Swirl",
"Alcremie-Ribbon-Vanilla-Cream",
"Alcremie-Ribbon-Ruby-Cream",
"Alcremie-Ribbon-Matcha-Cream",
"Alcremie-Ribbon-Mint-Cream",
"Alcremie-Ribbon-Lemon-Cream",
"Alcremie-Ribbon-Salted-Cream",
"Alcremie-Ribbon-Ruby-Swirl",
"Alcremie-Ribbon-Caramel-Swirl",
"Alcremie-Ribbon-Rainbow-Swirl",
"Sprigatito",
"Floragato",
"Meowscarada",
"Fuecoco",
"Crocalor",
"Skeledirge",
"Quaxly",
"Quaxwell",
"Quaquaval",
"Lechonk",
"Oinkologne",
"Oinkologne-F",
"Tarountula",
"Spidops",
"Nymble",
"Lokix",
"Pawmi",
"Pawmo",
"Pawmot",
"Tandemaus",
"Maushold-Family-Of-Three",
"Maushold-Family-Of-Four",
"Fidough",
"Dachsbun",
"Smoliv",
"Dolliv",
"Arboliva",
"Squawkabilly-Green-Plumage",
"Squawkabilly-Blue-Plumage",
"Squawkabilly-Yellow-Plumage",
"Squawkabilly-White-Plumage",
"Nacli",
"Naclstack",
"Garganacl",
"Charcadet",
"Armarouge",
"Ceruledge",
"Tadbulb",
"Bellibolt",
"Wattrel",
"Kilowattrel",
"Maschiff",
"Mabosstiff",
"Shroodle",
"Grafaiai",
"Bramblin",
"Brambleghast",
"Toedscool",
"Toedscruel",
"Klawf",
"Capsakid",
"Scovillain",
"Rellor",
"Rabsca",
"Flittle",
"Espathra",
"Tinkatink",
"Tinkatuff",
"Tinkaton",
"Wiglett",
"Wugtrio",
"Bombirdier",
"Finizen",
"Palafin-Zero",
"Palafin-Hero",
"Varoom",
"Revavroom",
"Cyclizar",
"Orthworm",
"Glimmet",
"Glimmora",
"Greavard",
"Houndstone",
"Flamigo",
"Cetoddle",
"Cetitan",
"Veluza",
"Dondozo",
"Tatsugiri",
"Tatsugiri",
"Tatsugiri",
"Annihilape",
"Clodsire",
"Farigiraf",
"Dudunsparce",
"Dudunsparce",
"Kingambit",
"Great Tusk",
"Scream Tail",
"Brute Bonnet",
"Flutter Mane",
"Slither Wing",
"Sandy Shocks",
"Iron Treads",
"Iron Bundle",
"Iron Hands",
"Iron Jugulis",
"Iron Moth",
"Iron Thorns",
"Frigibax",
"Arctibax",
"Baxcalibur",
"Gimmighoul-Chest",
"Gimmighoul-Roaming",
"Gholdengo",
"Wo-Chien",
"Chien-Pao",
"Ting-Lu",
"Chi-Yu",
"Roaring Moon",
"Iron Valiant",
"Koraidon",
"Miraidon",
"Tauros-Paldea-Combat",
"Tauros-Paldea-Blaze",
"Tauros-Paldea-Aqua",
"Wooper-Paldea",
"Walking Wake",
"Iron Leaves",
"Dipplin",
"Poltchageist",
"Poltchageist",
"Sinistcha",
"Sinistcha",
"Okidogi",
"Munkidori",
"Fezandipiti",
"Ogerpon",
"Ogerpon-Wellspring",
"Ogerpon-Hearthflame",
"Ogerpon-Cornerstone",
"Ogerpon-Teal-Mask-Tera",
"Ogerpon-Wellspring-Mask-Tera",
"Ogerpon-Hearthflame-Mask-Tera",
"Ogerpon-Cornerstone-Mask-Tera",
"Ursaluna-Bloodmoon",
"Archaludon",
"Hydrapple",
"Gouging Fire",
"Raging Bolt",
"Iron Boulder",
"Iron Crown",
"Terapagos-Normal",
"Terapagos-Terastal",
"Terapagos-Stellar",
"Pecharunt"
];
const abilities = [
"Stench",
"Drizzle",
"Speed Boost",
"Battle Armor",
"Sturdy",
"Damp",
"Limber",
"Sand Veil",
"Static",
"Volt Absorb",
"Water Absorb",
"Oblivious",
"Cloud Nine",
"Compound Eyes",
"Insomnia",
"Color Change",
"Immunity",
"Flash Fire",
"Shield Dust",
"Own Tempo",
"Suction Cups",
"Intimidate",
"Shadow Tag",
"Rough Skin",
"Wonder Guard",
"Levitate",
"Effect Spore",
"Synchronize",
"Clear Body",
"Natural Cure",
"Lightning Rod",
"Serene Grace",
"Swift Swim",
"Chlorophyll",
"Illuminate",
"Trace",
"Huge Power",
"Poison Point",
"Inner Focus",
"Magma Armor",
"Water Veil",
"Magnet Pull",
"Soundproof",
"Rain Dish",
"Sand Stream",
"Pressure",
"Thick Fat",
"Early Bird",
"Flame Body",
"Run Away",
"Keen Eye",
"Hyper Cutter",
"Pickup",
"Truant",
"Hustle",
"Cute Charm",
"Plus",
"Minus",
"Forecast",
"Sticky Hold",
"Shed Skin",
"Guts",
"Marvel Scale",
"Liquid Ooze",
"Overgrow",
"Blaze",
"Torrent",
"Swarm",
"Rock Head",
"Drought",
"Arena Trap",
"Vital Spirit",
"White Smoke",
"Pure Power",
"Shell Armor",
"Air Lock",
"Tangled Feet",
"Motor Drive",
"Rivalry",
"Steadfast",
"Snow Cloak",
"Gluttony",
"Anger Point",
"Unburden",
"Heatproof",
"Simple",
"Dry Skin",
"Download",
"Iron Fist",
"Poison Heal",
"Adaptability",
"Skill Link",
"Hydration",
"Solar Power",
"Quick Feet",
"Normalize",
"Sniper",
"Magic Guard",
"No Guard",
"Stall",
"Technician",
"Leaf Guard",
"Klutz",
"Mold Breaker",
"Super Luck",
"Aftermath",
"Anticipation",
"Forewarn",
"Unaware",
"Tinted Lens",
"Filter",
"Slow Start",
"Scrappy",
"Storm Drain",
"Ice Body",
"Solid Rock",
"Snow Warning",
"Honey Gather",
"Frisk",
"Reckless",
"Multitype",
"Flower Gift",
"Bad Dreams",
"Pickpocket",
"Sheer Force",
"Contrary",
"Unnerve",
"Defiant",
"Defeatist",
"Cursed Body",
"Healer",
"Friend Guard",
"Weak Armor",
"Heavy Metal",
"Light Metal",
"Multiscale",
"Toxic Boost",
"Flare Boost",
"Harvest",
"Telepathy",
"Moody",
"Overcoat",
"Poison Touch",
"Regenerator",
"Big Pecks",
"Sand Rush",
"Wonder Skin",
"Analytic",
"Illusion",
"Imposter",
"Infiltrator",
"Mummy",
"Moxie",
"Justified",
"Rattled",
"Magic Bounce",
"Sap Sipper",
"Prankster",
"Sand Force",
"Iron Barbs",
"Zen Mode",
"Victory Star",
"Turboblaze",
"Teravolt",
"Aroma Veil",
"Flower Veil",
"Cheek Pouch",
"Protean",
"Fur Coat",
"Magician",
"Bulletproof",
"Competitive",
"Strong Jaw",
"Refrigerate",
"Sweet Veil",
"Stance Change",
"Gale Wings",
"Mega Launcher",
"Grass Pelt",
"Symbiosis",
"Tough Claws",
"Pixilate",
"Gooey",
"Aerilate",
"Parental Bond",
"Dark Aura",
"Fairy Aura",
"Aura Break",
"Primordial Sea",
"Desolate Land",
"Delta Stream",
"Stamina",
"Wimp Out",
"Emergency Exit",
"Water Compaction",
"Merciless",
"Shields Down",
"Stakeout",
"Water Bubble",
"Steelworker",
"Berserk",
"Slush Rush",
"Long Reach",
"Liquid Voice",
"Triage",
"Galvanize",
"Surge Surfer",
"Schooling",
"Disguise",
"Battle Bond",
"Power Construct",
"Corrosion",
"Comatose",
"Queenly Majesty",
"Innards Out",
"Dancer",
"Battery",
"Fluffy",
"Dazzling",
"Soul Heart",
"Tangling Hair",
"Receiver",
"Power Of Alchemy",
"Beast Boost",
"Rks System",
"Electric Surge",
"Psychic Surge",
"Misty Surge",
"Grassy Surge",
"Full Metal Body",
"Shadow Shield",
"Prism Armor",
"Neuroforce",
"Intrepid Sword",
"Dauntless Shield",
"Libero",
"Ball Fetch",
"Cotton Down",
"Propeller Tail",
"Mirror Armor",
"Gulp Missile",
"Stalwart",
"Steam Engine",
"Punk Rock",
"Sand Spit",
"Ice Scales",
"Ripen",
"Ice Face",
"Power Spot",
"Mimicry",
"Screen Cleaner",
"Steely Spirit",
"Perish Body",
"Wandering Spirit",
"Gorilla Tactics",
"Neutralizing Gas",
"Pastel Veil",
"Hunger Switch",
"Quick Draw",
"Unseen Fist",
"Curious Medicine",
"Transistor",
"Dragons Maw",
"Chilling Neigh",
"Grim Neigh",
"As One (Glastrier)",
"As One (Spectrier)",
"Lingering Aroma",
"Seed Sower",
"Thermal Exchange",
"Anger Shell",
"Purifying Salt",
"Well Baked Body",
"Wind Rider",
"Guard Dog",
"Rocky Payload",
"Wind Power",
"Zero To Hero",
"Commander",
"Electromorphosis",
"Protosynthesis",
"Quark Drive",
"Good As Gold",
"Vessel Of Ruin",
"Sword Of Ruin",
"Tablets Of Ruin",
"Beads Of Ruin",
"Orichalcum Pulse",
"Hadron Engine",
"Opportunist",
"Cud Chew",
"Sharpness",
"Supreme Overlord",
"Costar",
"Toxic Debris",
"Armor Tail",
"Earth Eater",
"Mycelium Might",
"Hospitality",
"Mind's Eye",
"Embody Aspect (Teal)",
"Embody Aspect (Hearthflame)",
"Embody Aspect (Wellspring)",
"Embody Aspect (Cornerstone)",
"Toxic Chain",
"Supersweet Syrup",
"Tera Shift",
"Tera Shell",
"Teraform Zero",
"Poison Puppeteer",
"Mystic Charm",
"Leaf Rush",
"Fiery Charge",
"Ethereal Echo",
"Striker",
"Acid Coat",
"Eclipsate",
"Verdant Guard",
"Chatting",
"Lethal Venom",
"Ultra Boost",
"Hypnotic Lag",
];
const natures = [
  "Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax",
  "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash",
  "Calm", "Gentle", "Sassy", "Careful", "Quirky"
];
const charMap = {
0: " ", 1: "À", 2: "Á", 3: "Â", 4: "Ç", 5: "È", 6: "É", 7: "Ê", 8: "Ë", 9: "Ì",
  10: "こ", 11: "Î", 12: "Ï", 13: "Ò", 14: "Ó", 15: "Ô", 16: "Œ", 17: "Ù", 18: "Ú", 19: "Û",
  20: "Ñ", 21: "ß", 22: "à", 23: "á", 24: "ね", 25: "ç", 26: "è", 27: "é", 28: "ê", 29: "ë",
  30: "ì", 31: "ま", 32: "î", 33: "ï", 34: "ò", 35: "ó", 36: "ô", 37: "œ", 38: "ù", 39: "ú",
  40: "û", 41: "ñ", 42: "º", 43: "ª", 44: "�", 45: "&", 46: "+", 47: "あ", 48: "ぃ", 49: "ぅ",
  50: "ぇ", 51: "ぉ", 52: "v", 53: "=", 54: "ょ", 55: "が", 56: "ぎ", 57: "ぐ", 58: "げ", 59: "ご",
  60: "ざ", 61: "じ", 62: "ず", 63: "ぜ", 64: "ぞ", 65: "だ", 66: "ぢ", 67: "づ", 68: "で", 69: "ど",
  70: "ば", 71: "び", 72: "ぶ", 73: "べ", 74: "ぼ", 75: "ぱ", 76: "ぴ", 77: "ぷ", 78: "ぺ", 79: "ぽ",
  80: "っ", 81: "¿", 82: "¡", 83: "P\u200dk", 84: "M\u200dn", 85: "P\u200do", 86: "K\u200dé", 87: "�", 88: "�", 89: "�",
  90: "Í", 91: "%", 92: "(", 93: ")", 94: "セ", 95: "ソ", 96: "タ", 97: "チ", 98: "ツ", 99: "テ",
  100: "ト", 101: "ナ", 102: "ニ", 103: "ヌ", 104: "â", 105: "ノ", 106: "ハ", 107: "ヒ", 108: "フ", 109: "ヘ",
  110: "ホ", 111: "í", 112: "ミ", 113: "ム", 114: "メ", 115: "モ", 116: "ヤ", 117: "ユ", 118: "ヨ", 119: "ラ",
  120: "リ", 121: "⬆", 122: "⬇", 123: "⬅", 124: "➡", 125: "ヲ", 126: "ン", 127: "ァ", 128: "ィ", 129: "ゥ",
  130: "ェ", 131: "ォ", 132: "ャ", 133: "ュ", 134: "ョ", 135: "ガ", 136: "ギ", 137: "グ", 138: "ゲ", 139: "ゴ",
  140: "ザ", 141: "ジ", 142: "ズ", 143: "ゼ", 144: "ゾ", 145: "ダ", 146: "ヂ", 147: "ヅ", 148: "デ", 149: "ド",
  150: "バ", 151: "ビ", 152: "ブ", 153: "ベ", 154: "ボ", 155: "パ", 156: "ピ", 157: "プ", 158: "ペ", 159: "ポ",
  160: "ッ", 161: "0", 162: "1", 163: "2", 164: "3", 165: "4", 166: "5", 167: "6", 168: "7", 169: "8",
  170: "9", 171: "!", 172: "?", 173: ".", 174: "-", 175: "・", 176: "…", 177: "“", 178: "”", 179: "‘",
  180: "’", 181: "♂", 182: "♀", 183: "$", 184: ",", 185: "×", 186: "/", 187: "A", 188: "B", 189: "C",
  190: "D", 191: "E", 192: "F", 193: "G", 194: "H", 195: "I", 196: "J", 197: "K", 198: "L", 199: "M",
  200: "N", 201: "O", 202: "P", 203: "Q", 204: "R", 205: "S", 206: "T", 207: "U", 208: "V", 209: "W",
  210: "X", 211: "Y", 212: "Z", 213: "a", 214: "b", 215: "c", 216: "d", 217: "e", 218: "f", 219: "g",
  220: "h", 221: "i", 222: "j", 223: "k", 224: "l", 225: "m", 226: "n", 227: "o", 228: "p", 229: "q",
  230: "r", 231: "s", 232: "t", 233: "u", 234: "v", 235: "w", 236: "x", 237: "y", 238: "z", 239: "▶",
  240: ":", 241: "Ä", 242: "Ö", 243: "Ü", 244: "ä", 245: "ö", 246: "ü", 247: "⬆", 248: "⬇", 249: "⬅",
  250: "�", 251: "�", 252: "�", 253: "�", 254: "�", 255: ""
};
// --- END DATA ARRAYS ---

const DIRECT_MODE = false;
// ... (all your other constants like PARTY_COUNT_DIRECT_OFFSET, SAVE_BLOCK_SIZE, PC_BOX_START_SECTION_ID etc.) ...
// ... PASTE ALL YOUR CONSTANTS HERE ...
const PARTY_COUNT_DIRECT_OFFSET = 0x0203610d - 0x02000000;
const PARTY_DATA_DIRECT_OFFSET = 0x02036110 - 0x02000000;
const TERMINATOR = 0xFF;
const MON_NAME_LENGTH = 10;
const PLAYER_NAME_LENGTH = 10; // Changed to 10 as per Lua
const BOX_MON_SIZE = 80;
const PARTY_MON_SIZE = 100;
const SAVE_BLOCK_SIZE = 0xE000;
const SECTION_SAVE_COUNTER_OFFSET = 0x0FFC;
const NUM_SECTIONS_PER_BLOCK = 14;
const SECTION_ID_OFFSET_IN_DATA_BLOCK = 0x0FF4;
const PARTY_DATA_SECTION_ID = 1;
const PARTY_COUNT_OFFSET_IN_SECTION = 0x01a7 //0x0057;
const PARTY_MEMBERS_OFFSET_IN_SECTION = 0x0238;
const PC_BOX_START_SECTION_ID = 5; 
const PC_BOX_DATA_INTERNAL_OFFSET = 0x0004; // This is the constant we'll likely adjust


// --- Helper functions ---
// Helper functions for processing save data
function findActiveSaveOffset(dataView) {
    console.log("(findActiveSaveOffset) Entered function.");
    const counterOffsetWithinSlot = SECTION_SAVE_COUNTER_OFFSET; // Should be 0x0FFC
    const sbs = SAVE_BLOCK_SIZE;                             // Should be 0xE000

    if (!dataView || typeof dataView.byteLength === 'undefined') {
        console.error("(findActiveSaveOffset) dataView is invalid!");
        // Default to 0, but this indicates a problem earlier in the code.
        return 0; 
    }
    // console.log(`(findActiveSaveOffset) dataView.byteLength: ${dataView.byteLength}, SAVE_BLOCK_SIZE: ${sbs}`);

    if (dataView.byteLength < sbs) { // Check if file is smaller than even ONE save block
        console.warn("(findActiveSaveOffset) Save file is smaller than one expected save block. Cannot determine active block. Defaulting to 0.");
        return 0;
    }
    if (dataView.byteLength < sbs * 2) {
        console.warn("(findActiveSaveOffset) Save file is smaller than two expected save blocks. Assuming first block (0x0) is active.");
        return 0;
    }

    // Boundary check for reading counters to prevent errors if file is oddly truncated but still > sbs*2
    if (counterOffsetWithinSlot + 4 > dataView.byteLength) { // Check for counter 1
        console.error(`(findActiveSaveOffset) Counter 1 offset 0x${counterOffsetWithinSlot.toString(16)} + 4 is out of bounds for file size 0x${dataView.byteLength.toString(16)}.`);
        console.warn("(findActiveSaveOffset) Defaulting to save block 0 due to counter 1 read boundary issue.");
        return 0;
    }
    if (sbs + counterOffsetWithinSlot + 4 > dataView.byteLength) { // Check for counter 2
        console.error(`(findActiveSaveOffset) Counter 2 offset 0x${(sbs + counterOffsetWithinSlot).toString(16)} + 4 is out of bounds for file size 0x${dataView.byteLength.toString(16)}.`);
        console.warn("(findActiveSaveOffset) Defaulting to save block 0 due to counter 2 read boundary issue.");
        return 0; 
    }

    let counter1, counter2;
    try {
        counter1 = dataView.getUint32(counterOffsetWithinSlot, true);
        counter2 = dataView.getUint32(sbs + counterOffsetWithinSlot, true);
    } catch (e) {
        console.error("(findActiveSaveOffset) Error reading counters from DataView:", e);
        console.warn("(findActiveSaveOffset) Defaulting to save block 0 due to error reading counters.");
        return 0; // Default if reading fails
    }

    console.log(`(findActiveSaveOffset) Save Counter Slot 1 (at 0x${counterOffsetWithinSlot.toString(16)}): ${counter1} (0x${counter1.toString(16)})`);
    console.log(`(findActiveSaveOffset) Save Counter Slot 2 (at 0x${(sbs + counterOffsetWithinSlot).toString(16)}): ${counter2} (0x${counter2.toString(16)})`);

    // --- Refined Logic for Active Block Determination ---

    // Case 1: Slot 1 appears uninitialized or very old, Slot 2 is newly started.
    if (counter1 === 0xFFFFFFFF && counter2 > 0 && counter2 < 10000) { // Increased upper bound for "newly started"
        console.log("(findActiveSaveOffset) Scenario: Slot 1 maxed/old, Slot 2 new. Choosing Slot 2 (offset 0x" + sbs.toString(16) + ").");
        return sbs; // Return SAVE_BLOCK_SIZE (e.g., 0xE000)
    }

    // Case 2: Slot 2 appears uninitialized or very old, Slot 1 is newly started.
    if (counter2 === 0xFFFFFFFF && counter1 > 0 && counter1 < 10000) { // Increased upper bound
        console.log("(findActiveSaveOffset) Scenario: Slot 2 maxed/old, Slot 1 new. Choosing Slot 1 (offset 0x0).");
        return 0;   // Return 0
    }

    // Case 3: Standard wraparound - Slot 1 just maxed out, Slot 2 is 0 (next save will increment Slot 2)
    if (counter1 === 0xFFFFFFFF && counter2 === 0) {
        console.log("(findActiveSaveOffset) Scenario: Counter 1 wrapped (is 0xFFFFFFFF), Counter 2 is 0. Choosing Slot 2 (offset 0x" + sbs.toString(16) + ").");
        return sbs; // The next save would be in Slot 2, making it effectively newer in progression.
    }

    // Case 4: Standard wraparound - Slot 2 just maxed out, Slot 1 is 0 (next save will increment Slot 1)
    if (counter2 === 0xFFFFFFFF && counter1 === 0) {
        console.log("(findActiveSaveOffset) Scenario: Counter 2 wrapped (is 0xFFFFFFFF), Counter 1 is 0. Choosing Slot 1 (offset 0x0).");
        return 0;   // The next save would be in Slot 1.
    }
    
    // Case 5: Default comparison if no special conditions met
    const result = (counter1 >= counter2) ? 0 : sbs;
    console.log(`(findActiveSaveOffset) Standard comparison: counter1 (0x${counter1.toString(16)}) >= counter2 (0x${counter2.toString(16)}) is ${counter1 >= counter2}. Returning: 0x${result.toString(16)}`);
    return result;
}

function findSectionOffset(dataView, activeSaveBlockOffset, targetSectionId) {
  // Each save block contains multiple sections. Scan to find the target section.
  // Sections are typically within 4KB "slots" or "sectors".
  for (let i = 0; i < NUM_SECTIONS_PER_BLOCK; i++) { // Usually 14 sections
    const sectionSlotOffset = activeSaveBlockOffset + (i * 0x1000); // Each section slot is 4KB
    
    // Ensure we're not reading past the end of the buffer
    if (sectionSlotOffset + SECTION_ID_OFFSET_IN_DATA_BLOCK + 2 > dataView.byteLength) {
        console.warn(`Attempting to read section ID past end of file at offset 0x${(sectionSlotOffset + SECTION_ID_OFFSET_IN_DATA_BLOCK).toString(16)}`);
        break; 
    }

    const currentSectionId = dataView.getUint16(sectionSlotOffset + SECTION_ID_OFFSET_IN_DATA_BLOCK, true);
    //const currentChecksum = dataView.getUint16(sectionSlotOffset + SECTION_CHECKSUM_OFFSET, true);
    //const currentSaveCounter = dataView.getUint32(sectionSlotOffset + SECTION_SAVE_COUNTER_OFFSET, true);

    // console.log(`Scanning Section Slot ${i}: Offset 0x${sectionSlotOffset.toString(16)}, ID: ${currentSectionId}, TargetID: ${targetSectionId}`);

    if (currentSectionId === targetSectionId) {
      // Optionally, you could validate checksum here if you implement checksum calculation
      return sectionSlotOffset; // Return start of the 4KB section slot
    }
  }
  console.error(`Section ID ${targetSectionId} not found in active save block starting at 0x${activeSaveBlockOffset.toString(16)}.`);
  return -1; // Section not found
}


function readPokemonString(dataView, address, maxLength) {
  let result = '';
  for (let i = 0; i < maxLength; i++) {
    if (address + i >= dataView.byteLength) break; // Boundary check
    const charCode = dataView.getUint8(address + i);
    if (charCode === TERMINATOR || charCode === 0x00) break; // Terminate on 0xFF or 0x00 for safety
    result += charMap[charCode] || '?';
  }
  return result;
}

function readBoxMon(dataView, address) {
  const mon = {};
  if (address + BOX_MON_SIZE > dataView.byteLength) {
      console.error(`Attempt to read BoxMon past end of file. Address: 0x${address.toString(16)}`);
      return null; // Or throw error
  }

  mon.personality = dataView.getUint32(address + 0, true);
  mon.otId = dataView.getUint32(address + 4, true);
  mon.nickname = readPokemonString(dataView, address + 8, MON_NAME_LENGTH);
  mon.language = dataView.getUint8(address + 18);

  const flags = dataView.getUint8(address + 19);
  mon.isBadEgg = !!(flags & 1);
  mon.hasSpecies = !!((flags >> 1) & 1);
  mon.isEgg = !!((flags >> 2) & 1);

  mon.otName = readPokemonString(dataView, address + 20, PLAYER_NAME_LENGTH); // Standard 7 chars
  mon.markings = dataView.getUint8(address + 27);

  const key = mon.otId ^ mon.personality;
  const substructOrder = [
    [0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3], [0, 3, 1, 2], [0, 2, 3, 1], [0, 3, 2, 1],
    [1, 0, 2, 3], [1, 0, 3, 2], [2, 0, 1, 3], [3, 0, 1, 2], [2, 0, 3, 1], [3, 0, 2, 1],
    [1, 2, 0, 3], [1, 3, 0, 2], [2, 1, 0, 3], [3, 1, 0, 2], [2, 3, 0, 1], [3, 2, 0, 1],
    [1, 2, 3, 0], [1, 3, 2, 0], [2, 1, 3, 0], [3, 1, 2, 0], [2, 3, 1, 0], [3, 2, 1, 0]
  ];
  const pSel = substructOrder[mon.personality % 24];
  const substructs = [[], [], [], []];

  for (let i = 0; i < 4; i++) { // i is the actual substruct index (0-3)
    for (let j = 0; j < 3; j++) { // j is the dword index within the substruct (0-2)
      // pSel[i] gives the shuffled substruct index
      const substructBase = address + 32 + (pSel[i] * 12);
      const dwordOffset = substructBase + (j * 4);
      substructs[i][j] = dataView.getUint32(dwordOffset, true) ^ key;
    }
  }

  // Substructure 0 (Growth)
  //mon.species = substructs[0][0] & 0xFFFF; // Standard: species is 16-bit in this field.
                                          // If Lucid uses fewer bits (e.g. 0x7FF for 11 bits), this mask would change.
                                          // PkHex seeing Skitty for Roselia might hint at this value being Skitty's ID.
                                          mon.species = substructs[0][0] & 0x7FF;  // Lucid uses 11-bit species ID
  mon.heldItem = (substructs[0][0] >> 16) & 0xFFFF;
  mon.experience = substructs[0][1];
  mon.ppBonuses = substructs[0][2] & 0xFF;
  mon.friendship = (substructs[0][2] >> 8) & 0xFF;

  // Substructure 1 (Attacks) - MODIFIED FOR POKEMON LUCID LIKELY PACKING
  const attacksDword0 = substructs[1][0]; // This is the first 32-bit word from substructure 1
  const attacksDword1 = substructs[1][1]; // This is the second 32-bit word from substructure 1
  const ppDword       = substructs[1][2]; // This is the third 32-bit word, for PPs

  mon.moves = [
    attacksDword0 & 0xFFFF,                   // Move 1 (lower 16 bits of attacksDword0)
    (attacksDword0 >> 16) & 0xFFFF,           // Move 2 (upper 16 bits of attacksDword0)
    attacksDword1 & 0x07FF,                   // Move 3 (LOWER 11 bits of attacksDword1: 0x07FF is a mask for 11 bits)
    (attacksDword1 >> 16) & 0xFFFF            // Move 4 (UPPER 16 bits of attacksDword1)
  ];

  mon.hiddenNature = (attacksDword1 >> 11) & 0x001F; // Hidden Nature (5 bits, from bit 11 to bit 15 of attacksDword1)
                                                  // This will give a value 0-31.

  mon.pp = [
    ppDword & 0xFF,
    (ppDword >> 8) & 0xFF,
    (ppDword >> 16) & 0xFF,
    (ppDword >> 24) & 0xFF
  ];

  // Substructure 2 (EVs & Condition)
  mon.hpEV = substructs[2][0] & 0xFF;
  mon.attackEV = (substructs[2][0] >> 8) & 0xFF;
  mon.defenseEV = (substructs[2][0] >> 16) & 0xFF;
  mon.speedEV = (substructs[2][0] >> 24) & 0xFF;
  mon.spAttackEV = substructs[2][1] & 0xFF;
  mon.spDefenseEV = (substructs[2][1] >> 8) & 0xFF;
  // Condition stats are also here if needed (cool, beauty, cute, smart, tough, sheen)
  // mon.cool = (substructs[2][1] >> 16) & 0xFF; (example if needed)
  // mon.beauty = (substructs[2][1] >> 24) & 0xFF; (example if needed)
  // mon.cute = substructs[2][2] & 0xFF; (example if needed)
  // mon.smart = (substructs[2][2] >> 8) & 0xFF; (example if needed)
  // mon.tough = (substructs[2][2] >> 16) & 0xFF; (example if needed)
  // mon.sheen = (substructs[2][2] >> 24) & 0xFF; (example if needed)


  // Substructure 3 (Miscellaneous)
  mon.pokerusStatus = substructs[3][0] & 0xFF; // Often referred to as just 'pokerus'
  mon.metLocation = (substructs[3][0] >> 8) & 0xFF;
  
  const metLevelAndOriginFlags = (substructs[3][0] >> 16) & 0xFFFF; // Bits for met level, origin game, pokeball
  mon.metLevel = metLevelAndOriginFlags & 0x7F; // Met level (Bits 0-6)
  // mon.metGame = (metLevelAndOriginFlags >> 7) & 0x0F; // Origin game (Bits 7-10) - if needed
  // mon.pokeball = (metLevelAndOriginFlags >> 11) & 0x0F; // Pokeball (Bits 11-14) - if needed
  mon.otGender = (metLevelAndOriginFlags >> 15) & 1; // OT Gender (Bit 15: 0=male, 1=female)

  const ivEggAbilityFlags = substructs[3][1]; // Contains IVs, isEgg flag, Ability flag
  mon.hpIV = (ivEggAbilityFlags >> 0) & 0x1F;
  mon.attackIV = (ivEggAbilityFlags >> 5) & 0x1F;
  mon.defenseIV = (ivEggAbilityFlags >> 10) & 0x1F;
  mon.speedIV = (ivEggAbilityFlags >> 15) & 0x1F;
  mon.spAttackIV = (ivEggAbilityFlags >> 20) & 0x1F;
  mon.spDefenseIV = (ivEggAbilityFlags >> 25) & 0x1F;
  // mon.isEgg (already read from flags, but also present here: (ivEggAbilityFlags >> 30) & 0x01;)
  mon.abilityNum = (ivEggAbilityFlags >> 31) & 1; // 0 for first ability slot, 1 for second ability slot of the species

  // Ribbons from substructs[3][2] if needed
  // mon.championRibbon = (substructs[3][2] >> 15) & 1; (example)

  return mon;
}

function readPartyMon(dataView, address) {
  if (address + PARTY_MON_SIZE > dataView.byteLength) {
      console.error(`Attempt to read PartyMon past end of file. Address: 0x${address.toString(16)}`);
      return null;
  }
  const mon = readBoxMon(dataView, address);
  if (!mon) return null;

  mon.status = dataView.getUint32(address + 80, true);
  mon.level = dataView.getUint8(address + 84);
  // mon.mail = dataView.getUint32(address + 85, true); // Lua has mail here, GBA has pokerusDays
  mon.pokerusDays = dataView.getUint8(address + 85); // Check if this is mail or pokerusDays for Lucid
  mon.currentHP = dataView.getUint16(address + 86, true);
  mon.maxHP = dataView.getUint16(address + 88, true);
  mon.attack = dataView.getUint16(address + 90, true);
  mon.defense = dataView.getUint16(address + 92, true);
  mon.speed = dataView.getUint16(address + 94, true);
  mon.spAttack = dataView.getUint16(address + 96, true);
  mon.spDefense = dataView.getUint16(address + 98, true);

  return mon;
}

/*function getAbility(mon) {
    if (!mon || mon.species === 0 || !mons[mon.species - 1]) {
        return "Unknown Species/Ability";
    }

    const speciesIndex = mon.species;
    const speciesName = mons[speciesIndex - 1];
    const abilitySlotBit = mon.abilityNum; // This is the bit from the save (0 or 1)
    const pid = mon.personality;

    

    // --- POKEMON LUCID SPECIFIC HARDCODED OVERRIDES (If any are truly fixed regardless of abilityNum/PID) ---
    // Example: if (speciesName === "Unown") return "Levitate";
    // Togedemaru's override might need to be removed if its abilities now fit the map structure.
    // Let's assume for now "Iron Barbs" is its primary regular and "Sturdy" is its HA in Lucid.
    // So Togedemaru's map entry: 777: { regular: ["Iron Barbs", null], hidden: "Sturdy" }
    // The if-check for Togedemaru can probably be removed if its entry in the map is correct.

    if (lucidSpeciesAbilities[speciesIndex]) {
        const speciesAbilData = lucidSpeciesAbilities[speciesIndex];
        let chosenAbilityName = null;

        if (abilitySlotBit === 1 && speciesAbilData.hidden) {
            // If abilitySlotBit is 1 (indicating potential HA) AND a hidden ability is defined
            chosenAbilityName = speciesAbilData.hidden;
        } else {
            // abilitySlotBit is 0 (not HA), or it's 1 but no HA is defined for the species
            if (speciesAbilData.regular && speciesAbilData.regular.length > 0) {
                if (speciesAbilData.regular[1]) { // If there are two regular abilities (e.g. ability '0' and '1' from Mon Changes)
                    // Use PID to pick between the two regular abilities
                    // Common method: PID LSB (pid % 2)
                    // If pid % 2 is 0, use regular[0]. If 1, use regular[1].
                    chosenAbilityName = speciesAbilData.regular[pid % 2];
                } else {
                    // Only one regular ability defined
                    chosenAbilityName = speciesAbilData.regular[0];
                }
            }
        }

        if (chosenAbilityName) {
            return chosenAbilityName;
        } else if (speciesAbilData.regular && speciesAbilData.regular[0]) {
            // Absolute fallback to the first regular ability if nothing else matched (should be rare)
            console.warn(`Ultimate ability fallback for ${speciesName}. Using first regular ability: ${speciesAbilData.regular[0]}`);
            return speciesAbilData.regular[0];
        }
    }

    console.warn(`No ability mapping or resolvable ability in lucidSpeciesAbilities for ${speciesName} (ID: ${speciesIndex}, AbilityNum: ${abilitySlotBit}).`);
    return `Ability? (${speciesName})`;
}*/
function getAbility(mon) {
    if (!mon || mon.species === 0 || !mons[mon.species - 1]) {
        return "Unknown Species/Ability";
    }

    const speciesIndex = mon.species;
    const speciesName = mons[speciesIndex - 1];
    const abilitySlotBit = mon.abilityNum; // This is the bit from the save (0 or 1)
    const pid = mon.personality;

    // Special debug for Togedemaru
    if (speciesIndex === 777) { // Togedemaru's Species ID
        console.log(`TOGEDEMARU DEBUG: Called for Species ID=${speciesIndex}, abilitySlotBit=${abilitySlotBit}, PID=0x${pid.toString(16)}`);
        if (lucidSpeciesAbilities[777]) {
            console.log(`TOGEDEMARU DEBUG: lucidSpeciesAbilities[777] =`, JSON.stringify(lucidSpeciesAbilities[777]));
        } else {
            console.log(`TOGEDEMARU DEBUG: No entry in lucidSpeciesAbilities for ID 777!`);
        }
    }

    if (lucidSpeciesAbilities[speciesIndex]) {
        const speciesAbilData = lucidSpeciesAbilities[speciesIndex];
        let chosenAbilityName = null;

        if (abilitySlotBit === 1 && speciesAbilData.hidden) {
            // If abilitySlotBit is 1 (indicating potential HA) AND a hidden ability is defined
            chosenAbilityName = speciesAbilData.hidden;
            if (speciesIndex === 777) {
                console.log("TOGEDEMARU DEBUG: Path A - Chose HIDDEN ability:", chosenAbilityName);
            }
        } else {
            // abilitySlotBit is 0 (not HA), or it's 1 but no HA is defined for the species, or no regular abilities defined
            if (speciesAbilData.regular && speciesAbilData.regular.length > 0) {
                if (speciesAbilData.regular[1]) { // If there are two regular abilities defined
                    chosenAbilityName = speciesAbilData.regular[pid % 2];
                    if (speciesIndex === 777) {
                        console.log(`TOGEDEMARU DEBUG: Path B - Chose REGULAR via PID (slot ${pid % 2}):`, chosenAbilityName);
                    }
                } else if (speciesAbilData.regular[0]) { // Only one regular ability defined (or second is null)
                    chosenAbilityName = speciesAbilData.regular[0];
                    if (speciesIndex === 777) {
                        console.log("TOGEDEMARU DEBUG: Path C - Chose REGULAR[0]:", chosenAbilityName);
                    }
                } else {
                     // This case should ideally not be hit if speciesAbilData.regular is an array with at least one item or nulls.
                     // It implies speciesAbilData.regular is an empty array or something unexpected.
                    if (speciesIndex === 777) {
                        console.log("TOGEDEMARU DEBUG: Path D - No valid regular abilities in speciesAbilData.regular array.");
                    }
                }
            } else {
                 // No regular abilities defined at all for this species in the map
                 if (speciesIndex === 777) {
                    console.log("TOGEDEMARU DEBUG: Path E - speciesAbilData.regular is undefined or empty.");
                }
            }
        }

        if (chosenAbilityName) {
            if (speciesIndex === 777) {
                console.log("TOGEDEMARU DEBUG: Final chosenAbilityName before return:", chosenAbilityName);
            }
            return chosenAbilityName;
        } else if (speciesAbilData.regular && speciesAbilData.regular[0]) {
            // Absolute fallback to the first regular ability if chosenAbilityName is still null
            // (e.g., if HA path was taken but HA was null, and regular path wasn't explicitly hit)
            console.warn(`Ultimate ability fallback for ${speciesName} (ID: ${speciesIndex}). Using first regular ability: ${speciesAbilData.regular[0]}`);
            if (speciesIndex === 777) {
                console.log("TOGEDEMARU DEBUG: Fallback (F) to regular[0]:", speciesAbilData.regular[0]);
            }
            return speciesAbilData.regular[0];
        } else if (speciesAbilData.hidden) {
            // Even more ultimate fallback if no regular abilities but a hidden one exists (unlikely structure but covering bases)
             console.warn(`Ultimate ability fallback for ${speciesName} (ID: ${speciesIndex}). No regular abilities, using hidden: ${speciesAbilData.hidden}`);
             if (speciesIndex === 777) {
                console.log("TOGEDEMARU DEBUG: Fallback (G) to hidden:", speciesAbilData.hidden);
            }
            return speciesAbilData.hidden;
        }
    }

    console.warn(`No ability mapping or resolvable ability in lucidSpeciesAbilities for ${speciesName} (ID: ${speciesIndex}, AbilityNum: ${abilitySlotBit}).`);
    if (speciesIndex === 777) {
        console.log("TOGEDEMARU DEBUG: No mapping found in lucidSpeciesAbilities, returning default 'Ability?'.");
    }
    return `Ability? (${speciesName})`;
}

function getNature(mon) {
    if (!mon) return "Unknown";

    const hiddenNatureVal = mon.hiddenNature; // This is 0-31 from the 5-bit field
    const personalityPID = mon.personality;

    // Optional: For debugging a specific Pokémon by PID or species
    // const speciesNameForLog = mons[mon.species - 1] || `SpeciesID ${mon.species}`;
    // if (mon.species === XYZ || mon.personality === 0xABCDEF) { // Replace XYZ/ABCDEF with actual values
    //    console.log(`DEBUG_NATURE for ${speciesNameForLog} (PID: 0x${personalityPID.toString(16)}): hiddenNatureVal = ${hiddenNatureVal}`);
    // }

    if (hiddenNatureVal === 0) {
        // Case 1: hiddenNatureVal is 0, use PID % 25
        const pidNatureIndex = personalityPID % 25;
        return natures[pidNatureIndex] || "Unknown (PID)";
    } else if (hiddenNatureVal >= 1 && hiddenNatureVal <= 25) {
        // Case 2: hiddenNatureVal is 1-25, use it as a 1-indexed nature
        const directNatureIndex = hiddenNatureVal - 1;
        return natures[directNatureIndex] || `Invalid Nature (HN ${hiddenNatureVal})`;
    } else {
        // Case 3: hiddenNatureVal > 25 (i.e., 26-31 for 5 bits), fall back to PID % 25
        const pidNatureIndex = personalityPID % 25;
        return natures[pidNatureIndex] || "Unknown (PID Fallback)";
    }
}

function formatShowdownExport(mon, targetLevel) {
  if (!mon || mon.species === 0) return '';

  // Assuming mon.species is 1-indexed and `mons` array is 0-indexed
  const speciesName = mons[mon.species - 1] || `Unknown Species (${mon.species})`;
  if (speciesName.startsWith("Unknown Species")) {
      console.warn(`Formatting unknown species ID: ${mon.species}`);
  }

  let level = targetLevel ? parseInt(targetLevel, 10) : (mon.level || 1);
  if (isNaN(level) || level < 1 || level > 100) {
      console.warn(`Invalid level for export: ${level}, defaulting to original or 1.`);
      level = mon.level || 1;
  }
  
  let output = '';
  output += `${speciesName}${mon.nickname && mon.nickname !== speciesName.toUpperCase() ? ` (${mon.nickname})` : ''}\n`; // Nickname if different
  output += `Ability: ${getAbility(mon)}\n`;
  output += `Level: ${level}\n`;
  // EVs can be added here if calculated and non-zero
  // output += `EVs: ${mon.hpEV} HP / ${mon.attackEV} Atk / ${mon.defenseEV} Def / ${mon.spAttackEV} SpA / ${mon.spDefenseEV} SpD / ${mon.speedEV} Spe\n`;
  output += `${getNature(mon)} Nature\n`;
  output += `IVs: ${mon.hpIV} HP / ${mon.attackIV} Atk / ${mon.defenseIV} Def / `;
  output += `${mon.spAttackIV} SpA / ${mon.spDefenseIV} SpD / ${mon.speedIV} Spe\n`;

  for (let i = 0; i < 4; i++) {
    const moveId = mon.moves[i];
    if (moveId > 0 && moveId < moves.length) {
      output += `- ${moves[moveId]}\n`; // Assumes moves[0] is "" and moveId is 1-indexed from save
    }
  }
  return output + '\n';
}
// --- END Helper functions ---


// --- Main functionality ---
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('save-upload');
    const fileSelectBtn = document.getElementById('file-select-btn');
    const fileNameDisplay = document.getElementById('file-name-display'); // New
    const exportLevelInput = document.getElementById('export-level');
    const processBtn = document.getElementById('process-btn');         // New
    const loadingIndicator = document.getElementById('loading');
    const outputContainer = document.getElementById('output-container');
    const outputText = document.getElementById('output-text');
    const copyBtn = document.getElementById('copy-btn');

    let selectedFile = null; // Store the File object

    fileSelectBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            selectedFile = file;
            fileNameDisplay.textContent = `Selected: ${file.name}`;
            processBtn.disabled = false; // Enable process button
            outputContainer.hidden = true; // Hide previous output if a new file is selected
            outputText.textContent = '';
        } else {
            selectedFile = null;
            fileNameDisplay.textContent = "No file selected.";
            processBtn.disabled = true;
        }
        // We no longer process automatically here
    });

    processBtn.addEventListener('click', function() {
        if (!selectedFile) {
            alert("Please select a save file first.");
            return;
        }

        // --- MANDATORY Export Level Check ---
        const exportLevelStr = exportLevelInput.value.trim();
        let exportLevel;

        if (!exportLevelStr) {
            alert("Export Level is required. Please enter a level between 1 and 100.");
            exportLevelInput.focus();
            return; // Stop processing
        }

        exportLevel = parseInt(exportLevelStr, 10);
        if (isNaN(exportLevel) || exportLevel < 1 || exportLevel > 100) {
            alert(`Invalid level "${exportLevelStr}". Please enter a level between 1 and 100.`);
            exportLevelInput.focus();
            return; // Stop processing
        }
        console.log(`Using export level: ${exportLevel}`);
        // --- End of export level check ---


        loadingIndicator.hidden = false;
        outputContainer.hidden = true;
        outputText.textContent = '';

        const reader = new FileReader();
        reader.onload = function(e) {
            let showdownOutput = ''; 
            try {
                const arrayBuffer = e.target.result;
                const dataView = new DataView(arrayBuffer);
                
                console.log(`Save file size: ${dataView.byteLength} bytes`);

                // --- PARTY PARSING --- (Your existing logic)
                showdownOutput += "=== PARTY ===\n";
                let partyCountValue = 0; 
                let partyDataStartOffsetInFile = 0; 
                let activeSaveBlockBase = -1; 

                if (DIRECT_MODE) {
                    // ... your direct mode party logic ...
                } else {
                    activeSaveBlockBase = findActiveSaveOffset(dataView);
                    console.log(`Active save block determined to start at file offset: 0x${activeSaveBlockBase.toString(16)}`); 
                    const partySectionSlotOffset = findSectionOffset(dataView, activeSaveBlockBase, PARTY_DATA_SECTION_ID);
                    if (partySectionSlotOffset !== -1) {
                        console.log(`Party Data Section (ID ${PARTY_DATA_SECTION_ID}) found in slot at file offset: 0x${partySectionSlotOffset.toString(16)}`);
                        let chosenPartyCountOffset = -1;
                        partyCountValue = 0;
                        let bestCountSoFar = -1;
                        const knownPartyCountOffsets = [0x0234, 0x01A7, 0x0057];
                        for (const offset of knownPartyCountOffsets) {
                            const currentPartyCountFileOffset = partySectionSlotOffset + offset;
                            if (currentPartyCountFileOffset < dataView.byteLength) {
                                const tempCountRead = dataView.getUint8(currentPartyCountFileOffset);
                                if (tempCountRead >= 0 && tempCountRead <= 6) {
                                    if (tempCountRead > bestCountSoFar) {
                                        bestCountSoFar = tempCountRead;
                                        chosenPartyCountOffset = offset;
                                    }
                                }
                            }
                        }
                        if (bestCountSoFar !== -1) {
                            partyCountValue = bestCountSoFar;
                            console.log(`Party count ${partyCountValue} confirmed using internal offset 0x${chosenPartyCountOffset.toString(16)}.`);
                            partyDataStartOffsetInFile = partySectionSlotOffset + PARTY_MEMBERS_OFFSET_IN_SECTION;
                            if (partyCountValue > 0 && (partyDataStartOffsetInFile + (partyCountValue * PARTY_MON_SIZE) > dataView.byteLength)) {
                                showdownOutput += `Error: Calculated end of party data is out of file bounds.\n`;
                                partyCountValue = 0;
                            }
                        } else {
                            showdownOutput += "Error: Could not determine valid party count.\n";
                            partyCountValue = 0;
                        }
                    } else {
                        showdownOutput += "Could not find Party Data Section. Skipping party.\n";
                    }
                }

                if (typeof partyCountValue === 'number' && partyCountValue > 0 && partyCountValue <= 6) {
                    for (let i = 0; i < partyCountValue; i++) {
                        const monAddressInFile = partyDataStartOffsetInFile + (i * PARTY_MON_SIZE);
                        if (monAddressInFile + PARTY_MON_SIZE > dataView.byteLength) { 
                            showdownOutput += `Error reading party mon ${i+1} (out of bounds).\n`;
                            break; 
                        }
                        const monData = readPartyMon(dataView, monAddressInFile);
                        if (monData && monData.species !== 0) {
                            showdownOutput += formatShowdownExport(monData, exportLevel); 
                        }
                    }
                } else if (partyCountValue === 0 && !showdownOutput.includes("Could not find Party Data Section")) { 
                    showdownOutput += "Party is empty.\n";
                } else if (typeof partyCountValue !== 'undefined' && partyCountValue !== 0 && !showdownOutput.includes("Could not find Party Data Section")) {
                    showdownOutput += `Invalid party count read: ${partyCountValue}. Skipping party.\n`;
                }
                showdownOutput += "\n";
                // --- END OF PARTY PARSING ---

                // --- PC BOX PARSING --- (Your existing logic)
                showdownOutput += "\n=== PC BOXES ===\n";
                const POKEMON_PER_BOX = 30;
                const NUM_BOXES_TO_PARSE = 2;

                if (!DIRECT_MODE) {
                    if (activeSaveBlockBase === -1 && dataView.byteLength >= SAVE_BLOCK_SIZE) { 
                         activeSaveBlockBase = findActiveSaveOffset(dataView);
                    }
                    if (activeSaveBlockBase === 0 || activeSaveBlockBase === SAVE_BLOCK_SIZE) { 
                        for (let boxIndex = 0; boxIndex < NUM_BOXES_TO_PARSE; boxIndex++) {
                            const currentBoxNumber = boxIndex + 1;
                            const currentBoxSectionId = PC_BOX_START_SECTION_ID + boxIndex; 
                            showdownOutput += `\n=== PC BOX ${currentBoxNumber} (Section ID ${currentBoxSectionId}) ===\n`;
                            const boxSectionSlotAbsoluteOffset = findSectionOffset(dataView, activeSaveBlockBase, currentBoxSectionId);
                            if (boxSectionSlotAbsoluteOffset === -1) {
                                showdownOutput += `Box ${currentBoxNumber} (Section ${currentBoxSectionId}) not found.\n`;
                                continue; 
                            }
                            const boxDataStartInFile = boxSectionSlotAbsoluteOffset + PC_BOX_DATA_INTERNAL_OFFSET;
                            if (boxDataStartInFile + (POKEMON_PER_BOX * BOX_MON_SIZE) > dataView.byteLength + 1) { 
                                showdownOutput += `Error reading Box ${currentBoxNumber} data (offset out of bounds).\n`;
                                continue; 
                            }
                            let pokemonFoundInThisBox = 0;
                            for (let slotIndex = 0; slotIndex < POKEMON_PER_BOX; slotIndex++) {
                                const monAddressInFile = boxDataStartInFile + (slotIndex * BOX_MON_SIZE);
                                 if (monAddressInFile + BOX_MON_SIZE > dataView.byteLength) { 
                                    break; 
                                }
                                const monData = readBoxMon(dataView, monAddressInFile);
                                if (monData && monData.species !== 0) {
                                    pokemonFoundInThisBox++;
                                    showdownOutput += formatShowdownExport(monData, exportLevel); 
                                }
                            }
                            if (pokemonFoundInThisBox === 0) {
                                showdownOutput += "(This box appears empty)\n";
                            }
                        }
                    } else {
                         showdownOutput += "PC Box parsing skipped: activeSaveBlockBase not validly determined.\n";
                    }
                } else {
                    showdownOutput += "PC Box parsing not implemented for DIRECT_MODE.\n";
                }
                // --- END OF PC BOX PARSING ---

                outputText.textContent = showdownOutput.trim() || "No Pokémon data found or processed successfully.";
                outputContainer.hidden = false;

            } catch (error) {
                console.error("Error processing save file:", error);
                let errorMessage = `Error: ${error.message}`;
                if (error.stack) { errorMessage += `\n\nStack: ${error.stack}`; }
                errorMessage += "\n\nCheck console (F12) for more details.";
                outputText.textContent = errorMessage;
                outputContainer.hidden = false;
            } finally {
                loadingIndicator.hidden = true;
                // fileInput.value = ''; // Keep file selected to allow re-processing with different level
            }
        }; // End of reader.onload

        reader.onerror = function() { 
            alert('Error reading the selected file.');
            loadingIndicator.hidden = true;
            selectedFile = null;
            fileNameDisplay.textContent = "No file selected.";
            processBtn.disabled = true;
        };
        reader.readAsArrayBuffer(selectedFile);
    }); // End of processBtn.addEventListener

    copyBtn.addEventListener('click', function() {
        const outputToCopy = outputText.textContent;
        if (!outputToCopy || outputToCopy === "No Pokémon data found or processed successfully." || outputToCopy.startsWith("Error:")) {
            return;
        }
        
        const originalButtonText = copyBtn.textContent;
        const originalButtonClass = copyBtn.className;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(outputToCopy)
                .then(() => {
                    copyBtn.textContent = "Copied!";
                    copyBtn.classList.add('copied'); // Optional: for styling feedback
                    copyBtn.disabled = true;
                    setTimeout(() => {
                        copyBtn.textContent = originalButtonText;
                        copyBtn.classList.remove('copied');
                        copyBtn.disabled = false;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Could not copy text using navigator.clipboard: ', err);
                    fallbackCopyTextToClipboard(outputToCopy, copyBtn, originalButtonText);
                });
        } else {
            fallbackCopyTextToClipboard(outputToCopy, copyBtn, originalButtonText);
        }
    });

    function fallbackCopyTextToClipboard(text, buttonElement, originalText) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                buttonElement.textContent = "Copied!";
                buttonElement.classList.add('copied');
                buttonElement.disabled = true;
                setTimeout(() => {
                    buttonElement.textContent = originalText;
                    buttonElement.classList.remove('copied');
                    buttonElement.disabled = false;
                }, 2000);
            } else {
                 alert('Copying to clipboard failed (fallback).');
            }
        } catch (err) {
            console.error('Fallback copy to clipboard failed: ', err);
            alert('Copying to clipboard failed. Please select and copy the text manually.');
        }
        document.body.removeChild(textArea);
    }

}); // End of DOMContentLoaded