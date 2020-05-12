// Code your solutions in this file
let massages = [];

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    massages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return massages;
}
