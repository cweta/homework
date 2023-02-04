class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }

    showFullName() {
      return this.name + " " + this.surname;
    }
  }

  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }

    showFullName(midleName) {
      return this.surname + " " + this.name + " " + midleName;
    }

    showCourse() {
      let today = new Date();
      let year = today.getFullYear();
      let course = year - this.year;
      if (course >= 1 && course <= 6) {
        return course;
      } else {
        return "invalid year";
      }
    }
  }

  let person = new Person("sveta", "svetlanko");
  console.log(person.showFullName());
  let student = new Student("sveta", "svetlanko", 2022);
  console.log(student.showFullName("svetlankovna"));
  console.log("Current course: " + student.showCourse()); 