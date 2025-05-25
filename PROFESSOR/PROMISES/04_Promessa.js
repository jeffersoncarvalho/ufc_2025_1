const minhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const n = Math.floor(Math.random()*10) + 1;
                if (n % 2 === 0) resolve({n:n,msg:"NÚMERO É PAR!"});
                else reject({n:n,msg:"NÚMERO É ÍMPAR!"});
            },
            2000
        )
    }
)

function retornaPromessa() {
    //comunicação externa
    return minhaPromessa;
}

async function trataRetornoPromessa() {
    try {
        const data = await retornaPromessa();
        console.log("OK: " + data.n);
        console.log("OK: " + data.msg);
    }catch(error) {
        console.log("ERROR: " + error.n);
        console.log("ERROR: " + error.msg);
    }
}

trataRetornoPromessa();