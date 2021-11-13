function TotalActivoCirculante(){
    var Efectivo = $("#bl-1").val();
    var Clientes = $("#bl-2").val();
    var Deudores = $("#bl-3").val();
    var Funcionarios = $("#bl-4").val();
    var InventarioMateriales = $("#bl-5").val();
    var InventarioProducto = $("#bl-6").val();
    var Total = parseInt(Efectivo) + parseInt(Clientes) + parseInt(Deudores) + parseInt(Funcionarios)+ parseInt(InventarioMateriales) + parseInt(InventarioProducto);
    $("#TotalActivoCirculante").text(Total);

}

function TotalPasivoLargoPlazo1(){
    var Proveedores = $("#bl-7").val();
    var Documentos = $("#bl-8").val();
    var ISR = $("#bl-9").val();
    
    var Total = parseInt(Proveedores) + parseInt(Documentos) + parseInt(ISR);
    $("#TotalPasivoLargoPlazo1").text(Total);
    $("#bl-11").val(Total);

}

function TotalPasivoLargoPlazo2(){
    var Prestamos = $("#bl-10").val();
    var TotalActivoCirculante = $("#bl-11").val();
    var Total = parseInt(Prestamos) + parseInt(TotalActivoCirculante);
    $("#TotalPasivoLargoPlazo2").text(Prestamos);
    $("#TotalPasivo").text(Total);
}

function TotalActivoNo(){
    var Terrenos = $("#bl-12").val();
    var PyE = $("#bl-13").val();
    var DescripcionA = $("#bl-14").val();
    var Total = parseInt(Terrenos) + parseInt(PyE) + parseInt(DescripcionA);
    $("#TotalActivoNo").text(Total);  
}

function Resultados(){
    $("#gif").show();
    setTimeout(function(){ 
        $("#divPresupuestoMaestro").show();
        $("#gif").hide(); 
    }, 000);
}


   
  


