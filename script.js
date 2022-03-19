var button = document.getElementById("generatorButton");
var userInput = document.getElementById("userInput");
var main = document.getElementById("insertion");
console.log(main);

function checkInputLength(){
	return userInput.value.length;
}

const generateRobot = async () => {
	try{
		if (checkInputLength() == 0)
			throw new Error("Empty Input!");
		const url = `https://robohash.org/${userInput.value}`;
		var figure = document.createElement("figure");
		var image = document.createElement("img");
		var name = document.createElement("p");
		image.src =  url;
		name.appendChild(document.createTextNode(userInput.value));
		figure.appendChild(image);
		figure.appendChild(name);
		main.appendChild(figure);
		console.log(userInput.value);
		console.log(url);
		userInput.value = "";

	}
	catch (err){
		console.log(err);
	}
}

button.addEventListener('click', generateRobot);