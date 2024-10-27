import {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
} from "./orders.js";

// Menambahkan pesanan
addOrder("Alice", [
  { name: "Nasi Goreng", price: 20000 },
  { name: "Teh Manis", price: 5000 },
]);

addOrder("Bob", [
  { name: "Mie Goreng", price: 15000 },
  { name: "Kopi", price: 10000 },
]);

// Cetak daftar pesanan setelah penambahan
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

// Memperbarui status pesanan
updateOrderStatus(orders[0].id, "Diproses");
updateOrderStatus(orders[1].id, "Selesai");

// Cetak daftar pesanan setelah memperbarui status
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

// Menghitung total pendapatan dari pesanan yang berstatus Selesai
console.log(calculateTotalRevenue());

/**
 * Output yang diharapkan:
 * 25000
 */

// Menghapus pesanan
deleteOrder(orders[0].id);

// Cetak daftar pesanan setelah penghapusan
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
