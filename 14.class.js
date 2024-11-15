class student{
    constructor(firstname,secondname,year){
        this.firstname=firstname;
        this.secondname=secondname;
        this.grade=year;
        this.scores = []
        
    }
    // Instance Method to display student's full name and grade
    displayInfo() {
        return `Student: ${this.firstname} ${this.secondname}, Grade: ${this.grade}` ;
    }
    
    //or add directlt like this.score.push(45) but this is good way
    addScore(score){
        this.scores.push(score)
        return this.scores;
    }
    
}





let firststudent= new student('muhammed','savad',4);
let secondstudent= new student('ahammed','mushtaq');


console.log(firststudent)
console.log(firststudent.grade)
firststudent.grade=9;
console.log(firststudent.grade)

console.log(firststudent.displayInfo())

