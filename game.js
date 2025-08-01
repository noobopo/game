let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#b')
let winner = document.querySelector('.win')
let turnO = true 
const winParten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
checkWinner=()=>{
    for(parten of winParten){
        // console.log(parten[0],parten[1],parten[2]);
        // console.log(boxes[parten[0]].innerHTML,boxes[parten[1]].innerHTML,boxes[parten[2]].innerHTML);
        let pos1Value = boxes[parten[0]].innerHTML
        let pos2Value = boxes[parten[1]].innerHTML
        let pos3Value = boxes[parten[2]].innerHTML
        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                winner.innerHTML = `Yoo! ${pos1Value} is The Winner`
                boxes.forEach((box)=>{
                    box.disabled = true
                    box.style.backgroundColor = "blue";
                })
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turnO) {
            box.innerHTML="O"
            turnO = false
        }else{
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true;

        checkWinner()
    })
})

reset.addEventListener("click", () => {
    window.location.reload();
});
