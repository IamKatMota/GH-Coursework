/**
 * create three varaibles
 * use 3 diff arithmetic operators to calculate a number
 * display the combo in the html page along with the message 
 */
let message = "You have received this message because you have been chosen to open an important vault."
let code1 = 13 * 2
let code2 = 35 / 5
let code3 = 33 % 3


document.getElementById("msg").innerHTML = message
document.getElementById("code").innerHTML =`Here is the secret code: ${code1} ${code2} ${code3}`

const vaultCode =  document.querySelector('#code')
document.querySelector('#clickMsg').addEventListener('click', unhide) //when you click the message it will toggle the unhide function

function unhide(){
   vaultCode.classList.toggle('hidden') //toggle adds or removes the class, if it already hass the class it will remove it, if it does not have the class it will add it.
}
