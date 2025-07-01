function changeBackgroundColor(backgroundcolor){
    document.body.style.backgroundColor = backgroundcolor;
}
function textColor (color){
 document.body.style.color = color; 
}

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', function(){
console.log(document.body.style.backgroundColor);
const currentColor = document.body.style.backgroundColor;

if(!currentColor || currentColor == 'white'){
    changeBackgroundColor('black');
    textColor('white');
    themeButton.innerText = 'Light mode'
}
else {
    changeBackgroundColor('white');
    textColor('black');
    themeButton.innerText = 'Dark mode'
}

})