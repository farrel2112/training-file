// Définition des variables

      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      let myDiv = document.querySelector('.card')
      let userNameDisplay = document.querySelector('.player-name')
      let nom = document.querySelector('.nom')
      let btnValider = document.querySelector('.valider')
      let compteur = document.querySelector('.countdown')
      let noName = document.querySelector('.enterName')
      let guessCount = 1;
      let resetButton;
      let scoreCount = 0;
      let scoreDisplay;
      let startingTime = 1.5
      let time = startingTime * 60
      let minutes
      let seconds
      let timer
      let userGuess
      let players = {}
      


    // //Fonction fin de partie

      const setGameOver = () =>{
        guessField.disabled = true;
        guessSubmit.disabled = true;
        document.body.appendChild(myDiv)
        resetButton = document.createElement('button');
        resetButton.textContent = 'Commencer nouvelle partie';
        myDiv.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
        scoreDisplay = document.querySelector('.score')
        scoreDisplay.textContent = `Score : ${scoreCount}`
        players.joueur = nom.value
        players.score = scoreCount 
       
      }
      //Fonction essais

      const checkGuess = () =>{
        userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Entrées précédentes: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = `Félicitations ${nom.value} tu as trouvé la bonne réponse!!!!`;
          lastResult.style.backgroundColor = 'green';
          lastResult.style.color = 'white'
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lastResult.style.color = 'red'
          lowOrHi.textContent = '';
          scoreCount = 0
          clearInterval(timer)
          setGameOver();
        } else {
          lastResult.textContent = 'Faux!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'La dernière entrée était trop faible!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'La dernière entrée était trop élevée!';
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
        scoreCount = 10 * (10 - guessCount) + time
      }
      // Fonction compte à rebours

      const gameCountdown = () =>{
        time--
        minutes = Math.floor(time / 60)
        seconds = Math.floor(time % 60)
        compteur.textContent = `${minutes}min : ${seconds}s`
        if(time == 0){
          clearInterval(timer)
          lastResult.textContent = '!!!GAME OVER!!!'
          lastResult.style.color = 'red'
        }
        if(userGuess === randomNumber){
          clearInterval(timer)
        }
      }
      // Fonction commencer partie
      const commencer = () =>{
        userNameDisplay.textContent += nom.value
        if(nom.value == false){
          noName.textContent = 'Veuillez entrer votre nom'
          noName.style.color = 'red'
          noName.style.fontSize = '25px'
          nom.disabled = false
          nom.value = ''
          guessSubmit.disabled = true
          guessField.disabled = true
        }else{
          nom.disabled = true
          // players.push(nom)
          btnValider.disabled = true
          noName.textContent = ''
          guessSubmit.disabled = false
          guessField.disabled = false
          timer = setInterval(gameCountdown,1000)
         
        } 
      }
      
      // Fonction remettre le jeu à zéro

      const resetGame = () =>{
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        nom.disabled = false
        btnValider.disabled = false 
        nom.value = ''
        userNameDisplay.textContent = ''
        scoreDisplay.textContent =''
        lastResult.style.backgroundColor = 'yellow';
        compteur.textContent = ''
        nom.focus()
        randomNumber = Math.floor(Math.random() * 100) + 1;
        time = startingTime * 60
        
      }
      // Gestion des évenements

      btnValider.addEventListener('click',commencer)
      guessSubmit.addEventListener('click', checkGuess)
     