
const btn = document.getElementById("Enviar")
const resp = document.getElementById("respuesta")

btn.addEventListener("click",()=>{
    
    const Ingresar = document.getElementById("Ingresar").value
    const cont =  document.getElementById("respuesta")
    cont.innerHTML = ""
    for(var i = 1; i <= Ingresar; i++){
        const res = document.createElement("p")
        if(i%3===0 && i%5===0){
            res.textContent = "fizzblitz"
            cont.appendChild(res)

        }else if(i%5===0){
            res.textContent = "blitz"
            cont.appendChild(res)
            
        }else if(i%3===0){
            res.textContent = "fizz"
            cont.appendChild(res)
        }else{
            res.textContent = i
            cont.appendChild(res)
        }
    }
})

