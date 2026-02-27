// ==========================================
// DATA & CONFIG
// ==========================================

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

let currentUser = null;
let currentFilter = 'all';

// Default Data
let dataAbsen = JSON.parse(localStorage.getItem('absen')) || [
    {no: 1, nama: "Alim Saputra", jk: "L"},
    {no: 2, nama: "Ananda Mikola", jk: "L"},
    {no: 3, nama: "Dany Indarto Prasetyo", jk: "L"},
    {no: 4, nama: "Dede Sulkifli", jk: "L"},
    {no: 5, nama: "Devi", jk: "P"},
    {no: 6, nama: "Fajrun Ziyadi Murawi", jk: "L"},
    {no: 7, nama: "Fauzyyah", jk: "P"},
    {no: 8, nama: "I Gede Andika Putra Natha", jk: "L"},
    {no: 9, nama: "Intan Nuraisyah", jk: "P"},
    {no: 10, nama: "Irfan Pratama", jk: "L"},
    {no: 11, nama: "M. Yusran", jk: "L"},
    {no: 12, nama: "Mathew Fabio Caysar Banea", jk: "L"},
    {no: 13, nama: "Muh. Iyan Firmansyah", jk: "L"},
    {no: 14, nama: "Muh. Nur Qalbi Umar", jk: "L"},
    {no: 15, nama: "Muh. Asry", jk: "L"},
    {no: 16, nama: "Muh. Ell Farel", jk: "L"},
    {no: 17, nama: "Muh. Ezhar Rafif Putra Budjana", jk: "L"},
    {no: 18, nama: "Muh. Hafidz Hafiduddin", jk: "L"},
    {no: 19, nama: "Muh. Rafly", jk: "L"},
    {no: 20, nama: "Muh. Fauzan", jk: "L"},
    {no: 21, nama: "Muh. Alif Zainnuddin", jk: "L"},
    {no: 22, nama: "Muh. Aqsa", jk: "L"},
    {no: 23, nama: "Muh. Doni Syachika Rahman", jk: "L"},
    {no: 24, nama: "Muh. Julian Saputra", jk: "L"},
    {no: 25, nama: "Muh. Rasyidi", jk: "L"},
    {no: 26, nama: "Muhammad Sahrul Ramadhan", jk: "L"},
    {no: 27, nama: "Nanda Dwi Darma Putra Anggara", jk: "L"},
    {no: 28, nama: "Nora Indasari", jk: "P"},
    {no: 29, nama: "Nur Julianaya Mulia", jk: "P"},
    {no: 30, nama: "Nur Nayla R", jk: "P"},
    {no: 31, nama: "Nurul Annisa Amilah Sholehah Amal", jk: "P"},
    {no: 31, nama: "Resky Suci Pebriani", jk: "P"},
    {no: 33, nama: "Reymond", jk: "L"},
    {no: 34, nama: "Risky Andika Rasul", jk: "L"},
    {no: 35, nama: "Srigusnawati", jk: "P"},
    {no: 36, nama: "Tristan Manuel Musu", jk: "L"},
    {no: 37, nama: "Syfa Shara", jk: "P"},


    
];

let dataJadwal = JSON.parse(localStorage.getItem('jadwal')) || {
    senin: ["Bing", "Pkn", "Istirahat", "Kwu", "Kwu"],
    selasa: ["KK1", "KK1", "Istirahat", "KK2", , "Agama"],
    rabu: ["KK3", "KK3", "Matematika", "Istirahat", "KK1"],
    kamis: ["KK3", "KK3", "Bahasa Indonesia","Istirahat", "KK2"],
    jumat: ["KK1", "KK1", "Istirahat", "Bahasa Inggris","Bahsa inggris"],
};

let dataPiket = JSON.parse(localStorage.getItem('piket')) || [
    {hari: "Senin", nama: ["Dany", "Nurul", "Reymond","Nanda", "Syfa", "Dony","Hafidz", "Dede"]},
    {hari: "Selasa", nama: ["Nayla", "Devi", "Fauzan","Rasyidi", "Rafly", "Julian"]},
    {hari: "Rabu", nama: ["Mathew", "Ezhar", "Intan","Alif", "Aqsa", "Nora","Yusran"]},
    {hari: "Kamis", nama: ["Sahrul", "Muflih", "Tristan","Naya", "Dika", "Asyr","Suci"]},
    {hari: "Jumat", nama: ["Irfan", "Gusna", "I Gede","Alim", "Fajrun", "Uci","Iyan"]}
];

