class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
};
var obj = new Train("Red",false);
// obj.lightsStatus();
// obj.toggleLights();
// obj.lightsStatus();
// obj.getSelf();
// obj.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn =!this.highSpeedOn;
        console.log("High Speed Status is:",this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational");
    }
}

var obj2 = new HighSpeedTrain(200,false,"blue",false);
obj2.toggleHighSpeed();
obj2.toggleLights();
obj2.getSelf();