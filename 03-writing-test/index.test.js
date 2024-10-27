import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// 1
//Uji bilangan positif
test("Test ini sudah benar karena 3 + 3 adalah 6", () => {
  // Arrange
  const sumA = 3;
  const sumB = 3;

  // Action
  const actualValue = sum(sumA, sumB);

  // Assert
  const expectedValue = 6; // Sesuaikan hasil yang diharapkan
  assert.equal(actualValue, expectedValue);
});

// 2
//Uji Bilangan negatif
test("Test ini sudah benar karena -5 + -3 adalah -8", () => {
  // Arrange
  const sumA1 = -5;
  const sumB1 = -3;

  // Action
  const hasilNegatif1 = sum(sumA1, sumB1);

  // Assert
  assert.strictEqual(
    hasilNegatif1,
    -8,
    "Penjumlahan -5 + -3 harus menghasilkan -8"
  );
});

// 3
// Uji Bilangan Desimal
test("Penjumlahan 3.5 + 4.5 harus menghasilkan 8.0", () => {
  // Arrange
  const desA1 = 3.5;
  const desB1 = 4.5;

  // Action
  const hasilDesimal1 = sum(desA1, desB1);

  // Assert
  assert.strictEqual(
    hasilDesimal1,
    8.0,
    "Penjumlahan 3.5 + 4.5 harus menghasilkan 6.0"
  );
});

// 4
//Uji angka besar
test("Fungsi sum menambahkan dua angka besar dengan benar", () => {
  // Arrange
  const bigNumberA = 1e10;
  const bigNumberB = 1e10;

  // Action
  const hasilBigNumber = sum(bigNumberA, bigNumberB);

  // Assert
  const expectedValue = 2e10;
  assert.strictEqual(
    hasilBigNumber,
    expectedValue,
    "Penjumlahan 1e10 + 1e10 seharusnya menghasilkan 2e10"
  );
});

//Kesimpulan : Function Sum hanya menerima masukan tipe data number (angka), untuk String meskipun value angka akan error.
