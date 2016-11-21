localStorage.clear();
var number1="";
var number2="";
var ans="";
var opcion="c";
var resultado="";
var opera="";
var uno="";
var dos="";
var key=0;
var i=0;
var historial=[];


var numero1=document.getElementById("numero1");
var numero2=document.getElementById("numero2");
var numero3=document.getElementById("numero3");
var numero4=document.getElementById("numero4");
var numero5=document.getElementById("numero5");
var numero6=document.getElementById("numero6");
var numero7=document.getElementById("numero7");
var numero8=document.getElementById("numero8");
var numero9=document.getElementById("numero9");
var numero0=document.getElementById("numero0");
var coma=document.getElementById("coma");
var clear=document.getElementById("clear");
var operador1=document.getElementById("operador/");
var operador2=document.getElementById("operador*");
var operador3=document.getElementById("operador+");
var operador4=document.getElementById("operador-");
var igual=document.getElementById("igual");
var anterior=document.getElementById("anterior");

numero1.onclick = function(){
number1+=numero1.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero2.onclick = function(){
number1+=numero2.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero3.onclick = function(){
number1+=numero3.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero4.onclick = function(){
number1+=numero4.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero5.onclick = function(){
number1+=numero5.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero6.onclick = function(){
number1+=numero6.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero7.onclick = function(){
number1+=numero7.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero8.onclick = function(){
number1+=numero8.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero9.onclick = function(){
number1+=numero9.innerText;
document.getElementById("mostrar").innerText=number1;
}

numero0.onclick = function(){
number1+=numero0.innerText;
document.getElementById("mostrar").innerText=number1;
}

coma.onclick = function(){
number1+=coma.innerText;
document.getElementById("mostrar").innerText=number1;
}

clear.onclick = function(){
number1="";
opcion="c";
document.getElementById("mostrar").innerText=number1;
}

//boton division
operador1.onclick = function(){
if(opcion!="c"){
ans=resultado;
	}
	else{
	ans=number1;
	}
number1="";
opera="/";
document.getElementById("mostrar").innerText=opera;
}

//boton multiplicacion
operador2.onclick = function(){
if(opcion!="c"){
ans=resultado;
	}
	else{
	ans=number1;
	}
number1="";
opera="*";
document.getElementById("mostrar").innerText=opera;
}

//boton suma
operador3.onclick = function(){
	if(opcion!="c"){
ans=resultado;
	}
	else{
	ans=number1;
	}
number1="";
opera="+";
document.getElementById("mostrar").innerText=opera;
}

// boton resta
operador4.onclick = function(){
if(opcion!="c"){
ans=resultado;
	}
	else{
	ans=number1;
	}
number1="";
opera="-";
document.getElementById("mostrar").innerText=opera;
}

// igual
igual.onclick = function(){
uno=Number(ans);
dos=Number(number1);
if(opera=="/"){
	resultado=uno/dos;
}
if(opera=="*"){
	resultado=uno*dos;
}
if(opera=="+"){
	resultado=uno+dos;
}
if(opera=="-"){
	resultado=uno-dos;
}

opcion="r";
number1="";

//MOSTRAR EL HISTORIAL CON LOCALSOTRAGE
/*
localStorage.setItem(key, JSON.stringify({uno, dos, opera, resultado }));
key++;
for (var i = 0; i < localStorage.length; i++) {
 var historial = historial + localStorage.getItem(localStorage.key(i));

    document.getElementById("historial").innerHTML=historial;

}
*/

//Otra forma de mostrar:
document.getElementById("historial").innerText+=uno;
document.getElementById("historial").innerText+=opera;
document.getElementById("historial").innerText+=dos;
document.getElementById("historial").innerText+="=";
document.getElementById("historial").innerText+=resultado;
document.getElementById("historial").innerHTML+="<br>";

document.getElementById("mostrar").innerText=resultado;
}

anterior.onclick = function(){
number1=resultado;
document.getElementById("mostrar").innerText=number1;
}

