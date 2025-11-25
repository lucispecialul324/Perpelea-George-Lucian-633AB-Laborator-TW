// Lista lunilor în limba română
const luni = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

const btnAdauga = document.getElementById("btnAdauga");
const inputActivitate = document.getElementById("inputActivitate");
const listaActivitati = document.getElementById("listaActivitati");

// Eveniment la apăsarea butonului 
btnAdauga.addEventListener("click", function() {
    const textActivitate = inputActivitate.value;

    // Verificăm dacă textul nu este gol 
    if (textActivitate !== "") {
        // Creăm elementul li 
        const elementNou = document.createElement("li");

        // Obținem data curentă 
        const dataCurenta = new Date();
        const zi = dataCurenta.getDate();
        const lunaText = luni[dataCurenta.getMonth()]; // Luna text 
        const an = dataCurenta.getFullYear();

        // Setăm textul după formatul cerut: Activitate - adăugată la: Zi Luna An 
        elementNou.textContent = `${textActivitate} - adăugată la: ${zi} ${lunaText} ${an}`;

        // Adăugăm în listă și golim inputul 
        listaActivitati.appendChild(elementNou);
        inputActivitate.value = "";
    } else {
        alert("Te rog introdu o activitate!");
    }
});