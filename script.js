// --- DATA ARRAYS ---
// (Your lucidSpeciesAbilities, moves, mons, abilities, natures, charMap)
// ... PASTE ALL YOUR DATA ARRAYS HERE ...
const lucidSpeciesAbilities = {
    // bulbasaur (ID 1)
    1: { regular: ["Overgrow", null], hidden: "Chlorophyll" },

    // ivysaur (ID 2)
    2: { regular: ["Overgrow", null], hidden: "Chlorophyll" },

    // venusaurgmax (ID 3)
    3: { regular: ["Overgrow", null], hidden: "Chlorophyll" },

    // charmander (ID 4)
    4: { regular: ["Blaze", null], hidden: "Solar Power" },

    // charmeleon (ID 5)
    5: { regular: ["Blaze", null], hidden: "Solar Power" },

    // charizardgmax (ID 6)
    6: { regular: ["Blaze", null], hidden: "Solar Power" },

    // squirtle (ID 7)
    7: { regular: ["Torrent", null], hidden: "Rain Dish" },

    // wartortle (ID 8)
    8: { regular: ["Torrent", null], hidden: "Rain Dish" },

    // blastoisegmax (ID 9)
    9: { regular: ["Torrent", null], hidden: "Rain Dish" },

    // caterpie (ID 10)
    10: { regular: ["Shield Dust", null], hidden: "Run Away" },

    // metapod (ID 11)
    11: { regular: ["Shed Skin", null], hidden: null },

    // butterfreegmax (ID 12)
    12: { regular: ["Compound Eyes", null], hidden: "Tinted Lens" },

    // weedle (ID 13)
    13: { regular: ["Shield Dust", null], hidden: "Run Away" },

    // kakuna (ID 14)
    14: { regular: ["Shed Skin", null], hidden: null },

    // beedrill (ID 15)
    15: { regular: ["Swarm", null], hidden: "Sniper" },

    // pidgey [non-vanilla] (ID 16)
    16: { regular: ["Quick Feet", null], hidden: "Big Pecks" },

    // pidgeotto [non-vanilla] (ID 17)
    17: { regular: ["Quick Feet", null], hidden: "Big Pecks" },

    // pidgeot [non-vanilla] (ID 18)
    18: { regular: ["Quick Feet", null], hidden: "Big Pecks" },

    // rattata [non-vanilla] (ID 19)
    19: { regular: ["Guts", null], hidden: "Hustle" },

    // raticate [non-vanilla] (ID 20)
    20: { regular: ["Guts", null], hidden: "Hustle" },

    // spearow [non-vanilla] (ID 21)
    21: { regular: ["Sniper", null], hidden: "Keen Eye" },

    // fearow [non-vanilla] (ID 22)
    22: { regular: ["Sniper", null], hidden: "Keen Eye" },

    // ekans [non-vanilla] (ID 23)
    23: { regular: ["Intimidate", null], hidden: "Unnerve" },

    // arbok [non-vanilla] (ID 24)
    24: { regular: ["Intimidate", null], hidden: "Unnerve" },

    // pikachustarter (ID 25)
    25: { regular: ["Static", null], hidden: "Lightning Rod" },

    // raichu (ID 26)
    26: { regular: ["Static", null], hidden: "Lightning Rod" },

    // sandshrew [non-vanilla] (ID 27)
    27: { regular: ["Sand Rush", null], hidden: "Sand Veil" },

    // sandslash [non-vanilla] (ID 28)
    28: { regular: ["Sand Rush", null], hidden: "Sand Veil" },

    // nidoranf [non-vanilla] (ID 29)
    29: { regular: ["Poison Point", null], hidden: "Hustle" },

    // nidorina [non-vanilla] (ID 30)
    30: { regular: ["Poison Point", null], hidden: "Hustle" },

    // nidoqueen [non-vanilla] (ID 31)
    31: { regular: ["Acid Coat", null], hidden: "Sheer Force" },

    // nidoranm [non-vanilla] (ID 32)
    32: { regular: ["Poison Point", null], hidden: "Hustle" },

    // nidorino [non-vanilla] (ID 33)
    33: { regular: ["Poison Point", null], hidden: "Hustle" },

    // nidoking [non-vanilla] (ID 34)
    34: { regular: ["Acid Coat", null], hidden: "Sheer Force" },

    // clefairy [non-vanilla] (ID 35)
    35: { regular: ["Magic Guard", null], hidden: "Friend Guard" },

    // clefable [non-vanilla] (ID 36)
    36: { regular: ["Magic Guard", null], hidden: "Unaware" },

    // vulpix (ID 37)
    37: { regular: ["Flash Fire", null], hidden: "Drought" },

    // ninetales (ID 38)
    38: { regular: ["Flash Fire", null], hidden: "Drought" },

    // jigglypuff (ID 39)
    39: { regular: ["Cute Charm", "Competitive"], hidden: "Friend Guard" },

    // wigglytuff (ID 40)
    40: { regular: ["Cute Charm", "Competitive"], hidden: "Frisk" },

    // zubat (ID 41)
    41: { regular: ["Inner Focus", null], hidden: "Infiltrator" },

    // golbat (ID 42)
    42: { regular: ["Inner Focus", null], hidden: "Infiltrator" },

    // oddish (ID 43)
    43: { regular: ["Chlorophyll", null], hidden: "Run Away" },

    // gloom (ID 44)
    44: { regular: ["Chlorophyll", null], hidden: "Stench" },

    // vileplume (ID 45)
    45: { regular: ["Chlorophyll", null], hidden: "Effect Spore" },

    // paras [non-vanilla] (ID 46)
    46: { regular: ["Effect Spore", null], hidden: "Dry Skin" },

    // parasect [non-vanilla] (ID 47)
    47: { regular: ["Effect Spore", null], hidden: "Dry Skin" },

    // venonat (ID 48)
    48: { regular: ["Compound Eyes", "Tinted Lens"], hidden: "Run Away" },

    // venomoth (ID 49)
    49: { regular: ["Shield Dust", "Tinted Lens"], hidden: "Wonder Skin" },

    // diglett (ID 50)
    50: { regular: ["Sand Veil", "Arena Trap"], hidden: "Sand Force" },

    // dugtrio (ID 51)
    51: { regular: ["Sand Veil", "Arena Trap"], hidden: "Sand Force" },

    // meowthgmax (ID 52)
    52: { regular: ["Pickup", "Technician"], hidden: "Unnerve" },

    // persian (ID 53)
    53: { regular: ["Limber", "Technician"], hidden: "Unnerve" },

    // psyduck [non-vanilla] (ID 54)
    54: { regular: ["Swift Swim", "Cloud Nine"], hidden: "Damp" },

    // golduck [non-vanilla] (ID 55)
    55: { regular: ["Swift Swim", "Cloud Nine"], hidden: "Damp" },

    // mankey [non-vanilla] (ID 56)
    56: { regular: ["Vital Spirit", null], hidden: "Defiant" },

    // primeape [non-vanilla] (ID 57)
    57: { regular: ["Vital Spirit", null], hidden: "Defiant" },

    // growlithe [non-vanilla] (ID 58)
    58: { regular: ["Intimidate", null], hidden: "Justified" },

    // arcanine [non-vanilla] (ID 59)
    59: { regular: ["Intimidate", null], hidden: "Justified" },

    // poliwag [non-vanilla] (ID 60)
    60: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // poliwhirl [non-vanilla] (ID 61)
    61: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // poliwrath [non-vanilla] (ID 62)
    62: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // abra (ID 63)
    63: { regular: ["Synchronize", "Inner Focus"], hidden: "Magic Guard" },

    // kadabra (ID 64)
    64: { regular: ["Synchronize", "Inner Focus"], hidden: "Magic Guard" },

    // alakazam (ID 65)
    65: { regular: ["Synchronize", "Inner Focus"], hidden: "Magic Guard" },

    // machop (ID 66)
    66: { regular: ["Guts", "No Guard"], hidden: "Steadfast" },

    // machoke (ID 67)
    67: { regular: ["Guts", "No Guard"], hidden: "Steadfast" },

    // machampgmax (ID 68)
    68: { regular: ["Guts", "No Guard"], hidden: "Steadfast" },

    // bellsprout (ID 69)
    69: { regular: ["Chlorophyll", null], hidden: "Gluttony" },

    // weepinbell (ID 70)
    70: { regular: ["Chlorophyll", null], hidden: "Gluttony" },

    // victreebel (ID 71)
    71: { regular: ["Chlorophyll", null], hidden: "Gluttony" },

    // tentacool [non-vanilla] (ID 72)
    72: { regular: ["Rain Dish", "Liquid Ooze"], hidden: "Clear Body" },

    // tentacruel [non-vanilla] (ID 73)
    73: { regular: ["Rain Dish", "Liquid Ooze"], hidden: "Clear Body" },

    // geodude (ID 74)
    74: { regular: ["Rock Head", "Sturdy"], hidden: "Sand Veil" },

    // graveler (ID 75)
    75: { regular: ["Rock Head", "Sturdy"], hidden: "Sand Veil" },

    // golem (ID 76)
    76: { regular: ["Rock Head", "Sturdy"], hidden: "Sand Veil" },

    // ponyta [non-vanilla] (ID 77)
    77: { regular: ["Fiery Charge", null], hidden: "Flame Body" },

    // rapidash [non-vanilla] (ID 78)
    78: { regular: ["Fiery Charge", null], hidden: "Flame Body" },

    // slowpoke (ID 79)
    79: { regular: ["Oblivious", "Own Tempo"], hidden: "Regenerator" },

    // slowbro (ID 80)
    80: { regular: ["Oblivious", "Own Tempo"], hidden: "Regenerator" },

    // magnemite (ID 81)
    81: { regular: ["Magnet Pull", "Sturdy"], hidden: "Analytic" },

    // magneton (ID 82)
    82: { regular: ["Magnet Pull", "Sturdy"], hidden: "Analytic" },

    // farfetchd (ID 83)
    83: { regular: ["Keen Eye", "Inner Focus"], hidden: "Defiant" },

    // doduo [non-vanilla] (ID 84)
    84: { regular: ["Technician", null], hidden: "Tangled Feet" },

    // dodrio [non-vanilla] (ID 85)
    85: { regular: ["Technician", null], hidden: "Tangled Feet" },

    // seel [non-vanilla] (ID 86)
    86: { regular: ["Thick Fat", null], hidden: "Ice Body" },

    // dewgong [non-vanilla] (ID 87)
    87: { regular: ["Thick Fat", null], hidden: "Ice Body" },

    // grimer (ID 88)
    88: { regular: ["Stench", "Sticky Hold"], hidden: "Poison Touch" },

    // muk (ID 89)
    89: { regular: ["Stench", "Sticky Hold"], hidden: "Poison Touch" },

    // shellder (ID 90)
    90: { regular: ["Shell Armor", "Skill Link"], hidden: "Overcoat" },

    // cloyster (ID 91)
    91: { regular: ["Shell Armor", "Skill Link"], hidden: "Overcoat" },

    // gastly (ID 92)
    92: { regular: ["Levitate", null], hidden: null },

    // haunter (ID 93)
    93: { regular: ["Levitate", null], hidden: null },

    // gengargmax (ID 94)
    94: { regular: ["Cursed Body", null], hidden: null },

    // onix (ID 95)
    95: { regular: ["Rock Head", "Sturdy"], hidden: "Weak Armor" },

    // drowzee (ID 96)
    96: { regular: ["Insomnia", "Forewarn"], hidden: "Inner Focus" },

    // hypno (ID 97)
    97: { regular: ["Insomnia", "Forewarn"], hidden: "Inner Focus" },

    // krabby [non-vanilla] (ID 98)
    98: { regular: ["Shell Armor", null], hidden: "Sheer Force" },

    // kinglergmax (ID 99)
    99: { regular: ["Hyper Cutter", "Shell Armor"], hidden: "Sheer Force" },

    // voltorb (ID 100)
    100: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },

    // electrode (ID 101)
    101: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },

    // exeggcute [non-vanilla] (ID 102)
    102: { regular: ["Harvest", null], hidden: "Chlorophyll" },

    // exeggutor [non-vanilla] (ID 103)
    103: { regular: ["Harvest", null], hidden: "Chlorophyll" },

    // cubone [non-vanilla] (ID 104)
    104: { regular: ["Battle Armor", null], hidden: "Lightning Rod" },

    // marowak [non-vanilla] (ID 105)
    105: { regular: ["Battle Armor", null], hidden: "Lightning Rod" },

    // hitmonlee [non-vanilla] (ID 106)
    106: { regular: ["Striker", null], hidden: "Unburden" },

    // hitmonchan [non-vanilla] (ID 107)
    107: { regular: ["Iron Fist", null], hidden: "Inner Focus" },

    // lickitung (ID 108)
    108: { regular: ["Own Tempo", "Oblivious"], hidden: "Cloud Nine" },

    // koffing (ID 109)
    109: { regular: ["Levitate", "Neutralizing Gas"], hidden: "Stench" },

    // weezing (ID 110)
    110: { regular: ["Levitate", "Neutralizing Gas"], hidden: "Stench" },

    // rhyhorn [non-vanilla] (ID 111)
    111: { regular: ["Rock Head", null], hidden: "Lightning Rod" },

    // rhydon [non-vanilla] (ID 112)
    112: { regular: ["Rock Head", null], hidden: "Lightning Rod" },

    // chansey (ID 113)
    113: { regular: ["Natural Cure", "Serene Grace"], hidden: "Healer" },

    // tangela (ID 114)
    114: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Regenerator" },

    // kangaskhan [non-vanilla] (ID 115)
    115: { regular: ["Inner Focus", null], hidden: "Scrappy" },

    // horsea (ID 116)
    116: { regular: ["Swift Swim", "Sniper"], hidden: "Damp" },

    // seadra (ID 117)
    117: { regular: ["Poison Point", "Sniper"], hidden: "Damp" },

    // goldeen [non-vanilla] (ID 118)
    118: { regular: ["Swift Swim", null], hidden: "Lightning Rod" },

    // seaking [non-vanilla] (ID 119)
    119: { regular: ["Swift Swim", null], hidden: "Lightning Rod" },

    // staryu [non-vanilla] (ID 120)
    120: { regular: ["Analytic", null], hidden: "Natural Cure" },

    // starmie [non-vanilla] (ID 121)
    121: { regular: ["Analytic", null], hidden: "Natural Cure" },

    // mrmime (ID 122)
    122: { regular: ["Soundproof", "Filter"], hidden: "Technician" },

    // scyther (ID 123)
    123: { regular: ["Swarm", "Technician"], hidden: "Steadfast" },

    // jynx [non-vanilla] (ID 124)
    124: { regular: ["Rain Dish", null], hidden: "Hydration" },

    // electabuzz (ID 125)
    125: { regular: ["Static", null], hidden: "Vital Spirit" },

    // magmar (ID 126)
    126: { regular: ["Flame Body", null], hidden: "Vital Spirit" },

    // pinsir (ID 127)
    127: { regular: ["Hyper Cutter", "Mold Breaker"], hidden: "Moxie" },

    // tauros [non-vanilla] (ID 128)
    128: { regular: ["Intimidate", null], hidden: "Sheer Force" },

    // magikarp (ID 129)
    129: { regular: ["Swift Swim", null], hidden: "Rattled" },

    // gyarados (ID 130)
    130: { regular: ["Intimidate", null], hidden: "Moxie" },

    // laprasgmax (ID 131)
    131: { regular: ["Water Absorb", "Shell Armor"], hidden: "Hydration" },

    // ditto (ID 132)
    132: { regular: ["Limber", null], hidden: "Imposter" },

    // eeveestarter (ID 133)
    133: { regular: ["Run Away", "Adaptability"], hidden: "Anticipation" },

    // vaporeon [non-vanilla] (ID 134)
    134: { regular: ["Hydration", null], hidden: "Water Absorb" },

    // jolteon [non-vanilla] (ID 135)
    135: { regular: ["Quick Feet", null], hidden: "Volt Absorb" },

    // flareon [non-vanilla] (ID 136)
    136: { regular: ["Guts", null], hidden: "Flash Fire" },

    // porygon (ID 137)
    137: { regular: ["Trace", "Download"], hidden: "Analytic" },

    // omanyte [non-vanilla] (ID 138)
    138: { regular: ["Solid Rock", "Shell Armor"], hidden: "Swift Swim" },

    // omastar [non-vanilla] (ID 139)
    139: { regular: ["Solid Rock", "Shell Armor"], hidden: "Swift Swim" },

    // kabuto [non-vanilla] (ID 140)
    140: { regular: ["Sharpness", "Battle Armor"], hidden: "Swift Swim" },

    // kabutops [non-vanilla] (ID 141)
    141: { regular: ["Sharpness", "Battle Armor"], hidden: "Swift Swim" },

    // aerodactyl (ID 142)
    142: { regular: ["Rock Head", "Pressure"], hidden: "Unnerve" },

    // snorlaxgmax (ID 143)
    143: { regular: ["Immunity", "Thick Fat"], hidden: "Gluttony" },

    // articuno (ID 144)
    144: { regular: ["Pressure", null], hidden: "Snow Cloak" },

    // zapdos (ID 145)
    145: { regular: ["Pressure", null], hidden: "Static" },

    // moltres (ID 146)
    146: { regular: ["Pressure", null], hidden: "Flame Body" },

    // dratini (ID 147)
    147: { regular: ["Shed Skin", null], hidden: "Marvel Scale" },

    // dragonair (ID 148)
    148: { regular: ["Shed Skin", null], hidden: "Marvel Scale" },

    // dragonite (ID 149)
    149: { regular: ["Inner Focus", null], hidden: "Multiscale" },

    // mewtwo (ID 150)
    150: { regular: ["Pressure", null], hidden: "Unnerve" },

    // mew (ID 151)
    151: { regular: ["Synchronize", null], hidden: null },

    // chikorita (ID 152)
    152: { regular: ["Overgrow", null], hidden: "Leaf Guard" },

    // bayleef (ID 153)
    153: { regular: ["Overgrow", null], hidden: "Leaf Guard" },

    // meganium (ID 154)
    154: { regular: ["Overgrow", null], hidden: "Leaf Guard" },

    // cyndaquil [non-vanilla] (ID 155)
    155: { regular: ["Flame Body", null], hidden: "Blaze" },

    // quilava [non-vanilla] (ID 156)
    156: { regular: ["Flame Body", null], hidden: "Blaze" },

    // typhlosion [non-vanilla] (ID 157)
    157: { regular: ["Flame Body", null], hidden: "Blaze" },

    // totodile (ID 158)
    158: { regular: ["Torrent", null], hidden: "Sheer Force" },

    // croconaw (ID 159)
    159: { regular: ["Torrent", null], hidden: "Sheer Force" },

    // feraligatr (ID 160)
    160: { regular: ["Torrent", null], hidden: "Sheer Force" },

    // sentret (ID 161)
    161: { regular: ["Run Away", "Keen Eye"], hidden: "Frisk" },

    // furret (ID 162)
    162: { regular: ["Run Away", "Keen Eye"], hidden: "Frisk" },

    // hoothoot [non-vanilla] (ID 163)
    163: { regular: ["Tinted Lens", "Insomnia"], hidden: "Keen Eye" },

    // noctowl [non-vanilla] (ID 164)
    164: { regular: ["Tinted Lens", "Insomnia"], hidden: "Keen Eye" },

    // ledyba (ID 165)
    165: { regular: ["Swarm", "Early Bird"], hidden: "Rattled" },

    // ledian (ID 166)
    166: { regular: ["Swarm", "Early Bird"], hidden: "Iron Fist" },

    // spinarak (ID 167)
    167: { regular: ["Swarm", "Insomnia"], hidden: "Sniper" },

    // ariados (ID 168)
    168: { regular: ["Swarm", "Insomnia"], hidden: "Sniper" },

    // crobat (ID 169)
    169: { regular: ["Inner Focus", null], hidden: "Infiltrator" },

    // chinchou [non-vanilla] (ID 170)
    170: { regular: ["Volt Absorb", null], hidden: "Water Absorb" },

    // lanturn [non-vanilla] (ID 171)
    171: { regular: ["Volt Absorb", null], hidden: "Water Absorb" },

    // pichu (ID 172)
    172: { regular: ["Static", null], hidden: "Lightning Rod" },

    // cleffa [non-vanilla] (ID 173)
    173: { regular: ["Magic Guard", null], hidden: "Friend Guard" },

    // igglybuff (ID 174)
    174: { regular: ["Cute Charm", "Competitive"], hidden: "Friend Guard" },

    // togepi [non-vanilla] (ID 175)
    175: { regular: ["Hustle", "Super Luck"], hidden: "Serene Grace" },

    // togetic [non-vanilla] (ID 176)
    176: { regular: ["Hustle", "Super Luck"], hidden: "Serene Grace" },

    // natu (ID 177)
    177: { regular: ["Synchronize", "Early Bird"], hidden: "Magic Bounce" },

    // xatu (ID 178)
    178: { regular: ["Synchronize", "Early Bird"], hidden: "Magic Bounce" },

    // mareep (ID 179)
    179: { regular: ["Static", null], hidden: "Plus" },

    // flaaffy (ID 180)
    180: { regular: ["Static", null], hidden: "Plus" },

    // ampharos (ID 181)
    181: { regular: ["Static", null], hidden: "Plus" },

    // bellossom (ID 182)
    182: { regular: ["Chlorophyll", null], hidden: "Healer" },

    // marill [non-vanilla] (ID 183)
    183: { regular: ["Huge Power", null], hidden: "Sap Sipper" },

    // azumarill [non-vanilla] (ID 184)
    184: { regular: ["Huge Power", null], hidden: "Sap Sipper" },

    // sudowoodo (ID 185)
    185: { regular: ["Sturdy", "Rock Head"], hidden: "Rattled" },

    // politoed [non-vanilla] (ID 186)
    186: { regular: ["Swift Swim", null], hidden: "Drizzle" },

    // hoppip (ID 187)
    187: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Infiltrator" },

    // skiploom (ID 188)
    188: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Infiltrator" },

    // jumpluff (ID 189)
    189: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Infiltrator" },

    // aipom [non-vanilla] (ID 190)
    190: { regular: ["Skill Link", "Technician"], hidden: "Run Away" },

    // sunkern (ID 191)
    191: { regular: ["Chlorophyll", "Solar Power"], hidden: "Early Bird" },

    // sunflora (ID 192)
    192: { regular: ["Chlorophyll", "Solar Power"], hidden: "Early Bird" },

    // yanma (ID 193)
    193: { regular: ["Speed Boost", "Compound Eyes"], hidden: "Frisk" },

    // wooper [non-vanilla] (ID 194)
    194: { regular: ["Water Absorb", null], hidden: "Unaware" },

    // quagsire [non-vanilla] (ID 195)
    195: { regular: ["Water Absorb", null], hidden: "Unaware" },

    // espeon (ID 196)
    196: { regular: ["Synchronize", null], hidden: "Magic Bounce" },

    // umbreon (ID 197)
    197: { regular: ["Synchronize", null], hidden: "Inner Focus" },

    // murkrow [non-vanilla] (ID 198)
    198: { regular: ["Super Luck", null], hidden: "Prankster" },

    // slowking (ID 199)
    199: { regular: ["Oblivious", "Own Tempo"], hidden: "Regenerator" },

    // misdreavus (ID 200)
    200: { regular: ["Levitate", null], hidden: null },

    // wobbuffet (ID 202)
    202: { regular: ["Shadow Tag", null], hidden: "Telepathy" },

    // girafarig (ID 203)
    203: { regular: ["Inner Focus", "Early Bird"], hidden: "Sap Sipper" },

    // pineco (ID 204)
    204: { regular: ["Sturdy", null], hidden: "Overcoat" },

    // forretress (ID 205)
    205: { regular: ["Sturdy", null], hidden: "Overcoat" },

    // dunsparce [non-vanilla] (ID 206)
    206: { regular: ["Serene Grace", null], hidden: "Rattled" },

    // gligar [non-vanilla] (ID 207)
    207: { regular: ["Hyper Cutter", null], hidden: "Immunity" },

    // steelix (ID 208)
    208: { regular: ["Rock Head", "Sturdy"], hidden: "Sheer Force" },

    // snubbull [non-vanilla] (ID 209)
    209: { regular: ["Intimidate", null], hidden: "Run Away" },

    // granbull [non-vanilla] (ID 210)
    210: { regular: ["Intimidate", null], hidden: "Quick Feet" },

    // qwilfish [non-vanilla] (ID 211)
    211: { regular: ["Intimidate", "Swift Swim"], hidden: "Poison Point" },

    // scizor (ID 212)
    212: { regular: ["Swarm", "Technician"], hidden: "Light Metal" },

    // shuckle (ID 213)
    213: { regular: ["Sturdy", "Gluttony"], hidden: "Contrary" },

    // heracross (ID 214)
    214: { regular: ["Swarm", "Guts"], hidden: "Moxie" },

    // sneasel [non-vanilla] (ID 215)
    215: { regular: ["Inner Focus", null], hidden: "Pickpocket" },

    // teddiursa [non-vanilla] (ID 216)
    216: { regular: ["Quick Feet", null], hidden: "Honey Gather" },

    // ursaring [non-vanilla] (ID 217)
    217: { regular: ["Quick Feet", null], hidden: "Unnerve" },

    // slugma (ID 218)
    218: { regular: ["Magma Armor", "Flame Body"], hidden: "Weak Armor" },

    // magcargo (ID 219)
    219: { regular: ["Magma Armor", "Flame Body"], hidden: "Weak Armor" },

    // swinub [non-vanilla] (ID 220)
    220: { regular: ["Thick Fat", null], hidden: "Snow Cloak" },

    // piloswine [non-vanilla] (ID 221)
    221: { regular: ["Thick Fat", null], hidden: "Snow Cloak" },

    // corsola (ID 222)
    222: { regular: ["Hustle", "Natural Cure"], hidden: "Regenerator" },

    // remoraid (ID 223)
    223: { regular: ["Hustle", "Sniper"], hidden: "Moody" },

    // octillery (ID 224)
    224: { regular: ["Suction Cups", "Sniper"], hidden: "Moody" },

    // delibird (ID 225)
    225: { regular: ["Vital Spirit", "Hustle"], hidden: "Insomnia" },

    // mantine [non-vanilla] (ID 226)
    226: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // skarmory (ID 227)
    227: { regular: ["Keen Eye", "Sturdy"], hidden: "Weak Armor" },

    // houndour [non-vanilla] (ID 228)
    228: { regular: ["Unnerve", null], hidden: "Flash Fire" },

    // houndoom [non-vanilla] (ID 229)
    229: { regular: ["Unnerve", null], hidden: "Flash Fire" },

    // kingdra (ID 230)
    230: { regular: ["Swift Swim", "Sniper"], hidden: "Damp" },

    // phanpy [non-vanilla] (ID 231)
    231: { regular: ["Sturdy", null], hidden: "Sand Veil" },

    // donphan (ID 232)
    232: { regular: ["Sturdy", null], hidden: "Sand Veil" },

    // porygon2 (ID 233)
    233: { regular: ["Trace", "Download"], hidden: "Analytic" },

    // stantler (ID 234)
    234: { regular: ["Intimidate", "Frisk"], hidden: "Sap Sipper" },

    // smeargle (ID 235)
    235: { regular: ["Own Tempo", "Technician"], hidden: "Moody" },

    // tyrogue [non-vanilla] (ID 236)
    236: { regular: ["Guts", null], hidden: "Vital Spirit" },

    // hitmontop [non-vanilla] (ID 237)
    237: { regular: ["Intimidate", null], hidden: "Steadfast" },

    // smoochum [non-vanilla] (ID 238)
    238: { regular: ["Rain Dish", null], hidden: "Hydration" },

    // elekid (ID 239)
    239: { regular: ["Static", null], hidden: "Vital Spirit" },

    // magby (ID 240)
    240: { regular: ["Flame Body", null], hidden: "Vital Spirit" },

    // miltank (ID 241)
    241: { regular: ["Thick Fat", "Scrappy"], hidden: "Sap Sipper" },

    // blissey (ID 242)
    242: { regular: ["Natural Cure", "Serene Grace"], hidden: "Healer" },

    // raikou (ID 243)
    243: { regular: ["Pressure", null], hidden: "Inner Focus" },

    // entei (ID 244)
    244: { regular: ["Pressure", null], hidden: "Inner Focus" },

    // suicune (ID 245)
    245: { regular: ["Pressure", null], hidden: "Inner Focus" },

    // larvitar [non-vanilla] (ID 246)
    246: { regular: ["Sand Veil", null], hidden: "Guts" },

    // pupitar (ID 247)
    247: { regular: ["Shed Skin", null], hidden: null },

    // tyranitar [non-vanilla] (ID 248)
    248: { regular: ["Unnerve", null], hidden: "Sand Stream" },

    // lugia (ID 249)
    249: { regular: ["Pressure", null], hidden: "Multiscale" },

    // hooh (ID 250)
    250: { regular: ["Pressure", null], hidden: "Regenerator" },

    // celebi (ID 251)
    251: { regular: ["Natural Cure", null], hidden: null },

    // treecko (ID 252)
    252: { regular: ["Overgrow", null], hidden: "Unburden" },

    // grovyle (ID 253)
    253: { regular: ["Overgrow", null], hidden: "Unburden" },

    // sceptile (ID 254)
    254: { regular: ["Overgrow", null], hidden: "Unburden" },

    // torchic (ID 255)
    255: { regular: ["Blaze", null], hidden: "Speed Boost" },

    // combusken (ID 256)
    256: { regular: ["Blaze", null], hidden: "Speed Boost" },

    // blaziken (ID 257)
    257: { regular: ["Blaze", null], hidden: "Speed Boost" },

    // mudkip (ID 258)
    258: { regular: ["Torrent", null], hidden: "Damp" },

    // marshtomp (ID 259)
    259: { regular: ["Torrent", null], hidden: "Damp" },

    // swampert (ID 260)
    260: { regular: ["Torrent", null], hidden: "Damp" },

    // poochyena [non-vanilla] (ID 261)
    261: { regular: ["Run Away", null], hidden: "Rattled" },

    // mightyena [non-vanilla] (ID 262)
    262: { regular: ["Intimidate", null], hidden: "Moxie" },

    // zigzagoon (ID 263)
    263: { regular: ["Pickup", "Gluttony"], hidden: "Quick Feet" },

    // linoone (ID 264)
    264: { regular: ["Pickup", "Gluttony"], hidden: "Quick Feet" },

    // wurmple (ID 265)
    265: { regular: ["Shield Dust", null], hidden: "Run Away" },

    // silcoon (ID 266)
    266: { regular: ["Shed Skin", null], hidden: null },

    // beautifly (ID 267)
    267: { regular: ["Swarm", null], hidden: "Rivalry" },

    // cascoon (ID 268)
    268: { regular: ["Shed Skin", null], hidden: null },

    // dustox (ID 269)
    269: { regular: ["Shield Dust", null], hidden: "Compound Eyes" },

    // lotad (ID 270)
    270: { regular: ["Swift Swim", "Rain Dish"], hidden: "Own Tempo" },

    // lombre (ID 271)
    271: { regular: ["Swift Swim", "Rain Dish"], hidden: "Own Tempo" },

    // ludicolo (ID 272)
    272: { regular: ["Swift Swim", "Rain Dish"], hidden: "Own Tempo" },

    // seedot [non-vanilla] (ID 273)
    273: { regular: ["Wind Rider", "Chlorophyll"], hidden: "Pickpocket" },

    // nuzleaf [non-vanilla] (ID 274)
    274: { regular: ["Wind Rider", "Chlorophyll"], hidden: "Pickpocket" },

    // shiftry [non-vanilla] (ID 275)
    275: { regular: ["Wind Rider", "Chlorophyll"], hidden: "Pickpocket" },

    // taillow (ID 276)
    276: { regular: ["Guts", null], hidden: "Scrappy" },

    // swellow (ID 277)
    277: { regular: ["Guts", null], hidden: "Scrappy" },

    // wingull [non-vanilla] (ID 278)
    278: { regular: ["Rain Dish", null], hidden: "Keen Eye" },

    // pelipper [non-vanilla] (ID 279)
    279: { regular: ["Rain Dish", null], hidden: "Drizzle" },

    // ralts [non-vanilla] (ID 280)
    280: { regular: ["Pixilate", null], hidden: "Telepathy" },

    // kirlia [non-vanilla] (ID 281)
    281: { regular: ["Pixilate", null], hidden: "Telepathy" },

    // gardevoir [non-vanilla] (ID 282)
    282: { regular: ["Pixilate", null], hidden: "Telepathy" },

    // surskit (ID 283)
    283: { regular: ["Swift Swim", null], hidden: "Rain Dish" },

    // masquerain (ID 284)
    284: { regular: ["Intimidate", null], hidden: "Unnerve" },

    // shroomish (ID 285)
    285: { regular: ["Effect Spore", "Poison Heal"], hidden: "Quick Feet" },

    // breloom (ID 286)
    286: { regular: ["Effect Spore", "Poison Heal"], hidden: "Technician" },

    // slakoth (ID 287)
    287: { regular: ["Truant", null], hidden: null },

    // vigoroth (ID 288)
    288: { regular: ["Vital Spirit", null], hidden: null },

    // slaking (ID 289)
    289: { regular: ["Truant", null], hidden: null },

    // nincada (ID 290)
    290: { regular: ["Compound Eyes", null], hidden: "Run Away" },

    // ninjask (ID 291)
    291: { regular: ["Speed Boost", null], hidden: "Infiltrator" },

    // shedinja (ID 292)
    292: { regular: ["Wonder Guard", null], hidden: null },

    // whismur (ID 293)
    293: { regular: ["Soundproof", null], hidden: "Rattled" },

    // loudred (ID 294)
    294: { regular: ["Soundproof", null], hidden: "Scrappy" },

    // exploud (ID 295)
    295: { regular: ["Soundproof", null], hidden: "Scrappy" },

    // makuhita [non-vanilla] (ID 296)
    296: { regular: ["Guts", null], hidden: "Thick Fat" },

    // hariyama [non-vanilla] (ID 297)
    297: { regular: ["Guts", null], hidden: "Thick Fat" },

    // azurill [non-vanilla] (ID 298)
    298: { regular: ["Huge Power", null], hidden: "Sap Sipper" },

    // nosepass (ID 299)
    299: { regular: ["Sturdy", "Magnet Pull"], hidden: "Sand Force" },

    // skitty (ID 300)
    300: { regular: ["Cute Charm", "Normalize"], hidden: "Wonder Skin" },

    // delcatty (ID 301)
    301: { regular: ["Cute Charm", "Normalize"], hidden: "Wonder Skin" },

    // sableye [non-vanilla] (ID 302)
    302: { regular: ["Prankster", null], hidden: "Stall" },

    // mawile [non-vanilla] (ID 303)
    303: { regular: ["Intimidate", null], hidden: "Sheer Force" },

    // aron (ID 304)
    304: { regular: ["Sturdy", "Rock Head"], hidden: "Heavy Metal" },

    // lairon (ID 305)
    305: { regular: ["Sturdy", "Rock Head"], hidden: "Heavy Metal" },

    // aggron [non-vanilla] (ID 306)
    306: { regular: ["Sturdy", "Filter"], hidden: "Heavy Metal" },

    // meditite (ID 307)
    307: { regular: ["Pure Power", null], hidden: "Telepathy" },

    // medicham (ID 308)
    308: { regular: ["Pure Power", null], hidden: "Telepathy" },

    // electrike [non-vanilla] (ID 309)
    309: { regular: ["Galvanize", null], hidden: "Lightning Rod" },

    // manectric [non-vanilla] (ID 310)
    310: { regular: ["Galvanize", null], hidden: "Lightning Rod" },

    // plusle (ID 311)
    311: { regular: ["Plus", null], hidden: "Lightning Rod" },

    // minun (ID 312)
    312: { regular: ["Minus", null], hidden: "Volt Absorb" },

    // volbeat (ID 313)
    313: { regular: ["Illuminate", "Swarm"], hidden: "Prankster" },

    // illumise (ID 314)
    314: { regular: ["Oblivious", "Tinted Lens"], hidden: "Prankster" },

    // roselia [non-vanilla] (ID 315)
    315: { regular: ["Leaf Guard", "Poison Point"], hidden: "Natural Cure" },

    // gulpin (ID 316)
    316: { regular: ["Liquid Ooze", "Sticky Hold"], hidden: "Gluttony" },

    // swalot (ID 317)
    317: { regular: ["Liquid Ooze", "Sticky Hold"], hidden: "Gluttony" },

    // carvanha [non-vanilla] (ID 318)
    318: { regular: ["Speed Boost", "Strong Jaw"], hidden: "Rough Skin" },

    // sharpedo [non-vanilla] (ID 319)
    319: { regular: ["Speed Boost", "Strong Jaw"], hidden: "Rough Skin" },

    // wailmer (ID 320)
    320: { regular: ["Water Veil", "Oblivious"], hidden: "Pressure" },

    // wailord (ID 321)
    321: { regular: ["Water Veil", "Oblivious"], hidden: "Pressure" },

    // numel [non-vanilla] (ID 322)
    322: { regular: ["Oblivious", null], hidden: "Own Tempo" },

    // camerupt [non-vanilla] (ID 323)
    323: { regular: ["Magma Armor", null], hidden: "Anger Point" },

    // torkoal [non-vanilla] (ID 324)
    324: { regular: ["Shell Armor", null], hidden: "Drought" },

    // spoink (ID 325)
    325: { regular: ["Thick Fat", "Own Tempo"], hidden: "Gluttony" },

    // grumpig (ID 326)
    326: { regular: ["Thick Fat", "Own Tempo"], hidden: "Gluttony" },

    // spinda (ID 327)
    327: { regular: ["Own Tempo", "Tangled Feet"], hidden: "Contrary" },

    // trapinch (ID 328)
    328: { regular: ["Hyper Cutter", "Arena Trap"], hidden: "Sheer Force" },

    // vibrava (ID 329)
    329: { regular: ["Levitate", null], hidden: null },

    // flygon (ID 330)
    330: { regular: ["Levitate", null], hidden: null },

    // cacnea (ID 331)
    331: { regular: ["Sand Veil", null], hidden: "Water Absorb" },

    // cacturne (ID 332)
    332: { regular: ["Sand Veil", null], hidden: "Water Absorb" },

    // swablu (ID 333)
    333: { regular: ["Natural Cure", null], hidden: "Cloud Nine" },

    // altaria (ID 334)
    334: { regular: ["Natural Cure", null], hidden: "Cloud Nine" },

    // zangoose (ID 335)
    335: { regular: ["Immunity", null], hidden: "Toxic Boost" },

    // seviper (ID 336)
    336: { regular: ["Shed Skin", null], hidden: "Infiltrator" },

    // lunatone (ID 337)
    337: { regular: ["Levitate", null], hidden: null },

    // solrock (ID 338)
    338: { regular: ["Levitate", null], hidden: null },

    // barboach [non-vanilla] (ID 339)
    339: { regular: ["Hydration", null], hidden: "Anticipation" },

    // whiscash [non-vanilla] (ID 340)
    340: { regular: ["Hydration", null], hidden: "Anticipation" },

    // corphish [non-vanilla] (ID 341)
    341: { regular: ["Shell Armor", null], hidden: "Adaptability" },

    // crawdaunt [non-vanilla] (ID 342)
    342: { regular: ["Shell Armor", null], hidden: "Adaptability" },

    // baltoy (ID 343)
    343: { regular: ["Levitate", null], hidden: null },

    // claydol (ID 344)
    344: { regular: ["Levitate", null], hidden: null },

    // lileep (ID 345)
    345: { regular: ["Suction Cups", null], hidden: "Storm Drain" },

    // cradily (ID 346)
    346: { regular: ["Suction Cups", null], hidden: "Storm Drain" },

    // anorith (ID 347)
    347: { regular: ["Battle Armor", null], hidden: "Swift Swim" },

    // armaldo (ID 348)
    348: { regular: ["Battle Armor", null], hidden: "Swift Swim" },

    // feebas [non-vanilla] (ID 349)
    349: { regular: ["Swift Swim", "Adaptability"], hidden: "Oblivious" },

    // milotic [non-vanilla] (ID 350)
    350: { regular: ["Marvel Scale", "Cute Charm"], hidden: "Competitive" },

    // kecleon (ID 352)
    352: { regular: ["Color Change", null], hidden: "Protean" },

    // shuppet (ID 353)
    353: { regular: ["Insomnia", "Frisk"], hidden: "Cursed Body" },

    // banette (ID 354)
    354: { regular: ["Insomnia", "Frisk"], hidden: "Cursed Body" },

    // duskull (ID 355)
    355: { regular: ["Levitate", null], hidden: "Frisk" },

    // dusclops (ID 356)
    356: { regular: ["Pressure", null], hidden: "Frisk" },

    // tropius (ID 357)
    357: { regular: ["Chlorophyll", "Solar Power"], hidden: "Harvest" },

    // chimecho (ID 358)
    358: { regular: ["Levitate", null], hidden: null },

    // absol [non-vanilla] (ID 359)
    359: { regular: ["Sharpness", null], hidden: "Super Luck" },

    // wynaut (ID 360)
    360: { regular: ["Shadow Tag", null], hidden: "Telepathy" },

    // snorunt [non-vanilla] (ID 361)
    361: { regular: ["Inner Focus", null], hidden: "Moody" },

    // glalie [non-vanilla] (ID 362)
    362: { regular: ["Inner Focus", null], hidden: "Moody" },

    // spheal [non-vanilla] (ID 363)
    363: { regular: ["Thick Fat", null], hidden: "Ice Body" },

    // sealeo [non-vanilla] (ID 364)
    364: { regular: ["Thick Fat", null], hidden: "Ice Body" },

    // walrein [non-vanilla] (ID 365)
    365: { regular: ["Thick Fat", null], hidden: "Ice Body" },

    // clamperl (ID 366)
    366: { regular: ["Shell Armor", null], hidden: "Rattled" },

    // huntail (ID 367)
    367: { regular: ["Swift Swim", null], hidden: "Water Veil" },

    // gorebyss (ID 368)
    368: { regular: ["Swift Swim", null], hidden: "Hydration" },

    // relicanth [non-vanilla] (ID 369)
    369: { regular: ["Swift Swim", null], hidden: "Sturdy" },

    // luvdisc (ID 370)
    370: { regular: ["Swift Swim", null], hidden: "Hydration" },

    // bagon (ID 371)
    371: { regular: ["Rock Head", null], hidden: "Sheer Force" },

    // shelgon (ID 372)
    372: { regular: ["Rock Head", null], hidden: "Overcoat" },

    // salamence (ID 373)
    373: { regular: ["Intimidate", null], hidden: "Moxie" },

    // beldum (ID 374)
    374: { regular: ["Clear Body", null], hidden: "Light Metal" },

    // metang (ID 375)
    375: { regular: ["Clear Body", null], hidden: "Light Metal" },

    // metagross (ID 376)
    376: { regular: ["Clear Body", null], hidden: "Light Metal" },

    // regirock (ID 377)
    377: { regular: ["Clear Body", null], hidden: "Sturdy" },

    // regice (ID 378)
    378: { regular: ["Clear Body", null], hidden: "Ice Body" },

    // registeel (ID 379)
    379: { regular: ["Clear Body", null], hidden: "Light Metal" },

    // latias (ID 380)
    380: { regular: ["Levitate", null], hidden: null },

    // latios (ID 381)
    381: { regular: ["Levitate", null], hidden: null },

    // kyogre (ID 382)
    382: { regular: ["Drizzle", null], hidden: null },

    // groudon (ID 383)
    383: { regular: ["Drought", null], hidden: null },

    // rayquaza (ID 384)
    384: { regular: ["Air Lock", null], hidden: null },

    // jirachi (ID 385)
    385: { regular: ["Serene Grace", null], hidden: null },

    // turtwig (ID 387)
    387: { regular: ["Overgrow", null], hidden: "Shell Armor" },

    // grotle (ID 388)
    388: { regular: ["Overgrow", null], hidden: "Shell Armor" },

    // torterra (ID 389)
    389: { regular: ["Overgrow", null], hidden: "Shell Armor" },

    // chimchar (ID 390)
    390: { regular: ["Blaze", null], hidden: "Iron Fist" },

    // monferno (ID 391)
    391: { regular: ["Blaze", null], hidden: "Iron Fist" },

    // infernape (ID 392)
    392: { regular: ["Blaze", null], hidden: "Iron Fist" },

    // piplup (ID 393)
    393: { regular: ["Torrent", null], hidden: "Competitive" },

    // prinplup (ID 394)
    394: { regular: ["Torrent", null], hidden: "Competitive" },

    // empoleon (ID 395)
    395: { regular: ["Torrent", null], hidden: "Competitive" },

    // starly (ID 396)
    396: { regular: ["Keen Eye", null], hidden: "Reckless" },

    // staravia (ID 397)
    397: { regular: ["Intimidate", null], hidden: "Reckless" },

    // staraptor (ID 398)
    398: { regular: ["Intimidate", null], hidden: "Reckless" },

    // bidoof (ID 399)
    399: { regular: ["Simple", "Unaware"], hidden: "Moody" },

    // bibarel (ID 400)
    400: { regular: ["Simple", "Unaware"], hidden: "Moody" },

    // kricketot (ID 401)
    401: { regular: ["Shed Skin", null], hidden: "Run Away" },

    // kricketune (ID 402)
    402: { regular: ["Swarm", null], hidden: "Technician" },

    // shinx [non-vanilla] (ID 403)
    403: { regular: ["Intimidate", "Strong Jaw"], hidden: "Guts" },

    // luxio [non-vanilla] (ID 404)
    404: { regular: ["Intimidate", "Strong Jaw"], hidden: "Guts" },

    // luxray [non-vanilla] (ID 405)
    405: { regular: ["Intimidate", "Strong Jaw"], hidden: "Guts" },

    // budew [non-vanilla] (ID 406)
    406: { regular: ["Leaf Guard", "Poison Point"], hidden: "Natural Cure" },

    // roserade [non-vanilla] (ID 407)
    407: { regular: ["Technician", "Poison Point"], hidden: "Natural Cure" },

    // cranidos (ID 408)
    408: { regular: ["Mold Breaker", null], hidden: "Sheer Force" },

    // rampardos (ID 409)
    409: { regular: ["Mold Breaker", null], hidden: "Sheer Force" },

    // shieldon (ID 410)
    410: { regular: ["Sturdy", null], hidden: "Soundproof" },

    // bastiodon (ID 411)
    411: { regular: ["Sturdy", null], hidden: "Soundproof" },

    // mothim (ID 414)
    414: { regular: ["Swarm", null], hidden: "Tinted Lens" },

    // combee (ID 415)
    415: { regular: ["Honey Gather", null], hidden: "Hustle" },

    // vespiquen (ID 416)
    416: { regular: ["Pressure", null], hidden: "Unnerve" },

    // pachirisu [non-vanilla] (ID 417)
    417: { regular: ["Static", "Pickup"], hidden: "Volt Absorb" },

    // buizel (ID 418)
    418: { regular: ["Swift Swim", null], hidden: "Water Veil" },

    // floatzel (ID 419)
    419: { regular: ["Swift Swim", null], hidden: "Water Veil" },

    // cherubi (ID 420)
    420: { regular: ["Chlorophyll", null], hidden: null },

    // shellos [non-vanilla] (ID 422)
    422: { regular: ["Sticky Hold", "Sand Force"], hidden: "Storm Drain" },

    // gastrodon [non-vanilla] (ID 423)
    423: { regular: ["Sticky Hold", "Sand Force"], hidden: "Storm Drain" },

    // ambipom [non-vanilla] (ID 424)
    424: { regular: ["Skill Link", "Technician"], hidden: "Run Away" },

    // drifloon (ID 425)
    425: { regular: ["Aftermath", "Unburden"], hidden: "Flare Boost" },

    // drifblim (ID 426)
    426: { regular: ["Aftermath", "Unburden"], hidden: "Flare Boost" },

    // buneary [non-vanilla] (ID 427)
    427: { regular: ["Limber", null], hidden: "Run Away" },

    // lopunny [non-vanilla] (ID 428)
    428: { regular: ["Limber", null], hidden: "Cute Charm" },

    // mismagius (ID 429)
    429: { regular: ["Levitate", null], hidden: null },

    // honchkrow [non-vanilla] (ID 430)
    430: { regular: ["Super Luck", null], hidden: "Prankster" },

    // glameow (ID 431)
    431: { regular: ["Limber", "Own Tempo"], hidden: "Keen Eye" },

    // purugly (ID 432)
    432: { regular: ["Thick Fat", "Own Tempo"], hidden: "Defiant" },

    // chingling (ID 433)
    433: { regular: ["Levitate", null], hidden: null },

    // stunky (ID 434)
    434: { regular: ["Stench", "Aftermath"], hidden: "Keen Eye" },

    // skuntank (ID 435)
    435: { regular: ["Stench", "Aftermath"], hidden: "Keen Eye" },

    // bronzor (ID 436)
    436: { regular: ["Levitate", "Heatproof"], hidden: "Heavy Metal" },

    // bronzong (ID 437)
    437: { regular: ["Levitate", "Heatproof"], hidden: "Heavy Metal" },

    // bonsly (ID 438)
    438: { regular: ["Sturdy", "Rock Head"], hidden: "Rattled" },

    // mimejr (ID 439)
    439: { regular: ["Soundproof", "Filter"], hidden: "Technician" },

    // happiny (ID 440)
    440: { regular: ["Natural Cure", "Serene Grace"], hidden: "Friend Guard" },

    // chatot (ID 441)
    441: { regular: ["Keen Eye", "Tangled Feet"], hidden: "Big Pecks" },

    // spiritomb (ID 442)
    442: { regular: ["Pressure", null], hidden: "Infiltrator" },

    // gible (ID 443)
    443: { regular: ["Sand Veil", null], hidden: "Rough Skin" },

    // gabite (ID 444)
    444: { regular: ["Sand Veil", null], hidden: "Rough Skin" },

    // garchomp (ID 445)
    445: { regular: ["Sand Veil", null], hidden: "Rough Skin" },

    // munchlax (ID 446)
    446: { regular: ["Pickup", "Thick Fat"], hidden: "Gluttony" },

    // riolu [non-vanilla] (ID 447)
    447: { regular: ["Inner Focus", null], hidden: "Prankster" },

    // lucario [non-vanilla] (ID 448)
    448: { regular: ["Inner Focus", null], hidden: "Justified" },

    // hippopotas [non-vanilla] (ID 449)
    449: { regular: ["Sand Force", null], hidden: "Sand Stream" },

    // hippowdon [non-vanilla] (ID 450)
    450: { regular: ["Sand Force", null], hidden: "Sand Stream" },

    // skorupi [non-vanilla] (ID 451)
    451: { regular: ["Battle Armor", null], hidden: "Sniper" },

    // drapion [non-vanilla] (ID 452)
    452: { regular: ["Battle Armor", null], hidden: "Sniper" },

    // croagunk [non-vanilla] (ID 453)
    453: { regular: ["Poison Touch", "Poison Point"], hidden: "Dry Skin" },

    // toxicroak [non-vanilla] (ID 454)
    454: { regular: ["Poison Touch", "Poison Point"], hidden: "Dry Skin" },

    // carnivine (ID 455)
    455: { regular: ["Levitate", null], hidden: null },

    // finneon [non-vanilla] (ID 456)
    456: { regular: ["Swift Swim", null], hidden: "Storm Drain" },

    // lumineon [non-vanilla] (ID 457)
    457: { regular: ["Swift Swim", null], hidden: "Storm Drain" },

    // mantyke [non-vanilla] (ID 458)
    458: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // snover (ID 459)
    459: { regular: ["Snow Warning", null], hidden: "Soundproof" },

    // abomasnow (ID 460)
    460: { regular: ["Snow Warning", null], hidden: "Soundproof" },

    // weavile (ID 461)
    461: { regular: ["Pressure", null], hidden: "Pickpocket" },

    // magnezone (ID 462)
    462: { regular: ["Magnet Pull", "Sturdy"], hidden: "Analytic" },

    // lickilicky (ID 463)
    463: { regular: ["Own Tempo", "Oblivious"], hidden: "Cloud Nine" },

    // rhyperior [non-vanilla] (ID 464)
    464: { regular: ["Solid Rock", null], hidden: "Lightning Rod" },

    // tangrowth (ID 465)
    465: { regular: ["Chlorophyll", "Leaf Guard"], hidden: "Regenerator" },

    // electivire [non-vanilla] (ID 466)
    466: { regular: ["Iron Fist", null], hidden: "Vital Spirit" },

    // magmortar (ID 467)
    467: { regular: ["Flame Body", null], hidden: "Vital Spirit" },

    // togekiss [non-vanilla] (ID 468)
    468: { regular: ["Aerilate", "Super Luck"], hidden: "Serene Grace" },

    // yanmega (ID 469)
    469: { regular: ["Speed Boost", "Tinted Lens"], hidden: "Frisk" },

    // leafeon [non-vanilla] (ID 470)
    470: { regular: ["Technician", null], hidden: "Chlorophyll" },

    // glaceon [non-vanilla] (ID 471)
    471: { regular: ["Slush Rush", null], hidden: "Ice Body" },

    // gliscor [non-vanilla] (ID 472)
    472: { regular: ["Hyper Cutter", null], hidden: "Poison Heal" },

    // mamoswine [non-vanilla] (ID 473)
    473: { regular: ["Thick Fat", null], hidden: "Snow Cloak" },

    // porygonz (ID 474)
    474: { regular: ["Adaptability", "Download"], hidden: "Analytic" },

    // gallade [non-vanilla] (ID 475)
    475: { regular: ["Sharpness", null], hidden: "Justified" },

    // probopass (ID 476)
    476: { regular: ["Sturdy", "Magnet Pull"], hidden: "Sand Force" },

    // dusknoir (ID 477)
    477: { regular: ["Pressure", null], hidden: "Frisk" },

    // froslass (ID 478)
    478: { regular: ["Snow Cloak", null], hidden: "Cursed Body" },

    // rotom (ID 479)
    479: { regular: ["Levitate", null], hidden: null },

    // uxie (ID 480)
    480: { regular: ["Levitate", null], hidden: null },

    // mesprit (ID 481)
    481: { regular: ["Levitate", null], hidden: null },

    // azelf (ID 482)
    482: { regular: ["Levitate", null], hidden: null },

    // dialga (ID 483)
    483: { regular: ["Pressure", null], hidden: "Telepathy" },

    // palkia (ID 484)
    484: { regular: ["Pressure", null], hidden: "Telepathy" },

    // heatran (ID 485)
    485: { regular: ["Flash Fire", null], hidden: "Flame Body" },

    // regigigas (ID 486)
    486: { regular: ["Slow Start", null], hidden: null },

    // cresselia (ID 488)
    488: { regular: ["Levitate", null], hidden: null },

    // phione (ID 489)
    489: { regular: ["Hydration", null], hidden: null },

    // manaphy (ID 490)
    490: { regular: ["Hydration", null], hidden: null },

    // darkrai (ID 491)
    491: { regular: ["Bad Dreams", null], hidden: null },

    // victini (ID 494)
    494: { regular: ["Victory Star", null], hidden: null },

    // snivy (ID 495)
    495: { regular: ["Overgrow", null], hidden: "Contrary" },

    // servine (ID 496)
    496: { regular: ["Overgrow", null], hidden: "Contrary" },

    // serperior (ID 497)
    497: { regular: ["Overgrow", null], hidden: "Contrary" },

    // tepig (ID 498)
    498: { regular: ["Blaze", null], hidden: "Thick Fat" },

    // pignite (ID 499)
    499: { regular: ["Blaze", null], hidden: "Thick Fat" },

    // emboar (ID 500)
    500: { regular: ["Blaze", null], hidden: "Reckless" },

    // oshawott [non-vanilla] (ID 501)
    501: { regular: ["Shell Armor", null], hidden: "Torrent" },

    // dewott [non-vanilla] (ID 502)
    502: { regular: ["Shell Armor", null], hidden: "Torrent" },

    // samurott [non-vanilla] (ID 503)
    503: { regular: ["Shell Armor", null], hidden: "Torrent" },

    // patrat (ID 504)
    504: { regular: ["Run Away", "Keen Eye"], hidden: "Analytic" },

    // watchog (ID 505)
    505: { regular: ["Illuminate", "Keen Eye"], hidden: "Analytic" },

    // lillipup [non-vanilla] (ID 506)
    506: { regular: ["Vital Spirit", "Sand Rush"], hidden: "Run Away" },

    // herdier (ID 507)
    507: { regular: ["Intimidate", "Sand Rush"], hidden: "Scrappy" },

    // stoutland (ID 508)
    508: { regular: ["Intimidate", "Sand Rush"], hidden: "Scrappy" },

    // purrloin (ID 509)
    509: { regular: ["Limber", "Unburden"], hidden: "Prankster" },

    // liepard (ID 510)
    510: { regular: ["Limber", "Unburden"], hidden: "Prankster" },

    // pansage (ID 511)
    511: { regular: ["Gluttony", null], hidden: "Overgrow" },

    // simisage (ID 512)
    512: { regular: ["Gluttony", null], hidden: "Overgrow" },

    // pansear (ID 513)
    513: { regular: ["Gluttony", null], hidden: "Blaze" },

    // simisear (ID 514)
    514: { regular: ["Gluttony", null], hidden: "Blaze" },

    // panpour (ID 515)
    515: { regular: ["Gluttony", null], hidden: "Torrent" },

    // simipour (ID 516)
    516: { regular: ["Gluttony", null], hidden: "Torrent" },

    // munna [non-vanilla] (ID 517)
    517: { regular: ["Telepathy", null], hidden: "Synchronize" },

    // musharna [non-vanilla] (ID 518)
    518: { regular: ["Telepathy", null], hidden: "Synchronize" },

    // pidove [non-vanilla] (ID 519)
    519: { regular: ["Quick Feet", null], hidden: "Rivalry" },

    // tranquill [non-vanilla] (ID 520)
    520: { regular: ["Quick Feet", null], hidden: "Rivalry" },

    // unfezant [non-vanilla] (ID 521)
    521: { regular: ["Quick Feet", null], hidden: "Rivalry" },

    // blitzle (ID 522)
    522: { regular: ["Lightning Rod", "Motor Drive"], hidden: "Sap Sipper" },

    // zebstrika (ID 523)
    523: { regular: ["Lightning Rod", "Motor Drive"], hidden: "Sap Sipper" },

    // roggenrola [non-vanilla] (ID 524)
    524: { regular: ["Sturdy", "Solid Rock"], hidden: "Weak Armor" },

    // boldore [non-vanilla] (ID 525)
    525: { regular: ["Sturdy", "Solid Rock"], hidden: "Weak Armor" },

    // gigalith [non-vanilla] (ID 526)
    526: { regular: ["Sturdy", "Solid Rock"], hidden: "Sand Stream" },

    // woobat (ID 527)
    527: { regular: ["Unaware", "Klutz"], hidden: "Simple" },

    // swoobat (ID 528)
    528: { regular: ["Unaware", "Klutz"], hidden: "Simple" },

    // drilbur (ID 529)
    529: { regular: ["Sand Rush", "Sand Force"], hidden: "Mold Breaker" },

    // excadrill (ID 530)
    530: { regular: ["Sand Rush", "Sand Force"], hidden: "Mold Breaker" },

    // audino (ID 531)
    531: { regular: ["Healer", "Regenerator"], hidden: "Klutz" },

    // timburr [non-vanilla] (ID 532)
    532: { regular: ["Iron Fist", null], hidden: "Guts" },

    // gurdurr [non-vanilla] (ID 533)
    533: { regular: ["Iron Fist", null], hidden: "Guts" },

    // conkeldurr [non-vanilla] (ID 534)
    534: { regular: ["Iron Fist", null], hidden: "Guts" },

    // tympole [non-vanilla] (ID 535)
    535: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // palpitoad [non-vanilla] (ID 536)
    536: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // seismitoad [non-vanilla] (ID 537)
    537: { regular: ["Swift Swim", null], hidden: "Water Absorb" },

    // throh (ID 538)
    538: { regular: ["Guts", "Inner Focus"], hidden: "Mold Breaker" },

    // sawk (ID 539)
    539: { regular: ["Sturdy", "Inner Focus"], hidden: "Mold Breaker" },

    // sewaddle [non-vanilla] (ID 540)
    540: { regular: ["Swarm", null], hidden: "Chlorophyll" },

    // swadloon [non-vanilla] (ID 541)
    541: { regular: ["Leaf Guard", null], hidden: "Chlorophyll" },

    // leavanny [non-vanilla] (ID 542)
    542: { regular: ["Sharpness", null], hidden: "Chlorophyll" },

    // venipede (ID 543)
    543: { regular: ["Poison Point", "Swarm"], hidden: "Speed Boost" },

    // whirlipede (ID 544)
    544: { regular: ["Poison Point", "Swarm"], hidden: "Speed Boost" },

    // scolipede (ID 545)
    545: { regular: ["Poison Point", "Swarm"], hidden: "Speed Boost" },

    // cottonee [non-vanilla] (ID 546)
    546: { regular: ["Wind Rider", null], hidden: "Prankster" },

    // whimsicott [non-vanilla] (ID 547)
    547: { regular: ["Wind Rider", null], hidden: "Prankster" },

    // petilil (ID 548)
    548: { regular: ["Chlorophyll", "Own Tempo"], hidden: "Leaf Guard" },

    // lilligant (ID 549)
    549: { regular: ["Chlorophyll", "Own Tempo"], hidden: "Leaf Guard" },

    // basculin (ID 550)
    550: { regular: ["Reckless", "Adaptability"], hidden: "Mold Breaker" },

    // sandile [non-vanilla] (ID 551)
    551: { regular: ["Intimidate", null], hidden: "Moxie" },

    // krokorok [non-vanilla] (ID 552)
    552: { regular: ["Intimidate", null], hidden: "Moxie" },

    // krookodile [non-vanilla] (ID 553)
    553: { regular: ["Intimidate", null], hidden: "Moxie" },

    // darumaka (ID 554)
    554: { regular: ["Hustle", null], hidden: "Inner Focus" },

    // maractus [non-vanilla] (ID 556)
    556: { regular: ["Chlorophyll", null], hidden: "Storm Drain" },

    // dwebble (ID 557)
    557: { regular: ["Sturdy", "Shell Armor"], hidden: "Weak Armor" },

    // crustle (ID 558)
    558: { regular: ["Sturdy", "Shell Armor"], hidden: "Weak Armor" },

    // scraggy [non-vanilla] (ID 559)
    559: { regular: ["Intimidate", null], hidden: "Moxie" },

    // scrafty [non-vanilla] (ID 560)
    560: { regular: ["Intimidate", null], hidden: "Moxie" },

    // sigilyph (ID 561)
    561: { regular: ["Wonder Skin", "Magic Guard"], hidden: "Tinted Lens" },

    // yamask (ID 562)
    562: { regular: ["Mummy", null], hidden: null },

    // cofagrigus (ID 563)
    563: { regular: ["Mummy", null], hidden: null },

    // tirtouga (ID 564)
    564: { regular: ["Solid Rock", "Sturdy"], hidden: "Swift Swim" },

    // carracosta (ID 565)
    565: { regular: ["Solid Rock", "Sturdy"], hidden: "Swift Swim" },

    // archen (ID 566)
    566: { regular: ["Defeatist", null], hidden: null },

    // archeops (ID 567)
    567: { regular: ["Defeatist", null], hidden: null },

    // trubbish (ID 568)
    568: { regular: ["Stench", "Sticky Hold"], hidden: "Aftermath" },

    // garbodorgmax (ID 569)
    569: { regular: ["Stench", "Weak Armor"], hidden: "Aftermath" },

    // zorua [non-vanilla] (ID 570)
    570: { regular: ["Eclipsate", null], hidden: "Illusion" },

    // zoroark [non-vanilla] (ID 571)
    571: { regular: ["Eclipsate", null], hidden: "Illusion" },

    // minccino [non-vanilla] (ID 572)
    572: { regular: ["Skill Link", "Technician"], hidden: "Cute Charm" },

    // cinccino [non-vanilla] (ID 573)
    573: { regular: ["Skill Link", "Technician"], hidden: "Cute Charm" },

    // gothita (ID 574)
    574: { regular: ["Frisk", "Competitive"], hidden: "Shadow Tag" },

    // gothorita (ID 575)
    575: { regular: ["Frisk", "Competitive"], hidden: "Shadow Tag" },

    // gothitelle (ID 576)
    576: { regular: ["Frisk", "Competitive"], hidden: "Shadow Tag" },

    // solosis [non-vanilla] (ID 577)
    577: { regular: ["Regenerator", "Magic Guard"], hidden: "Overcoat" },

    // duosion [non-vanilla] (ID 578)
    578: { regular: ["Regenerator", "Magic Guard"], hidden: "Overcoat" },

    // reuniclus [non-vanilla] (ID 579)
    579: { regular: ["Regenerator", "Magic Guard"], hidden: "Overcoat" },

    // ducklett [non-vanilla] (ID 580)
    580: { regular: ["No Guard", null], hidden: "Hydration" },

    // swanna [non-vanilla] (ID 581)
    581: { regular: ["No Guard", null], hidden: "Hydration" },

    // vanillite (ID 582)
    582: { regular: ["Ice Body", "Snow Cloak"], hidden: "Weak Armor" },

    // vanillish (ID 583)
    583: { regular: ["Ice Body", "Snow Cloak"], hidden: "Weak Armor" },

    // vanilluxe (ID 584)
    584: { regular: ["Ice Body", "Snow Warning"], hidden: "Weak Armor" },

    // deerling [non-vanilla] (ID 585)
    585: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },

    // sawsbuck [non-vanilla] (ID 586)
    586: { regular: ["Leaf Rush", null], hidden: "Serene Grace" },

    // emolga (ID 587)
    587: { regular: ["Static", null], hidden: "Motor Drive" },

    // karrablast (ID 588)
    588: { regular: ["Swarm", "Shed Skin"], hidden: "No Guard" },

    // escavalier (ID 589)
    589: { regular: ["Swarm", "Shell Armor"], hidden: "Overcoat" },

    // foongus (ID 590)
    590: { regular: ["Effect Spore", null], hidden: "Regenerator" },

    // amoonguss (ID 591)
    591: { regular: ["Effect Spore", null], hidden: "Regenerator" },

    // frillish [non-vanilla] (ID 592)
    592: { regular: ["Damp", "Cursed Body"], hidden: "Water Absorb" },

    // jellicent [non-vanilla] (ID 593)
    593: { regular: ["Damp", "Cursed Body"], hidden: "Water Absorb" },

    // alomomola (ID 594)
    594: { regular: ["Healer", "Hydration"], hidden: "Regenerator" },

    // joltik (ID 595)
    595: { regular: ["Compound Eyes", "Unnerve"], hidden: "Swarm" },

    // galvantula (ID 596)
    596: { regular: ["Compound Eyes", "Unnerve"], hidden: "Swarm" },

    // ferroseed (ID 597)
    597: { regular: ["Iron Barbs", null], hidden: null },

    // ferrothorn (ID 598)
    598: { regular: ["Iron Barbs", null], hidden: "Anticipation" },

    // klink [non-vanilla] (ID 599)
    599: { regular: ["Clear Body", null], hidden: null },

    // klang [non-vanilla] (ID 600)
    600: { regular: ["Clear Body", null], hidden: null },

    // klinklang [non-vanilla] (ID 601)
    601: { regular: ["Clear Body", null], hidden: null },

    // tynamo (ID 602)
    602: { regular: ["Levitate", null], hidden: null },

    // eelektrik (ID 603)
    603: { regular: ["Levitate", null], hidden: null },

    // eelektross (ID 604)
    604: { regular: ["Levitate", null], hidden: null },

    // elgyem (ID 605)
    605: { regular: ["Telepathy", "Synchronize"], hidden: "Analytic" },

    // beheeyem (ID 606)
    606: { regular: ["Telepathy", "Synchronize"], hidden: "Analytic" },

    // litwick [non-vanilla] (ID 607)
    607: { regular: ["Flame Body", null], hidden: "Infiltrator" },

    // lampent [non-vanilla] (ID 608)
    608: { regular: ["Flame Body", null], hidden: "Infiltrator" },

    // chandelure [non-vanilla] (ID 609)
    609: { regular: ["Flame Body", null], hidden: "Infiltrator" },

    // axew (ID 610)
    610: { regular: ["Rivalry", "Mold Breaker"], hidden: "Unnerve" },

    // fraxure (ID 611)
    611: { regular: ["Rivalry", "Mold Breaker"], hidden: "Unnerve" },

    // haxorus (ID 612)
    612: { regular: ["Rivalry", "Mold Breaker"], hidden: "Unnerve" },

    // cubchoo (ID 613)
    613: { regular: ["Snow Cloak", "Slush Rush"], hidden: "Rattled" },

    // beartic (ID 614)
    614: { regular: ["Snow Cloak", "Slush Rush"], hidden: "Swift Swim" },

    // cryogonal (ID 615)
    615: { regular: ["Levitate", null], hidden: null },

    // shelmet (ID 616)
    616: { regular: ["Hydration", "Shell Armor"], hidden: "Overcoat" },

    // accelgor (ID 617)
    617: { regular: ["Hydration", "Sticky Hold"], hidden: "Unburden" },

    // stunfisk (ID 618)
    618: { regular: ["Static", "Limber"], hidden: "Sand Veil" },

    // mienfoo (ID 619)
    619: { regular: ["Inner Focus", "Regenerator"], hidden: "Reckless" },

    // mienshao (ID 620)
    620: { regular: ["Inner Focus", "Regenerator"], hidden: "Reckless" },

    // druddigon (ID 621)
    621: { regular: ["Rough Skin", "Sheer Force"], hidden: "Mold Breaker" },

    // golett [non-vanilla] (ID 622)
    622: { regular: ["Iron Fist", "No Guard"], hidden: "Klutz" },

    // golurk [non-vanilla] (ID 623)
    623: { regular: ["Iron Fist", "No Guard"], hidden: "Klutz" },

    // pawniard [non-vanilla] (ID 624)
    624: { regular: ["Inner Focus", null], hidden: "Defiant" },

    // bisharp [non-vanilla] (ID 625)
    625: { regular: ["Inner Focus", null], hidden: "Defiant" },

    // bouffalant (ID 626)
    626: { regular: ["Reckless", "Sap Sipper"], hidden: "Soundproof" },

    // rufflet (ID 627)
    627: { regular: ["Keen Eye", "Sheer Force"], hidden: "Hustle" },

    // braviary (ID 628)
    628: { regular: ["Keen Eye", "Sheer Force"], hidden: "Defiant" },

    // vullaby (ID 629)
    629: { regular: ["Big Pecks", "Overcoat"], hidden: "Weak Armor" },

    // mandibuzz (ID 630)
    630: { regular: ["Big Pecks", "Overcoat"], hidden: "Weak Armor" },

    // heatmor (ID 631)
    631: { regular: ["Gluttony", "Flash Fire"], hidden: "White Smoke" },

    // durant [non-vanilla] (ID 632)
    632: { regular: ["Swarm", null], hidden: "Truant" },

    // deino (ID 633)
    633: { regular: ["Hustle", null], hidden: null },

    // zweilous (ID 634)
    634: { regular: ["Hustle", null], hidden: null },

    // hydreigon (ID 635)
    635: { regular: ["Levitate", null], hidden: null },

    // larvesta (ID 636)
    636: { regular: ["Flame Body", null], hidden: "Swarm" },

    // volcarona (ID 637)
    637: { regular: ["Flame Body", null], hidden: "Swarm" },

    // cobalion (ID 638)
    638: { regular: ["Justified", null], hidden: null },

    // terrakion (ID 639)
    639: { regular: ["Justified", null], hidden: null },

    // virizion (ID 640)
    640: { regular: ["Justified", null], hidden: null },

    // tornadus (ID 641)
    641: { regular: ["Prankster", null], hidden: "Defiant" },

    // thundurus (ID 642)
    642: { regular: ["Prankster", null], hidden: "Defiant" },

    // reshiram (ID 643)
    643: { regular: ["Turboblaze", null], hidden: null },

    // zekrom (ID 644)
    644: { regular: ["Teravolt", null], hidden: null },

    // landorus (ID 645)
    645: { regular: ["Sand Force", null], hidden: "Sheer Force" },

    // kyurem (ID 646)
    646: { regular: ["Pressure", null], hidden: null },

    // genesect (ID 649)
    649: { regular: ["Download", null], hidden: null },

    // chespin (ID 650)
    650: { regular: ["Overgrow", null], hidden: "Bulletproof" },

    // quilladin (ID 651)
    651: { regular: ["Overgrow", null], hidden: "Bulletproof" },

    // chesnaught (ID 652)
    652: { regular: ["Overgrow", null], hidden: "Bulletproof" },

    // fennekin (ID 653)
    653: { regular: ["Blaze", null], hidden: "Magician" },

    // braixen (ID 654)
    654: { regular: ["Blaze", null], hidden: "Magician" },

    // delphox (ID 655)
    655: { regular: ["Blaze", null], hidden: "Magician" },

    // froakie (ID 656)
    656: { regular: ["Torrent", null], hidden: "Protean" },

    // frogadier (ID 657)
    657: { regular: ["Torrent", null], hidden: "Protean" },

    // greninja (ID 658)
    658: { regular: ["Torrent", null], hidden: "Protean" },

    // bunnelby [non-vanilla] (ID 659)
    659: { regular: ["Huge Power", null], hidden: "Cheek Pouch" },

    // diggersby [non-vanilla] (ID 660)
    660: { regular: ["Huge Power", null], hidden: "Cheek Pouch" },

    // fletchling [non-vanilla] (ID 661)
    661: { regular: ["Gale Wings", null], hidden: "Big Pecks" },

    // fletchinder [non-vanilla] (ID 662)
    662: { regular: ["Gale Wings", null], hidden: "Flame Body" },

    // talonflame [non-vanilla] (ID 663)
    663: { regular: ["Gale Wings", null], hidden: "Flame Body" },

    // scatterbug (ID 664)
    664: { regular: ["Shield Dust", "Compound Eyes"], hidden: "Friend Guard" },

    // spewpa (ID 665)
    665: { regular: ["Shed Skin", null], hidden: "Friend Guard" },

    // vivillon (ID 666)
    666: { regular: ["Shield Dust", "Compound Eyes"], hidden: "Friend Guard" },

    // litleo [non-vanilla] (ID 667)
    667: { regular: ["Unnerve", null], hidden: "Moxie" },

    // pyroar [non-vanilla] (ID 668)
    668: { regular: ["Unnerve", null], hidden: "Moxie" },

    // skiddo [non-vanilla] (ID 672)
    672: { regular: ["Grass Pelt", null], hidden: "Sap Sipper" },

    // gogoat [non-vanilla] (ID 673)
    673: { regular: ["Grass Pelt", null], hidden: "Sap Sipper" },

    // pancham [non-vanilla] (ID 674)
    674: { regular: ["Iron Fist", null], hidden: "Mold Breaker" },

    // pangoro [non-vanilla] (ID 675)
    675: { regular: ["Iron Fist", null], hidden: "Mold Breaker" },

    // espurr [non-vanilla] (ID 677)
    677: { regular: ["Mystic Charm", null], hidden: "Own Tempo" },

    // meowstic [non-vanilla] (ID 678)
    678: { regular: ["Mystic Charm", null], hidden: "Prankster" },

    // honedge (ID 679)
    679: { regular: ["No Guard", null], hidden: null },

    // doublade (ID 680)
    680: { regular: ["No Guard", null], hidden: null },

    // spritzee (ID 682)
    682: { regular: ["Healer", null], hidden: "Aroma Veil" },

    // aromatisse (ID 683)
    683: { regular: ["Healer", null], hidden: "Aroma Veil" },

    // swirlix (ID 684)
    684: { regular: ["Sweet Veil", null], hidden: "Unburden" },

    // slurpuff (ID 685)
    685: { regular: ["Sweet Veil", null], hidden: "Unburden" },

    // inkay (ID 686)
    686: { regular: ["Contrary", "Suction Cups"], hidden: "Infiltrator" },

    // malamar (ID 687)
    687: { regular: ["Contrary", "Suction Cups"], hidden: "Infiltrator" },

    // binacle [non-vanilla] (ID 688)
    688: { regular: ["Tough Claws", "Sharpness"], hidden: "Pickpocket" },

    // barbaracle [non-vanilla] (ID 689)
    689: { regular: ["Tough Claws", "Sharpness"], hidden: "Pickpocket" },

    // skrelp (ID 690)
    690: { regular: ["Poison Point", "Poison Touch"], hidden: "Adaptability" },

    // dragalge (ID 691)
    691: { regular: ["Poison Point", "Poison Touch"], hidden: "Adaptability" },

    // clauncher (ID 692)
    692: { regular: ["Mega Launcher", null], hidden: null },

    // clawitzer (ID 693)
    693: { regular: ["Mega Launcher", null], hidden: null },

    // helioptile [non-vanilla] (ID 694)
    694: { regular: ["Solar Power", "Sand Veil"], hidden: "Dry Skin" },

    // heliolisk [non-vanilla] (ID 695)
    695: { regular: ["Solar Power", "Sand Veil"], hidden: "Dry Skin" },

    // tyrunt (ID 696)
    696: { regular: ["Strong Jaw", null], hidden: "Sturdy" },

    // tyrantrum (ID 697)
    697: { regular: ["Strong Jaw", null], hidden: "Rock Head" },

    // amaura (ID 698)
    698: { regular: ["Refrigerate", null], hidden: "Snow Warning" },

    // aurorus (ID 699)
    699: { regular: ["Refrigerate", null], hidden: "Snow Warning" },

    // sylveon [non-vanilla] (ID 700)
    700: { regular: ["Pixilate", null], hidden: "Cute Charm" },

    // hawlucha (ID 701)
    701: { regular: ["Limber", "Unburden"], hidden: "Mold Breaker" },

    // dedenne [non-vanilla] (ID 702)
    702: { regular: ["Cheek Pouch", null], hidden: "Plus" },

    // carbink (ID 703)
    703: { regular: ["Clear Body", null], hidden: "Sturdy" },

    // goomy [non-vanilla] (ID 704)
    704: { regular: ["Gooey", "Hydration"], hidden: "Sap Sipper" },

    // sliggoo [non-vanilla] (ID 705)
    705: { regular: ["Gooey", "Hydration"], hidden: "Sap Sipper" },

    // goodra [non-vanilla] (ID 706)
    706: { regular: ["Gooey", "Hydration"], hidden: "Sap Sipper" },

    // klefki (ID 707)
    707: { regular: ["Prankster", null], hidden: "Magician" },

    // phantump [non-vanilla] (ID 708)
    708: { regular: ["Harvest", null], hidden: "Natural Cure" },

    // trevenant [non-vanilla] (ID 709)
    709: { regular: ["Harvest", null], hidden: "Natural Cure" },

    // bergmite (ID 712)
    712: { regular: ["Own Tempo", "Ice Body"], hidden: "Sturdy" },

    // avalugg (ID 713)
    713: { regular: ["Own Tempo", "Ice Body"], hidden: "Sturdy" },

    // noibat [non-vanilla] (ID 714)
    714: { regular: ["Aerilate", "Infiltrator"], hidden: "Telepathy" },

    // noivern [non-vanilla] (ID 715)
    715: { regular: ["Aerilate", "Infiltrator"], hidden: "Telepathy" },

    // xerneasneutral (ID 716)
    716: { regular: ["Fairy Aura", null], hidden: null },

    // yveltal (ID 717)
    717: { regular: ["Dark Aura", null], hidden: null },

    // diancie (ID 719)
    719: { regular: ["Clear Body", null], hidden: null },

    // volcanion (ID 721)
    721: { regular: ["Water Absorb", null], hidden: null },

    // rowlet [non-vanilla] (ID 722)
    722: { regular: ["Long Reach", null], hidden: "Overgrow" },

    // dartrix [non-vanilla] (ID 723)
    723: { regular: ["Long Reach", null], hidden: "Overgrow" },

    // decidueye [non-vanilla] (ID 724)
    724: { regular: ["Long Reach", null], hidden: "Overgrow" },

    // litten (ID 725)
    725: { regular: ["Blaze", null], hidden: "Intimidate" },

    // torracat (ID 726)
    726: { regular: ["Blaze", null], hidden: "Intimidate" },

    // incineroar (ID 727)
    727: { regular: ["Blaze", null], hidden: "Intimidate" },

    // popplio (ID 728)
    728: { regular: ["Torrent", null], hidden: "Liquid Voice" },

    // brionne (ID 729)
    729: { regular: ["Torrent", null], hidden: "Liquid Voice" },

    // primarina (ID 730)
    730: { regular: ["Torrent", null], hidden: "Liquid Voice" },

    // pikipek (ID 731)
    731: { regular: ["Keen Eye", "Skill Link"], hidden: "Pickup" },

    // trumbeak (ID 732)
    732: { regular: ["Keen Eye", "Skill Link"], hidden: "Pickup" },

    // toucannon (ID 733)
    733: { regular: ["Keen Eye", "Skill Link"], hidden: "Sheer Force" },

    // yungoos (ID 734)
    734: { regular: ["Stakeout", "Strong Jaw"], hidden: "Adaptability" },

    // gumshoostotem (ID 735)
    735: { regular: ["Adaptability", null], hidden: null },

    // grubbin (ID 736)
    736: { regular: ["Swarm", null], hidden: null },

    // charjabug (ID 737)
    737: { regular: ["Battery", null], hidden: null },

    // vikavolttotem (ID 738)
    738: { regular: ["Levitate", null], hidden: null },

    // crabrawler (ID 739)
    739: { regular: ["Hyper Cutter", "Iron Fist"], hidden: "Anger Point" },

    // crabominable (ID 740)
    740: { regular: ["Hyper Cutter", "Iron Fist"], hidden: "Anger Point" },

    // cutiefly [non-vanilla] (ID 742)
    742: { regular: ["Shield Dust", null], hidden: "Sweet Veil" },

    // ribombeetotem (ID 743)
    743: { regular: ["Sweet Veil", null], hidden: null },

    // rockruff (ID 744)
    744: { regular: ["Keen Eye", "Vital Spirit"], hidden: "Steadfast" },

    // lycanroc (ID 745)
    745: { regular: ["Keen Eye", "Sand Rush"], hidden: "Steadfast" },

    // wishiwashi (ID 746)
    746: { regular: ["Schooling", null], hidden: null },

    // mareanie (ID 747)
    747: { regular: ["Merciless", "Limber"], hidden: "Regenerator" },

    // toxapex (ID 748)
    748: { regular: ["Merciless", "Limber"], hidden: "Regenerator" },

    // mudbray [non-vanilla] (ID 749)
    749: { regular: ["Own Tempo", "Inner Focus"], hidden: "Stamina" },

    // mudsdale [non-vanilla] (ID 750)
    750: { regular: ["Own Tempo", "Inner Focus"], hidden: "Stamina" },

    // dewpider (ID 751)
    751: { regular: ["Water Bubble", null], hidden: "Water Absorb" },

    // araquanidtotem (ID 752)
    752: { regular: ["Water Bubble", null], hidden: null },

    // fomantis (ID 753)
    753: { regular: ["Leaf Guard", null], hidden: "Contrary" },

    // lurantistotem (ID 754)
    754: { regular: ["Leaf Guard", null], hidden: null },

    // morelull (ID 755)
    755: { regular: ["Illuminate", "Effect Spore"], hidden: "Rain Dish" },

    // shiinotic (ID 756)
    756: { regular: ["Illuminate", "Effect Spore"], hidden: "Rain Dish" },

    // salandit (ID 757)
    757: { regular: ["Corrosion", null], hidden: "Oblivious" },

    // salazzle (ID 758)
    758: { regular: ["Corrosion", null], hidden: "Oblivious" },

    // stufful [non-vanilla] (ID 759)
    759: { regular: ["Fluffy", null], hidden: "Cute Charm" },

    // bewear [non-vanilla] (ID 760)
    760: { regular: ["Fluffy", null], hidden: "Unnerve" },

    // bounsweet [non-vanilla] (ID 761)
    761: { regular: ["Sweet Veil", "Oblivious"], hidden: "Leaf Guard" },

    // steenee [non-vanilla] (ID 762)
    762: { regular: ["Sweet Veil", "Oblivious"], hidden: "Leaf Guard" },

    // tsareena [non-vanilla] (ID 763)
    763: { regular: ["Striker", "Queenly Majesty"], hidden: "Leaf Guard" },

    // comfey (ID 764)
    764: { regular: ["Flower Veil", "Triage"], hidden: "Natural Cure" },

    // oranguru (ID 765)
    765: { regular: ["Inner Focus", "Telepathy"], hidden: "Symbiosis" },

    // passimian (ID 766)
    766: { regular: ["Receiver", null], hidden: "Defiant" },

    // wimpod (ID 767)
    767: { regular: ["Wimp Out", null], hidden: null },

    // golisopod (ID 768)
    768: { regular: ["Emergency Exit", null], hidden: null },

    // sandygast (ID 769)
    769: { regular: ["Water Compaction", null], hidden: "Sand Veil" },

    // palossand (ID 770)
    770: { regular: ["Water Compaction", null], hidden: "Sand Veil" },

    // pyukumuku (ID 771)
    771: { regular: ["Innards Out", null], hidden: "Unaware" },

    // typenull (ID 772)
    772: { regular: ["Battle Armor", null], hidden: null },

    // komala (ID 775)
    775: { regular: ["Comatose", null], hidden: null },

    // turtonator (ID 776)
    776: { regular: ["Shell Armor", null], hidden: null },

    // togedemarutotem (ID 777)
    777: { regular: ["Sturdy", null], hidden: null },

    // bruxish [non-vanilla] (ID 779)
    779: { regular: ["Dazzling", null], hidden: "Strong Jaw" },

    // drampa (ID 780)
    780: { regular: ["Berserk", "Sap Sipper"], hidden: "Cloud Nine" },

    // dhelmise (ID 781)
    781: { regular: ["Steelworker", null], hidden: null },

    // jangmoo (ID 782)
    782: { regular: ["Bulletproof", "Soundproof"], hidden: "Overcoat" },

    // hakamoo (ID 783)
    783: { regular: ["Bulletproof", "Soundproof"], hidden: "Overcoat" },

    // kommoototem (ID 784)
    784: { regular: ["Overcoat", null], hidden: null },

    // tapukoko [non-vanilla] (ID 785)
    785: { regular: ["Telepathy", null], hidden: "Electric Surge" },

    // tapulele [non-vanilla] (ID 786)
    786: { regular: ["Telepathy", null], hidden: "Psychic Surge" },

    // tapubulu [non-vanilla] (ID 787)
    787: { regular: ["Telepathy", null], hidden: "Grassy Surge" },

    // tapufini [non-vanilla] (ID 788)
    788: { regular: ["Telepathy", null], hidden: "Misty Surge" },

    // cosmog (ID 789)
    789: { regular: ["Unaware", null], hidden: null },

    // cosmoem (ID 790)
    790: { regular: ["Sturdy", null], hidden: null },

    // solgaleo (ID 791)
    791: { regular: ["Full Metal Body", null], hidden: null },

    // lunala (ID 792)
    792: { regular: ["Shadow Shield", null], hidden: null },

    // nihilego (ID 793)
    793: { regular: ["Beast Boost", null], hidden: null },

    // buzzwole (ID 794)
    794: { regular: ["Beast Boost", null], hidden: null },

    // pheromosa (ID 795)
    795: { regular: ["Beast Boost", null], hidden: null },

    // xurkitree (ID 796)
    796: { regular: ["Beast Boost", null], hidden: null },

    // celesteela (ID 797)
    797: { regular: ["Beast Boost", null], hidden: null },

    // kartana (ID 798)
    798: { regular: ["Beast Boost", null], hidden: null },

    // guzzlord (ID 799)
    799: { regular: ["Beast Boost", null], hidden: null },

    // necrozma (ID 800)
    800: { regular: ["Prism Armor", null], hidden: null },

    // magearna (ID 801)
    801: { regular: ["Soul-Heart", null], hidden: null },

    // marshadow (ID 802)
    802: { regular: ["Technician", null], hidden: null },

    // poipole [non-vanilla] (ID 803)
    803: { regular: ["Pressure", null], hidden: "Beast Boost" },

    // naganadel [non-vanilla] (ID 804)
    804: { regular: ["Pressure", null], hidden: "Beast Boost" },

    // stakataka (ID 805)
    805: { regular: ["Beast Boost", null], hidden: null },

    // blacephalon (ID 806)
    806: { regular: ["Beast Boost", null], hidden: null },

    // zeraora (ID 807)
    807: { regular: ["Volt Absorb", null], hidden: null },

    // meltan (ID 808)
    808: { regular: ["Magnet Pull", null], hidden: null },

    // melmetalgmax (ID 809)
    809: { regular: ["Iron Fist", null], hidden: null },

    // grookey (ID 810)
    810: { regular: ["Overgrow", null], hidden: "Grassy Surge" },

    // thwackey (ID 811)
    811: { regular: ["Overgrow", null], hidden: "Grassy Surge" },

    // rillaboomgmax (ID 812)
    812: { regular: ["Overgrow", null], hidden: "Grassy Surge" },

    // scorbunny (ID 813)
    813: { regular: ["Blaze", null], hidden: "Libero" },

    // raboot (ID 814)
    814: { regular: ["Blaze", null], hidden: "Libero" },

    // cinderacegmax (ID 815)
    815: { regular: ["Blaze", null], hidden: "Libero" },

    // sobble (ID 816)
    816: { regular: ["Torrent", null], hidden: "Sniper" },

    // drizzile (ID 817)
    817: { regular: ["Torrent", null], hidden: "Sniper" },

    // inteleongmax (ID 818)
    818: { regular: ["Torrent", null], hidden: "Sniper" },

    // skwovet (ID 819)
    819: { regular: ["Cheek Pouch", null], hidden: "Gluttony" },

    // greedent (ID 820)
    820: { regular: ["Cheek Pouch", null], hidden: "Gluttony" },

    // rookidee (ID 821)
    821: { regular: ["Keen Eye", "Unnerve"], hidden: "Big Pecks" },

    // corvisquire (ID 822)
    822: { regular: ["Keen Eye", "Unnerve"], hidden: "Big Pecks" },

    // corviknightgmax (ID 823)
    823: { regular: ["Pressure", "Unnerve"], hidden: "Mirror Armor" },

    // blipbug (ID 824)
    824: { regular: ["Swarm", "Compound Eyes"], hidden: "Telepathy" },

    // dottler (ID 825)
    825: { regular: ["Swarm", "Compound Eyes"], hidden: "Telepathy" },

    // orbeetlegmax (ID 826)
    826: { regular: ["Swarm", "Frisk"], hidden: "Telepathy" },

    // nickit (ID 827)
    827: { regular: ["Run Away", "Unburden"], hidden: "Stakeout" },

    // thievul (ID 828)
    828: { regular: ["Run Away", "Unburden"], hidden: "Stakeout" },

    // gossifleur (ID 829)
    829: { regular: ["Cotton Down", "Regenerator"], hidden: "Effect Spore" },

    // eldegoss (ID 830)
    830: { regular: ["Cotton Down", "Regenerator"], hidden: "Effect Spore" },

    // wooloo (ID 831)
    831: { regular: ["Fluffy", "Run Away"], hidden: "Bulletproof" },

    // dubwool (ID 832)
    832: { regular: ["Fluffy", "Steadfast"], hidden: "Bulletproof" },

    // chewtle [non-vanilla] (ID 833)
    833: { regular: ["Swift Swim", "Shell Armor"], hidden: "Strong Jaw" },

    // drednawgmax (ID 834)
    834: { regular: ["Strong Jaw", "Shell Armor"], hidden: "Swift Swim" },

    // yamper (ID 835)
    835: { regular: ["Ball Fetch", null], hidden: "Rattled" },

    // boltund (ID 836)
    836: { regular: ["Strong Jaw", null], hidden: "Competitive" },

    // rolycoly (ID 837)
    837: { regular: ["Steam Engine", "Heatproof"], hidden: "Flash Fire" },

    // carkol (ID 838)
    838: { regular: ["Steam Engine", "Flame Body"], hidden: "Flash Fire" },

    // coalossalgmax (ID 839)
    839: { regular: ["Steam Engine", "Flame Body"], hidden: "Flash Fire" },

    // applin [non-vanilla] (ID 840)
    840: { regular: ["Ripen", null], hidden: "Bulletproof" },

    // flapplegmax (ID 841)
    841: { regular: ["Ripen", "Gluttony"], hidden: "Hustle" },

    // appletungmax (ID 842)
    842: { regular: ["Ripen", "Gluttony"], hidden: "Thick Fat" },

    // silicobra (ID 843)
    843: { regular: ["Sand Spit", "Shed Skin"], hidden: "Sand Veil" },

    // sandacondagmax (ID 844)
    844: { regular: ["Sand Spit", "Shed Skin"], hidden: "Sand Veil" },

    // cramorant (ID 845)
    845: { regular: ["Gulp Missile", null], hidden: null },

    // arrokuda (ID 846)
    846: { regular: ["Swift Swim", null], hidden: "Propeller Tail" },

    // barraskewda (ID 847)
    847: { regular: ["Swift Swim", null], hidden: "Propeller Tail" },

    // toxel [non-vanilla] (ID 848)
    848: { regular: ["Rattled", null], hidden: "Klutz" },

    // toxtricitylowkey (ID 849)
    849: { regular: ["Punk Rock", "Minus"], hidden: "Technician" },

    // sizzlipede [non-vanilla] (ID 850)
    850: { regular: ["Flame Body", "White Smoke"], hidden: "Flash Fire" },

    // centiskorchgmax (ID 851)
    851: { regular: ["Flash Fire", "White Smoke"], hidden: "Flame Body" },

    // clobbopus (ID 852)
    852: { regular: ["Limber", null], hidden: "Technician" },

    // grapploct (ID 853)
    853: { regular: ["Limber", null], hidden: "Technician" },

    // hatenna [non-vanilla] (ID 856)
    856: { regular: ["Mystic Charm", null], hidden: "Magic Bounce" },

    // hattrem [non-vanilla] (ID 857)
    857: { regular: ["Mystic Charm", null], hidden: "Magic Bounce" },

    // hatterenegmax (ID 858)
    858: { regular: ["Healer", "Anticipation"], hidden: "Magic Bounce" },

    // impidimp [non-vanilla] (ID 859)
    859: { regular: ["Prankster", null], hidden: "Pickpocket" },

    // morgrem [non-vanilla] (ID 860)
    860: { regular: ["Prankster", null], hidden: "Pickpocket" },

    // grimmsnarlgmax (ID 861)
    861: { regular: ["Prankster", "Frisk"], hidden: "Pickpocket" },

    // obstagoon (ID 862)
    862: { regular: ["Reckless", "Guts"], hidden: "Defiant" },

    // perrserker [non-vanilla] (ID 863)
    863: { regular: ["Battle Armor", "Steely Spirit"], hidden: "Tough Claws" },

    // cursola (ID 864)
    864: { regular: ["Weak Armor", null], hidden: "Perish Body" },

    // mrrime (ID 866)
    866: { regular: ["Tangled Feet", "Screen Cleaner"], hidden: "Ice Body" },

    // runerigus (ID 867)
    867: { regular: ["Wandering Spirit", null], hidden: null },

    // milcery (ID 868)
    868: { regular: ["Sweet Veil", null], hidden: "Aroma Veil" },

    // falinks (ID 870)
    870: { regular: ["Battle Armor", null], hidden: "Defiant" },

    // pincurchin (ID 871)
    871: { regular: ["Lightning Rod", null], hidden: "Electric Surge" },

    // snom [non-vanilla] (ID 872)
    872: { regular: ["Ice Scales", null], hidden: "Shield Dust" },

    // frosmoth [non-vanilla] (ID 873)
    873: { regular: ["Ice Scales", null], hidden: "Shield Dust" },

    // stonjourner (ID 874)
    874: { regular: ["Power Spot", null], hidden: null },

    // cufant (ID 878)
    878: { regular: ["Sheer Force", null], hidden: "Heavy Metal" },

    // copperajahgmax (ID 879)
    879: { regular: ["Sheer Force", null], hidden: "Heavy Metal" },

    // dracozolt (ID 880)
    880: { regular: ["Volt Absorb", "Hustle"], hidden: "Sand Rush" },

    // arctozolt (ID 881)
    881: { regular: ["Volt Absorb", "Static"], hidden: "Slush Rush" },

    // dracovish (ID 882)
    882: { regular: ["Water Absorb", "Strong Jaw"], hidden: "Sand Rush" },

    // arctovish (ID 883)
    883: { regular: ["Water Absorb", "Ice Body"], hidden: "Slush Rush" },

    // duraludongmax [non-vanilla] (ID 884)
    884: { regular: ["Stalwart", "Heavy Metal"], hidden: "Light Metal" },

    // dreepy (ID 885)
    885: { regular: ["Clear Body", "Infiltrator"], hidden: "Cursed Body" },

    // drakloak (ID 886)
    886: { regular: ["Clear Body", "Infiltrator"], hidden: "Cursed Body" },

    // dragapult (ID 887)
    887: { regular: ["Clear Body", "Infiltrator"], hidden: "Cursed Body" },

    // eternatus (ID 890)
    890: { regular: ["Pressure", null], hidden: null },

    // kubfu (ID 891)
    891: { regular: ["Inner Focus", null], hidden: null },

    // zarude (ID 893)
    893: { regular: ["Leaf Guard", null], hidden: null },

    // regieleki (ID 894)
    894: { regular: ["Transistor", null], hidden: null },

    // regidrago (ID 895)
    895: { regular: [null, null], hidden: null },

    // glastrier (ID 896)
    896: { regular: ["Chilling Neigh", null], hidden: null },

    // spectrier (ID 897)
    897: { regular: ["Grim Neigh", null], hidden: null },

    // calyrexice [non-vanilla] (ID 898)
    898: { regular: ["As One", null], hidden: null },

    // wyrdeer (ID 899)
    899: { regular: ["Intimidate", "Frisk"], hidden: "Sap Sipper" },

    // kleavor (ID 900)
    900: { regular: ["Swarm", "Sheer Force"], hidden: "Sharpness" },

    // ursaluna [non-vanilla] (ID 901)
    901: { regular: ["Bulletproof", null], hidden: "Unnerve" },

    // basculegion [non-vanilla] (ID 902)
    902: { regular: ["Swift Swim", null], hidden: "Adaptability" },

    // sneasler [non-vanilla] (ID 903)
    903: { regular: ["Poison Touch", null], hidden: "Unburden" },

    // overqwil [non-vanilla] (ID 904)
    904: { regular: ["Intimidate", "Swift Swim"], hidden: "Poison Point" },

    // enamorus (ID 905)
    905: { regular: ["Cute Charm", null], hidden: "Contrary" },

    // venusaurmega (ID 906)
    906: { regular: ["Thick Fat", null], hidden: null },

    // charizardmegax (ID 907)
    907: { regular: ["Tough Claws", null], hidden: null },

    // charizardmegay (ID 908)
    908: { regular: ["Drought", null], hidden: null },

    // blastoisemega (ID 909)
    909: { regular: ["Mega Launcher", null], hidden: null },

    // beedrillmega (ID 910)
    910: { regular: ["Adaptability", null], hidden: null },

    // pidgeotmega (ID 911)
    911: { regular: ["No Guard", null], hidden: null },

    // alakazammega (ID 912)
    912: { regular: ["Trace", null], hidden: null },

    // slowbromega (ID 913)
    913: { regular: ["Shell Armor", null], hidden: null },

    // gengarmega (ID 914)
    914: { regular: ["Shadow Tag", null], hidden: null },

    // kangaskhanmega (ID 915)
    915: { regular: ["Parental Bond", null], hidden: null },

    // pinsirmega (ID 916)
    916: { regular: ["Aerilate", null], hidden: null },

    // gyaradosmega (ID 917)
    917: { regular: ["Mold Breaker", null], hidden: null },

    // aerodactylmega (ID 918)
    918: { regular: ["Tough Claws", null], hidden: null },

    // mewtwomegax (ID 919)
    919: { regular: ["Steadfast", null], hidden: null },

    // mewtwomegay (ID 920)
    920: { regular: ["Insomnia", null], hidden: null },

    // ampharosmega (ID 921)
    921: { regular: ["Mold Breaker", null], hidden: null },

    // steelixmega (ID 922)
    922: { regular: ["Sand Force", null], hidden: null },

    // scizormega (ID 923)
    923: { regular: ["Technician", null], hidden: null },

    // heracrossmega (ID 924)
    924: { regular: ["Skill Link", null], hidden: null },

    // houndoommega (ID 925)
    925: { regular: ["Solar Power", null], hidden: null },

    // tyranitarmega (ID 926)
    926: { regular: ["Sand Stream", null], hidden: null },

    // sceptilemega (ID 927)
    927: { regular: ["Lightning Rod", null], hidden: null },

    // blazikenmega (ID 928)
    928: { regular: ["Speed Boost", null], hidden: null },

    // swampertmega (ID 929)
    929: { regular: ["Swift Swim", null], hidden: null },

    // gardevoirmega (ID 930)
    930: { regular: ["Pixilate", null], hidden: null },

    // sableyemega (ID 931)
    931: { regular: ["Magic Bounce", null], hidden: null },

    // mawilemega (ID 932)
    932: { regular: ["Huge Power", null], hidden: null },

    // aggronmega (ID 933)
    933: { regular: ["Filter", null], hidden: null },

    // medichammega (ID 934)
    934: { regular: ["Pure Power", null], hidden: null },

    // manectricmega (ID 935)
    935: { regular: ["Intimidate", null], hidden: null },

    // sharpedomega (ID 936)
    936: { regular: ["Strong Jaw", null], hidden: null },

    // cameruptmega (ID 937)
    937: { regular: ["Sheer Force", null], hidden: null },

    // altariamega (ID 938)
    938: { regular: ["Pixilate", null], hidden: null },

    // banettemega (ID 939)
    939: { regular: ["Prankster", null], hidden: null },

    // absolmega (ID 940)
    940: { regular: ["Magic Bounce", null], hidden: null },

    // glaliemega (ID 941)
    941: { regular: ["Refrigerate", null], hidden: null },

    // salamencemega (ID 942)
    942: { regular: ["Aerilate", null], hidden: null },

    // metagrossmega (ID 943)
    943: { regular: ["Tough Claws", null], hidden: null },

    // latiasmega (ID 944)
    944: { regular: ["Levitate", null], hidden: null },

    // latiosmega (ID 945)
    945: { regular: ["Levitate", null], hidden: null },

    // lopunnymega (ID 946)
    946: { regular: ["Scrappy", null], hidden: null },

    // garchompmega (ID 947)
    947: { regular: ["Sand Force", null], hidden: null },

    // lucariomega (ID 948)
    948: { regular: ["Adaptability", null], hidden: null },

    // abomasnowmega (ID 949)
    949: { regular: ["Snow Warning", null], hidden: null },

    // gallademega (ID 950)
    950: { regular: ["Inner Focus", null], hidden: null },

    // audinomega (ID 951)
    951: { regular: ["Healer", null], hidden: null },

    // dianciemega (ID 952)
    952: { regular: ["Magic Bounce", null], hidden: null },

    // rayquazamega (ID 953)
    953: { regular: ["Delta Stream", null], hidden: null },

    // kyogreprimal (ID 954)
    954: { regular: ["Primordial Sea", null], hidden: null },

    // groudonprimal (ID 955)
    955: { regular: ["Desolate Land", null], hidden: null },

    // rattataalola (ID 956)
    956: { regular: ["Gluttony", "Hustle"], hidden: "Thick Fat" },

    // raticatealolatotem (ID 957)
    957: { regular: ["Thick Fat", null], hidden: null },

    // raichualola (ID 958)
    958: { regular: ["Surge Surfer", null], hidden: null },

    // sandshrewalola [non-vanilla] (ID 959)
    959: { regular: ["Slush Rush", null], hidden: "Snow Cloak" },

    // sandslashalola [non-vanilla] (ID 960)
    960: { regular: ["Slush Rush", null], hidden: "Snow Cloak" },

    // vulpixalola (ID 961)
    961: { regular: ["Snow Cloak", null], hidden: "Snow Warning" },

    // ninetalesalola (ID 962)
    962: { regular: ["Snow Cloak", null], hidden: "Snow Warning" },

    // diglettalola (ID 963)
    963: { regular: ["Sand Veil", "Tangling Hair"], hidden: "Sand Force" },

    // dugtrioalola (ID 964)
    964: { regular: ["Sand Veil", "Tangling Hair"], hidden: "Sand Force" },

    // meowthalola (ID 965)
    965: { regular: ["Pickup", "Technician"], hidden: "Rattled" },

    // persianalola (ID 966)
    966: { regular: ["Fur Coat", "Technician"], hidden: "Rattled" },

    // geodudealola [non-vanilla] (ID 967)
    967: { regular: ["Galvanize", "Sturdy"], hidden: "Magnet Pull" },

    // graveleralola [non-vanilla] (ID 968)
    968: { regular: ["Galvanize", "Sturdy"], hidden: "Magnet Pull" },

    // golemalola [non-vanilla] (ID 969)
    969: { regular: ["Galvanize", "Sturdy"], hidden: "Magnet Pull" },

    // grimeralola [non-vanilla] (ID 970)
    970: { regular: ["Poison Touch", "Gluttony"], hidden: "Power Of Alchemy" },

    // mukalola [non-vanilla] (ID 971)
    971: { regular: ["Poison Touch", "Gluttony"], hidden: "Power Of Alchemy" },

    // exeggutoralola [non-vanilla] (ID 972)
    972: { regular: ["Harvest", null], hidden: "Frisk" },

    // marowakalolatotem (ID 973)
    973: { regular: ["Rock Head", null], hidden: null },

    // meowthgalar [non-vanilla] (ID 974)
    974: { regular: ["Battle Armor", "Unnerve"], hidden: "Tough Claws" },

    // ponytagalar (ID 975)
    975: { regular: ["Run Away", "Pastel Veil"], hidden: "Anticipation" },

    // rapidashgalar (ID 976)
    976: { regular: ["Run Away", "Pastel Veil"], hidden: "Anticipation" },

    // slowpokegalar (ID 977)
    977: { regular: ["Gluttony", "Own Tempo"], hidden: "Regenerator" },

    // slowbrogalar (ID 978)
    978: { regular: ["Quick Draw", "Own Tempo"], hidden: "Regenerator" },

    // farfetchdgalar (ID 979)
    979: { regular: ["Steadfast", null], hidden: "Scrappy" },

    // weezinggalar (ID 980)
    980: { regular: ["Levitate", "Neutralizing Gas"], hidden: "Misty Surge" },

    // mrmimegalar (ID 981)
    981: { regular: ["Vital Spirit", "Screen Cleaner"], hidden: "Ice Body" },

    // articunogalar (ID 982)
    982: { regular: ["Competitive", null], hidden: null },

    // zapdosgalar (ID 983)
    983: { regular: ["Defiant", null], hidden: null },

    // moltresgalar (ID 984)
    984: { regular: ["Berserk", null], hidden: null },

    // slowkinggalar (ID 985)
    985: { regular: ["Curious Medicine", "Own Tempo"], hidden: "Regenerator" },

    // corsolagalar (ID 986)
    986: { regular: ["Weak Armor", null], hidden: "Cursed Body" },

    // zigzagoongalar [non-vanilla] (ID 987)
    987: { regular: ["Gluttony", "Quick Feet"], hidden: "Pickup" },

    // linoonegalar [non-vanilla] (ID 988)
    988: { regular: ["Gluttony", "Quick Feet"], hidden: "Pickup" },

    // darumakagalar (ID 989)
    989: { regular: ["Hustle", null], hidden: "Inner Focus" },

    // yamaskgalar (ID 991)
    991: { regular: ["Wandering Spirit", null], hidden: null },

    // stunfiskgalar (ID 992)
    992: { regular: ["Mimicry", null], hidden: null },

    // growlithehisui [non-vanilla] (ID 993)
    993: { regular: ["Intimidate", null], hidden: "Rock Head" },

    // arcaninehisui [non-vanilla] (ID 994)
    994: { regular: ["Intimidate", null], hidden: "Rock Head" },

    // voltorbhisui (ID 995)
    995: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },

    // electrodehisui (ID 996)
    996: { regular: ["Soundproof", "Static"], hidden: "Aftermath" },

    // typhlosionhisui [non-vanilla] (ID 997)
    997: { regular: ["Frisk", null], hidden: "Blaze" },

    // qwilfishhisui [non-vanilla] (ID 998)
    998: { regular: ["Intimidate", "Swift Swim"], hidden: "Poison Point" },

    // sneaselhisui [non-vanilla] (ID 999)
    999: { regular: ["Inner Focus", null], hidden: "Pickpocket" },

    // samurotthisui [non-vanilla] (ID 1000)
    1000: { regular: ["Sharpness", null], hidden: "Torrent" },

    // lilliganthisui [non-vanilla] (ID 1001)
    1001: { regular: ["Chlorophyll", "Striker"], hidden: "Leaf Guard" },

    // zoruahisui (ID 1002)
    1002: { regular: ["Illusion", null], hidden: null },

    // zoroarkhisui (ID 1003)
    1003: { regular: ["Illusion", null], hidden: null },

    // braviaryhisui (ID 1004)
    1004: { regular: ["Keen Eye", "Sheer Force"], hidden: "Tinted Lens" },

    // sliggoohisui [non-vanilla] (ID 1005)
    1005: { regular: ["Gooey", "Shell Armor"], hidden: "Sap Sipper" },

    // goodrahisui [non-vanilla] (ID 1006)
    1006: { regular: ["Gooey", "Shell Armor"], hidden: "Sap Sipper" },

    // avalugghisui (ID 1007)
    1007: { regular: ["Strong Jaw", "Ice Body"], hidden: "Sturdy" },

    // decidueyehisui [non-vanilla] (ID 1008)
    1008: { regular: ["Scrappy", null], hidden: "Overgrow" },

    // pichuspikyeared [non-vanilla] (ID 1023)
    1023: { regular: ["Static", null], hidden: "Lightning Rod" },

    // castformsunny (ID 1051)
    1051: { regular: ["Forecast", null], hidden: null },

    // castformrainy (ID 1052)
    1052: { regular: ["Forecast", null], hidden: null },

    // castformsnowy (ID 1053)
    1053: { regular: ["Forecast", null], hidden: null },

    // deoxysattack (ID 1054)
    1054: { regular: ["Pressure", null], hidden: null },

    // deoxysdefense (ID 1055)
    1055: { regular: ["Pressure", null], hidden: null },

    // deoxysspeed (ID 1056)
    1056: { regular: ["Pressure", null], hidden: null },

    // cherrimsunshine (ID 1061)
    1061: { regular: ["Flower Gift", null], hidden: null },

    // rotomheat (ID 1064)
    1064: { regular: ["Levitate", null], hidden: null },

    // rotomwash (ID 1065)
    1065: { regular: ["Levitate", null], hidden: null },

    // rotomfrost (ID 1066)
    1066: { regular: ["Levitate", null], hidden: null },

    // rotomfan (ID 1067)
    1067: { regular: ["Levitate", null], hidden: null },

    // rotommow (ID 1068)
    1068: { regular: ["Levitate", null], hidden: null },

    // dialgaorigin (ID 1069)
    1069: { regular: ["Pressure", null], hidden: "Telepathy" },

    // palkiaorigin (ID 1070)
    1070: { regular: ["Pressure", null], hidden: "Telepathy" },

    // giratinaorigin (ID 1071)
    1071: { regular: ["Levitate", null], hidden: null },

    // shayminsky (ID 1072)
    1072: { regular: ["Serene Grace", null], hidden: null },

    // arceusfighting (ID 1073)
    1073: { regular: ["Multitype", null], hidden: null },

    // arceusflying (ID 1074)
    1074: { regular: ["Multitype", null], hidden: null },

    // arceuspoison (ID 1075)
    1075: { regular: ["Multitype", null], hidden: null },

    // arceusground (ID 1076)
    1076: { regular: ["Multitype", null], hidden: null },

    // arceusrock (ID 1077)
    1077: { regular: ["Multitype", null], hidden: null },

    // arceusbug (ID 1078)
    1078: { regular: ["Multitype", null], hidden: null },

    // arceusghost (ID 1079)
    1079: { regular: ["Multitype", null], hidden: null },

    // arceussteel (ID 1080)
    1080: { regular: ["Multitype", null], hidden: null },

    // arceusfire (ID 1081)
    1081: { regular: ["Multitype", null], hidden: null },

    // arceuswater (ID 1082)
    1082: { regular: ["Multitype", null], hidden: null },

    // arceusgrass (ID 1083)
    1083: { regular: ["Multitype", null], hidden: null },

    // arceuselectric (ID 1084)
    1084: { regular: ["Multitype", null], hidden: null },

    // arceuspsychic (ID 1085)
    1085: { regular: ["Multitype", null], hidden: null },

    // arceusice (ID 1086)
    1086: { regular: ["Multitype", null], hidden: null },

    // arceusdragon (ID 1087)
    1087: { regular: ["Multitype", null], hidden: null },

    // arceusdark (ID 1088)
    1088: { regular: ["Multitype", null], hidden: null },

    // arceusfairy (ID 1089)
    1089: { regular: ["Multitype", null], hidden: null },

    // basculinbluestriped (ID 1090)
    1090: { regular: ["Rock Head", "Adaptability"], hidden: "Mold Breaker" },

    // basculinwhitestriped [non-vanilla] (ID 1091)
    1091: { regular: ["Rattled", null], hidden: "Adaptability" },

    // tornadustherian (ID 1100)
    1100: { regular: ["Regenerator", null], hidden: null },

    // thundurustherian (ID 1101)
    1101: { regular: ["Volt Absorb", null], hidden: null },

    // landorustherian (ID 1102)
    1102: { regular: ["Intimidate", null], hidden: null },

    // enamorustherian (ID 1103)
    1103: { regular: ["Overcoat", null], hidden: null },

    // kyuremwhite (ID 1104)
    1104: { regular: ["Turboblaze", null], hidden: null },

    // kyuremblack (ID 1105)
    1105: { regular: ["Teravolt", null], hidden: null },

    // keldeoresolute (ID 1106)
    1106: { regular: ["Justified", null], hidden: null },

    // meloettapirouette (ID 1107)
    1107: { regular: ["Serene Grace", null], hidden: null },

    // greninjaash (ID 1113)
    1113: { regular: ["Battle Bond", null], hidden: null },

    // meowsticf [non-vanilla] (ID 1155)
    1155: { regular: ["Mystic Charm", null], hidden: "Competitive" },

    // aegislashblade (ID 1156)
    1156: { regular: ["Stance Change", null], hidden: null },

    // pumpkaboosmall (ID 1157)
    1157: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },

    // pumpkaboolarge (ID 1158)
    1158: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },

    // pumpkaboosuper (ID 1159)
    1159: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },

    // gourgeistsmall (ID 1160)
    1160: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },

    // gourgeistlarge (ID 1161)
    1161: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },

    // gourgeistsuper (ID 1162)
    1162: { regular: ["Pickup", "Frisk"], hidden: "Insomnia" },

    // zygardecomplete (ID 1167)
    1167: { regular: ["Power Construct", null], hidden: null },

    // hoopaunbound (ID 1168)
    1168: { regular: ["Magician", null], hidden: null },

    // oricoriopompom (ID 1169)
    1169: { regular: ["Dancer", null], hidden: null },

    // oricoriopau (ID 1170)
    1170: { regular: ["Dancer", null], hidden: null },

    // oricoriosensu (ID 1171)
    1171: { regular: ["Dancer", null], hidden: null },

    // lycanrocmidnight (ID 1173)
    1173: { regular: ["Keen Eye", "Vital Spirit"], hidden: "No Guard" },

    // lycanrocdusk (ID 1174)
    1174: { regular: ["Tough Claws", null], hidden: null },

    // wishiwashischool (ID 1175)
    1175: { regular: ["Schooling", null], hidden: null },

    // silvallyfighting (ID 1176)
    1176: { regular: ["RKS System", null], hidden: null },

    // silvallyflying (ID 1177)
    1177: { regular: ["RKS System", null], hidden: null },

    // silvallypoison (ID 1178)
    1178: { regular: ["RKS System", null], hidden: null },

    // silvallyground (ID 1179)
    1179: { regular: ["RKS System", null], hidden: null },

    // silvallyrock (ID 1180)
    1180: { regular: ["RKS System", null], hidden: null },

    // silvallybug (ID 1181)
    1181: { regular: ["RKS System", null], hidden: null },

    // silvallyghost (ID 1182)
    1182: { regular: ["RKS System", null], hidden: null },

    // silvallysteel (ID 1183)
    1183: { regular: ["RKS System", null], hidden: null },

    // silvallyfire (ID 1184)
    1184: { regular: ["RKS System", null], hidden: null },

    // silvallywater (ID 1185)
    1185: { regular: ["RKS System", null], hidden: null },

    // silvallygrass (ID 1186)
    1186: { regular: ["RKS System", null], hidden: null },

    // silvallyelectric (ID 1187)
    1187: { regular: ["RKS System", null], hidden: null },

    // silvallypsychic (ID 1188)
    1188: { regular: ["RKS System", null], hidden: null },

    // silvallyice (ID 1189)
    1189: { regular: ["RKS System", null], hidden: null },

    // silvallydragon (ID 1190)
    1190: { regular: ["RKS System", null], hidden: null },

    // silvallydark (ID 1191)
    1191: { regular: ["RKS System", null], hidden: null },

    // silvallyfairy (ID 1192)
    1192: { regular: ["RKS System", null], hidden: null },

    // mimikyubustedtotem (ID 1206)
    1206: { regular: ["Disguise", null], hidden: null },

    // necrozmaduskmane (ID 1207)
    1207: { regular: ["Prism Armor", null], hidden: null },

    // necrozmadawnwings (ID 1208)
    1208: { regular: ["Prism Armor", null], hidden: null },

    // necrozmaultra (ID 1209)
    1209: { regular: ["Neuroforce", null], hidden: null },

    // cramorantgulping (ID 1211)
    1211: { regular: ["Gulp Missile", null], hidden: null },

    // cramorantgorging (ID 1212)
    1212: { regular: ["Gulp Missile", null], hidden: null },

    // sinisteaantique (ID 1214)
    1214: { regular: ["Weak Armor", null], hidden: "Cursed Body" },

    // polteageistantique (ID 1215)
    1215: { regular: ["Weak Armor", null], hidden: "Cursed Body" },

    // indeedeef (ID 1225)
    1225: { regular: ["Own Tempo", "Synchronize"], hidden: "Psychic Surge" },

    // morpekohangry (ID 1226)
    1226: { regular: ["Hunger Switch", null], hidden: null },

    // eternatuseternamax (ID 1229)
    1229: { regular: ["Pressure", null], hidden: null },

    // zarudedada (ID 1231)
    1231: { regular: ["Leaf Guard", null], hidden: null },

    // basculegionf [non-vanilla] (ID 1234)
    1234: { regular: ["Swift Swim", null], hidden: "Adaptability" },

    // sprigatito (ID 1289)
    1289: { regular: ["Overgrow", null], hidden: "Protean" },

    // floragato (ID 1290)
    1290: { regular: ["Overgrow", null], hidden: "Protean" },

    // meowscarada (ID 1291)
    1291: { regular: ["Overgrow", null], hidden: "Protean" },

    // fuecoco (ID 1292)
    1292: { regular: ["Blaze", null], hidden: "Unaware" },

    // crocalor (ID 1293)
    1293: { regular: ["Blaze", null], hidden: "Unaware" },

    // skeledirge (ID 1294)
    1294: { regular: ["Blaze", null], hidden: "Unaware" },

    // quaxly (ID 1295)
    1295: { regular: ["Torrent", null], hidden: "Moxie" },

    // quaxwell (ID 1296)
    1296: { regular: ["Torrent", null], hidden: "Moxie" },

    // quaquaval (ID 1297)
    1297: { regular: ["Torrent", null], hidden: "Moxie" },

    // lechonk (ID 1298)
    1298: { regular: ["Aroma Veil", "Gluttony"], hidden: "Thick Fat" },

    // oinkologne (ID 1299)
    1299: { regular: ["Lingering Aroma", "Gluttony"], hidden: "Thick Fat" },

    // oinkolognef (ID 1300)
    1300: { regular: ["Aroma Veil", "Gluttony"], hidden: "Thick Fat" },

    // tarountula (ID 1301)
    1301: { regular: ["Insomnia", null], hidden: "Stakeout" },

    // spidops (ID 1302)
    1302: { regular: ["Insomnia", null], hidden: "Stakeout" },

    // nymble (ID 1303)
    1303: { regular: ["Swarm", null], hidden: "Tinted Lens" },

    // lokix (ID 1304)
    1304: { regular: ["Swarm", null], hidden: "Tinted Lens" },

    // pawmi [non-vanilla] (ID 1305)
    1305: { regular: ["Iron Fist", null], hidden: "Volt Absorb" },

    // pawmo [non-vanilla] (ID 1306)
    1306: { regular: ["Iron Fist", null], hidden: "Volt Absorb" },

    // pawmot [non-vanilla] (ID 1307)
    1307: { regular: ["Iron Fist", null], hidden: "Volt Absorb" },

    // tandemaus [non-vanilla] (ID 1308)
    1308: { regular: ["Own Tempo", "Run Away"], hidden: "Pickup" },

    // fidough (ID 1311)
    1311: { regular: ["Own Tempo", null], hidden: "Klutz" },

    // dachsbun (ID 1312)
    1312: { regular: ["Well-Baked Body", null], hidden: "Aroma Veil" },

    // smoliv [non-vanilla] (ID 1313)
    1313: { regular: ["Harvest", null], hidden: "Early Bird" },

    // dolliv [non-vanilla] (ID 1314)
    1314: { regular: ["Harvest", null], hidden: "Early Bird" },

    // arboliva [non-vanilla] (ID 1315)
    1315: { regular: ["Harvest", null], hidden: "Seed Sower" },

    // nacli [non-vanilla] (ID 1320)
    1320: { regular: ["Purifying Salt", "Clear Body"], hidden: "Sturdy" },

    // naclstack [non-vanilla] (ID 1321)
    1321: { regular: ["Purifying Salt", "Clear Body"], hidden: "Sturdy" },

    // garganacl [non-vanilla] (ID 1322)
    1322: { regular: ["Purifying Salt", "Clear Body"], hidden: "Sturdy" },

    // charcadet [non-vanilla] (ID 1323)
    1323: { regular: ["Flame Body", null], hidden: "Flash Fire" },

    // armarouge [non-vanilla] (ID 1324)
    1324: { regular: ["Mega Launcher", null], hidden: "Weak Armor" },

    // ceruledge [non-vanilla] (ID 1325)
    1325: { regular: ["Sharpness", null], hidden: "Weak Armor" },

    // tadbulb [non-vanilla] (ID 1326)
    1326: { regular: ["Own Tempo", null], hidden: "Static" },

    // bellibolt [non-vanilla] (ID 1327)
    1327: { regular: ["Own Tempo", "Electromorphosis"], hidden: "Static" },

    // wattrel (ID 1328)
    1328: { regular: ["Wind Power", "Volt Absorb"], hidden: "Competitive" },

    // kilowattrel (ID 1329)
    1329: { regular: ["Wind Power", "Volt Absorb"], hidden: "Competitive" },

    // maschiff (ID 1330)
    1330: { regular: ["Intimidate", "Run Away"], hidden: "Stakeout" },

    // mabosstiff (ID 1331)
    1331: { regular: ["Intimidate", "Guard Dog"], hidden: "Stakeout" },

    // shroodle (ID 1332)
    1332: { regular: ["Unburden", "Pickpocket"], hidden: "Prankster" },

    // grafaiai (ID 1333)
    1333: { regular: ["Unburden", "Poison Touch"], hidden: "Prankster" },

    // bramblin (ID 1334)
    1334: { regular: ["Wind Rider", null], hidden: "Infiltrator" },

    // brambleghast (ID 1335)
    1335: { regular: ["Wind Rider", null], hidden: "Infiltrator" },

    // toedscool (ID 1336)
    1336: { regular: ["Mycelium Might", null], hidden: null },

    // toedscruel (ID 1337)
    1337: { regular: ["Mycelium Might", null], hidden: null },

    // klawf [non-vanilla] (ID 1338)
    1338: { regular: ["Regenerator", "Shell Armor"], hidden: "Anger Shell" },

    // capsakid (ID 1339)
    1339: { regular: ["Chlorophyll", "Insomnia"], hidden: "Klutz" },

    // scovillain (ID 1340)
    1340: { regular: ["Chlorophyll", "Insomnia"], hidden: "Moody" },

    // rellor (ID 1341)
    1341: { regular: ["Compound Eyes", null], hidden: "Shed Skin" },

    // rabsca (ID 1342)
    1342: { regular: ["Synchronize", null], hidden: "Telepathy" },

    // flittle [non-vanilla] (ID 1343)
    1343: { regular: ["Speed Boost", null], hidden: "Anticipation" },

    // espathra [non-vanilla] (ID 1344)
    1344: { regular: ["Speed Boost", null], hidden: "Opportunist" },

    // tinkatink (ID 1345)
    1345: { regular: ["Mold Breaker", "Own Tempo"], hidden: "Pickpocket" },

    // tinkatuff (ID 1346)
    1346: { regular: ["Mold Breaker", "Own Tempo"], hidden: "Pickpocket" },

    // tinkaton (ID 1347)
    1347: { regular: ["Mold Breaker", "Own Tempo"], hidden: "Pickpocket" },

    // wiglett [non-vanilla] (ID 1348)
    1348: { regular: ["Gooey", null], hidden: "Sand Veil" },

    // wugtrio [non-vanilla] (ID 1349)
    1349: { regular: ["Gooey", null], hidden: "Sand Veil" },

    // bombirdier [non-vanilla] (ID 1350)
    1350: { regular: ["Rocky Payload", null], hidden: "Big Pecks" },

    // finizen (ID 1351)
    1351: { regular: ["Water Veil", null], hidden: null },

    // palafinhero (ID 1353)
    1353: { regular: ["Zero to Hero", null], hidden: null },

    // varoom [non-vanilla] (ID 1354)
    1354: { regular: ["Sturdy", null], hidden: "Overcoat" },

    // revavroom [non-vanilla] (ID 1355)
    1355: { regular: ["Filter", null], hidden: "Overcoat" },

    // cyclizar (ID 1356)
    1356: { regular: ["Shed Skin", null], hidden: "Regenerator" },

    // orthworm (ID 1357)
    1357: { regular: ["Earth Eater", null], hidden: "Sand Veil" },

    // glimmet [non-vanilla] (ID 1358)
    1358: { regular: ["Corrosion", null], hidden: "Toxic Debris" },

    // glimmora [non-vanilla] (ID 1359)
    1359: { regular: ["Corrosion", null], hidden: "Toxic Debris" },

    // greavard (ID 1360)
    1360: { regular: ["Pickup", null], hidden: "Fluffy" },

    // houndstone (ID 1361)
    1361: { regular: ["Sand Rush", null], hidden: "Fluffy" },

    // flamigo [non-vanilla] (ID 1362)
    1362: { regular: ["Scrappy", null], hidden: "Costar" },

    // cetoddle (ID 1363)
    1363: { regular: ["Thick Fat", "Snow Cloak"], hidden: "Sheer Force" },

    // cetitan (ID 1364)
    1364: { regular: ["Thick Fat", "Slush Rush"], hidden: "Sheer Force" },

    // veluza [non-vanilla] (ID 1365)
    1365: { regular: ["Sharpness", null], hidden: "Mold Breaker" },

    // dondozo (ID 1366)
    1366: { regular: ["Unaware", "Oblivious"], hidden: "Water Veil" },

    // tatsugiri (ID 1367)
    1367: { regular: ["Commander", null], hidden: "Storm Drain" },

    // annihilape [non-vanilla] (ID 1370)
    1370: { regular: ["Vital Spirit", null], hidden: "Defiant" },

    // clodsire (ID 1371)
    1371: { regular: ["Poison Point", "Water Absorb"], hidden: "Unaware" },

    // farigiraf (ID 1372)
    1372: { regular: ["Cud Chew", "Armor Tail"], hidden: "Sap Sipper" },

    // dudunsparce [non-vanilla] (ID 1373)
    1373: { regular: ["Serene Grace", null], hidden: "Rattled" },

    // kingambit [non-vanilla] (ID 1375)
    1375: { regular: ["Supreme Overlord", null], hidden: "Defiant" },

    // greattusk (ID 1376)
    1376: { regular: ["Protosynthesis", null], hidden: null },

    // screamtail (ID 1377)
    1377: { regular: ["Protosynthesis", null], hidden: null },

    // brutebonnet (ID 1378)
    1378: { regular: ["Protosynthesis", null], hidden: null },

    // fluttermane (ID 1379)
    1379: { regular: ["Protosynthesis", null], hidden: null },

    // slitherwing (ID 1380)
    1380: { regular: ["Protosynthesis", null], hidden: null },

    // sandyshocks (ID 1381)
    1381: { regular: ["Protosynthesis", null], hidden: null },

    // irontreads (ID 1382)
    1382: { regular: ["Quark Drive", null], hidden: null },

    // ironbundle (ID 1383)
    1383: { regular: ["Quark Drive", null], hidden: null },

    // ironhands (ID 1384)
    1384: { regular: ["Quark Drive", null], hidden: null },

    // ironjugulis (ID 1385)
    1385: { regular: ["Quark Drive", null], hidden: null },

    // ironmoth (ID 1386)
    1386: { regular: ["Quark Drive", null], hidden: null },

    // ironthorns (ID 1387)
    1387: { regular: ["Quark Drive", null], hidden: null },

    // frigibax [non-vanilla] (ID 1388)
    1388: { regular: ["Ice Body", null], hidden: "Thermal Exchange" },

    // arctibax [non-vanilla] (ID 1389)
    1389: { regular: ["Ice Body", null], hidden: "Thermal Exchange" },

    // baxcalibur [non-vanilla] (ID 1390)
    1390: { regular: ["Ice Body", null], hidden: "Thermal Exchange" },

    // gimmighoulroaming (ID 1392)
    1392: { regular: ["Run Away", null], hidden: null },

    // gholdengo (ID 1393)
    1393: { regular: ["Good as Gold", null], hidden: null },

    // wochien [non-vanilla] (ID 1394)
    1394: { regular: ["Shell Armor", null], hidden: "Tablets of Ruin" },

    // chienpao [non-vanilla] (ID 1395)
    1395: { regular: ["Mold Breaker", null], hidden: "Sword of Ruin" },

    // tinglu [non-vanilla] (ID 1396)
    1396: { regular: ["Battle Armor", null], hidden: "Vessel of Ruin" },

    // chiyu [non-vanilla] (ID 1397)
    1397: { regular: ["Mold Breaker", null], hidden: "Beads of Ruin" },

    // roaringmoon (ID 1398)
    1398: { regular: ["Protosynthesis", null], hidden: null },

    // ironvaliant (ID 1399)
    1399: { regular: ["Quark Drive", null], hidden: null },

    // koraidon (ID 1400)
    1400: { regular: ["Orichalcum Pulse", null], hidden: null },

    // miraidon (ID 1401)
    1401: { regular: ["Hadron Engine", null], hidden: null },

    // taurospaldeacombat [non-vanilla] (ID 1402)
    1402: { regular: ["Intimidate", null], hidden: "Cud Chew" },

    // taurospaldeablaze [non-vanilla] (ID 1403)
    1403: { regular: ["Intimidate", null], hidden: "Cud Chew" },

    // taurospaldeaaqua [non-vanilla] (ID 1404)
    1404: { regular: ["Intimidate", null], hidden: "Cud Chew" },

    // wooperpaldea (ID 1405)
    1405: { regular: ["Poison Point", "Water Absorb"], hidden: "Unaware" },

    // walkingwake (ID 1406)
    1406: { regular: ["Protosynthesis", null], hidden: null },

    // ironleaves (ID 1407)
    1407: { regular: ["Quark Drive", null], hidden: null },

    // dipplin [non-vanilla] (ID 1408)
    1408: { regular: ["Supersweet Syrup", null], hidden: "Sticky Hold" },

    // poltchageistartisan (ID 1409)
    1409: { regular: ["Hospitality", null], hidden: "Heatproof" },

    // sinistchamasterpiece (ID 1411)
    1411: { regular: ["Hospitality", null], hidden: "Heatproof" },

    // okidogi (ID 1413)
    1413: { regular: ["Toxic Chain", null], hidden: "Guard Dog" },

    // munkidori (ID 1414)
    1414: { regular: ["Toxic Chain", null], hidden: "Frisk" },

    // fezandipiti (ID 1415)
    1415: { regular: ["Toxic Chain", null], hidden: "Technician" },

    // ogerpon [non-vanilla] (ID 1416)
    1416: { regular: ["Inner Focus", null], hidden: null },

    // ogerponwellspring [non-vanilla] (ID 1417)
    1417: { regular: ["Hydration", null], hidden: null },

    // ogerponhearthflame (ID 1418)
    1418: { regular: ["Mold Breaker", null], hidden: null },

    // ogerponcornerstone (ID 1419)
    1419: { regular: ["Sturdy", null], hidden: null },

    // ursalunabloodmoon (ID 1424)
    1424: { regular: [null, null], hidden: null },

    // archaludon [non-vanilla] (ID 1425)
    1425: { regular: ["Stalwart", "Sturdy"], hidden: "Stamina" },

    // hydrapple [non-vanilla] (ID 1426)
    1426: { regular: ["Supersweet Syrup", null], hidden: "Sticky Hold" },

    // gougingfire (ID 1427)
    1427: { regular: ["Protosynthesis", null], hidden: null },

    // ragingbolt (ID 1428)
    1428: { regular: ["Protosynthesis", null], hidden: null },

    // ironboulder (ID 1429)
    1429: { regular: ["Quark Drive", null], hidden: null },

    // ironcrown (ID 1430)
    1430: { regular: ["Quark Drive", null], hidden: null },

    // terapagosterastal (ID 1432)
    1432: { regular: ["Tera Shell", null], hidden: null },

    // terapagosstellar (ID 1433)
    1433: { regular: ["Teraform Zero", null], hidden: null },

    // pecharunt (ID 1434)
    1434: { regular: ["Poison Puppeteer", null], hidden: null }
};
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
  mon.species = substructs[0][0] & 0xFFFF; // Standard: species is 16-bit in this field.
                                          // If Lucid uses fewer bits (e.g. 0x7FF for 11 bits), this mask would change.
                                          // PkHex seeing Skitty for Roselia might hint at this value being Skitty's ID.
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

