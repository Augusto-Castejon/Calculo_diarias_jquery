$(document).ready(function(){
  
  var dataatual = new Date();

    // datapicker
  $(function() {
    $( "#volta" ).datepicker();
  });
  
  $(function() {
      $( "#ida" ).datepicker({
        minDate: dataatual,
        onSelect: function(data){
          $( "#volta" ).val(null);
          $( "#volta" ).datepicker("destroy");
          var dataida = $( "#ida" ).datepicker("getDate");
          var datalimite = new Date(dataida);
          datalimite.setDate(datalimite.getDate() + 30);
          $( "#volta" ).datepicker({
            minDate: dataida,
            maxDate: datalimite
          });
        },
      });
    });
  
    $("#valor").focusout(function(){
      var novoValor = parseFloat($("#valor").val()).toFixed(2);
      $("#valor").val(novoValor);
    });

    $( function() {
      $( "#calcular" ).button();
    } );

    $("#calcular").click(function() {
      var dataIda = new Date($("#ida").val());
      var dataVolta = new Date($("#volta").val());
      var valorDiaria = parseFloat($("#valor").val());
    
      var diferencaDatas = (dataVolta - dataIda) / (1000 * 60 * 60 * 24); // diferença em dias
    
      if (diferencaDatas > 0) {
        var valorTotal = (diferencaDatas - 1) * valorDiaria + valorDiaria / 2;
      } else {
        var valorTotal = valorDiaria / 2;
      }

      // Modal Dialog
    $("#modal").empty();
    $("#modal").dialog({
      title: "Valor da Diária"
    }).append("A diaria ficou em ").append(valorTotal).append(" R$.").css({
      "padding": "10px",
      "font-family": "'Poppins', Arial, sans-serif",
      "color": "#c47a23",
      "font-size": "medium",
      "margin": "10px"
    });

  });

  $(document).ready(function(){
      $(document).tooltip();
  });
  
})

