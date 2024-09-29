let userscore =0;
let computerscore = 0;

const choices =document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");




const gencomchoice = () =>{
   const options =["rock", "paper", "scissors"];
   const randoxIdx =Math.floor(Math.random()*3);
   return options[randoxIdx];
}
 const gamedraw = () =>{
    console.log("The Game was Draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor ="black";
 }
const showwinnwer =(userwin,userchoice,comchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win!");
        msg.innerText =`You Win! Your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        console.log("You lose!");
        msg.innerText =`You lose! ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

 };



const playGame = (userchoice) =>{
  console.log("userchoice", userchoice);
  const comchoice =   gencomchoice();
  console.log("computerchoice" , comchoice);
   if(userchoice === comchoice){
    gamedraw();
   }
   else {
    let userwin = true;
    if(userchoice ==="rock"){
        userwin = comchoice ==="paper" ? false : true;
    }
    else if(userchoice ==="paper"){
        userwin = comchoice ==="scissors" ? false : true;

   }
   else{
    userwin = comchoice === "rock" ? false :true;
   }
    showwinnwer(userwin,userchoice,comchoice);
}
};

choices.forEach((choice) =>{
    console.log(choice);
     choice.addEventListener("click", () =>{
      
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
   
     });
});


