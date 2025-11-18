let skor = 0;
let angka1, angka2, jawabanBenar;

function generateSoal() {
    angka1 = Math.floor(Math.random() * 10) + 1;
    angka2 = Math.floor(Math.random() * 10) + 1;
    jawabanBenar = angka1 + angka2;
    document.getElementById("soal").textContent = `Berapa ${angka1} + ${angka2}?`;
    document.getElementById("hasil").textContent = "";
    document.getElementById("jawaban").value = "";
}

function cekJawaban() {
    let jawabanUser = parseInt(document.getElementById("jawaban").value);
    if (jawabanUser === jawabanBenar) {
        document.getElementById("hasil").textContent = "Benar! 🎉";
        document.getElementById("hasil").style.color = "green";
        skor++;
    } else {
        document.getElementById("hasil").textContent = "Salah! Coba lagi 😊";
        document.getElementById("hasil").style.color = "red";
    }
    document.getElementById("skor").textContent = skor;
}
