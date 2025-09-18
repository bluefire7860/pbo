class Mobil {
  // Kontruktor untuk inisialisasi objek
  contruktor(merek, model, tahun) {
    this.merek = merek; //Properti Objek
    this.model = model;
    this.tahun = tahun;
  }

  // Metode untuk menampilkan informasi mobik
  displayinfo() {
    console.log(`Mobil: ${this.merek} ${this.model}
    (${this.tahun})`);
  }

  // Intasiasi objek dari kelas Mobil
  const mobil1 = new Mobil('Toyota','Corolla',2020);  // Membuat Objek mobil1
  const mobil2 = new Mobil('Honda','Civic',2021);     // Membuat Objek mobil2
  // Memanggil metode untuk menampilkan informasi
  mobil1.displayinfo();                               // Output: Mobil; Toyota Corolla (2020)
  mobil2.displayinfo();                               // Output: Mobil; Honda Civic (2021)

  
