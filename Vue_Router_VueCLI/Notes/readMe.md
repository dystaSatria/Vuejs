# Notes


* Hash Mode vs HTML5 Mode
  
| Hash Mode                                            | HTML5 Mode                                           |
|------------------------------------------------------|------------------------------------------------------|
| Menggunakan tanda pagar `#` pada URL                | URL tampak lebih bersih tanpa tanda pagar `#`        |
| Contoh URL: `https://situsanda.com/#/tentang`       | Contoh URL: `https://situsanda.com/tentang`          |
| Tidak memerlukan konfigurasi server tambahan         | Memerlukan konfigurasi server agar berfungsi         |
| Bekerja secara langsung tanpa konfigurasi khusus     | Memerlukan penanganan khusus pada server             |
| Lebih mudah digunakan dalam kasus sederhana          | Lebih bersih dan alami untuk URL, namun memerlukan konfigurasi tambahan pada server |
| Kompabilitas yang baik dengan sebagian besar server  | Memerlukan server yang mendukung history API         |
| Penggunaan default dalam Vue Router                  | Harus dinyatakan secara eksplisit dalam konfigurasi router Vue |
| Tidak cocok untuk URL yang lebih bersih              | Cocok untuk URL yang lebih bersih dan alami          |
