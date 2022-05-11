const promessa = new Promise((resolve, rejeita) => {
    let a = 2 + 3
    let b = 2 * 3
    let c = 2 ** 3
    result = {
        "a":a,
        "b":b,
        "c":c
    }
    setTimeout(
        () => resolve(result),
        3000
    )
}) 
promessa
.then(
    (res) => {
        console.log(res.b)
    }
).catch(
    erro =>{
        console.log("ERRO \n", erro)
    }
)