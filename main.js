//require fs
var fs = require('fs');
// Require the 'inquirer' package
var inquirer = require('inquirer');

// Import the flash cards constructor implementations
var BasicCard = require('./BasicCard.js');
// Import the full list of questions
var ClozeCard = require('./ClozeCard.js');


inquirer.prompt([{
    name: "playGame",
    message: "Are you ready for Adventure Time Trivia?",
    type: "list",
    choices: [{
        name: "Yes"
    }, {
        name: "No"
    }]
}]).then(function(answer) {
    if (answer.playGame === "Yes") {
        CardTypeSelect(); 
    } else if (answer.playGame === "No") {
        console.log("Wus.");
    }
});

function CardTypeSelect() {
    inquirer.prompt([{
    name: "playGame",
    message: "Do you want Basic or CLoze Trivia?",
    type: "list",
    choices: [{
        name: "Basic"
    }, {
        name: "Cloze"
    }]
}]).then(function(answer) {
    if (answer.playGame === "Basic") {
        Basic(); 
    } else if (answer.playGame === "Cloze") {
        Cloze();
    }
});

};


var bcards = [];
var bcardScore = 0;

function Basic() {	

var nameDog = new BasicCard(
	"What is the name of the dog in the cartoon Adventure Time?", "jake");

// "What is the name of the dog in the cartoon Adventure Time?"
	//console.log( nameDog.front); 

// "Jake"
	//console.log(nameDog.back);

var nameHuman = new BasicCard(
	"What is the name of the human in the cartoon Adventure Time?", "finn");

// "What is the name of the human in the cartoon Adventure Time?"
	//console.log( nameHuman.front); 

// "Jake"
	//console.log(nameHuman.back);

var nameLand = new BasicCard(
	"Where do the two main characters live in the cartoon Adventure Time?", "land of ooo");

// "Where do the two main characters live in the cartoon Adventure Time?"
	//console.log(nameLand.front); 

// "Land of Ooo"
	//console.log(nameLand.back);

bcards.push(nameDog);
bcards.push(nameHuman);
bcards.push(nameLand);

function bsQuestions() {
	if(bcards.length > bcardScore ) {
				inquirer.prompt([
					{
						name: "question",
						message: bcards[bcardScore].front
					}
				]).then(function(answer) {
						console.log((answer.question).toLowerCase());
					if(bcards[bcardScore].back === (answer.question).toLowerCase()) {
						bcardScore ++
						console.log("Well done!");
						bsQuestions();
					} 
					else {
						console.log("\nWrong!\n");
						console.log("Answer was: " + bcards[bcardScore].back);
						bcardScore ++
						bsQuestions();
					}

				})

	}


}

bsQuestions();

};


var ccards = [];
var ccardScore = 0;
var clozeText;

function Cloze() {
// creates the full function and applies it to all programmer objects
ClozeCard.prototype.full = function() {

	fullText = this.fullText;
	cloze = this.cloze;
	partial = this.partial;
	//console.log(fullText);
}

var nameDogCloze = new ClozeCard(
    "... is the name of the dog in the cartoon Adventure Time.", "jake");

// "Jake"
    //console.log(nameDogCloze.cloze); 

// " ... is the name of the dog in the cartoon Adventure Time."
    //console.log(nameDogCloze.partial);

// "Jake is the name of the dog in the cartoon Adventure Time."
    //console.log(nameDogCloze.fullText);


var nameHumanCloze = new ClozeCard(
    "... is the name of the human in the cartoon Adventure Time.", "finn");

// "Finn"
    //console.log(nameHumanCloze.cloze); 

// " ... is the name of the human in the cartoon Adventure Time."
    //console.log(nameHumanCloze.partial);

// "Finn is the name of the human in the cartoon Adventure Time."
    //console.log(nameHumanCloze.fullText);


var nameLandCloze = new ClozeCard(
    "... is where the two main characters live in the cartoon Adventure Time.", "land of ooo");

// "Land of Ooo"
    //console.log(nameLandCloze.cloze); 

// " ... is where the two main characters live in the cartoon Adventure Time."
    //console.log(nameLandCloze.partial);

// "The Land of Ooo is where the two main characters live in the cartoon Adventure Time."
    //console.log(nameLandCloze.fullText);


// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
    var brokenCloze = new ClozeCard("This doesn't work", "oops");	

ccards.push(nameDogCloze);
ccards.push(nameHumanCloze);
ccards.push(nameLandCloze);

function ccQuestions() {
	if(ccards.length > ccardScore) {
				inquirer.prompt([
					{
						name: "partial",
						message: ccards[ccardScore].fullText
					}
				]).then(function(answer) {
					console.log((answer.partial).toLowerCase());
					if(ccards[ccardScore].cloze === (answer.partial).toLowerCase()) {
						ccardScore ++
						console.log("Well done!");
						ccQuestions();
					} 
					else {
						console.log("\nWrong!\n");
						console.log("Answer was: " + ccards[ccardScore].cloze);
						ccardScore ++						
						ccards[ccardScore].full();
						ccQuestions();
					}

				});

	}


}

ccQuestions();

};

