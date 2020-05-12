// Code your solutions in this file
function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    const massages = [`Thank you, ${names[i]}, for the wonderful ${event} gift!`];
    if (i > 0){
      massages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  }
  return massages;
}
