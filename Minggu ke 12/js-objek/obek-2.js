var person1 = {
  firstName: "Gista",
  midName: "Sabit",
  lastName: "Purnama",
  showName: function () {
    alert(`She is ${this.firstName} ${this.midName} ${this.lastName}`);
  },
};
person1.showName();
