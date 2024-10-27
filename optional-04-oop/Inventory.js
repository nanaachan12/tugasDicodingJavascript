/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from "./Item.js";

class Inventory {
  constructor() {
    this.items = []; // Inisialisasi properti items dengan array kosong
  }

  addItem(item) {
    if (this.isValidItem(item)) {
      // Memeriksa apakah item valid sebelum menambahkan
      this.items.push(item);
    } else {
      throw new Error("Item harus berupa instance dari class Item");
    }
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id); // Menghapus item berdasarkan id
  }

  listItems() {
    // Mengembalikan string informasi detail barang
    return this.items.map((item) => item.displayDetails()).join("\n");
  }

  isValidItem(item) {
    // Memeriksa item adalah instance dari class Item
    return item instanceof Item;
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
