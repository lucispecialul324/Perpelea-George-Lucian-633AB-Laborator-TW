const luni = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

// Selectare elemente
const btnDetalii = document.getElementById("btnDetalii");
const detaliiDiv = document.getElementById("detalii");
const spanData = document.getElementById("dataProdus");

// 1. Adăugăm clasa 'ascuns' inițial 
detaliiDiv.classList.add("ascuns");

// 2. Injectăm data curentă formatată
const dataCurenta = new Date();
const zi = dataCurenta.getDate();
const lunaText = luni[dataCurenta.getMonth()];
const an = dataCurenta.getFullYear();

spanData.textContent = `${zi} ${lunaText} ${an}`;

// 3. Eveniment click pe buton
btnDetalii.addEventListener("click", function() {
    // Comutăm vizibilitatea (toggle) 
    detaliiDiv.classList.toggle("ascuns");

    // Verificăm dacă detaliile sunt acum vizibile sau ascunse pentru a schimba textul butonului
    if (detaliiDiv.classList.contains("ascuns")) {
        // Dacă are clasa ascuns, butonul trebuie să zică "Afișează"
        btnDetalii.textContent = "Afișează detalii";
    } else {
        // Dacă NU are clasa ascuns (e vizibil), butonul trebuie să zică "Ascunde" 
        btnDetalii.textContent = "Ascunde detalii";
    }
});