var c = document.getElementById("selectServicio");
var d = document.getElementById("FechaCurso");

var arrayC1 = ["Filtro de aceite", "Filtro de aire", "Filtro de combustible", "Filtro de aire acondicionado"];


c.addEventListener('change', function(){
    if(c.value == "filtros"){
        clearSelects("c1");
        crearFechas(arrayC1, true);
    }else {
        clearSelects("c1");
    }
}, false);



function crearFechas(array){

    var myDiv = document.getElementById("divFiltros");


    //Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("id", "c1");
    
    myDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", array[i]);
        option.text = array[i];
        selectList.appendChild(option);
    }


}

function clearSelects(id){
    let x = document.getElementById(id);

    if(x){
        x.remove();
    }

    
}