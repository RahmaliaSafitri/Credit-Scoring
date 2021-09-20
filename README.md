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


Selanjutnya, jika kita ingin, mempredict kita bisa memasukkan request ulrnya dengan {{base_url}}/predict
dengan contoh inputan seperti ini. Namun sebelumnya kita bisa memilih raw sebagai body nya terlebih dahulu

{
    "person_age":27,
    "person_income":12000,
    "person_home_ownership":"OWN",
    "person_emp_length":12,
    "loan_intent":"PERSONAL",
    "loan_grade":"A",
    "loan_amnt":1200000,
    "loan_int_rate":9,
    "loan_percent_income":7,
    "cb_person_default_on_file":"Y",
    "cb_person_cred_hist_length":1
}
