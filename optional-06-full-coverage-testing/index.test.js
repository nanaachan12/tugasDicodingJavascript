import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// // Uji dua angka positif ditambahkan
test("Harus menghitung penjumlahan dua angka positif dengan benar", () => {
  // Arrange
  const angkaA = 4;
  const angkaB = 4;

  // Action
  const actualValue = sum(angkaA, angkaB);

  // Assert
  const expectedValue = 8;
  assert.strictEqual(
    actualValue,
    expectedValue,
    "Penjumlahan 4 + 4 harus menghasilkan 8"
  );
});

// 2
//Uji parameter jika terdapat nilai null
test("harus mengembalikan 0 jika parameter kedua adalah null", () => {
  // Arrange
  const angka1 = 10;
  const null1 = null;

  // Action
  const hasil = sum(angka1, null1);

  // Assert
  assert.strictEqual(hasil, 0, "10 + null harus menghasilkan nilai 0");
});


//Uji parameter jika terdapat nilai bukan "number"
test("harus mengembalikan 0 jika parameter kedua bukan tipe data number", () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const numberA = 5;
    const stringB = "ini bukan number"; // bukan tipe data number

    // Action
    sum(numberA, stringB);
  };

  // Assert
  assert.strictEqual(sum(4, 4), 8, "Penjumlahan 4 + 4 harus menghasilkan 8");

//uji pengembalian error
  // Assert
  assert.doesNotThrow(
    potentialErrorToBeThrew,
    "Fungsi tidak seharusnya melempar error jika parameter kedua bukan angka"
  );
});
