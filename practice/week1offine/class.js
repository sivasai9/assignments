class animal{
    constructor(name,legcout,speaks){
        this.name=name;
        this.legcout=legcout;
        this.speaks=speaks; 
    }
    speaks() {
        console.log("hi there"+this.speaks);
    }
    static mytpe(){
        console.log("this is animal");
    }
}
let dog=new animal("dog",4,"bow bow");
console.log(dog);
console.log(dog.speaks);
console.log(animal.mytpe());