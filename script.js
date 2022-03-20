const button = document.getElementById("generatorButton");
const userInput = document.getElementById("userInput");
const main = document.getElementById("insertion");

function checkInputLength(){
	return userInput.value.length;
}

const generateRobot = async () => {
	try{
		if (checkInputLength() == 0)
			throw new Error("Empty Input!");
		const url = `https://robohash.org/${userInput.value}`;
		const figure = document.createElement("figure");
		const image = document.createElement("img");
		const name = document.createElement("p");
		image.src =  url;
		name.appendChild(document.createTextNode(userInput.value));
		figure.appendChild(image);
		figure.appendChild(name);
		main.appendChild(figure);
		// console.log(userInput.value);
		// console.log(url);
		userInput.value = "";

	}
	catch (err){
		console.log(err);
	}
}

function enterKeyPressed(event){
	if (event.keyCode == 13)
		generateRobot();
}

button.addEventListener('click', generateRobot);
userInput.addEventListener('keypress', enterKeyPressed);