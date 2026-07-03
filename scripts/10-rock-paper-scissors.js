
        //loading page
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };// getting a item from localstorage and again converting it to object. and setting a default value

        updateScoreElement();


        //    if(!score){ // if score is null keep a default value of score 
        //  if score === null ==> true, ---> same as !score ==> true
        //     score ={
        //         wins: 0,
        //         losses: 0,
        //         ties: 0
        //     };
        //    } 


        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = '';

            if (playerMove === 'Scissor') {
                if (computerMove === 'Rock') {
                    result = 'You lose.';
                }
                else if (computerMove === 'Paper') {
                    result = 'You Win.';
                }
                else if (computerMove === 'Scissor') {
                    result = ' Tie. ';
                }

            } else if (playerMove === 'Paper') {
                if (computerMove === 'Rock') {

                    result = 'You Win.';
                }
                else if (computerMove === 'Paper') {
                    result = ' Tie. ';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You lose.';
                }

            } else if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'Tie.';
                }
                else if (computerMove === 'Paper') {
                    result = ' You lose.';
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Win.';
                }

            }

            if (result === 'You Win.') {
                score.wins += 1;
            } else if (result === 'You lose.') {
                score.losses += 1;
            } else if (result === 'Tie.') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            document.querySelector('.js-result').innerHTML = `${result}`;
            document.querySelector('.js-moves').innerHTML = `You 
        <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-icon">
        <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">
        Computer`;

   
            // alert(`Your move: ${playerMove}. Computer move: ${computerMove}. Result: ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
            updateScoreElement();
        }
        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = '';
          
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Rock';
              
                
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Paper';
               
            } else {
                computerMove = 'Scissor';
                
            }
            return computerMove;
        }

    