

let down = document.querySelector(".down");
let up = document.querySelector(".up");
const guess = document.querySelector("#guess-number");
// console.log(guess);
const guessBtn = document.getElementById("guess-btn");
const report = document.querySelectorAll(".report")[0]; //// *****
let attempts = document.querySelector(".attempts");
let attempts_span = document.getElementById("attepmts-span");
const easy = document.getElementsByName("difficulty")[0];
// console.log(easy);
const hard = document.getElementsByName("difficulty")[1];
// console.log(hard);

const resetBtn = document.getElementsByClassName("reset")[0];

guess.focus();

        /// function:

    function randomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }


        /////  variables:

    let answer = randomNumber();
    let gameOver = false;
    let previousGuesses = [];


    ///////////  events:

        resetBtn.addEventListener("click", () => {
            down.innerText = 1;
            up.innerText = 100;
            report.innerText = "Make a Guess";
            attempts_span.innerText = "10";
            guess.value = "";
            guess.focus();
            previousGuesses = [];
            easy.checked = true;  ///// ***
            answer = randomNumber();
            gameOver = false;

        })


        ///////////// guess event:

        guessBtn.addEventListener("click", () => {
            let guess_value = +guess.value;
            
            if (!guess_value || gameOver || guess_value < 0 || guess_value > 100) {
                guess_value = "";
                guess.focus();
                return;
            } 


            if (previousGuesses.includes(guess_value)) {
                report.innerText = `You already guessed ${guess_value}!`;

            } else {
                if (guess_value > answer) {
                    report.innerText = "Little Lower!";
                    guess_value < up.innerText ? up.innerText = guess_value : null ;

                }   else if (guess_value < answer) {
                    report.innerText = "Little Higher!";
                    guess_value > down.innerText ? down.innerText = guess_value : null; 

                }   else {
                    report.innerText = `You got it! The Number was ${answer}`
                    gameOver = true;
                    return;
                }


                attempts_span.innerText -= 1;
                previousGuesses.push(guess_value);

                if (attempts_span.innerText == 0) {
                    report.innerText = `You run out of attempts! The number was ${answer}!`;
                    gameOver = true;
                }
            }
            
            guess.value = "";
            guess.focus()

        })
        


                /////////////  difficulty change:
                // div e change func add yapiyoruz:  ************

            let difficulty = document.querySelector(".difficulty");  //  div event added
        
            difficulty.addEventListener("change", () => {

                if (hard.checked == true) {
                    
                    attempts_span.innerText = "5";
                    down.innerText = 1;
                    up.innerText = 100;
                    report.innerText = "Make a Guess";
                    guess.value = "";
                    guess.focus();
                    previousGuesses = [];
                    answer = randomNumber();
                    gameOver = false;
                    /// burada reset butonu calistirmadik tüm komutlari tek tek
                    //  yazdik cünkü reset calisinca otomatik easy checked oluyor

                } else {
                 
                    resetBtn.click();
                    attempts_span.innerText = "10"; 
                }
            })

           
            document.addEventListener("keydown", (e) => {
                
                if ((e.key == "Enter") || (e.key == "NumpadEnter")) {
                    guessBtn.click();
                }
            })


            
            
            





/// https://github.com/clarusway/clarusway-full-stack-10-21/blob/main/javascript/Projects/005-Checkout_Page/README.md

// https://github.com/clarusway/clarusway-full-stack-10-21/tree/main/javascript/Projects/005-Checkout_Page

/// https://github.com/yusuf-demirci/Number-Guessing-Game