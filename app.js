let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
let userscorepara=document.querySelector("#user-score")
let compScorepara=document.querySelector("#comp-score")

const genCompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdX=Math.floor(Math.random()*3);
    return options[randIdX]
};
const drawGame=()=>{
    console.log("the game is draw")
    msg.innerText="THIS GAME IS DRAW"
    msg.style.backgroundColor="yellow"
    msg.style.color="black"
}

const showwinner=(userwin,userChoice,Compchoice) =>{
    if(userwin)
    {userScore++
        userscorepara.innerText=userScore;
    
    msg.innerText =`congrztulztion!you win. ${userChoice} beats your ${Compchoice}`
    msg.style.backgroundColor="green"
}
else{compScore++
    compScorepara.innerText=compScore
    
    msg.innerText=`you lost. your ${Compchoice} beats ${userChoice}`
    msg.style.backgroundColor="red"
}
}


const playgame=(userchoice) =>{
    console.log("userchoice=  ",userchoice)
    const Compchoice=genCompchoice();
    console.log("computer choice = ",Compchoice)

if (userchoice===Compchoice){
drawGame()
}

else {
    let userwin=true;
    if (userchoice==="rock")
        //scissor,paper
        
       { userwin===Compchoice==="paper" ? false:true
    }
    else if(userchoice=="paper")
        {userwin=Compchoice==="scissor"?false:true

        }
   else(userchoice=="scissor") 
   {userwin=Compchoice==="rock"?false:true;
}
showwinner(userwin,userchoice,Compchoice)
}}


choices.forEach((choice) =>
    {console.log(choice);
choice.addEventListener("click",()=>
  {const userchoice =choice.getAttribute("id")
        playgame(userchoice)
    });
});
