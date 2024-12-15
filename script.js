gsap.from('.container', {
    width: 0,
    duration: 1,
    ease: Power4.out
});

gsap.from('.nav li', {
    opacity: 0,
    y: -10,
    duration: .5,
    stagger: .1,
    delay: 1.1
});

gsap.from('.search li', {
    opacity: 0,
    y: -10,
    duration: .5,
    stagger: .1,
    delay: 1.1
});

gsap.from('.bars', {
    opacity: 0,
    x: -10,
    duration: .5,
    stagger: .1,
    delay: 1.1
});

gsap.from('.social li', {
    opacity: 0,
    x: -10,
    duration: .5,
    stagger: .1,
    delay: 1.1
});

gsap.from('.disc li', {
    opacity: 0,
    x: -10,
    duration: .5,
    stagger: .1,
    delay: 1.1
});

gsap.from('.text', {
    y: 50,
    opacity: 0,
    delay: 1.1,
});

gsap.from('.img1', {
    y: 50,
    opacity: 0,
    delay: 1.3,
});

function next(c){
    document.querySelector('.container').style.background = c;
    gsap.to('.img1', {
        y: 50,
        opacity: 0,
    });

    gsap.to('.img2', {
        y: '-120px',
        opacity: 1,
        delay: 1,
    });
}

function prev(c){
    document.querySelector('.container').style.background = c;
    gsap.to('.img2', {
        y: 50,
        opacity: 0,
    });

    gsap.to('.img1', {
        y: '-120px',
        opacity: 1,
        delay: 1,
    });
}