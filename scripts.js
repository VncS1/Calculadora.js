
//Pegar o numero
//pegar o operador
//Limpar a tela
//pegar o proximo numero

const numero = document.querySelectorAll('input');

const resultado = document.querySelector('.resultado');

const operacao = [];

for(num of numero) {
    num.addEventListener('click', (e) => {
        
        const valor = e.currentTarget.value;
        
        if(valor == "C"){
            resultado.innerHTML = "";
        }else {
            console.log(valor);
            resultado.innerHTML = valor;
        }
    })
}

