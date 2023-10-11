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
    alert(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    alert(`${this.name} is teaching.`);
  }
}

const person = new Person('John Doe', 30);
const student = new Student('Alice Smith', 20);
const teacher = new Teacher('Mr. Johnson', 40);

document.getElementById('personName').textContent = person.name;
document.getElementById('personAge').textContent = person._age;
document.getElementById('studentName').textContent = student.name;
document.getElementById('teacherName').textContent = teacher.name;

function study() {
  student.study();
}

function teach() {
  teacher.teach();
}
