class grandad{
    color(){
        console.log("Pale White");
    }
};
class dad extends grandad{
    color(){
        super.color();
        console.log("White");
    }
};
class son extends dad{
    color(){
        super.color();
        console.log("Brown");
    }
}
var calling = new son();
calling.color();