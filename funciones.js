function convertir()
{
    var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML= valor;
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    dolar=6.97;
    euro=6.84;
    resultado =0;
    // conversiones bolivianos a dolar
    if(de==1 && a==2)
    {
        resultado=valor/dolar;
    }
    //bolivianos a euro
    else if(de==1 && a==3)
    {
        resultado=valor/euro;
    }
    else if(de==2 && a==1)
    {
        resultado=valor*dolar;
    }
    else if(de==2 && a==3)
    {
        resultado=valor*(dolar/euro);
    }
    else if(de==3 && a==1)
    {
        resultado=valor*euro;
    }
    else if(de==3 && a==2)
    {
        resultado=valor*(dolar/euro);
    }
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Resultado: $" + resultado.toFixed(2);
}
function mensaje()
{
    alert( "BIEN VENIDO !!!");
}