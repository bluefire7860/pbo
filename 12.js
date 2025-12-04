const fs = require("fs");
const path = "./mahasiswa.json";

const mahasiswa = [
  { nama: "Andi", umur: 21, jurusan: "Informatika" },
  { nama: "Budi", umur: 22, jurusan: "Sistem Informasi" }
];

try {
    // Simpan ke localStorage
  fs.writeFileSync(path, JSON.stringify(mahasiswa, null, 2), "utf8");

    // Ambil kembali dari localStorage
  const jsonString = fs.readFileSync(path, "utf8");
  const mahasiswaList = JSON.parse(jsonString);

  console.log("Daftar Mahasiswa:");
  mahasiswaList.forEach(mhs => console.log(`${mhs.nama} - ${mhs.jurusan}`));
} catch (err) {
  console.error("Error file I/O atau JSON:", err);
}
