function Manusia(firstName, lastName) {
  // Properti
  this.firstName = firstName;
  this.lastName = lastName;

  // Method
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.showName = function () {
    document.write(this.fullName());
  };
}
var manusia1 = new Manusia("Adeatama", "Denis");
var manusia2 = new Manusia("Denis", "Adeatama");

manusia1.showName();
document.write("<br>");
manusia2.showName();