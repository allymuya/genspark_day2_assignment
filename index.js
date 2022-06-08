function handleSubmit () {
    const customer_name = document.getElementById("customer_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;
    const phone_number= document.getElementById("phone_number").value;

    sessionStorage.setItem("Customer_name", customer_name);
    sessionStorage.setItem;("Email", email);
    sessionStorage.setItem;("Password", password);
    sessionStorage.setItem; ("Address", address);  
    sessionStorage.setItem;("Phone_number", phone_number);

    return;
}
    