let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const DrawGame=()=>{
    console.log("Game Draw");
    msg.innerText="Game Draw /Play Again";
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("User Win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Comp Win");
         msg.innerText=`You Lose. ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
}

const PlayGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=gencompChoice();
    console.log("Comp choice",compChoice);

    if(userChoice===compChoice){
        //draw Game
        DrawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper,scissors
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        PlayGame(userChoice)
    })
});