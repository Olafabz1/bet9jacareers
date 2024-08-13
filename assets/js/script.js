 let mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 5|| document.documentElement.scrollTop > 5) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

  myButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This enables the smooth scrolling
    });
};