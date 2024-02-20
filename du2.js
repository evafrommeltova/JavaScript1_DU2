// Prevod stupnu Fahrenheita na stupne celsia

let jmeno = (prompt("Zadej své křestní jméno (bez diakritiky):")).toLowerCase().trim()

let prijmeni = (prompt("Zadej své přijmení (bez diakritiky):")).toLowerCase().trim()

document.body.innerHTML = `Email: ${prijmeni.slice(0,5)}${jmeno.slice(0,3)}@fit.cvut.cz`;





