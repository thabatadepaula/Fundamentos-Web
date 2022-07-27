/** Case Sensitive = reconhece letras maisculas e minusculas 
 * por Tag: getElementByTagName() 
 * por Id: getElementById() 
 * por Name: getElementByName() 
 * por Classe: getElementByClassName() 
 * por Seletor: querySelector() */



let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let assuntoOk = false
let nomeOk = false
let emailOk = false
let paragrafo = document.querySelector('#espaco')
let mapa = document.querySelector('#mapa')

nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";

/* Validação de campo deve ser feita por uma função através de evento */


function validaNome(){
   let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
     if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1)  {
         txtEmail.innerHTML = 'E-mail inválido'
         txtEmail.style.color = 'red'
     } else {
         txtEmail.innerHTML = 'E-mail válido'
         txtEmail.style.color = 'green'
         emailOk = true
     }
 }
 function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=250){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 250 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
 }
function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Feedback enviado com sucesso!')
    }else {
        alert ("Todos os campos devem ser preenchidos")
    }
}
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '150px'
}


// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}