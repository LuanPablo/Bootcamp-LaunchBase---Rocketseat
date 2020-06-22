const modalOrvelay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
   
    card.addEventListener("click",function(){
        const videoId = card.getAttribute("id")
        modalOrvelay.classList.add("active")
        modalOrvelay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;
    })
}
document.querySelector(".close-modal").addEventListener("click",function(){
        modalOrvelay.classList.remove("active")
        modalOrvelay.querySelector("iframe").src = ``
})

