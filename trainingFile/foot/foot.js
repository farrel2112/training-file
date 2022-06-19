class Football {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

function points(games) {
    let total = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < games.length; i++) {
        x = Number(games[i].charAt(0));
        y = Number(games[i].charAt(2));
        x > y ? (total += 3) : x == y ? (total += 1) : (total += 0);
    }
    for (let i = 0; i < games.length; i++) {
        x += Number(games[i].charAt(0));
        y += Number(games[i].charAt(2));
    }
    return {
        points: `${total} pts`,
        Marques: `${x} buts`,
        Encaisses: `${y} buts`,
        difference: x - y,
    };
}

console.log(teams);
