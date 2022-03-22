
/*fileName: project0McElrone.js
  Author: Austin McElrone
  created:3/18/22
  last modified:3/21/22
  Overview: This file provides the user interactivity for html file project0McElrone.html*/

let country;
let amount;
let loopBreak = false;

document.getElementById('startButton').addEventListener('click', buttonClicked); // Event listener
/*function buttonClicked loops through user's country entry until there is a match,
  once the if statement is satisfied, the function fetches the conversion rate from the api, performs a 
  calculation and then writes the info to the html elements */
function buttonClicked(){
    try{
        console.log('button pressed');

        country = prompt("Enter a country:");
        console.log(country);

        

        amount = prompt("Enter amount(USD):");

        document.getElementById("amount").innerHTML = amount;

        console.log(amount);
        
        while(loopBreak != true ){//if true, loop will break
            if(country == 'England'){
                document.getElementById("flag").src = "images/England.png";
                fetch('https://v6.exchangerate-api.com/v6/ae52137dc15cbfa6d0bf5c37/latest/USD')
                .then(response => response.json())
                .then(data => {console.log(data);
                console.log(data.conversion_rates.GBP);
                document.getElementById("conversionRate").innerHTML = data.conversion_rates.GBP;
                document.getElementById("conversion").innerHTML = data.conversion_rates.GBP*amount;
                });
                
                document.getElementById("country").innerHTML = country;

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

            document.getElementById("country").innerHTML = country;

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

            document.getElementById("country").innerHTML = country;

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

            document.getElementById("country").innerHTML = country;

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

