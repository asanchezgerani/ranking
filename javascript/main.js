//console.log("Hola");

//DOM
//querySelector / querySelectorAll
//let container = document.querySelector(".container");

//console.log(container);

//let tabla = document.querySelectorAll("a");

//console.log(tabla);

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td)
{
    td.addEventListener('click',function(){
        console.log("Click");
    })
});
});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fas fa-star");
});


*/

let links = document.querySelectorAll(".close");

links.forEach(function(link)
{
    link.addEventListener("click",function(ev)
    {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animated");
        
        //Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__bounce");

        setTimeout(function()
        {
            location.href = "/";
        },600);
        
        return false;
    });
});



