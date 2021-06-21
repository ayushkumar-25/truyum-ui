function checkValidation() {
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var dateOfLaunch = document.getElementById("dateOfLaunch").value;

    if (price == "") {
        alert("Please enter Price.");
    }
    else { location.href = "edit-menu-item-status.html"; }

    return false;
}