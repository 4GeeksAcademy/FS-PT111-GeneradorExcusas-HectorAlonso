window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generarAleatoria(){
    let quien = who[Math.floor(Math.random()*who.length)];
    let donde = action[Math.floor(Math.random()*action.length)];
    let que = what[Math.floor(Math.random()*what.length)];
    let cuando = when[Math.floor(Math.random()*when.length)];

    return `${quien} ${donde} ${que} ${cuando}`;//
  }
  generarAleatoria();

  document.getElementById("excuse").innerText = generarAleatoria();//
};
