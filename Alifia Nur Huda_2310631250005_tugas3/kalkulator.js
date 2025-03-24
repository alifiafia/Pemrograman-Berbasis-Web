const hitung = (operator, angka1, angka2) => {
    if (isNaN(angka1) || isNaN(angka2)) {
        return "Masukkan dua angka yang valid";
    }

    switch (operator) {
        case '+': return angka1 + angka2;
        case '-': return angka1 - angka2;
        case '*': return angka1 * angka2;
        case '/': return angka2 !== 0 ? angka1 / angka2 : "Tidak bisa bagi nol";
        case '%': return angka1 % angka2;
        default: return "Operator tidak valid";
    }
};

document.getElementById("calculator").addEventListener("click", () => {
    const operator = document.getElementById("operator").value;
    const angka1 = Number(document.getElementById("angka1").value);
    const angka2 = Number(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("result").innerText = "Masukkan dua angka yang valid";
        return;
    }

    const hasil = hitung(operator, angka1, angka2);
    document.getElementById("result").innerText = `Hasil: ${hasil}`;
});
