// Registration form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you can perform any registration-related operations using JavaScript or make an AJAX request to a server-side script.
    console.log("Username: " + username);
    console.log("Password: " + password);
});

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you can perform any login-related operations using JavaScript or make an AJAX request to a server-side script.
    console.log("Username: " + username);
    console.log("Password: " + password);
});
