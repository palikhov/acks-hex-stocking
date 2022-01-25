let clearHexContent = {
    1 : "Unique Terrain",
    2 : "Unique Terrain",
    3 : "Dangerous Terrain",
    4 : "Dangerous Terrain",
    5 : "Dangerous Terrain",
    6 : "Dangerous Terrain",
    7 : "Dangerous Terrain",
    8 : "Nothing",
    9 : "Nothing",
    10 : "Nothing",
    11 : "Nothing",
    12 : "Nothing",
    13 : "Valuable Terrain",
    14 : "Valuable Terrain",
    15 : "Valuable Terrain",
    16 : "Valuable Terrain",
    17 : "Valuable Terrain",
    18 : "Encounter",
    19 : "Encounter",
    20 : "Encounter"
}

let hillsHexContent = {
    1 : "Unique Terrain",
    2 : "Unique Terrain",
    3 : "Dangerous Terrain",
    4 : "Dangerous Terrain",
    5 : "Dangerous Terrain",
    6 : "Dangerous Terrain",
    7 : "Nothing",
    8 : "Nothing",
    9 : "Nothing",
    10 : "Valuable Terrain",
    11 : "Valuable Terrain",
    12 : "Valuable Terrain",
    13 : "Valuable Terrain",
    14 : "Encounter",
    15 : "Encounter",
    16 : "Encounter",
    17 : "Encounter",
    18 : "Encounter",
    19 : "Encounter",
    20 : "Encounter"
}
let barrenHexContent = {
    1 : "Unique Terrain",
    2 : "Dangerous Terrain",
    3 : "Dangerous Terrain",
    4 : "Dangerous Terrain",
    5 : "Nothing",
    6 : "Nothing",
    7 : "Nothing",
    8 : "Valuable Terrain",
    9 : "Valuable Terrain",
    10 : "Valuable Terrain",
    11 : "Encounter",
    12 : "Encounter",
    13 : "Encounter",
    14 : "Encounter",
    15 : "Encounter",
    16 : "Encounter",
    17 : "Encounter",
    18 : "Encounter",
    19 : "Encounter",
    20 : "Encounter"
}

let roll = Math.floor(Math.random() * (19) + 1);
console.log(roll);
console.log(clearHexContent[roll]);
console.log(hillsHexContent[roll]);
console.log(barrenHexContent[roll]);