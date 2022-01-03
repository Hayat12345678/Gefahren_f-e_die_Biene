let petition = [];

function addPersonToPetition() {
    let vorname = document.getElementById("fname").value;
    let nachname = document.getElementById("lname").value;

    if (vorname.length == 0 || nachname.length == 0) {
        alert("Bitte gib deinen Vornamen und Nachnamen vollständig ein");
    } else if (petition.includes(vorname + " " + nachname)) {
        alert("Du existierst bereits.");
    } else {
        // Fügt eine Person in das Array hinzu
        petition.push(vorname + " " + nachname);

        // Input Felder leeren
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
    }
    showPetition();
}

function showPetition() {
    // für jedes Element in der Liste petition erstelle ein Listenelement
    let petitionHTML = "";
    petition.forEach(
        (person) => {
            petitionHTML = petitionHTML + "<li>" + person + "</li>";
        });
    document.getElementById("petition").innerHTML = petitionHTML;
}

/*
Sortieren der Petition
*/
function sortPetition() {
    console.log(petition);
    petition.sort();
    petition.reverse();
    showPetition();
}