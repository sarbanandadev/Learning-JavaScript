const Ternary = (age) => {
  return age > 18 ? 'Adult' : age < 10 ? 'Child' : age >= 10 || age < 18 ? 'Young' : 'not Adult'
}

export default Ternary