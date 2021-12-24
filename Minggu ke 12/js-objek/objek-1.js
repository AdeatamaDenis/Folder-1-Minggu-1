var myName = {
  // Properti
  firstName: "Adeatama",
  lastName: "Denis",
  //   Method
  showName: function () {
    alert(`My Name is ${this.firstName} ${this.lastName}`);
  },
};
// Pemanggilan Method
myName.showName();