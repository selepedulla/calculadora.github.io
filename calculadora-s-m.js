function sumar(){
let n1 = document.getElementById("numero1").value;
let n2 = document.getElementById("numero2").value;

let resultado = Number(n1) + Number(n2);
document.getElementById("resultado").textContent="resultado:" + resultado;
}

function restar(){
    
let n1 = document.getElementById("numero1").value;
let n2 = document.getElementById("numero2").value;


let resultado = Number(n1) - Number(n2);
document.getElementById("resultado").textContent="resultado: " + resultado;
}

function multiplicar(){
    
let n1 = document.getElementById("numero1").value;
let n2 = document.getElementById("numero2").value;


let resultado = Number(n1) * Number(n2);
document.getElementById("resultado").textContent="resultado: " + resultado;
}

function dividir(){
    
let n1 = document.getElementById("numero1").value;
let n2 = document.getElementById("numero2").value;


let resultado = Number(n1) / Number(n2);
document.getElementById("resultado").textContent="resultado: " + resultado;
}