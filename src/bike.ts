class Bike{
    //setting defult value for property
    speed: number = 0;
    constructor(speed: number){
        this.speed = speed;
    }
    go(): void {
        this.speed++;
    }
}

//creating new bike with no arguments sets properties with defult values set
//let bike: Bike = new Bike();

// exporting by default (whole file)
export default Bike;