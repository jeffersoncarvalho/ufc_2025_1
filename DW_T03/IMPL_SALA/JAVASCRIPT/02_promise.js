function getPromiseAPI(url) {
  //comunicação externa com uma base de dados remota...
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = 5;
      if (num % 2 === 0) resolve("OK, NÚMERO PAR!");
      else reject("NOK, NÚMERO ÍMPAR");
    }, 3000);
  });
  return myPromise;
}

//then-catch
function clientAPI() {
  getPromiseAPI("http://fake.com/dados")
    .then((res) => {
      console.log("THEN: " + res);
    })
    .catch((error) => {
      console.log("CATCH: " + error);
    })
    .finally(() => {
      console.log("liberando memória...");
    });
}

function emulando_outra_computacao() {
    console.log("EMULANDO OUTRA COMPUTAÇÃO...")
}

clientAPI();
emulando_outra_computacao();
