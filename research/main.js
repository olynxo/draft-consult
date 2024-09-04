 const validUsername = "user";
        const validPassword = "password";

        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === validUsername && password === validPassword) {
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("homePage").style.display = "block";
                return false; // Prevent form submission
            } else {
                alert("Invalid username or password. Please try again.");
                return false; // Prevent form submission
            }
        }
