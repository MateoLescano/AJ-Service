$(function() {  
    $("#btnEnviar").click(function(){
            var check = true;
            $("input:checkbox").each(function(){
                var name = $(this).attr("name");
                if($("input:checkbox[name="+name+"]:checked").length == 0){
                    check = false;
                }
            });
    
            if(!check){
                alert('Por favor, elija al menos un día de la semana para el turno');
            }
        });
    });