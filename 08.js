class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

function cekUsia(usia) {
  if (usia < 17) {
    throw new Error("Maaf, Anda belum cukup umur");
  }
  return "Usia valid";
}

function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek");
  }
  return "Nama valid";
}

// Try 1
try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  console.log(mahasiswa[2].toUpperCase()); // index 2 ada, tidak akan error
  console.log(mahasiswa[5].toUpperCase()); // index 5 tidak ada, akan error
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai.");
  console.log("");
}


// Try 2
try {
  console.log(cekUsia(18)); // usia > 17, usia valid
  console.log(cekUsia(16)); // usia < 17, program menolak
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
  console.log("");
}

// Try 3
try {
  console.log(cekNama("Nathan")); // nama > 3, nama valid
  console.log(cekNama("Jo")); // nama < 3, program menolak
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
}
