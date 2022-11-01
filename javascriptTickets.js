
 let cantidad= document.getElementById("validationCantidad")
 let categoria= document.getElementById("validationCategoria")
 let cuentaTotal= document.getElementById("totalPagar")
 let btnBorrar= document.getElementById("borrar")
 let btnResumen= document.getElementById("resumen")
 
 var general= 200
 var estudiante= general*0.2
 var trainee= general*0.5
 var junior= general*0.85
 var total= 0
 

 function calculaTicket() {

    var ticket= categoria.value;
    var cuantos= cantidad.value;
    cuantos= parseInt(cuantos)

    if (cuantos < 0) {
        alert("El número debe ser superior a 0");
    } else {

        switch (ticket) {
            case "Estudiante":

                total= cuantos*estudiante

                break;
            case "Trainee":

                total= cuantos*trainee
                break;
            case "Junior":

                total= cuantos*junior
                break;
        
            default:

                total= cuantos*general
                
        }

    }

    return (`Total a pagar $${total}`)
    
 }

 function insertaTotal() {

    cuentaTotal.value= calculaTicket();
    
 }

function borraCampos() {

    location.reload();
    
}

 btnResumen.onclick= insertaTotal;
 btnBorrar.onclick= borraCampos;
