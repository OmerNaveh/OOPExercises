
class ClassicGuitar{
    #id; //private field
    constructor(manYear, brand, price, numOfStrings=6, id){
        this.manYear= manYear;
        this.brand = brand
        this.price = price
        this.numOfStrings = numOfStrings;
        this.used = false;
        this.#id = id;
    }
    play(){
        this.used= true; // make used
        this.price = this.price * 0.9; //drop price by 10%
        console.log( 'πΆπΆπΆ');
    }
    get getPrice(){
        return this.price;
    }
    set setPrice(_newPrice){
        this.price = _newPrice;
        console.log(`Price was change to ${this.price}`);
    }
    get getManYear(){
        return this.manYear;
    }
    get getBrand(){
        return this.brand;
    }
    get getId(){
        return this.#id;
    }
    static detectSound(sound){
        if(sound === 'π'){ return 'Bass Guitar' }
        if(sound === 'πΈ'){ return 'Electric Guitar' }
    }
}

class ElectricGuitar extends ClassicGuitar{
    constructor(manYear, brand, price, numOfStrings=6, id, longneck){
        super(manYear, brand, price, numOfStrings=6, id);
        this.longneck = longneck;
    }
    play(){
        this.used= true; // make used
        this.price = this.price * 0.9; //drop price by 10%
        console.log('πΈπΈπΈ');
    }
}

class BassGuitar extends ClassicGuitar{
    constructor(manYear, brand, price, numOfStrings=4, id){
        super(manYear, brand, price, id);
        this.numOfStrings = numOfStrings;
    }
    playSolo(){ //generate random characters
        let result = '';
        const characters =["π₯", "π€", "π΅", "π’", "π’", "πΊ"];
        for (let char of characters){
            let ranNum = Math.floor(Math.random()*5);
            let i=0;
            while(i<=ranNum){
                result += char
                i++;
            }
        }
        return result;
    }
    play(){
        this.used= true; // make used
        this.price = this.price * 0.9; //drop price by 10%
        console.log('πππ');
    }
}
const ggg = new ClassicGuitar(1999, 'as', 120, 5, 4);
const bass =  new BassGuitar(2010,"volvo", 250 ,undefined, 17);
const electric =  new ElectricGuitar(2010,"volvo", 250 ,undefined, 17,true);
