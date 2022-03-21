let country;
let amount;
let loopBreak = false;

document.getElementById('startButton').addEventListener('click', buttonClicked);

function buttonClicked(){
    try{
        console.log('button pressed');

        country = prompt("Enter a country:");
        console.log(country);

        document.getElementById("country").innerHTML = country;

        amount = prompt("Enter amount(USD):");

        document.getElementById("amount").innerHTML = amount;

        console.log(amount);

    while(loopBreak != true ){
        if(country == 'England'){
        document.getElementById("flag").src = "images/England.png";
        fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
        .then(response => response.json())
        .then(data => {console.log(data);
                console.log(data.conversion_rates.GBP);
                document.getElementById("conversionRate").innerHTML = data.conversion_rates.GBP;
                document.getElementById("conversion").innerHTML = data.conversion_rates.GBP*amount;
            });

        loopBreak = true;
    }
    else if(country == 'United Arab Emirates'){
        document.getElementById("flag").src = "images/UAE.png";
        fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
        .then(response => response.json())
        .then(data => {console.log(data);
                console.log(data.conversion_rates);
                document.getElementById("conversionRate").innerHTML = data.conversion_rates.AED;
                document.getElementById("conversion").innerHTML = data.conversion_rates.AED*amount;
            }); 
            loopBreak = true;  
    }
    else if(country == 'Japan'){
        document.getElementById("flag").src = "images/Japan.png";
        fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
        .then(response => response.json())
        .then(data => {console.log(data);
                console.log(data.conversion_rates.JPY);
                document.getElementById("conversionRate").innerHTML = data.conversion_rates.JPY;
                document.getElementById("conversion").innerHTML = data.conversion_rates.JPY*amount;
            })
            .catch((error) => {
                console.log("error", error);
            });

            loopBreak = true;
    }
    else if(country == 'France'){
        document.getElementById("flag").src = "images/France.png";
        fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
        .then(response => response.json())
        .then(data => {console.log(data);
                console.log(data.conversion_rates.EUR);
                document.getElementById("conversionRate").innerHTML = data.conversion_rates.EUR;
                document.getElementById("conversion").innerHTML = data.conversion_rates.EUR*amount;
            });

            loopBreak = true;
    }
    else{
        country = prompt("Enter a country:");
    }
    }
}
catch(error){
    console.log(error);
}
}

