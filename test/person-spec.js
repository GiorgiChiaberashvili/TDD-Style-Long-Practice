const chai = require("chai");
const { expect } = chai;
const spies = require("chai-spies");
chai.use(spies);
const Person = require("../problems/person");

describe("Person", () => {
    let person;
    beforeEach(() => (person = new Person("David", 42)));

    describe("constructor", () => {
        it("should set the name and age properties", () => {
            expect(person.name).to.equal("David");
            expect(person.age).to.equal(42);
        });
    });

    describe("sayHello()", () => {
        it("should return a string that says hello the person's name", () => {
            expect(person.sayHello()).to.equal("Hello David");
        });
    });

    describe("visit(otherPerson)", () => {
        it("should return a string that says the person the method was called on visited the passed in person", () => {
            const person2 = new Person("Mary", 24);
            expect(person.visit(person2)).to.equal("David visited Mary");
        });
    });

    describe("switchVisit(otherPerson)", () => {
        it("should call the visit instance method of otherPerson", () => {
            const person2 = new Person("Mary", 24);
            const spy = chai.spy.on(person2, "visit");
            expect(person.switchVisit(person2)).to.equal("Mary visited David");
            expect(spy).to.have.been.called.once;
        });
    });

    describe("update(obj)", () => {
        context("argument is not an object", () => {
            it("should throw a TypeError", () => {
                expect(() => person.update(1)).to.throw(
                    TypeError,
                    "Expected an object"
                );
                expect(() => person.update(null)).to.throw(
                    TypeError,
                    "Expected an object"
                );
                expect(() => person.update([1, 2, 3])).to.throw(
                    TypeError,
                    "Expected an object"
                );
            });
        });

        context("passed in object does not have name and age properties", () => {
            it("should throw a TypeError", () => {
                expect(() => person.update({ name: "John" })).to.throw(
                    TypeError,
                    "Name and age properties are required"
                );
            });
        });

        context("valid object is passed in", () => {
            it("should update the person's name and age", () => {
                person.update({ name: "John", age: 24 });
                expect(person.name).to.equal("John");
                expect(person.age).to.equal(24);
            });
        });
    });

    describe("tryUpdate(obj)", () => {
        context("update can be successfully invoked", () => {
            it("should update the person and return true", () => {
                const spy = chai.spy.on(person, "update");
                expect(person.tryUpdate({ name: "John", age: 24 })).to.be.true;
                expect(spy).to.have.been.called.once;
                expect(person.name).to.equal("John");
                expect(person.age).to.equal(24);
            });
        });

        context("update cannot be invoked", () => {
            it("should return false without throwing an error", () => {
                const spy = chai.spy.on(person, "update");
                const tryUpdate = () => person.tryUpdate({ age: 33 });
                expect(spy).to.not.have.been.called;
                expect(tryUpdate).to.not.throw();
                expect(tryUpdate()).to.be.false;
            });
        });
    });

    describe("greetAll(people)", () => {
        it("should call sayHello on each of the Person instances", () => {
            const person2 = new Person("John", 24);
            const spy1 = chai.spy.on(person, "sayHello");
            const spy2 = chai.spy.on(person2, "sayHello");
            Person.greetAll([person, person2]);
            expect(spy1).to.have.been.called.once;
            expect(spy2).to.have.been.called.once;
        });
    });
});
