const minhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const n = Math.floor(Math.random()*10) + 1;
                if (n % 2 === 0) resolve("NÚMERO É PAR!");
                else reject("NÚMERO É ÍMPAR!");
            },
            2000
        )
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