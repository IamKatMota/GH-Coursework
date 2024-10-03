/**
 * create three varaibles
 * use 3 diff arithmetic operators to calculate a number
 * display the combo in the html page along with the message 
 */

let code1 = 13 * 2
let code2 = 35 / 5
let code3 = 33 % 3



document.getElementById("code").innerHTML =`Here is the secret code: ${code1} ${code2} ${code3}`

const vaultCode =  document.querySelector('#code')
document.querySelector('#clickMsg').addEventListener('click', unhide)

function unhide(){
   vaultCode.classList.toggle('hidden')
}
