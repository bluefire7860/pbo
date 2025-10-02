class Mahasiswa {
    #nilai;

    constructor(nama, nim, nilaiAwal) {
        this.nama = nama;   
        this.nim = nim;     
        this.#nilai = nilaiAwal;
    }

    get nilai() {
        return this.#nilai;
    }

    set nilai(nilaiBaru) {
        if (nilaiBaru >= 0 && nilaiBaru <= 100) {
            this.#nilai = nilaiBaru;
        } else {
            console.log("❌ Nilai harus antara 0 dan 100");
        }
    }

    displayNama() {
        console.log(`================================`);
        console.log(`Nama   : ${this.nama}`);
    }
    displayNIM() {
        console.log(`NIM    : ${this.nim}`);
    }
    displayNilai() {
        console.log(`Nilai  : ${this.#nilai}`);
        console.log(`================================`);
        console.log('')
    }
}

const prodi1 = new Mahasiswa('Bryan', 2024001110018, 85);
const prodi2 = new Mahasiswa('Egi', 2024001110078, 90);
const prodi3 = new Mahasiswa('Danang', 2024001110095, 69);

prodi1.displayNama(); 
prodi1.displayNIM(); 
prodi1.displayNilai(); 
prodi1.nilai = 95;               
console.log(`✅ Nilai terbaru: ${prodi1.nilai}\n`);       

console.log("");

prodi2.displayNama(); 
prodi2.displayNIM(); 
prodi2.displayNilai();          
prodi2.nilai = 120;               
console.log(`✅ Nilai terbaru: ${prodi2.nilai}\n`); 

console.log("");

prodi3.displayNama(); 
prodi3.displayNIM(); 
prodi3.displayNilai();
prodi3.nilai = 50;               
console.log(`✅ Nilai terbaru: ${prodi3.nilai}\n`); 
