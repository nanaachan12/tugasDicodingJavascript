// Menghitung faktorial dari bilangan bulat positif dengan metode rekursi.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // faktorial dari 0 dan 1 adalah 1
  }
  return n * factorial(n - 1); // n dikalikan dengan faktorial dari (n-1)
}

// Jangan hapus kode di bawah ini!
export default factorial;
