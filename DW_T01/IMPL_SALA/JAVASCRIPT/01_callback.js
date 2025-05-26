//FUNÇÕES EM JAVASCRIPT

//forma clássica
function somar(num1, num2) {
  return num1 + num2;
}

//função anônima ou função arrow (seta)
const somar_arrow = (num1, num2) => {
  return num1 + num2;
};

//função arrow sem corpo (só vale para apenas uma única INSTRUÇÃO)
const somar_arrow_sem_corpo = (num1, num2) => num1 + num2;

//console.log(somar_arrow_sem_corpo(6,6));

//CALLBACK é uma função!
function somar_com_callback(num1, num2, callback) {
    const res = num1 + num2;
    callback(res);
    return res;
}
function somar_com_callback(num1, num2, callback1, callback2) {
    let res = num1 + num2;
    callback1(res);
    res = callback2(res)
    callback1(res)
    return res;
}
function mostrar_resultado_console(res) {
    console.log("CONSOLE: " + res)
}

function mostrar_resultado_alert(res) {
    console.log("ALERT: " + res)
}

//somar_com_callback(1000,200,mostrar_resultado_alert);
somar_com_callback(
    1000,
    200,
    mostrar_resultado_console,
    (res) => res * -2
);
/*somar_com_callback(1000,200,
    (res) => {
        console.log("ANÔNIMA: " + res)
    }
)*/

/*const res = somar_com_callback(100,200);
mostrar_resultado_console(res);*/
