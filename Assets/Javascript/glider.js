// --------------- AosJS -----------------------

AOS.init();

// --------------- GlideJS -----------------------

var checkbox = document.querySelector('#options-hoverpause-checkbox')

var glide = new Glide('.glide', {
    hoverpause: checkbox.checked,
    arrows: true,
    autoplay: 10000,
    hoverpause: true,
    perView: 1
})

checkbox.addEventListener('change', function () {
    glide.update({
        hoverpause: checkbox.checked
    })
})

glide.mount()