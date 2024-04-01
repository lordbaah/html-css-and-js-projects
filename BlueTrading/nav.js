export async function nav(){
    const mobileMenuBtn = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".mobile-nav__links");
    const mobileLinks = document.querySelectorAll(".nav__links");
    // const overlay = document.querySelector(".overlay");

    // state
    let isMenuOpen = false;
    // console.log(isMenuOpen);

    const openMenu = () => {
        // this makes isMenuOpen true. isMenuOpen is reassigned to !isMenuOpen which makes it true
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen === true) {
            mobileMenu.style.display = 'flex';
            // overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.style.display = 'none';
            // overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        // console.log(isMenuOpen);
    }

    // calling mobileMenuIcon click event
    mobileMenuBtn.addEventListener('click', openMenu);

    // adding click event to links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // reselecting mobileNav to be false
            isMenuOpen = false;

            mobileMenu.style.display = 'none';
            // overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
}