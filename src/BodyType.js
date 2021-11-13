class BodyType {
  constructor(weight, height) {
    this.weight = weight
    this.height = height
  }
  name = 'SarbaNanda'
  print() {
    return `Name: ${this.name}\nWeight: ${this.weight} kg\nHeight: ${this.height} inches`
  }
}

export default BodyType