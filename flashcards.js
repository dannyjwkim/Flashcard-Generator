//BasicCard Constructor
function BasicCard (front, back){
	this.front = front;
	this.back = back;
}

var firstBasicCard = new BasicCard ("Who was the first president of the United States?", "George Washington");

console.log(firstBasicCard.front);

//ClozeCard Constructor
function ClozeCard (text, cloze){

	//Scope safe constructor conditional
	//Allows the constructor to be called without the new keyword
	if (this instanceof ClozeCard){
		this.fullText = text;
		this.cloze = cloze;
	}
	else {
		//Allows the constructor to be called with the new keyword
		return new ClozeCard(text, cloze);
	}

}

var firstClozeCard = new ClozeCard ("George Washington was the first president of the United States", "George Washington");

console.log(firstClozeCard.fullText);

//Creating the partial function
ClozeCard.prototype.partial = function () {
	if (this.fullText.includes(this.cloze)){
		return this.fullText.replace(this.cloze, "...");
	}	
	else {
	return "This does not work. Try again!";
	}
}

console.log(firstClozeCard.partial());
