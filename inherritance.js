class Parrent{
    constructor() {
        this.fatherName = "Schwerzneeger";
    }
}
class Child extends Parrent{
    constructor(name)
    {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());