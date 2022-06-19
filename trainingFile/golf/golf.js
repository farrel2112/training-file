//créer un array représentant le score de chaque joueur aux différents trous.
//créer une fonction permettant de renvoyer le score joué et qui incrémente la variable score
class golfPlayers{
	constructor(name,score,card){
		this.name = name;
		this.score = score;
		this.card = card;
	}

	 golfTournament(par,strokes){
	if(strokes == 1){
		this.score -= 5;
		this.card -= 5;
		console.log(holeScoring[0]+ ' (- 5 )' + '\n\n'+ 'Score : '+ this.score+'\n'+' Card : '+ this.card);
	}else if(strokes <= par -2){
		this.score -= 3;
		this.card -= 3;
		console.log(holeScoring[1]+ ' (- 3 )' + '\n\n'+ 'Score : '+ this.score+'\n'+' Card : '+ this.card);
	}else if(strokes == par -1){
		this.score -= 1;
		this.card -= 1;
		console.log(holeScoring[2]+' (- 1 )' + '\n\n'+ 'Score : '+ this.score+'\n'+' Card : '+ this.card);
	}else if(strokes == par){
		this.score += 0;
		this.card += 0;
		console.log(holeScoring[3] + '\n\n'+ 'Score : '+ this.score+'\n'+' Card : '+ this.card);
	}else if(strokes == par +1){
		this.score += 1;
		this.card +=1;
		console.log(holeScoring[4]+ ' (+ 1 )' + '\n\n'+ 'Score : '+ this.score+'\n'+' Card : '+ this.card);
	}else if(strokes == par +2){
		this.score += 2;
		this.card += 2;
		console.log(holeScoring[5]+' (+ 2 )' + '\n\n'+ 'Score : '+ this.score+'\n'+' Card : '+ this.card);
	}else{
		return holeScoring[6];
	}
}
}
var holeScoring = ['Hole-in-one!','Eagle','Birdy','Par','Bogey','Double bogey','Go home!'];
var player1 = new golfPlayers ('Farrel',0,72);

var playerCard = [(player1.golfTournament(3,2),
					(player1.golfTournament(4,2),
					(player1.golfTournament(4,5),
					(player1.golfTournament(3,2),
					(player1.golfTournament(4,4),
					(player1.golfTournament(3,4),
					(player1.golfTournament(5,7),
					(player1.golfTournament(4,5)
				 ];
