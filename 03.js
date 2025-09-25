// 1 Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan, usia, asal) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.usia = usia;
    this.asal = asal; // 5 Atribut
  }

  // 4 Method
  displayInfo() {
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}`);
  }

  displayJurusan() {
    console.log(`Jurusan: ${this.jurusan}`);
  }

  displayUsia() {
    console.log(`Usia: ${this.usia}`);
  }

  displayAsalSekolah() {
    console.log(`Asal: ${this.asal}`);
  }
}

// 2 Child Class
class Gender1 extends Mahasiswa {
  laki2() {
    console.log(`Jenis Kelamin: Laki-laki`);
  }
}

class Gender2 extends Mahasiswa {
  perempuan() {
    console.log(`Jenis Kelamin: Perempuan`);
  }
}

// 3 Objek
const siswa1 = new Gender1('Bryan', 2024001110018, 'Informatika', 20, 'Jakarta');
const siswa2 = new Gender1('Egi', 2024001110078, 'Informasi', 18, 'Los Santos');
const siswa3 = new Gender2('Danang', 2024001110034, 'RPL', 15, 'Jonggol');

// Memanggil Method
siswa1.displayInfo();
siswa1.displayUsia();
siswa1.displayAsalSekolah();
siswa1.laki2();
console.log(``);

siswa2.displayInfo();
siswa2.displayUsia();
siswa2.displayAsalSekolah();
siswa2.laki2();   
console.log(``);

siswa3.displayInfo();
siswa3.displayUsia();
siswa3.displayAsalSekolah();
siswa3.perempuan(); 
console.log(``);
