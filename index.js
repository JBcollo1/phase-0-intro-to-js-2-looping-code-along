// Code your solutions in this file
const myArray = []
function writeCards(newArray, eventName){
    for(let i = 0;i < newArray.length; i++){
      let message =`Thank you, ${newArray[i]}, for the wonderful ${eventName} gift!`
    
      myArray.push(message);
    } 
   return myArray 
}
function countDown(number){
    while(number >= 0 && number <= 10){
        console.log(number--)
    }
}






