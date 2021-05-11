
/** As três formas que encontrei de fazer a calculadora funcionar */


const numero = document.querySelectorAll('input');

const resultado = document.querySelector('.resultado');

const operacao = [];


for (num of numero) {
    num.addEventListener('click', (e) => {

        const valor = e.currentTarget.value;


        switch (valor) {
            case "C":
                operacao.length = 0;
                resultado.value = "";
                break;

            case "+":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "-":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "*":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "/":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "=":
                const conta = operacao.join("");
                try {
                    const result = eval(conta);

                    operacao.length = 0;

                    resultado.value = result;

                    operacao.push(result);
                    
                } catch (e) {
                    resultado.value = "";
                }
                
                break;

            case "0":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "1":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "2":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "3":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "4":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "5":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "6":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "7":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "8":
                operacao.push(valor);

                resultado.value += valor;
                break;

            case "9":
                operacao.push(valor);

                resultado.value += valor;
                break;
        }

        console.log(operacao.join(""));
    })
}


//  ----------------------------------------


//Pegar o numero
//pegar o operador
//Limpar a tela
//pegar o proximo numero

const numero = document.querySelectorAll('input');

const resultado = document.querySelector('.resultado');

const operacao = [];


for (num of numero) {
    num.addEventListener('click', (e) => {

        const valor = e.currentTarget.value;

        if(valor == "C" || valor == "="){
            switch(valor){
                case "C":
                    operacao.length = 0;
                    resultado.value = "";
                break;  

                case "=":
                    const conta = operacao.join("");
                    try {
                        const result = eval(conta);

                        operacao.length = 0;

                        resultado.value = result;

                        operacao.push(result);
                        
                    } catch (e) {
                        resultado.value = "";
                    }   
                break;   
            }
        }else {
            operacao.push(valor);

            resultado.value += valor;
        }
    })
}



// -----------------------------------------

const resultado = document.querySelector(".resultado");

DOM = {
    getData(ref) {
        let value = ref.value;
        resultado.value += value;
    },
    
    clean(){
        resultado.value="";
    },

    calcular(){
        try{
            resultado.value = eval(resultado.value);
        }catch(e) {
            resultado.value = "Error";

            setTimeout(() => {
                clean();
            }, 500)
        }
    }
}