let dataStruktur = JSON.parse(localStorage.getItem('struktur')) || [
    {jabatan: "Wali Kelas", nama: "Emi , S.S., S.Pd", icon: "fa-chalkboard-teacher"},
    {jabatan: "Ketua Kelas", nama: "Ell Farel", icon: "fa-crown"},
    {jabatan: "Wakil Ketua", nama: "Nanda Dwi Darma P.A", icon: "fa-user-tie"},
    {jabatan: "Sekretaris", nama: "Dany Indarto Prasetyo", icon: "fa-pen"},
    {jabatan: "Bendahara", nama: "Nur Nayla", icon: "fa-money-bill-wave"}
];

let dataGaleri = JSON.parse(localStorage.getItem('galeri')) || [
    "https://via.placeholder.com/300/00d4ff/0a0a0a?text=Foto+Kelas+1",
    "https://via.placeholder.com/300/00a8cc/0a0a0a?text=Foto+Kelas+2",
    "https://via.placeholder.com/300/00d4ff/0a0a0a?text=Foto+Kelas+3"
];

// ==========================================
// LOGIN FUNCTIONS
// ==========================================

function login(type) {
    if (type === 'guest') {
        currentUser = 'guest';
        showToast('Login sebagai Guest', 'success');
        showApp();
    } else {
        const user = document.getElementById('adminUser').value;
        const pass = document.getElementById('adminPass').value;
        
        if (user === ADMIN_USER && pass === ADMIN_PASS) {
            currentUser = 'admin';
            showToast('Anjaii Gass Login!!', 'success');
            showApp();
        } else {
            showToast('Username atau password salah!', 'error');
        }
    }
}

function showApp() {
    // Sembunyikan login, tampilkan app
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    
    // Update UI
    updateUserBadge();
    
    // Render semua data
    updateStats();
    renderAbsen();
    renderJadwal('senin');
    renderPiket();
    renderStruktur();
    renderGaleri();
    updateQuickInfo();
}

function logout() {
    if (confirm('Yakin ingin logout?')) {
        location.reload();
    }
}

function updateUserBadge() {
    const badge = document.getElementById('userBadge');
    if (currentUser === 'admin') {
        badge.textContent = 'Admin';
        badge.classList.add('admin');
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'flex');
    } else {
        badge.textContent = 'Guest';
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
    }
}

// ==========================================
// NAVIGATION
// ==========================================

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav active
    document.querySelectorAll('.nav-menu a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('onclick').includes(sectionId)) {
            a.classList.add('active');
        }
    });
    
    // Close mobile menu
    document.getElementById('navMenu').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function goToAbsen(filter) {
    showSection('absen');
    setTimeout(() => filterAbsen(filter), 100);
}

// ==========================================
// BERANDA
// ==========================================

function updateStats() {
    const total = dataAbsen.length;
    const laki = dataAbsen.filter(s => s.jk === 'L').length;
    const perempuan = dataAbsen.filter(s => s.jk === 'P').length;
    
    document.getElementById('totalSiswa').textContent = total;
    document.getElementById('totalLaki').textContent = laki;
    document.getElementById('totalPerempuan').textContent = perempuan;
}

function updateQuickInfo() {
    const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const hariIni = hariList[new Date().getDay()];
    
    const hariMap = {'Senin': 'senin', 'Selasa': 'selasa', 'Rabu': 'rabu', 'Kamis': 'kamis', 'Jumat': 'jumat'};
    const hariKey = hariMap[hariIni];
    
    if (hariKey && dataJadwal[hariKey]) {
        const mapel = dataJadwal[hariKey].filter(m => m !== 'Istirahat');
        document.getElementById('jadwalHariIni').textContent = `${mapel.length} Mapel`;
    } else {
        document.getElementById('jadwalHariIni').textContent = 'Libur';
    }
    
    const piket = dataPiket.find(p => p.hari === hariIni);
    document.getElementById('piketHariIni').textContent = piket ? `${piket.nama.length} Orang` : '-';
}

// ==========================================
// ABSEN
// ==========================================

function filterAbsen(type) {
    currentFilter = type;
    
    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent;
        if (type === 'all' && btnText.includes('Semua')) btn.classList.add('active');
        if (type === 'L' && btnText.includes('Laki')) btn.classList.add('active');
        if (type === 'P' && btnText.includes('Perempuan')) btn.classList.add('active');
    });
    
    // Update label
    const label = document.getElementById('filterLabel');
    label.textContent = type === 'all' ? '' : (type === 'L' ? '(Laki-laki)' : '(Perempuan)');
    
    renderAbsen();
}