function getAbility(mon) {
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
}

function getNature(mon) {
  if (!mon) return "Unknown";

  const hiddenNatureVal = mon.hiddenNature; // This is 0-31 from the 5 bits. For Roselia, it's 3.
  const personalityPID = mon.personality;

  if (mon.personality === 0x7CAF1B52) { // Roselia's PID
      console.log(`DEBUG_NATURE Roselia: PID=0x${personalityPID.toString(16)}, Raw_HiddenNature_5bit_Val=${hiddenNatureVal}`);
  }

  // If the 5-bit value (0-24) is a valid 0-indexed nature, use it.
  // Let's assume any value > 24 from these 5 bits means "use PID" or is invalid.
  // The Lua script's "hiddenNature == 0" for PID fallback is tricky if 0 itself is a valid nature (Hardy).
  // Let's go by PkHex & your in-game summary. If Roselia is Adamant, and hiddenNature bits are 3,
  // then the value "3" from those bits must map to Adamant.
  
  // If hiddenNatureVal (0-24) directly corresponds to the index in the 0-indexed natures array:
  if (hiddenNatureVal >= 0 && hiddenNatureVal <= 24) {
    if (mon.personality === 0x7CAF1B52) {
        console.log(`DEBUG_NATURE Roselia: Using Raw_HiddenNature_5bit_Val ${hiddenNatureVal} as 0-indexed nature. Nature: ${natures[hiddenNatureVal]}`);
    }
    return natures[hiddenNatureVal] || `Invalid Nature for HN Index ${hiddenNatureVal}`;
  }
  
  // Fallback to PID if hiddenNatureVal is outside 0-24 (e.g., if the 5 bits were 25-31)
  const pidNatureIndex = personalityPID % 25;
    if (mon.personality === 0x7CAF1B52) {
        console.log(`DEBUG_NATURE Roselia: HiddenNatureVal was ${hiddenNatureVal}, using PID fallback. PID_Nature_Index=${pidNatureIndex}, Nature: ${natures[pidNatureIndex]}`);
    }
  return natures[pidNatureIndex] || "Unknown Nature (PID)";
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
  const exportLevelInput = document.getElementById('export-level');
  const loadingIndicator = document.getElementById('loading');
  const outputContainer = document.getElementById('output-container');
  const outputText = document.getElementById('output-text');
  const copyBtn = document.getElementById('copy-btn');

  fileSelectBtn.addEventListener('click', function() {
    fileInput.click();
  });

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

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

        // --- Get and validate the MANDATORY export level ---
        let exportLevel = 50; 
        const exportLevelStr = exportLevelInput.value.trim();
        if (exportLevelStr) {
            const parsedLevel = parseInt(exportLevelStr, 10);
            if (!isNaN(parsedLevel) && parsedLevel >= 1 && parsedLevel <= 100) {
                exportLevel = parsedLevel;
            } else {
                alert(`Invalid level "${exportLevelStr}" entered. Defaulting to level 50. Please enter a level between 1 and 100.`);
                if (typeof exportLevelInput !== 'undefined' && exportLevelInput) exportLevelInput.value = exportLevel; 
            }
        } else {
            alert("Export Level is required. Defaulting to level 50. Please enter a level.");
            if (typeof exportLevelInput !== 'undefined' && exportLevelInput) exportLevelInput.value = exportLevel;
        }
        console.log(`Using export level: ${exportLevel}`);
        // --- End of export level handling ---

        // --- PARTY PARSING ---
        showdownOutput += "=== PARTY ===\n";
        let partyCountValue = 0; 
        let partyDataStartOffsetInFile = 0; 
        let activeSaveBlockBase = -1; 

        if (DIRECT_MODE) {
            console.log("Party Parsing: DIRECT_MODE is true.");
            if (PARTY_COUNT_DIRECT_OFFSET >= dataView.byteLength || PARTY_DATA_DIRECT_OFFSET >= dataView.byteLength) {
                throw new Error("DIRECT_MODE party offsets are out of bounds for this save file.");
            }
            partyCountValue = dataView.getUint8(PARTY_COUNT_DIRECT_OFFSET); // Assign directly
            partyDataStartOffsetInFile = PARTY_DATA_DIRECT_OFFSET;
            console.log(`Direct Mode - Party count: ${partyCountValue} (from file offset 0x${PARTY_COUNT_DIRECT_OFFSET.toString(16)})`);
        } else {
            console.log("Party Parsing: DIRECT_MODE is false. Entering section-based parsing.");
            activeSaveBlockBase = findActiveSaveOffset(dataView); 
            
            if ((activeSaveBlockBase !== 0 && activeSaveBlockBase !== SAVE_BLOCK_SIZE) && dataView.byteLength >= SAVE_BLOCK_SIZE) {
                if (typeof activeSaveBlockBase === 'undefined') {
                   console.error("CRITICAL: findActiveSaveOffset returned undefined!");
                   throw new Error("findActiveSaveOffset returned undefined, cannot proceed with party parsing.");
                }
            }
            console.log(`Active save block determined to start at file offset: 0x${activeSaveBlockBase.toString(16)}`); 
            
            const partySectionSlotOffset = findSectionOffset(dataView, activeSaveBlockBase, PARTY_DATA_SECTION_ID);
            
            if (partySectionSlotOffset !== -1) {
                console.log(`Party Data Section (ID ${PARTY_DATA_SECTION_ID}) found in slot at file offset: 0x${partySectionSlotOffset.toString(16)}`);

                let chosenPartyCountOffset = -1;
                let tempCountRead = 0; // Use a different variable for the read value

                const knownPartyCountOffsets = [0x01A7, 0x0057]; // Try 0x01A7 first (for "New Mons"), then 0x0057

                for (const offset of knownPartyCountOffsets) {
                    const currentPartyCountFileOffset = partySectionSlotOffset + offset;
                    if (currentPartyCountFileOffset < dataView.byteLength) {
                        tempCountRead = dataView.getUint8(currentPartyCountFileOffset);
                        console.log(`(Party Count Check) Trying offset 0x${offset.toString(16)} (abs: 0x${currentPartyCountFileOffset.toString(16)}), found count: ${tempCountRead}`);
                        if (tempCountRead >= 0 && tempCountRead <= 6) { 
                            chosenPartyCountOffset = offset;
                            partyCountValue = tempCountRead; // Assign to the main partyCountValue
                            console.log(`Party count ${partyCountValue} confirmed using internal offset 0x${offset.toString(16)}.`);
                            break; 
                        }
                    } else {
                        console.warn(`Party count offset 0x${offset.toString(16)} (abs: 0x${currentPartyCountFileOffset.toString(16)}) is out of bounds for section.`);
                    }
                }

                if (chosenPartyCountOffset !== -1) {
                    const partyCountActualFileOffset = partySectionSlotOffset + chosenPartyCountOffset;
                    partyDataStartOffsetInFile = partySectionSlotOffset + PARTY_MEMBERS_OFFSET_IN_SECTION; 

                    if (partyCountValue > 0) {
                        const endOfPartyData = partyDataStartOffsetInFile + (partyCountValue * PARTY_MON_SIZE);
                        if (endOfPartyData > dataView.byteLength) {
                            showdownOutput += `Error: Calculated end of party data (0x${endOfPartyData.toString(16)}) is out of file bounds (0x${dataView.byteLength.toString(16)}).\n`;
                            console.error(`Calculated end of party data (count ${partyCountValue}) from offset 0x${partyDataStartOffsetInFile.toString(16)} is out of bounds.`);
                            partyCountValue = 0; 
                        }
                    }
                    console.log(`Section Mode - Party count: ${partyCountValue} (from chosen internal offset 0x${chosenPartyCountOffset.toString(16)} at absolute 0x${partyCountActualFileOffset.toString(16)})`);
                    console.log(`Section Mode - Party data starting at offset: 0x${partyDataStartOffsetInFile.toString(16)}`);
                } else {
                    showdownOutput += "Error: Could not determine valid party count from any known offsets.\n";
                    console.error(`Party count read was invalid from all tried offsets.`);
                    partyCountValue = 0; 
                }
            } else {
                showdownOutput += "Could not find Party Data Section. Skipping party.\n";
                console.error(`Could not find Party Data Section (ID ${PARTY_DATA_SECTION_ID}) in the active save block starting at 0x${activeSaveBlockBase.toString(16)}.`);
            }
        }

        // This party processing loop uses the partyCountValue determined above
        if (typeof partyCountValue === 'number' && partyCountValue > 0 && partyCountValue <= 6) {
            for (let i = 0; i < partyCountValue; i++) {
                const monAddressInFile = partyDataStartOffsetInFile + (i * PARTY_MON_SIZE);
                if (monAddressInFile + PARTY_MON_SIZE > dataView.byteLength) { 
                    console.error(`Attempt to read party mon ${i+1} data out of bounds. Offset: 0x${monAddressInFile.toString(16)}`);
                    showdownOutput += `Error reading party mon ${i+1} (out of bounds).\n`;
                    break; 
                }
                const monData = readPartyMon(dataView, monAddressInFile);
                if (monData && monData.species !== 0) {
                    const speciesNameForLogParty = mons[monData.species-1] || `UnknownSpecies(${monData.species})`;
                    console.log(`Party Pokemon ${i + 1} (Species ID ${monData.species}, Name: ${speciesNameForLogParty}):`, monData);
                    showdownOutput += formatShowdownExport(monData, exportLevel); 
                } else {
                    console.log(`Party Pokemon ${i + 1} at offset 0x${monAddressInFile.toString(16)} is empty or data is invalid.`);
                }
            }
        } else if (partyCountValue === 0 && !showdownOutput.includes("Could not find Party Data Section")) { 
            showdownOutput += "Party is empty.\n";
        } else if (typeof partyCountValue !== 'undefined' && partyCountValue !== 0 && !showdownOutput.includes("Could not find Party Data Section")) {
            showdownOutput += `Invalid party count read: ${partyCountValue}. Skipping party.\n`;
            console.warn(`Invalid party count read: ${partyCountValue}`);
        }
        showdownOutput += "\n";
        // --- END OF PARTY PARSING ---


        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // +++ PC BOX PARSING (BOX 1 and BOX 2) ++++++++++++++++++++++++++++++++++
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        showdownOutput += "\n=== PC BOXES ===\n";
        console.log("\n--- Starting PC Box Parsing ---");
        const POKEMON_PER_BOX = 30;
        const NUM_BOXES_TO_PARSE = 2; 

        if (!DIRECT_MODE) {
            if (activeSaveBlockBase === -1 && dataView.byteLength >= SAVE_BLOCK_SIZE) { 
                 console.warn("(PC Parse) activeSaveBlockBase was -1. Recalculating for PC parsing.");
                 activeSaveBlockBase = findActiveSaveOffset(dataView);
                 console.log(`(PC Parse) Active save block (re-calculated) starts at: 0x${activeSaveBlockBase.toString(16)}`);
                 if (activeSaveBlockBase === -1 && dataView.byteLength >= SAVE_BLOCK_SIZE * 2) { 
                     console.error("(PC Parse) Critical: Failed to determine active save block for PC parsing.");
                     showdownOutput += "Error: Could not determine active save block for PC data.\n";
                 }
            } else if (activeSaveBlockBase !== -1) {
                 console.log(`(PC Parse) Using activeSaveBlockBase from party parsing: 0x${activeSaveBlockBase.toString(16)}`);
            } else { 
                console.warn("(PC Parse) activeSaveBlockBase is -1 and save file is very small. Cannot perform section-based PC parsing.");
            }

            if (activeSaveBlockBase === 0 || activeSaveBlockBase === SAVE_BLOCK_SIZE) { 
                for (let boxIndex = 0; boxIndex < NUM_BOXES_TO_PARSE; boxIndex++) {
                    const currentBoxNumber = boxIndex + 1;
                    const currentBoxSectionId = PC_BOX_START_SECTION_ID + boxIndex; 
                    
                    showdownOutput += `\n=== PC BOX ${currentBoxNumber} (Section ID ${currentBoxSectionId}) ===\n`;
                    console.log(`(PC Parse) Attempting to parse Box ${currentBoxNumber}, targeting Section ID ${currentBoxSectionId}`);

                    const boxSectionSlotAbsoluteOffset = findSectionOffset(dataView, activeSaveBlockBase, currentBoxSectionId);

                    if (boxSectionSlotAbsoluteOffset === -1) {
                        showdownOutput += `Box ${currentBoxNumber} (Section ${currentBoxSectionId}) not found.\n`;
                        console.warn(`(PC Parse) Could not find PC Box Section ID ${currentBoxSectionId}.`);
                        continue; 
                    }
                    
                    console.log(`(PC Parse) Box ${currentBoxNumber} (Section ${currentBoxSectionId}) slot found at ABSOLUTE file offset: 0x${boxSectionSlotAbsoluteOffset.toString(16)}`);
                    
                    const boxDataStartInFile = boxSectionSlotAbsoluteOffset + PC_BOX_DATA_INTERNAL_OFFSET;
                    console.log(`(PC Parse) Box ${currentBoxNumber} data starts at offset 0x${boxDataStartInFile.toString(16)} (using PC_BOX_DATA_INTERNAL_OFFSET = 0x${PC_BOX_DATA_INTERNAL_OFFSET.toString(16)})`);

                    if (boxDataStartInFile + (POKEMON_PER_BOX * BOX_MON_SIZE) > dataView.byteLength + 1) { 
                        console.error(`(PC Parse) Calculated data for Box ${currentBoxNumber} extends beyond file length. Start offset: 0x${boxDataStartInFile.toString(16)}, Needs up to: 0x${(boxDataStartInFile + (POKEMON_PER_BOX * BOX_MON_SIZE)).toString(16)}, File size: 0x${dataView.byteLength.toString(16)}`);
                        showdownOutput += `Error reading Box ${currentBoxNumber} data (offset out of bounds).\n`;
                        continue; 
                    }
                    
                    let pokemonFoundInThisBox = 0;
                    for (let slotIndex = 0; slotIndex < POKEMON_PER_BOX; slotIndex++) {
                        const monAddressInFile = boxDataStartInFile + (slotIndex * BOX_MON_SIZE);
                         if (monAddressInFile + BOX_MON_SIZE > dataView.byteLength) { 
                            console.error(`(PC Parse) Attempt to read PC Mon in Box ${currentBoxNumber}, Slot ${slotIndex+1} out of bounds. Offset: 0x${monAddressInFile.toString(16)}`);
                            break; 
                        }
                        const monData = readBoxMon(dataView, monAddressInFile);

                        if (monData && monData.species !== 0) {
                            pokemonFoundInThisBox++;
                            const speciesNameForLog = mons[monData.species-1] || `UnknownSpecies(${monData.species})`;
                            showdownOutput += formatShowdownExport(monData, exportLevel); 

                            if (currentBoxNumber === 1 && slotIndex === 0 && monData.species === 77 && monData.personality === 0x3165F6A0) {
                                console.log("!!!!!! (PC Parse) SUCCESSFULLY PARSED TARGET PONYTA IN BOX 1 SLOT 1 !!!!!!");
                            }
                        }
                    }
                    if (pokemonFoundInThisBox === 0) {
                        showdownOutput += "(This box appears empty)\n";
                    }
                }
            } else {
                 showdownOutput += "PC Box parsing skipped: activeSaveBlockBase not validly determined.\n";
                 console.error("(PC Parse) activeSaveBlockBase not valid. Cannot proceed with PC section parsing.");
            }
        } else {
            showdownOutput += "PC Box parsing not implemented for DIRECT_MODE.\n";
        }
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // +++ END: PC BOX PARSING +++++++++++++++++++++++++++++++++++++++++++++++
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        outputText.textContent = showdownOutput.trim() || "No Pokémon data found or processed successfully.";
        outputContainer.hidden = false;

      } catch (error) {
        console.error("Error processing save file:", error);
        let errorMessage = `Error: ${error.message}`;
        if (error.stack) {
            errorMessage += `\n\nStack: ${error.stack}`;
        }
        errorMessage += "\n\nCheck console (F12) for more details.";
        outputText.textContent = errorMessage;
        outputContainer.hidden = false;
      } finally {
        loadingIndicator.hidden = true;
        if (typeof fileInput !== 'undefined' && fileInput) { 
            fileInput.value = ''; 
        }
      }
    }; // End of reader.onload

    reader.onerror = function() { 
      alert('Error reading the selected file.');
      loadingIndicator.hidden = true;
      if (typeof fileInput !== 'undefined' && fileInput) { 
          fileInput.value = '';
      }
    };
    reader.readAsArrayBuffer(file);
  }); // End of fileInput.addEventListener

  copyBtn.addEventListener('click', function() {
    const output = outputText.textContent;
    if (!output || output === "No Pokémon data found or processed successfully." || output.startsWith("Error:")) return;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(output)
        .then(() => {
          alert('Copied to clipboard!');
        })
        .catch(err => {
          console.error('Could not copy text using navigator.clipboard: ', err);
          fallbackCopyTextToClipboard(output);
        });
    } else {
      fallbackCopyTextToClipboard(output);
    }
  });

  function fallbackCopyTextToClipboard(text) {
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
      const msg = successful ? 'Copied to clipboard!' : 'Copying to clipboard failed.';
      alert(msg);
    } catch (err) {
      console.error('Fallback copy to clipboard failed: ', err);
      alert('Copying to clipboard failed. Please select and copy the text manually.');
    }
    document.body.removeChild(textArea);
  }

}); // End of DOMContentLoaded