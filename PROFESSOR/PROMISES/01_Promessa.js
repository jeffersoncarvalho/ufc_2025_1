const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = 3;
        if (x % 2 === 0) resolve("Número é par!");
        else reject("Número é ímpar");
    }
)

function retornaPromessa() {
    //comunicação externa
    return minhaPromessa;
}

retornaPromessa()
.then(
    (msg) => {
        console.log("OK: " + msg);
    }
)
.catch(
    (error) => {
        console.log("ERROR: " + error);
    }
)