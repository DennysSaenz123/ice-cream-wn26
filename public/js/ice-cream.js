document.getElementById("ice-cream-form").onsubmit = () => {
    clearErrors();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let flavor = document.getElementById("flavor").value;
    
    // cones
    let wafflecone = document.getElementById("wafflecone");
    let sugarcone = document.getElementById("sugarcone");
    let cup = document.getElementById("cup");

    if (!name) {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }
    if (!email) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }
    if (flavor == "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;
    }
    if (!wafflecone.checked && !sugarcone.checked && !cup.checked) {
        document.getElementById("err-cone").style.display = "block";
        isValid = false;
    }

    if (!isValid) {
        window.scrollTo({top: 0, left: 0, behavior:'smooth'});
    }
    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err")
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}