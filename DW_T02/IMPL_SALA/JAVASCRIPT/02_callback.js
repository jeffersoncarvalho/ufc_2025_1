function somar(num1, num2, callback) {
    const soma = num1 + num2;
    callback(soma);
    return soma;
}
function mostrar_resultado_console(res) {
    console.log("CONSOLE:" + res)
}
function mostrar_resultado_alert(res) {
    console.log("ALERT:" + res)
}
somar(8,9,mostrar_resultado_alert);
somar(8,9,mostrar_resultado_console);
somar(8,9,
    (res) => {
        console.log("ANÔNIMO: " + res)
    }
)