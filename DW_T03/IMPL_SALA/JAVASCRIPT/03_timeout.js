function demorar_3s() {
    console.log("INICIOU A COMPUTAÇÃO")
    setTimeout(
        () => {
            console.log("TERMINOU A COMPUTAÇÃO")
        }
        ,
        3000
    )
}

function executar_depois_da_computacao() {
    console.log("EXECUTANDO DEPOIS DA COMPUTAÇÃO");   
}

demorar_3s();
executar_depois_da_computacao();