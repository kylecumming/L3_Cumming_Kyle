var entry = document.getElementById("formsubmit");

entry.addEventListener("click", onFormSubmit);

function onFormSubmit(e){
    //The use of preventDefault prevents the page from automatically refreshing so that the results from the form stay on screen when submitted
    e.preventDefault();
    //To keep the previous changes in the data you have to use the code "e.preventDefault" so that the page does not refresh and the data stays

    document.getElementById("firstnameDisplay").innerHTML = "First Name: " + document.getElementById("firstname").value;
    document.getElementById("lastnameDisplay").innerHTML = "Last Name: " + document.getElementById("lastname").value;
    document.getElementById("genderDisplay").innerHTML = "Gender: " + document.querySelector('input[name = "gender"]:checked').value;
    document.getElementById("countryDisplay").innerHTML = "Country: " + document.querySelector("#country").value;
    

}