let randomStrings = ["a bunch of coders", "progresstinating", "in coderausch"];

window.onload = () => {
    let randomIndex = Math.floor(Math.random() * randomStrings.length);
    document.querySelector("span.random-slogan").innerHTML = randomStrings[randomIndex];

    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
    tl.to("span.random-slogan", {y: '0%', duration: .5});
    tl.to("span.random-slogan", {y: '-100%', duration: .5, delay: 1.5});
    tl.to("span.name", {y: '-100%', duration: .5}, "-=.5");
};
