function tampilkanSection(id) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}

function kembaliKeBeranda() {
    tampilkanSection('beranda');
}

function bukaHalaman(url) {
    window.open(url, '_self'); // Membuka halaman baru di tab yang sama
}
