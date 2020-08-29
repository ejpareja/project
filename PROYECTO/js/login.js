let arraYClienJson = [];
function login(){
    console.log("llego!")
    name = document.getElementById('user').value;
    pass =  document.getElementById('pass').value;
    console.log(name);
    console.log(pass);

    readJson();
    if(arraYClienJson === null){
        arraYClienJson = [];
    } else{
        for (let index = 0; index < arraYClienJson.length; index++) {
            if (arraYClienJson[index].usuario === name && arraYClienJson[index].contrasena === pass ) {
                return location.href='../index.html';
            } else if (arraYClienJson[index].usuario != name) {
                alert("Usuario incorrecto");
                break;
            } else {
                alert("Contraseña incorrecto");
                break;
            }
            
        }
        
    }
}


function readJson(){
    arraYClienJson = JSON.parse(localStorage.getItem('clientes')); 
}