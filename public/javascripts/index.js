const codigo_field = document.getElementById("codigo");
const submit_btn = document.getElementById("submit_btn");

function borrar(codigos){
    fetch("http://localhost:3000/delete/"+codigos , {
        method: "DELETE",
        header: {
            "Content-Type": "application/json"
        }
    })
    .then(async res =>{
        var response = await res.json();
        console.log(response);
    })
    .catch(err =>{
        console.log(err);
    })
}

submit_btn.addEventListener("click", ()=>{
    let codigos = codigo_field.value
    borrar(codigos);
});
