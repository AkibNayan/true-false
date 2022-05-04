class Student{
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Kolimmonnesa";
    }
}
const student1 = new Student(12, "Akib");
const student2 = new Student(13, "Hasnain");
console.log(student1.name, student2.name);