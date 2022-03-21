let country;
let amount;

document.getElementById('startButton').addEventListener('click', buttonClicked);

function buttonClicked(){
    console.log('button pressed');

    country = prompt("Enter a country:");
    console.log(country);

    document.getElementById("country").innerHTML = country;

    amount = prompt("Enter amount(USD):");

    document.getElementById("amount").innerHTML = amount;

    console.log(amount);

    if(country == 'England'){
        document.getElementById("flag").src = "images/England.png";
        fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
        .then(response => response.json())
        .then(data => {console.log(data);
                console.log(data.conversion_rates.GBP);
                document.getElementById("conversionRate").innerHTML = data.conversion_rates.GBP;
                document.getElementById("conversion").innerHTML = data.conversion_rates.GBP*amount;
            });
    }
    else if(country == 'United Arab Emirates'){

    }
    else if(country == 'Japan'){

    }
    else if(country == 'France'){

    }
    else{
        country = prompt("Enter a country:");
    }
    
}

/*let country = prompt("Enter a country:");

console.log(country);

document.getElementById("test").innerHTML = country;

let amount = prompt("Enter amount:");

console.log(parseFloat(amount));

document.getElementById("test2").innerHTML = parseFloat(amount);

let conversion = parseFloat(amount) * 10;

let apiTest = 0;

document.getElementById("test3").innerHTML = conversion;

if(country == 'England'){
    let a = document.createElement('img');
    a.setAttribute('src', 'images/testImage.png');
    a.setAttribute('alt', "Test image");
    document.body.appendChild(a);
}*/
//var fetchTest = 10;

 /*fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
 .then(response => response.json())
 .then(data => {console.log(data);
                console.log(data.conversion_rates);});*/

  

     /*fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
        .then(response =>{
            return response.json();
        }).then(dataFetch => {
            
            console.log(dataFetch.conversion_rates.AED * fetchTest);
        })*/
    

   


//console.log(objTest);
//console.log(fetchTest);
    //console.log(fetchTest.conversion_rates);

     


 
 //console.log(apiTest);

 //console.log(data.AED);



