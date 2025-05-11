document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); 
});


const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('show'); 
    });
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); 
});
document.addEventListener('DOMContentLoaded', function() {
  const projectsGrid = document.querySelector('.projects-grid');
  const projectCards = document.querySelectorAll('.project-card');
  let currentIndex = 0; // Indeks proyek yang ditampilkan

  // Fungsi untuk menggeser ke kanan
  document.getElementById('scroll-right').addEventListener('click', function() {
    if (currentIndex < projectCards.length - 1) {
      currentIndex++;
      updateProjectDisplay();
    }
  });

  // Fungsi untuk menggeser ke kiri
  document.getElementById('scroll-left').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateProjectDisplay();
    }
  });

  // Fungsi untuk memperbarui tampilan proyek
  function updateProjectDisplay() {
    const offset = -currentIndex * 300; // Hitung offset berdasarkan lebar kartu
    projectsGrid.style.transform = `translateX(${offset}px)`; // Geser konten
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const profilePic = document.getElementById('profile-pic');

  profilePic.addEventListener('click', function() {
    // Tambahkan kelas 'clicked' untuk efek zoom
    profilePic.classList.toggle('clicked');

    // Menghapus kelas setelah animasi selesai
    setTimeout(() => {
      profilePic.classList.remove('clicked');
    }, 300); // Waktu yang sama dengan durasi transisi CSS
  });
});

