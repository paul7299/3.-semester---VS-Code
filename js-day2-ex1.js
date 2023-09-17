


// Get all div elements on the page
    var divs = document.querySelectorAll("div");
    
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "blue"; // Replace with your chosen color
    }

// Assign the button element to a js variable
    var button = document.getElementById("changeColorButton");
    
// Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

// function to loop thorugh and change the current div's color
    function colorchange() {
        // Loop through the divs and assign each a unique color
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.backgroundColor = getRandomColor();
            }
        }

// Adding eventlistener to the button
// with parameter "click" and the function I made before
    button.addEventListener("click", colorchange
        );


// Adding the same eventListener to the divs as well
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", colorchange
        );
    }
