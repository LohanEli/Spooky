
var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

function Loop(time = 3 ){

  var total = fome + higiene + sono + diversao;

 
  if(fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0){
     document.getElementById("pet").src="img/grave.gif";
     document.getElementById('mensagem').innerHTML = 'Você deixou ela morrer ( ela ja tava morta afinal é uma fantasma )';
  }
  else if(total > 400){
     document.getElementById("pet").src="img/spo.gif";
  }
  else if(total > 300){
     document.getElementById("pet").src="img/spo.gif";
  }
  else if(total > 200){
     document.getElementById("pet").src="img/spo.gif";
  }
  else if(total > 100){
     document.getElementById("pet").src="img/spo3.gif";
  }
  else if(total > 50){
     document.getElementById("pet").src="img/spo2.gif";
  }

  fome = fome - parseInt(time);
  higiene = higiene - parseInt(time);
  sono = sono - parseInt(time);
  diversao = diversao - parseInt(time);
  
  document.getElementById('fome').style.width = fome + 'px';
  document.getElementById('higiene').style.width = higiene + 'px';
  document.getElementById('sono').style.width = sono + 'px';
  document.getElementById('diversao').style.width = diversao + 'px';
  
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('diversao').innerHTML = diversao + '%';
  
}

function Start(){
  var temporizador = setInterval(Loop, 1000);
}


function Comer(){
  fome = 100;
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
}


function Banho(){
  higiene = 100;
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene + 'px';
}


function Dormir(){
  sono = 100;
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}


function Brincar(){
  diversao = 100;
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao + 'px';
}



Start();
