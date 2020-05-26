function cargarDatos(){
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: 'GET',
        dataType: 'JSON',
        beforeSend: function (xhr) {
            
        },
        success: function (respuesta) {
            var resultado = $("#resultado");
            
            $.each(respuesta.data,function (index,elemento) {            
                resultado.append('<div>'+elemento.id+ elemento.email+elemento.first_name+'<img src='+elemento.avatar+'></img><div>');               
            });
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
           //console.log("Error"); 
        },
        complete: function (jqXHR, textStatus) {
           // alert("Operación completada");
        }
   
        
    });
    
}

function consultarPorId(){
    var id = $("#codigo").val();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/"+id,
        type: 'GET',
        dataType: 'JSON',
        beforeSend: function (xhr) {
            $("#espera").css('display','block');
        },
        success: function (resultado) {
            var resultado1 = $("#resultado");
            $.each(resultado.data,function (index,elemento) {             
             if(index==="avatar"){
               resultado1.append('<div><img src='+elemento+'></img></div>');   
             }
             else{
              resultado1.append('<div>'+index+elemento+'</div>');   
             }
            });           
        },
        error: function (jqXHR, textStatus, errorThrown) {
            
        },
        complete: function (jqXHR, textStatus) {
            
        }
        
        
        
        
    })
    
    
    
    
}
