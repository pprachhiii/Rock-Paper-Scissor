let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePa=document.querySelector("#user-score");
const compScorePa=document.querySelector("#computer-score");


const getcompChoice=(userChoice) => {
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=() => {
    console.log("DRAW!");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="blue";


}

const playGame=(userChoice)=>{
    const compChoice=getcompChoice();
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorePa.innerText=userScore;
       msg.innerText=`You Win.${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePa.innerText=compScore; 
        msg.innerText=`You Loose.${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

 
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});