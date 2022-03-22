const button = document.getElementById("generatorButton");
const userInput = document.getElementById("userInput");
const main = document.getElementById("insertion");
const errorMessage = document.getElementById("errorMessage");
const arr = [];

function checkInputLength(){
	return userInput.value.length;
}

const generateRobot = async () => {
	try{
		if (checkInputLength() == 0)
			throw new Error("Empty Input!");

		const object = {
			name : userInput.value,
			url: `https://robohash.org/${userInput.value}`
		}
		arr.push(object);
		displayRobot(arr);
		userInput.value = "";

	}
	catch (err){
		if (err.message === "Empty Input!"){
			errorMessage.innerHTML += "No Input Found!";
			setTimeout(() => {
				errorMessage.innerHTML = "";
			}, 3000);
		}
		else
			console.log(err);
	}
}

function displayRobot(arr){
	main.innerHTML = "";
	for (let i = 0; i < arr.length; i++){
		const url = arr[i].url;
		const div = document.createElement("div");
		const xButton = document.createElement("button");
		const image = document.createElement("img");
		const name = document.createElement("a");
		image.src =  url;

		name.href = url;
		name.appendChild(document.createTextNode(arr[i].name));

		xButton.className = "x";
		xButton.appendChild(document.createTextNode("X"));
		xButton.setAttribute('onclick',`deleteButtonClicked()`);
		
		div.appendChild(xButton);
		div.appendChild(image);
		div.appendChild(name);

		main.appendChild(div);
	}
}

function deleteButtonClicked(event){
	console.log(event);
}

function enterKeyPressed(event){
	if (event.keyCode == 13)
		generateRobot();
}

button.addEventListener('click', generateRobot);
userInput.addEventListener('keypress', enterKeyPressed);