import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Whom would you prefer to talk to?",
            name: "select",
            choices: ["Own Self", "student"],
        });
        if (ans.select == "Own Self") {
            console.log("Hello, I am talking to myself.");
            console.log("I am feeling well.");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Whom does he/she want to talk to among the students?",
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, and i am feeling good how do you do.`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, and i am feeling good how do you do.`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programmStart(persons);
