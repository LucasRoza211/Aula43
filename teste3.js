new Promise((resolve, rejeita) =>{
    console.log("Promessa pendente")
    let r = 0
    let e = 5
    resolve(r + e)
})
.then((res)=>{
    console.log("Promessa resolvida: ", res)
}).catch((erro)=> {
    console.log("Promessa rejeitada", erro)
}).finally(()=> {
    console.log ("Executar de qualquer forma")
})