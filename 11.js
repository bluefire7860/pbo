let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra");
console.log(mahasiswa.get("001")); // Output: Andi
console.log(mahasiswa.get("002")); // Output: Citra
console.log(mahasiswa.get("003")); // Output: Citra
console.log()

function printItems(items) {
 items.forEach(item => console.log(item));
}
printItems([1, 2, 3]); // Output: 1, 2, 3
printItems(["A", "B", "C"]); // Output: A, B, C
printItems([1, 2, 3, "A", "B", "C"]); // Output: 1, 2, 3, A, B, C
console.log()

let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); // Menggunakan spasi
console.log(tugas); // Output: 'Belajar OOP', 'Mengerjakan Tugas', 'Belajar OOP '
