// import defult of Bike
import Bike from './bike'

class colorfulbike extends Bike {
    color: string;
    constructor(speed: number,color: string) { // param is what value you want to set with constructor
        //super(); // calls the parent constructor, no need to change if parent doesn't have a constructor
        super(speed);    //if parent has a constructor, then set param to parent's constructor's param   
        this.color = color;
    }
}