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

