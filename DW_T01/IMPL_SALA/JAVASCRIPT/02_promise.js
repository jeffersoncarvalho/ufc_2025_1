

const myPromise = new Promise(
    (resolve, reject) => {
        //houve uma comunicação externa
        const res = 5;
        if(res % 2 === 0) resolve("OK: " + res);
        else reject("NOK: " + res);
    }    
)

function getAPI(url) {
    //computação...
    return myPromise;
}

//then catch
function myClient() {
    getAPI("http://fake.com/dados")
    .then(res => console.log("THEN: " + res))
    .catch(error => console.log("CATCH: " + error))
    .finally(() => console.log("liberando recursos..."))
}

myClient();