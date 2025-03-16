document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("FirstName");
    const inputField2 = document.getElementById("LastName");
    const inputField3 = document.getElementById("EmailAddress");
    const inputField4 = document.getElementById("Password");
    const insultMessage = document.getElementById("insultMessage");
    const signupBtn = document.getElementById("signup-btn");


    // List of wrong letters to swap
    const wrongLetters = {
        a: "q", b: "n", c: "x", d: "s", e: "w", f: "r", g: "t", h: "y", i: "o",
        j: "u", k: "m", l: "p", m: "z", n: "b", o: "i", p: "l", q: "a", r: "f",
        s: "d", t: "g", u: "j", v: "c", w: "e", x: "c", y: "h", z: "m"
    };


    // List of prank messages
    const insults = [
        "You might have dyslexia, please type like a normal person...",
        "Your keyboard is acting up!",
        "You cannot be that mentally slow.",
        "This keyboard has a mind of its own!",
        "I think you are trying to spell dumbass..."
    ];


    function prankText(inputField) {
        inputField.addEventListener("input", function (event) {
            const cursorPos = inputField.selectionStart;
            let typedText = inputField.value.split(""); // Convert string to array
            
            // Convert only the latest typed letter
            let lastTypedIndex = cursorPos - 1;
            if (lastTypedIndex >= 0) {
                let char = typedText[lastTypedIndex].toLowerCase();
                typedText[lastTypedIndex] = wrongLetters[char] || char; // Swap only if it's in the list
            }

            inputField.value = typedText.join(""); // Convert back to string

            // Maintain cursor position
            inputField.setSelectionRange(cursorPos, cursorPos);

            insultMessage.textContent = insults[Math.floor(Math.random() * insults.length)];
        });
    }


    function areFieldsFilled() {
        return (
            inputField.value.trim() !== "" &&
            inputField2.value.trim() !== "" &&
            inputField3.value.trim() !== "" &&
            inputField4.value.trim() !== ""
        );
    }


    function video() {
        if (areFieldsFilled()) {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
                }, i * 500); // Opens one popup every 500ms
            }
        } else {
            alert("Please fill in all fields before signing up!");
        }
    }


    // Apply prank effect to all input fields
    prankText(inputField);
    prankText(inputField2);
    prankText(inputField3);
    prankText(inputField4);


    // Add event listener to sign-up button
    signupBtn.addEventListener("click", video);
});


