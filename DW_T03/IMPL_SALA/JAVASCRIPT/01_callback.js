/*function calcular_soma(num1, num2) {
    const res = num1 + num2;
    //console.log(res);
    //alert(res)
    //document.getElementById("res").innerHTML = res;
    //chamar um API e enviar o resultado sendResAPI(res)
    return res;
}*/

function calcular_soma_callback(num1, num2, callback) {
  const res = num1 + num2;
  callback(res);
  return res;
}

//função callback
function mostrar_resultado_console(res) {
  console.log(res);
}
//função callback
function mostrar_resultado_alert(res) {
  console.log("ALERT: " + res);
}

//calcular_soma_callback(4,5,mostrar_resultado_alert);
/*calcular_soma_callback(4,8,
    (res) => {
        console.log("CALLBACK INTERNO: " + res);
    }
);*/

const func = (res) => console.log("CALLBACK INTERNO: " + res);

calcular_soma_callback(100, 200, func);

//mostrar_resultado(calcular_soma(5,6));
/*const calcular = (num1, num2) => {
    return num1 + num2;
}

const calcular_sem_return = (num1, num2) => num1 + num2
*/
//console.log(calcular_sem_return(20,10));
//console.log(calcular(7,3));
//console.log(calcular_soma(10,5));
