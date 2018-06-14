class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} at the ${
        this._level
      } school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const substituteIndex = Math.floor(
      Math.random() * (substituteTeachers.length - 1)
    );
    return substituteTeacher[substituteIndex];
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents == "number") {
      console.log("Invalid input: numberOfStudents must be set to a number.");
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }
}
class PrimarySchool extends School {
  constructor(name, level, pickupPolicy, numberOfStudents) {
    super(name, "Primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
} // this is messed up when you create instances

class HighSchool extends School {
  constructor(name, level, sportsTeams) {
    super(name, "High", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family memberover the age of 13."
); // maybe this isnt being put in right
lorraineHansbury.quickFacts(); //returns undefined
