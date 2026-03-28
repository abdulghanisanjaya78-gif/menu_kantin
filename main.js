let array = [];
function tambahdata() {
    
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let jenis = document.getElementById("jenis").value;

    if(nama == "" && harga == "" && jenis == "" ) {
        alert("mohon lengkapi input terlebih dahulu!")
    } else {
    let data = {
        nama: nama,
        harga: harga,
        jenis: jenis,
    };
    array.push(data);

    let output = "";

    array.forEach((item) => {
        output += `
        nama : ${item.nama}<br>
        harga : ${item.harga}<br>
        jenis : ${item.jenis}<br><br>`
    });

    document.getElementById("output").innerHTML = output;
}}

function hapusdata() {
    array = [];
    document.getElementById("output").innerHTML = "";
}

function editdata() {
    let teledit = prompt("Masukkan nama makanan yang ingin diedit:");
    let item = array.find(item => item.nama === teledit);

    if (!item) {
        alert("Makanan tidak ditemukan");
        return;
    }

    let nama = prompt("Masukkan nama makanan baru:", item.nama);
    let harga = prompt("Masukkan harga baru:", item.harga);
    let jenis = prompt("Masukkan jenis baru: (makanan berat/makanan ringan)", item.jenis);

    if (nama && harga && jenis) {
        item.nama = nama;
        item.harga = harga;
        item.jenis = jenis;
        tampilkanData();
    } else {
        alert("Semua prompt harus diisi");
    }
}   
    
function tampilkanData() {
    let output = "";
    array.forEach((item) => {
        output += `
        nama : ${item.nama}<br>
        harga : ${item.harga}<br>
        jenis : ${item.jenis}<br><br>`
    });
    document.getElementById("output").innerHTML = output;
}

document.getElementById("warna").addEventListener("mouseover", function() {
    this.style.color = "#000000";
});

document.getElementById("warna").addEventListener("mouseout", function() {
    this.style.color = "#333";
});

function changetheme() {
    if(document.body.style.backgroundColor === "white" || document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "#333";
        document.getElementById("container").style.backgroundColor = ""
        
    } else {
        document.body.style.backgroundColor = "white";
        
    }
}