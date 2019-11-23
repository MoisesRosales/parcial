const codigo_field2 = document.getElementById("codigo_postal2");
const nombre = document.getElementById("nombre");
const poblacion = document.getElementById("poblacion_total");
const extension = document.getElementById("extension_territorial");
const capital = document.getElementById("capital");
const submit_btn2 = document.getElementById("submit_btn2");

function actualizar(codigo_postal,nombre,poblacion_total,extension_territorial,capital){
    let thing = JSON.stringify({nombre:nombre,poblacion_total:poblacion_total,extension_territorial:extension_territorial,capital:capital});

    fetch("http://localhost:3000/update/"+codigo_postal, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: thing
    })
    .then(async res =>{
        var response = await res.json();
        console.log("NICE");
        
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    })
    }

submit_btn2.addEventListener("click", ()=>{
    let codigo2 = codigo_field2.value
    let nombre2 = nombre.value
    let poblacion2 = poblacion.value
    let extension2 = extension.value
    let capital2 = capital.poblacion
    actualizar(codigo2,nombre2,poblacion2,extension2,capital2);
});
