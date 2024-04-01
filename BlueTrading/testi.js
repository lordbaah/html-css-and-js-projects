
export async function testimonial(){
    const testimonials = document.querySelectorAll(".testimonial-box");
    const arrowForward = document.querySelector(".testi-arrow-right");
    const arrowBackward = document.querySelector(".testi-arrow-left");

    let currentTestimonial = 1;

    const showTestimonial = (n) => {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
            testimonials[n -1].classList.add('active', 'prev');
        });
    }
    
    arrowForward.addEventListener("click", () =>{
        if (currentTestimonial === testimonials.length) {
            currentTestimonial = 1;
          } else {
            currentTestimonial++;
        }
        showTestimonial(currentTestimonial);
    });

    arrowBackward.addEventListener("click", () =>{
        if (currentTestimonial === 1) {
            currentTestimonial = testimonials.length;
          } else {
            currentTestimonial--;
        }
        showTestimonial(currentTestimonial);
    });

    showTestimonial(currentTestimonial);
}