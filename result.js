window.addEventListener('load', () => {

    const customer_name = sessionStorage.getItem("Customer_name");
    const email = sessionStorage.getItem('Email');
    const password = sessionStorage.getItem('Password');
    const address = sessionStorage.getItem('Address');
    const phone_number = sessionStorage.getItem("Phone_number");

    document.getElementById("result-custome_name").innerHTML = customer_name;
    document.getElementById("result-email").innerHTML = email;
    document.getElementById("result-password").innerHTML = password;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-phone_number').innerHTML = phone_number;

})

