const siswa =[
    {nama: "Alik", umur: 15, tinggi: 174},
    {nama: "Andira", umur: 15, tinggi: 174},
    {nama: "Fahri", umur: 15, tinggi: 174},
    {nama: "Kirana", umur: 16, tinggi: 168},
    {nama: "Resti", umur: 15, tinggi: 160},
    {nama: "Windy", umur: 15, tinggi: 160},
    {nama: "Rizky Abdul", umur: 15, tinggi: 160},
    {nama: "Riki", umur: 15, tinggi: 160},
    {nama: "Ari", umur: 15, tinggi: 160},
    {nama: "Azzam", umur: 15, tinggi: 160},
    {nama: "Bunga", umur: 15, tinggi: 160},
    {nama: "Liani", umur: 15, tinggi: 160},
    {nama: "Ziyan", umur: 15, tinggi: 160},
    {nama: "Salwa", umur: 15, tinggi: 160},
    {nama: "Almaira", umur: 15, tinggi: 160},
    {nama: "Oktorisa", umur: 15, tinggi: 160},
    {nama: "Alip", umur: 15, tinggi: 160},
    {nama: "Nazwa", umur: 15, tinggi: 160},
    {nama: "Najril", umur: 15, tinggi: 160},
    {nama: "Ghaniyu", umur: 15, tinggi: 160},
    {nama: "Nizar", umur: 15, tinggi: 160},
    {nama: "Faiz", umur: 15, tinggi: 160},
    {nama: "Sarah", umur: 15, tinggi: 160},
    {nama: "Aura", umur: 15, tinggi: 160},
    {nama: "Fatia", umur: 15, tinggi: 160},
    {nama: "Nafisa", umur: 15, tinggi: 160},
    {nama: "Siti Hatifah", umur: 15, tinggi: 160},
    {nama: "Agnes", umur: 15, tinggi: 160},
    {nama: "Rulita", umur: 15, tinggi: 160},
    {nama: "Evania", umur: 15, tinggi: 160},
    {nama: "Vika", umur: 15, tinggi: 160},
    {nama: "Ulima", umur: 15, tinggi: 160},
    {nama: "Alin", umur: 15, tinggi: 160},
    {nama: "Anissa", umur: 15, tinggi: 160},



];

const container = document.getElementById("container");
const search = document.getElementById("searchInput");
const divId = document.getElementById("id-murid");
const closeBtn = document.getElementById("close-btn");
const detailSiswa = document.getElementById("dtl-siswa");
const identSiswa = document.getElementById("ident-siswa");
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        
        }
        else{
            entry.target.classList.remove('show');
        }
        
    });
}, {
    threshold: 0.2,
    rootMargin: "0px"
});

function animation(){
    const students = document.querySelectorAll(".list-siswa");
const anima = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-li');
        }
         else{
            entry.target.classList.remove('show-li');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: "0px"
});
students.forEach(student => anima.observe(student));
}

cards.forEach(card => observer.observe(card));

navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

function showSiswa(){
container.innerHTML = siswa.map((siswa, index) => { return `<div class="siswa-li" data-index="${index}"><li class="list-siswa">${siswa.nama}</li></div>`;}).join('');
animation();
}

container.addEventListener('click', function(e){
    const siswaItem = e.target.closest('.siswa-li');
    if(siswaItem){
        const index = parseInt(siswaItem.dataset.index);
        identSiswa.style.display = 'block';
        const selectedSiswa = siswa[index];
        identSiswa.innerHTML = `<div id="dtl-siswa"> <button id="close-btn" class="cls-btn">X</button>
        <h2>Detail Siswa</h2>
           <div class="info-row"><span class="info-value">Nama: ${selectedSiswa.nama}</span>
        <span class="info-value">Umur: ${selectedSiswa.umur}</span>
        <span class="info-value">Tinggi: ${selectedSiswa.tinggi} cm</span>
           </div>
        </div>`;
    }
})

identSiswa.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'close-btn') {
        hideDetail();
    }
});

function hideDetail(){
    identSiswa.style.display = 'none';
    identSiswa.innerHTML = '';
}


showSiswa(siswa);

search.addEventListener('input', function(e) {
    const keyword = e.target.value.toLowerCase();

    if(keyword === ''){
        showSiswa();
        return;
    }
            const filtered = siswa.filter(siswa => siswa.nama.toLowerCase().includes(keyword));
            
    container.innerHTML = siswa.map((siswa, index) => {
         if(siswa.nama.toLowerCase().includes(keyword)) {
         return `<div class="siswa-li" data-index="${index}">
         <li class="list-siswa">${siswa.nama}</li></div>`;}
         return '';
        
        
        }).join(''); 
        if(container.innerHTML.trim() === ''){
            container.innerHTML = `<li class="list-siswa">Tidak ada siswa ditemukan</li>`;
        }
    
  
});