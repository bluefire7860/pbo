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
            console.log("Nilai harus antara 0 dan 100");
        }
    }

    displayInfo() {
        console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Nilai: ${this.#nilai}`);
    }
}

const prodi1 = new Mahasiswa('Bryan', 2024001110018, 85);
const prodi2 = new Mahasiswa('Egi', 2024001110078, 90);
const prodi3 = new Mahasiswa('Danang', 2024001110095, 69);

prodi1.displayInfo();             
prodi1.nilai = 95;               
console.log(prodi1.nilai);       

console.log("");

prodi2.displayInfo();             
prodi2.nilai = 120;               
console.log(prodi2.nilai);   

console.log("");

prodi3.displayInfo();             
prodi3.nilai = 50;               
console.log(prodi3.nilai);
