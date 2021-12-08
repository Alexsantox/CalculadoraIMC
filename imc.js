
const calcular = document.getElementById('calcular');


function imc () { //Definindo a ação - "imc" do clique no botão criado.
    const nome = document.getElementById('nome').value; //criando variáveis com o nome da id no html.
    const altura = document.getElementById('altura').value; 
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // ---> !== sinal de diferente
    if (nome !== '' && altura !== '' && peso !== '') {  
        
        const valorIMC = (peso / (altura * altura)).toFixed(1); //toFixed serve pra definir n°casas

        let classificacao =  '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente a cima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;  

    //Mostrando resultado de erro dentro da caixa resultado    
    }else { 
        resultado.textContent = 'Preencha todos os campos!' 
    }   
    
}
calcular.addEventListener('click', imc); //Avisando o botão que alguém irá clicar.
