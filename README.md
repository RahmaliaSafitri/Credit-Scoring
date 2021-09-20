# Credit-Scoring

### Setting Environment And Collection
Pastikan postman sudah terhubung dengan account google yang kita miliki karena setiap perubahan di collection, postman akan melakukan sync secara berkala.

Manage envirotmen > Add Environment > variabel = base url & current value = http://127.0.0.1:5000/ > save

setelah environtment telah ditambahkan sekarang kita buat collectionnya

### Memanggil API dengan Environment
selanjutnya di tab postman kita masukan alamat API yang akan kita panggil dengan menggunakan env <b>base_url</b> tadi.

Contohnya kita ingin memanggil homepage, maka bisa kita lakukan dengan

Add request > Method kita pilih Get dan request urlnya kita bisa masukkan {{base_url}}

Setelah call API sukses simpan API tadi ke collection dengan klik save dan isi keterangan API