function renderAbsen() {
    const list = document.getElementById('absenList');
    list.innerHTML = '';
    
    let filtered = dataAbsen;
    if (currentFilter !== 'all') {
        filtered = dataAbsen.filter(s => s.jk === currentFilter);
    }
    
    filtered.sort((a, b) => a.no - b.no).forEach((siswa) => {
        const realIndex = dataAbsen.indexOf(siswa);
        const item = document.createElement('div');
        item.className = 'absen-item';
        item.innerHTML = `
            <div class="absen-info">
                <h4>${siswa.no}. ${siswa.nama}</h4>
                <p>${siswa.jk === 'L' ? 'Laki-laki ♂' : 'Perempuan ♀'}</p>
            </div>
            ${currentUser === 'admin' ? `
            <div class="absen-actions">
                <button class="btn btn-primary" onclick="editAbsen(${realIndex})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" onclick="deleteAbsen(${realIndex})"><i class="fas fa-trash"></i></button>
            </div>` : ''}
        `;
        list.appendChild(item);
    });
}

function searchSiswa() {
    const query = document.getElementById('searchAbsen').value.toLowerCase();
    document.querySelectorAll('.absen-item').forEach(item => {
        const nama = item.querySelector('h4').textContent.toLowerCase();
        item.style.display = nama.includes(query) ? 'flex' : 'none';
    });
}

function editAbsen(index) {
    const siswa = dataAbsen[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('noAbsen').value = siswa.no;
    document.getElementById('namaSiswa').value = siswa.nama;
    document.getElementById('jkSiswa').value = siswa.jk;
    openModal('absenModal');
}

function deleteAbsen(index) {
    if(confirm('Hapus data ini?')) {
        dataAbsen.splice(index, 1);
        localStorage.setItem('absen', JSON.stringify(dataAbsen));
        updateStats();
        renderAbsen();
        showToast('Data dihapus', 'success');
    }
}

function saveAbsen(e) {
    e.preventDefault();
    const index = document.getElementById('editIndex').value;
    const siswa = {
        no: parseInt(document.getElementById('noAbsen').value),
        nama: document.getElementById('namaSiswa').value,
        jk: document.getElementById('jkSiswa').value
    };
    
    if(index !== '') {
        dataAbsen[parseInt(index)] = siswa;
    } else {
        dataAbsen.push(siswa);
    }
    
    localStorage.setItem('absen', JSON.stringify(dataAbsen));
    closeModal('absenModal');
    updateStats();
    renderAbsen();
    document.getElementById('absenForm').reset();
    document.getElementById('editIndex').value = '';
    showToast('Data disimpan', 'success');
}

// ==========================================
// JADWAL
// ==========================================

function showJadwal(hari) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === hari) btn.classList.add('active');
    });
    renderJadwal(hari);
}

function renderJadwal(hari) {
    const content = document.getElementById('jadwalContent');
    content.innerHTML = '';
    
    const mapel = dataJadwal[hari] || [];
    mapel.forEach((m, i) => {
        const jam = 7 + i;
        const waktu = m === "Istirahat" ? "09:30-10:00" : `${jam}:00-${jam+1}:00`;
        
        content.innerHTML += `
            <div class="jadwal-item">
                <div class="jadwal-time">${waktu}</div>
                <div class="jadwal-map">
                    <h4>${m}</h4>
                    <p>${m === 'Istirahat' ? '☕ Break' : `Ruang ${(i%4)+1}`}</p>
                </div>
            </div>
        `;
    });
}

function saveJadwal(e) {
    e.preventDefault();
    const hari = document.getElementById('hariJadwal').value;
    const mapel = document.getElementById('mapelJadwal').value.split(',').map(m => m.trim());
    
    dataJadwal[hari] = mapel;
    localStorage.setItem('jadwal', JSON.stringify(dataJadwal));
    closeModal('jadwalModal');
    renderJadwal(hari);
    updateQuickInfo();
    showToast('Jadwal disimpan', 'success');
    document.getElementById('jadwalForm').reset();
}

// ==========================================
// PIKET
// ==========================================

function renderPiket() {
    const grid = document.getElementById('piketGrid');
    grid.innerHTML = '';
    
    dataPiket.forEach(p => {
        grid.innerHTML += `
            <div class="piket-card">
                <h3><i class="fas fa-calendar-day"></i> ${p.hari}</h3>
                <div class="piket-list">
                    ${p.nama.map(n => `<span class="piket-name">${n}</span>`).join('')}
                </div>
            </div>
        `;
    });
}

