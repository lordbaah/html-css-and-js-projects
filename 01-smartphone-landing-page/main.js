'strict mode'
// mobile nav
const buttonOpen = document.querySelector(".mobile_menu_icon");
const navMenu = document.querySelector(".mobile__menu");
const buttonClose = document.querySelector(".mobile_menu_close");


buttonOpen.addEventListener("click", function() {
    navMenu.style.display = 'flex';
    buttonClose.style.visibility = 'unset';
    buttonOpen.style.display = 'none';
});

buttonClose.addEventListener("click", function() {
    navMenu.style.display = 'none';
    buttonClose.style.visibility = 'hidden';
    buttonOpen.style.display = 'block';
});

// accordion
const  accordinOpenBtns = document.querySelectorAll(".fq__open");
const  accordinCloseBtns = document.querySelectorAll(".fq_close");
const  accordinContents = document.querySelectorAll(".fq__text");


// Add event listeners for opening accordion
accordinOpenBtns.forEach((openBtn, index) => {
    openBtn.addEventListener('click', () => {
        // Toggle display of accordion content
        accordinContents.forEach((content, i) => {
            if (i !== index) {
                content.style.display = 'none'; // Close other accordions
            }
        });
        accordinContents[index].style.display = 'block'; // Open current accordion
    });
});

// Add event listeners for closing accordion
accordinCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        // Hide all accordion contents
        accordinContents.forEach((content) => {
            content.style.display = 'none';
        });
    });
});