function calcular()
{
 var valor1=document.getElementById("cantTickets").value;
 var select=document.getElementById("ticketSelection");

 var select_activa=select.options[select.selectedIndex].value;

 var ticket=200;
 var result=0;


 switch(select_activa=parseInt(select_activa))
 {
    case 1:
            result=parseInt(valor1)*parseInt(ticket)*0.8;
            break;
    case 2:
            result=parseInt(valor1)*parseInt(ticket)*0.5;
            break;
    case 3:
            result=parseInt(valor1)*parseInt(ticket)*0.15;
            break;
 }


document.getElementById("result").value=result;

}

function limpiar() 
{
    document.getElementById("cantTickets").value = "";
    document.getElementById("result").value = "";
}