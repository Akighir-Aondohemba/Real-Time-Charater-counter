const textareaEL =document.getElementById("textarea");
const totalCounterEL = document.getElementById("total-counter");
const RemainingCounterEL = document.getElementById("Remaining-counter");


textareaEL.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter()

function updateCounter(){
    totalCounterEL.innerText = textareaEL.value.length;
    RemainingCounterEL.innerText = textareaEL.getAttribute("maxLength") - textareaEL.value.length;
}