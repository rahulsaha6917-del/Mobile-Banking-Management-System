let currentBalance = 0;


let savedUser = localStorage.getItem("bankUser") || "Rahul Saha";
let savedPass = localStorage.getItem("bankPass") || "1234";

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Rahul Saha" && pass === "1234") {
        document.getElementById("loginCard").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        alert("Invalid Username or Password");
    }
}
 
function showRegister() {
    hideAll();
    document.getElementById("registerCard").classList.remove("hidden");
}

function showForgot() {
    hideAll();
    document.getElementById("forgotCard").classList.remove("hidden");
}

function backToLogin() {
    hideAll();
    document.getElementById("loginCard").classList.remove("hidden");
}

function hideAll() {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("registerCard").classList.add("hidden");
    document.getElementById("forgotCard").classList.add("hidden");
}

/* Register */
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user && pass) {
        localStorage.setItem("bankUser", user);
        localStorage.setItem("bankPass", pass);

        savedUser = user;
        savedPass = pass;

        alert("Registration successful! Data saved.");
        backToLogin();
    } else {
        alert("Please fill all fields");
    }
}

function resetPassword() {
    let user = document.getElementById("forgotUser").value;
    let newPassword = document.getElementById("newPass").value;

    if (user === savedUser) {
        localStorage.setItem("bankPass", newPassword);
        savedPass = newPassword;

        alert("Password reset successful!");
        backToLogin();
    } else {
        alert("User not found");
    }
}

/* Forgot Password */
function resetPassword() {
    let user = document.getElementById("forgotUser").value;
    let newPassword = document.getElementById("newPass").value;

    if (user === savedUser) {
        savedPass = newPassword;
        alert("Password reset successful!");
        backToLogin();
    } else {
        alert("User not found");
    }
}

function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user && pass) {
        localStorage.setItem("bankUser", user);
        localStorage.setItem("bankPass", pass);

        savedUser = user;
        savedPass = pass;

        alert("Registration successful! Data saved.");
        backToLogin();
    } else {
        alert("Please fill all fields");
    }
}

function deposit() {
    let amount = Number(document.getElementById("amount").value);
    if (amount > 0) {
        currentBalance += amount;
        updateBalance();
        addHistory("Deposit", amount);
        document.getElementById("amount").value = "";
    }
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);
    if (amount > 0 && amount <= currentBalance) {
        currentBalance -= amount;
        updateBalance();
        addHistory("Withdraw", amount);
        document.getElementById("amount").value = "";
    } else {
        alert("Insufficient Balance");
    }
}

function history() {
    let amount = Number(document.getElementById("amount").value);
    if (amount > 0) {
        currentBalance = amount;
        updateBalance();
        addHistory("history ₹" + amount);
    }
}

function updateBalance() {
    document.getElementById("balance").innerText = currentBalance;
}

function addHistory(type, amount) {
    let history = document.getElementById("history");
    let date = new Date().toLocaleString();

    let row = `
        <tr>
            <td class="${type.toLowerCase()}">${type}</td>
            <td>₹${amount}</td>
            <td>${date}</td>
        </tr>
    `;
    history.innerHTML += row;
}

function clearHistory() {
    if (confirm("Do you want to clear all transaction history?")) {
        document.getElementById("history").innerHTML = "";
    }
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        document.getElementById("dashboard").classList.add("hidden");
        document.getElementById("loginCard").classList.remove("hidden");

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("amount").value = "";
    }
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {

        // Reset balance
        currentBalance = 5000;
        updateBalance();

        // Clear transaction history
        document.getElementById("history").innerHTML = "";

        // Clear inputs
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("amount").value = "";

        // Switch screens
        document.getElementById("dashboard").classList.add("hidden");
        document.getElementById("loginCard").classList.remove("hidden");
    }
}
