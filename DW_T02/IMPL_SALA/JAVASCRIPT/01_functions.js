//forma clássica
function somar_valores(num1, num2) {
    return num1 + num2;
}

//funções anônimas ou funções arrow ou funções seta
const somar_valores_seta = (num1, num2) => {
    return num1 + num2;
}

//funções anônimas ou funções arrow ou funções seta v1
const somar_valores_seta_v1 = (num1, num2) => num1 + num2

console.log(somar_valores_seta(3,4));