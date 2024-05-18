const mobileMenu = document.querySelector(".mobile_nav");
const openBtn = document.querySelector(".mobile__menu");
const closeBtn = document.querySelector(".close_menu");
const logo = document.querySelector(".logo");

const openMenu = () => {
    // mobileMenu.style.margin = '0';
    mobileMenu.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    logo.style.color = '#f1f5f9';
    document.body.style.overflow = 'hidden';
}

const closeMenu = () => {
    mobileMenu.style.display = 'none';
    openBtn.style.display = 'flex';
    closeBtn.style.display = 'none';
    logo.style.color = '#070a13';
    document.body.style.overflow = 'auto';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


// Accordins
const accordinHeads = document.querySelectorAll('.accordion__head');
const accordinBodys = document.querySelectorAll('.accordion__body');
const accordinArrows = document.querySelectorAll('.accordion__head_arrow');

accordinHeads.forEach((accordinHead, index) => {
    accordinHead.addEventListener('click', () => {
    
        accordinBodys.forEach((accordinBody, i) => {
            if (i !== index) {
                accordinBody.classList.remove('active'); // Close other accordions
            }
        });

        accordinArrows.forEach((accordinArrow, i) => {
            if (i !== index) {
                accordinArrow.classList.remove('active'); // Close other accordions
            }
        });

        accordinBodys[index].classList.toggle('active');
        accordinArrows[index].classList.toggle('active');
    });
    
});
