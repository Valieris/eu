function clicar(){
    //Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');
//Processamento
var soma = numero1 + numero2

// Saída
resultado.innerText = soma

}


//MULTIPLICAR
function vezes(){
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');
    
    var mut = numero1 * numero2

    resultado.innerText = mut
}


//DIVIDIR
function divi(){
    
        var numero1 = parseFloat(document.getElementById('numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value);
        var resultado = document.getElementById('resultado');
        
        var div = numero1 / numero2
    
        resultado.innerText = div
        if (numero2 === 0 || numero2 === null) {
            resultado.innerText = "Erro: divisão por zero";
        }
    else {
        resultado.innerText =  numero1 / numero2}
}

//SUBTRAIR
function menos(){
    
            var numero1 = parseFloat(document.getElementById('numero1').value);
            var numero2 = parseFloat(document.getElementById('numero2').value);
            var resultado = document.getElementById('resultado');
            
            
        var men = numero1 - numero2
        
            resultado.innerText = men}









