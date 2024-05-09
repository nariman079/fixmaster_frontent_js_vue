document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle("active");
      });
    });
  });