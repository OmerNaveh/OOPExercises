
class Person{
    #id; //private field
    constructor(fName, sName, salary, age, id){
        this.firstName = fName;
        this.surName = sName;
        this.salary = salary;
        this.age = age;
        this.#id = id;
    }
    get getfName(){
        return this.firstName;
    }
    get getsName(){
        return this.surName;
    }
    get getSalary(){
        return this.salary;
    }
    set setSalary(_newSalary){
        this.salary = _newSalary;
    }
    get getAge(){
        return this.age;
    }
    set setAge(_newAge){
        this.age = _newAge;
    }
    get getId(){
        return this.#id;
    }
}
class Player extends Person{
    constructor(fName, sName, salary, age, id, strongLeg, position, celebrationSentnce){
        super(fName, sName, salary, age, id);
        this.strongLeg = strongLeg;
        this.position = position;
        this.celebrationSentnce = celebrationSentnce;
    }
    goalCelebration(){
        console.log(this.celebrationSentnce); //print celebration
        this.salary = Math.round(this.salary *1.025); //increase salary by 2.5%
        console.log(`Congratulations, Your salary rose to ${this.salary}`);
    }
    get getStrongLeg(){
        return this.strongLeg;
    }
    get getPosition(){
        return this.position;
    }
    set setPosition(_newPos){
        this.position = _newPos;
    }
    get getCelebrationSentence(){
        return this.celebrationSentnce;
    }
    set setCelebrationSentence(_newCelebSent){
        this.celebrationSentnce= _newCelebSent;
    } 
}
class GoalKeeper extends Person{
    constructor(fName, sName, salary, age, id, isLeftHanded,lastGoalConceeded = new Date(Date.now())){
        super(fName, sName, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceeded = lastGoalConceeded;
    }
    conceededAGoal(){
        this.lastGoalConceeded = new Date(Date.now()); //update date to current
        this.salary = Math.round(this.salary * 0.975); //decrease salary by 2.5%
    }
    get getIsLeftHanded(){
        return this.isLeftHanded;
    }
    get getLastGoalConceeded(){
        return this.lastGoalConceeded;
    }
    set setLastGoalConceeded(_newDate){
        this.lastGoalConceeded = _newDate;
    }

}
const p = new Person('omer', 'naveh', 12000,22, 1);
const shaked= new Player('shaked', 'erin', 27000, 23, 2, 'right', 'ST', 'Siiii');
const Elay= new GoalKeeper('elay', 'gelbart', 7500, 22, 0, true, undefined);



