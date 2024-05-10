const characters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const genBtn = document.getElementById("gen-btn")
const passLength = document.getElementById("pass-length")
const passLengthText = document.getElementById("pass-length-text")
const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
let copiedOne = false
let copiedTwo = false

let passwordLength = 13

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function showPasswords() {
    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()
    passOne.textContent = generatedPasswordOne
    passTwo.textContent = generatedPasswordTwo
  copiedOne = false
  copiedTwo = false
}


function changeVal() {
    let text = passLength.value
    passwordLength = passLength.value
    passLengthText.innerText = `Password Length: ${text}`
}


genBtn.addEventListener("click", showPasswords)

passOne.addEventListener("click", () =>{
  if (copiedOne == false) {    
    navigator.clipboard.writeText(passOne.innerText);
  copiedOne = true
  passOne.innerText = "Copied!"
  }
})

passTwo.addEventListener("click", () =>{
  if (copiedTwo == false) {    
    navigator.clipboard.writeText(passTwo.innerText);
    copiedTwo = true
  passTwo.innerText = "Copied!"
  }
})

passLength.addEventListener("input", changeVal)