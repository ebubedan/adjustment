document.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

/*document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('a').classList.add('active');
});



// Function to close the menu when a link is clicked
function closeMenu() {
    document.getElementById('menuToggle').checked = false;
    document.querySelector('a').classList.remove('active');
  }*/

/*document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const      nav = document.querySelector('nav');
});

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            // Checkbox is checked, show the menu
            nav.style.display = 'block';
        } else {
            // Checkbox is unchecked, hide the menu
            nav.style.display = 'none';
        }
    });


var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menuToggle.checked = false;
        nav.style.display = 'none';
    });
});
function closeMenu() {
    document.getElementById('menuToggle').checked = false; // Set to false to hide the menu
    document.querySelector('nav').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            // Checkbox is checked, show the menu
            nav.style.display = 'block';
        } else {
            // Checkbox is unchecked, hide the menu
            nav.style.display = 'none';
        }
    });

    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            nav.style.display = 'none';
        });
    });

    function closeMenu() {
        document.getElementById('menuToggle').checked = false; // Set to false to hide the menu
        document.querySelector('nav').style.display = 'none';
    }
});*/

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired.');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    console.log('menuToggle:', menuToggle);
    console.log('nav:', nav);

    menuToggle.addEventListener('change', function () {
        console.log('Menu toggle changed:', menuToggle.checked);
        if (menuToggle.checked) {
            // Checkbox is checked, show the menu
            nav.style.display = 'block';
        } else {
            // Checkbox is unchecked, hide the menu
            nav.style.display = 'none';
        }
    });

    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            nav.style.display = 'none';
        });
    });

    function closeMenu() {
        document.getElementById('menuToggle').checked = false; // Set to false to hide the menu
        document.querySelector('nav').style.display = 'none';
    }
});

