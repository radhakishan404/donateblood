$(document).ready(function () {
    var w = window.innerWidth;

    if (w > 767) {
        $('#menu-jk').scrollToFixed();
    } else {
        $('#menu-jk').scrollToFixed();
    }

})

$(document).ready(function () {
    $(".faq-toggle").click(function () {
        $(this).parent().toggleClass("active");
    })
});

// const buttons = document.querySelectorAll('.faq-toggle');

// buttons.forEach((button) =>{
//     button.addEventListener('click', () =>{
//         button.parentNode.classList.toggle('active')
//     })
// })