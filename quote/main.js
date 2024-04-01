
document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const quote = document.querySelector(".qoute");
    const author = document.querySelector(".author");
    const button = document.querySelector(".btn");
    const tags = document.querySelector(".tag");

    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = `" ${data.content} "`
        author.textContent =`~ ${data.author}`
        tags.textContent = data.tags[0]
        // console.log(data);
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
});