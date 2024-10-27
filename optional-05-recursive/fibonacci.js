function fibonacci(n) {
   
//  Menghasilkan deret Fibonacci hingga elemen ke-n menggunakan rekursi
 
    if (n < 0) {
      throw new Error('Indeks tidak boleh negatif'); // Memastikan indeks tidak negatif
    }
    const fibo = [];
    function generateFibo(k) {
      if (k === 0) {
        fibo.push(0);
      } else if (k === 1) {
        fibo.push(0, 1);
      } else {
        generateFibo(k - 1);
        fibo.push(fibo[k - 1] + fibo[k - 2]);
      }
    }
    generateFibo(n);
    return fibo;
  }
  

// Jangan hapus kode di bawah ini!
export default fibonacci;
