import {
    Controlador
} from './Controlador.js';
import { Slider } from './Slider.js';

var Slider_Menu = {
    el: {
        slider_img: document.getElementsByClassName('slider_img')[0],
        figure: document.querySelectorAll('.slider_img figure'),
        prev_img: document.getElementsByClassName('prev')[0],
        next_img: document.getElementsByClassName('next')[0]

    },
    constructor: new Controlador([], 0),
    inicializar: function () {
        Slider_Menu.constructor.start();
    },
    init: function () {

        Slider_Menu.add_Slider("Familia Adams", "Films de niños", "Img/familiaAdams.jpg");
        Slider_Menu.add_Slider("Tigre", "Tigre de la selva", "Img/leon.jpg");
        Slider_Menu.add_Slider("Leon", "Leon de colores", "Img/lion.jpg");
        Slider_Menu.add_Slider("Mario Bros", "Mario videojuego", "Img/mario.jpg");
        Slider_Menu.add_Slider("Dead Pool", "Dead pool pelicula", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaaV5rsmGXlTz90BNckiNdc34bEW6E5WzifeokIbzuAAPOOHA");

        Slider_Menu.inicializar();
        Slider_Menu.start_img();

    },
    add_Slider:function(title,description,img){
        Slider_Menu.constructor.List_Slider.push(new Slider(title, description, img));
    },
    start_img: function () {
        Slider_Menu.constructor.List_Slider.forEach(element => {
            let figure = '';
            figure += '<figure>';
            figure += '<h3 id="title">' + element.titulo + '</h3>';
            figure += '<img src="' + element.fotografia + '">';
            figure += '<p id="p">' + element.descripcion + '</p>';
            figure += '</figure>';
            Slider_Menu.el.slider_img.innerHTML += figure;
            /*
            console.log(element);
        */
        });
        Slider_Menu.el.figure = document.querySelectorAll('.slider_img figure');
        console.log(Slider_Menu.cantidad());
    },
    cantidad: function () {
        return Slider_Menu.constructor.List_Slider.length;
    },
    slider_indice: function (e) {
        return Slider_Menu.constructor.List_Slider[e];
    },
    figure_active: function (e) {
        Slider_Menu.el.figure[e].classList.add('active');
    },
    figure_desactive:function(){
        Slider_Menu.el.figure.forEach(element => {
            element.classList.remove('active');
        });
    },
    figure_condicional:function(i){
        const e= (Slider_Menu.cantidad()-1);
        if(i < 0) i =e ;
        else if(i > e) i = 0;
        return i;
    }

}
Slider_Menu.init();
Slider_Menu.figure_active(1);


Slider_Menu.el.next_img.addEventListener('click', function () {
    let i=0;
    Slider_Menu.el.figure = document.querySelectorAll('.slider_img figure');
    for (let index = 0; index < Slider_Menu.el.figure.length; index++) {
        if(Slider_Menu.el.figure[index].classList.contains('active')){
            i=index;
        }
    }
    Slider_Menu.figure_desactive();
    i++;
    i=Slider_Menu.figure_condicional(i);

    Slider_Menu.figure_active(i);
});

Slider_Menu.el.prev_img.addEventListener('click', function () {
    let i=0;
    Slider_Menu.el.figure = document.querySelectorAll('.slider_img figure');
    for (let index = 0; index < Slider_Menu.el.figure.length; index++) {
        if(Slider_Menu.el.figure[index].classList.contains('active')){
            i=index;
        }
    }
    Slider_Menu.figure_desactive();
    i--;
    i=Slider_Menu.figure_condicional(i);
    Slider_Menu.figure_active(i);

});
/*
console.log(Slider_Menu.slider_indice(0));
console.log(Slider_Menu.slider_indice(1));
console.log(Slider_Menu.slider_indice(2));
console.log(Slider_Menu.slider_indice(3));

*/