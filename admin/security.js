const ADMIN_PASSWORD = "admin10";

let password = localStorage.getItem("adminAccess");


if(password !== ADMIN_PASSWORD){

    let entered = prompt("Enter Admin Password:");

    if(entered === ADMIN_PASSWORD){

        localStorage.setItem("adminAccess", entered);

    }else{

        alert("Wrong Password!");
        window.location.href="../index.html";

    }

}
