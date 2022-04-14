let submit = document.querySelector(".front_card");
let appear = document.querySelector(".back_card");
let num_rating = document.querySelector(".final_rating");
let btns = document.querySelectorAll(".button")


document.querySelector(".submit").addEventListener("click", function(){
    submit.classList.toggle("hidden");
    appear.classList.toggle("visible");
});

for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        num = this.innerHTML
        num_rating.innerHTML= "You selected "+ num +" out of 5";
    })
}
