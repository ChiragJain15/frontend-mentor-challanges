const discountBtn = document.getElementById("monthly-billing");
const buttonBall = document.getElementsByClassName("ball");
const slider = document.getElementById("myRange");
const cover = document.getElementById("cover");
discountBtn.addEventListener('click', ()=>{
    discountBtn.classList.toggle("highlight");
    buttonBall[0].classList.toggle("active");
});

setInterval(update, 00);
function update()
{
    let width = slider.clientWidth;
    let value = (slider.value / 100) * width - (slider.value/100) * 48;
    cover.style.width = `${value}px`;
}

