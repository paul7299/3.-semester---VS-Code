


// Get all div elements on the page
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = getRandomColor(); // Replace with your chosen color
    }

    // Get the button element
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

    function colorchange() {
        // Loop through the divs and assign each a unique color
            for (var i = 0; i < divs.length; i++) {
                var uniqueColor = getRandomColor();
                divs[i].style.backgroundColor = uniqueColor;
            }
        }


    button.addEventListener("click", colorchange
        );


        // ekstra
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", colorchange
        );
    }
