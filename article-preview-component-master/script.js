const shareBtn = document.getElementById("share");
const popup = document.getElementById("share_container");
console.log(shareBtn);
shareBtn.addEventListener("click", ()=>{
    popup.classList.toggle('show');
});
