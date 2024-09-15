document.addEventListener('DOMContentLoaded', function () {
    showSection('about');  // Always show 'About' section on page load or refresh
});

const sectionsOrder = ['about', 'work', 'skills', 'contact'];
let currentSectionIndex = 0;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    updateNavLine(sectionId);

    // Highlight the current link
    const links = document.querySelectorAll('.header-links div');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.id === `${sectionId}-link`) {
            link.classList.add('active');
        }
    });

    currentSectionIndex = sectionsOrder.indexOf(sectionId);
    localStorage.setItem('lastSection', sectionId);
}

function updateNavLine(sectionId) {
    const links = document.querySelectorAll('.header-links div');
    const line = document.getElementById('nav-line');
    links.forEach(link => {
        if (link.id === `${sectionId}-link`) {
            const linkWidth = link.offsetWidth;
            const linkLeft = link.offsetLeft;
            line.style.width = `${linkWidth}px`;
            line.style.left = `${linkLeft}px`;
        }
    });
}

function nextSection() {
    if (currentSectionIndex < sectionsOrder.length - 1) {
        currentSectionIndex++;
        showSection(sectionsOrder[currentSectionIndex]);
    }
}

function previousSection() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showSection(sectionsOrder[currentSectionIndex]);
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

    const icon = document.getElementById('mobile-icon');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('mobile-icon').classList.remove('fa-times');
    document.getElementById('mobile-icon').classList.add('fa-bars');
}

function openResume() {
    window.open('Resume Software Ayman Charania.pdf', '_blank');
}



let currentWorkSlide = 0;
const workSlides = document.querySelectorAll('.slide');
const slideButtons = document.querySelectorAll('.slide-button');

function showWorkSlide(index) {
    workSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        slideButtons[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            slideButtons[i].classList.add('active');
        }
    });
    currentWorkSlide = index;
}

// Initialize the first slide as active
showWorkSlide(0);


