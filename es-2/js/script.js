// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

// funzione per i punti random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// array di teams
const teams = [
    {
       teamName:'Roma',
       points: 0,
       fouls: 0 
    },
    {
        teamName:'Barcellona',
        points: 0,
        fouls: 0 
    },
    {
        teamName:'Paris-Saint-Germain',
        points: 0,
        fouls: 0 
    },
    {
        teamName:'Manchester-City',
        points: 0,
        fouls: 0 
    }
];

// calcolo numeri random per ogni team
for(let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.points = getRndInteger(10, 100);
    team.fouls = getRndInteger(10, 50);
};

console.log(teams)

// array con solo nomi squadre e falli
const teamNamesAndFouls = [];
for(let i = 0; i < teams.length; i++) {
    const team = teams[i];
    teamNamesAndFouls.push({
        teamName: team.teamName,
        fouls: team.fouls
    });
}

console.log(teamNamesAndFouls)