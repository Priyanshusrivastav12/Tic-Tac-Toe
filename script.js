let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetBtn = ()=>{
  turnO = true;
  enableBoxes();
  newContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText = "O";
      turnO = false;
    }
    else{
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
};

const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) =>{
   msg.innerText = `Congratulations, Winner is ${winner}`;
   newContainer.classList.remove("hide");
   disableBoxes();
};

const checkWinner = (()=>{
  for(let pattern of winPatterns){
    let post1val = boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;

    if(post1val != "" && post2val != "" && post3val != ""){
      if(post1val === post2val && post2val === post3val){
        showWinner(post1val);
      }
    }
   }
})

newGameBtn.addEventListener("click",resetBtn);
reset.addEventListener("click",resetBtn);
