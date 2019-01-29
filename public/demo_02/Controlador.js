import { Slider } from './Slider.js';

class Controlador{

    constructor(List_Slider,indice){
        this.List_Slider=List_Slider;
        this.indice=indice;
    }
    //constructor() {}
    start() {
    
        /*this.List_Slider.push(new Slider("Familia Adams", "Films de niños", "Img/familiaAdams"));
        this.List_Slider.push(new Slider("Tigre", "Tigre de la selva", "Img/leon"));
        this.List_Slider.push(new Slider("Leon", "Leon de colores", "Img/lion"));
        this.List_Slider.push(new Slider("Mario Bros", "Mario videojuego", "Img/mario"));*/
        this.indice = 0;
    }
    

    updated() {

        if((event.which || event.keyCode)== 37) this.indice--;
        if((event.which || event.keyCode)== 39) this.indice++;
    
        if(this.indice < 0) this.indice = 3;
        else if(this.indice > 3) this.indice = 0;
    
        return this.List_Slider[this.indice];
    }
}


export {
    Controlador
};