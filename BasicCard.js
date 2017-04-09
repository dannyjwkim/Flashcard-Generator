function BasicCard (front, back){
	this.front = front;
	this.back = back;
}

var firstPresident = new BasicCard ("George Washington", "First President");

console.log(firstPresident.front);