class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      console.log('Age cannot be negative.');
    }
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Create a student and a teacher
const student = new Student('Alice', 20);
const teacher = new Teacher('Mr. Smith', 35);

console.log(student.name); // Accessing the name getter
student.study(); // Calling the study method

console.log(teacher.name); // Accessing the name getter
teacher.teach(); // Calling the teach method

// Example of setting age using the setter
student.age = 21; // This will set the age to 21
teacher.age = -5; // This will log "Age cannot be negative."

