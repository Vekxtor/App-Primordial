$(document).on("click","#calcular",function()
{
  var valor1=$("#valor1").val();
  var valor2=$("#valor2").val();
  var valor3=$("#valor3").val();

  var result=(valor2*valor3)/valor1;

  $("#result").val(result);
});

$(document).on("click","#limpar",function(){
  $("#valor1").val("");
  $("#valor2").val("");
  $("#valor3").val("");
  $("#result").val("");
});