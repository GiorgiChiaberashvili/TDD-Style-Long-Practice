class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
      throw TypeError("Expected an object");
    }
    if (!(obj.name && obj.age)) {
      throw TypeError("Name and age properties are required");
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(people) {
    people.forEach(person => person.sayHello());
  }
}

module.exports = Person;
