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

//async - await
async function clientAPI() {
    try{
        const res = await getPromiseAPI("http://fake");
        console.log(res);
    }catch(error) {
        console.log(error);
    }finally{
        console.log("Finalizando...")
    }
    
}

clientAPI()
