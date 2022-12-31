const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];


const mode =()=>{
    var element = document.body
    var bulbEl=document.getElementById('bulb-el')
    var firstLineEl=document.getElementById("firstLine-el")
    element.classList.toggle("lightMode")
    bulbEl.classList.toggle("lmBulb")
    firstLineEl.classList.toggle("lmfirstLine")
}


const passWord =(passwordOne, passwordTwo)=>{
    var passOne=document.getElementById("passOne")
    var passTwo=document.getElementById("passTwo")
    passOne.innerText = passwordOne
    passTwo.innerText = passwordTwo
    
}

const randPas =()=>{
    let passOne = ""
    let passTwo = ""
    for(let i=0; i<10; i++){
        passOne+= characters[Math.floor(Math.random()*characters.length)]
        passTwo+= characters[Math.floor(Math.random()*characters.length)]
    }
    passWord(passOne, passTwo)
}

const startRand=()=>{
    randPas()    
}
