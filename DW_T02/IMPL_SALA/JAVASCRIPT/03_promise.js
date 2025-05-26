const myPromise = new Promise(
    (resolve, reject) => {
        //comunicação externa
       setTimeout(
        () => {
            const num = 5;
            if (num % 2 === 0) resolve({num:num, msg:"OK: é par"});
            else reject({num:num, msg:"NOK: é ímpar"});
        } //anônimo
        ,
        3000
       )//setTimeout
    }//resolve reject
)//Promise

function getApi(url) {
    //fazer alguma computação...
    return myPromise;
}

//then-catch
function clientApi() {
    getApi("http://fake.com")
    .then(
        (res) => {
            console.log("THEN: " + res)
        }
    )
    .catch(
        (error) => {
            console.log("ERR: " + error);
        }
    )
    .finally(
        () => {
            console.log("Finalizando recursos...")
        }
    )
}

//async await
async function clientApiAsync() {
    try{
        const res = await getApi("http://fake.com/dados")
        console.log(res);
    }catch(error) {
        console.log(error.num)
    }finally{
        console.log("Limpando...")
    }
}

clientApiAsync();