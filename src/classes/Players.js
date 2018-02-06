export default class Players {
  constructor(name,age,position,nationality) {
    this.name = name
    this.age = age
    this.position = position
    this.nationality = nationality
  }

  setName(name) {
    return this.name = name
  }

  setAge(age) {
    return this.age = age
  }

  setPosition(position) {
    return this.position = position
  }

  setNationality(nationality) {
    return this.nationality = nationality
  }
}