function savePiket(e) {
    e.preventDefault();
    const hari = document.getElementById('hariPiket').value;
    const nama = document.getElementById('namaPiket').value.split(',').map(n => n.trim());
    
    const index = dataPiket.findIndex(p => p.hari === hari);
    if(index >= 0) dataPiket[index].nama = nama;
    else dataPiket.push({hari, nama});
    
    localStorage.setItem('piket', JSON.stringify(dataPiket));
    closeModal('piketModal');
    renderPiket();
    updateQuickInfo();
    showToast('Jadwal piket disimpan', 'success');
    document.getElementById('piketForm').reset();
}

// ==========================================
// STRUKTUR
// ==========================================

function renderStruktur() {
    const chart = document.getElementById('strukturChart');
    chart.innerHTML = '';
    
    const wali = dataStruktur.find(s => s.jabatan === "Wali Kelas");
    if(wali) {
        chart.innerHTML += `<div class="struktur-level">${createStrukturCard(wali, true)}</div>`;
    }
    
    const others = dataStruktur.filter(s => s.jabatan !== "Wali Kelas");
    let html = '<div class="struktur-level">';
    others.forEach(s => html += createStrukturCard(s, false));
    html += '</div>';
    chart.innerHTML += html;
}

function createStrukturCard(data, isWali) {
    return `
        <div class="struktur-card ${isWali ? 'wali' : ''}">
            <div class="struktur-icon"><i class="fas ${data.icon}"></i></div>
            <h4>${data.jabatan}</h4>
            <p>${data.nama}</p>
        </div>
    `;
}

function saveStruktur(e) {
    e.preventDefault();
    const jabatan = document.getElementById('jabatanStruktur').value;
    const nama = document.getElementById('namaStruktur').value;
    
    const icons = {
        "Wali Kelas": "fa-chalkboard-teacher", "Ketua Kelas": "fa-crown",
        "Wakil Ketua": "fa-user-tie", "Sekretaris": "fa-pen",
        "Bendahara": "fa-money-bill-wave", "Seksi Olahraga": "fa-running",
        "Seksi Kebersihan": "fa-broom"
    };
    
    const index = dataStruktur.findIndex(s => s.jabatan === jabatan);
    if(index >= 0) dataStruktur[index].nama = nama;
    else dataStruktur.push({jabatan, nama, icon: icons[jabatan] || 'fa-user'});
    
    localStorage.setItem('struktur', JSON.stringify(dataStruktur));
    closeModal('strukturModal');
    renderStruktur();
    showToast('Struktur disimpan', 'success');
    document.getElementById('strukturForm').reset();
}

// ==========================================
// GALERI
// ==========================================

function renderGaleri() {
    const grid = document.getElementById('galeriGrid');
    grid.innerHTML = '';
    
    dataGaleri.forEach((src, index) => {
        grid.innerHTML += `
            <div class="galeri-item">
                <img src="${src}" onclick="viewImage('${src}')">
                ${currentUser === 'admin' ? `<button onclick="deleteFoto(${index})" style="position:absolute;top:5px;right:5px;background:#ff4757;color:white;border:none;width:30px;height:30px;border-radius:50%;cursor:pointer;"><i class="fas fa-trash"></i></button>` : ''}
            </div>
        `;
    });
}

function uploadFoto(e) {
    Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            dataGaleri.push(event.target.result);
            localStorage.setItem('galeri', JSON.stringify(dataGaleri));
            renderGaleri();
            showToast('Foto diupload', 'success');
        };
        reader.readAsDataURL(file);
    });
}

function deleteFoto(index) {
    if(confirm('Hapus foto?')) {
        dataGaleri.splice(index, 1);
        localStorage.setItem('galeri', JSON.stringify(dataGaleri));
        renderGaleri();
        showToast('Foto dihapus', 'success');
    }
}

function viewImage(src) {
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:5000;display:flex;justify-content:center;align-items:center;padding:20px;';
    modal.innerHTML = `<div style="position:relative;"><span onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:-40px;right:0;color:white;font-size:30px;cursor:pointer;">&times;</span><img src="${src}" style="max-width:100%;max-height:80vh;border-radius:10px;"></div>`;
    modal.onclick = e => { if(e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

// ==========================================
// UTILS
// ==========================================

function openModal(id) {
    if (currentUser !== 'admin') {
        showToast('Hanya admin yang bisa edit!', 'error');
        return;
    }
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

function showToast(message, type) {
    let toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + type;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Close modal on outside click
window.onclick = function(e) {
    if(e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
}


