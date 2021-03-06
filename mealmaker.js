const menu = {
  _courses: {      // allows us to map courses and dishes
    _appetizers: [],
    _mains: [],
    _desserts: [],
  get appetizers() {
   return this._appetizers;
 },
 set appetizers(appetizerIn){
   this._appetizers.push(appetzierIn)
 },
  get mains() {
    return this._mains;
  },
  set mains(mainsIn) {
   this.mains.push(mainsIn)
  },
  get desserts() {
    return this._desserts
  },
  set desserts(dessertsIn) {
    this.desserts.push(dessertsIn)
  }
  },
  get courses() {
   return {
     appetizers: this._courses.appetizers
   }
    return {
     mains: this._courses.mains
   }
   return {
     desserts: this._courses.mains
   }
 },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
   this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex =
 Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  generateRandomMeal() {
  const appetizers =
        this.getRandomDishFromCourse('appetizers')
  const mains =
        this.getRandomDishFromCourse('mains')
  const desserts =
        this.getRandomDishFromCourse('desserts')
const totalPrice = appetizers.price + mains.price + desserts.price

 return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}`

}
}
menu.addDishToCourse('appetizers', 'BBQ Nachos', 6.00);
menu.addDishToCourse('appetizers', 'Jalapeno Poppers', 4.50);
menu.addDishToCourse('appetizers', 'French fries', 2.50);
menu.addDishToCourse('mains', 'Salisbury Steak', 25.23);
menu.addDishToCourse('mains', 'Foix Groix', 8.25);
menu.addDishToCourse('mains', 'Ham Sandwich', 15.15);
menu.addDishToCourse('desserts', 'Apple Pie', 17.76);
menu.addDishToCourse('desserts', 'Cake', 3.50);
menu.addDishToCourse('desserts', 'Deep fried Ice cream', 4.12);

let meal = menu.generateRandomMeal();
console.log(meal)
