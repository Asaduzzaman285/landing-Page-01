function selectButton(button) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('.buttonbox .btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // Add 'selected' class to the "Specs" button
    var specsButton = document.querySelector('.buttonbox .btn:nth-child(1)'); // Selecting the "Specs" button
    specsButton.classList.add('selected');
}




function selectColor(dot) {
    // Remove 'selected' class from all dots
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(d) {
      d.classList.remove('selected');
    });
  
    // Add 'selected' class to the clicked dot
    dot.classList.add('selected');
  }
  document.getElementById('grabbtn').addEventListener('click', function() {
    var button = this;
    button.classList.add('clicked');
    button.textContent = 'Grabbed';

    // Show alert
    var alertBox = document.getElementById('alert');
    alertBox.style.display = 'block';

    // Hide alert after 3-4 seconds
    setTimeout(function() {
      alertBox.style.display = 'none';
    }, 3000);
  });
function replaceImage(imageSrc) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    mainImage.classList.remove('rounded'); 
    mainImage.classList.add('h-100', 'w-100'); 
    updateNavigationButtons();

    // Destroy previous izoomify instance (if exists)
    $(".target").izoomify('destroy');

    // Initialize izoomify on the target container again
    $(".target").izoomify();
}
function updateNavigationButtons() {
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
    var currentIndex = Array.from(swiperSlides).findIndex(slide => slide.classList.contains('swiper-slide-active'));
    var prevButton = document.querySelector('.swiper-button-prev');
    var nextButton = document.querySelector('.swiper-button-next');
    
    // Set styles for previous button
    if (currentIndex === 0) {
        prevButton.style.color = '#6c757d'; // muted gray
        prevButton.style.cursor = 'allowed';
    } else {
        prevButton.style.color = 'black';
        prevButton.style.cursor = 'pointer';
    }
    
    // Set styles for next button
    if (currentIndex === swiperSlides.length - 1) {
        nextButton.style.color = '#6c757d';
        nextButton.style.cursor = 'allowed';
    } else {
        nextButton.style.color = 'black';
        nextButton.style.cursor = 'pointer';
    }
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            updateNavigationButtons(); // Update navigation buttons after slide change
        }
    }
});