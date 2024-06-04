let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user_score");
const compscore=document.querySelector("#comp_score");

const gencompchoice=()=>{
    //rock paper choice
    const options=["rock","parer","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw=()=>{
   console.log("Game draw");
   msg.innerText=" Draw 🙂 Game ! Play again.";
   msg.style.backgroundColor="rgb(18, 18, 127)";
   msg.style.color="white";
}

const showwinner=(userWin, user_choice, comp_choice)=>{
    if(userWin){
       user_score++;
       userscore.innerText=user_score;
        console.log("you win!");
        msg.innerText=`You win 🙂 ! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="yellow";
        msg.style.color="black";
    }
    else{
        comp_score++;
        compscore.innerText=comp_score;
        console.log("you loss");
        msg.innerText=`You loss😔. ${comp_choice} beats Your ${user_choice}`;
        msg.style.backgroundColor="red";
   
    }
}

const playgame=(user_choice)=>{
 console.log("user_choice=",user_choice);
 //generate comp choice-moduler
 const comp_choice=gencompchoice();
 console.log("comp_choice=",comp_choice);

 if(user_choice === comp_choice){
    //draw game
    draw();
 }else{
    let userWin = true;
    if(user_choice === "rock"){
        userWin = comp_choice === "Paper" ? false :true;
    } else if(user_choice === "paper"){
        userWin = comp_choice === "Scissors" ? false :true;
    } else{
        userWin=comp_choice==="rock" ? false :true;
    }
    showwinner(userWin, user_choice, comp_choice);
 }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
     const user_choice = choice.getAttribute("id");
     console.log("choice was clicked",user_choice);
     playgame(user_choice);
    });
});

