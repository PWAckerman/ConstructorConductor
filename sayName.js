//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

function Person(name, age){
  this.name = name;
  this.age = age
}


//Now create three instances of Person with data you make up

  //code here
var me = new Person('patrick', 30);
var you = new Person('abby', 32);
var everyone = new Person('severin', 1);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function(){
  console.log(this.name);
}
