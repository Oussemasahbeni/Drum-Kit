const btn=document.querySelectorAll(".drum");

// btn.forEach((element)=>{
//     element.addEventListener('click',  (event)=>{
//         event.target.style.color="white";
//     })
// }); 


// button mouse press
btn.forEach((element)=>{
        element.addEventListener('click',  function() {
        let btnClicked=this.innerHTML.toLowerCase();
        // this is the current button clicked that trigger the add event listener
        playSounds(btnClicked);
        buttonAnimation(btnClicked);
           
        })
    });

// keyboard press
document.addEventListener('keydown',(event)=>{
    let KeyClicked=event.key.toLowerCase();
      playSounds(KeyClicked)
      buttonAnimation(KeyClicked)

});
function handleclick(){
    
}
function playSounds(key){
    switch (key) {
        case "w":
        let tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
        let tom2=new Audio("./sounds/tom-2.mp3");
                    tom2.play();
            break;
        case "s":
        let tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
        let tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
        let snare=new Audio("./sounds/snare.mp3");
                    snare.play();
                    break;
        case "k":
        let crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
        let kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
        break;
      }
}

function buttonAnimation(key){
let activeButton= document.querySelector("."+key);
activeButton.classList.add("pressed")
setTimeout(()=>{
    activeButton.classList.remove("pressed")}
    ,100)
    


}