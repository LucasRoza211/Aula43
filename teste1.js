const promessa = new Promise((resolve, rejeita) => {
    let a = 2 + 5
    setTimeout(
        () => resolve(a),
        3000
    )
}) 
promessa.then(
    soma => {
        console.log("SOMA: ", soma)
    }
)