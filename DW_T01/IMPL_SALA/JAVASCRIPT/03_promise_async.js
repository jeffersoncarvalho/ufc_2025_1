

const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                    //houve uma comunicação externa
                    const res = 5;
                    if(res % 2 === 0) resolve("OK: " + res);
                    else reject("NOK: " + res);
            }//anônima
            ,
            3000
        )//setTimeout
    }  //resolve, reject  
)//Promise

function getAPI(url) {
    //computação...
    return myPromise;
}

//async await
async function myClient() {
    try{
        const res = await getAPI("http://fake.com");
        console.log(res);
    }catch(error){
        console.log(error)
    }finally{
        console.log("liberando recursos...")
    }
    
}

myClient();

