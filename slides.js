jvSlidesIndex = 0;
logSlidesIndex = 0;

function showSlides() {
    showJVSlides(jvSlidesIndex);
    showLogSlides(logSlidesIndex);
}

function showJVSlides(newPotentialSlide) {
    let jvSlides = document.getElementById("jeux_videos").getElementsByClassName("slide");
    let dots = document.getElementById("jeux_videos").getElementsByClassName("dot");
    console.log(jvSlides.length);
    jvSlidesIndex = newPotentialSlide % jvSlides.length;

    var i;
    for(i = 0; i < jvSlides.length; ++i){
        jvSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    var id2 = (jvSlidesIndex + 1) % jvSlides.length;
    var elem1 = document.getElementById("jv" + jvSlidesIndex);
    var elem2 = document.getElementById("jv" + id2);

    elem1.parentNode.insertBefore(elem1, elem2);

    elem1.style.display = "inline-block";
    elem2.style.display = "inline-block";

    dots[jvSlidesIndex].className += " active";
}

function showLogSlides(newPotentialSlide) {
    let logSlides = document.getElementById("logiciels").getElementsByClassName("slide");
    let dots = document.getElementById("logiciels").getElementsByClassName("dot");
    logSlidesIndex = newPotentialSlide % logSlides.length;

    var i;
    for(i = 0; i < logSlides.length; ++i){
        logSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    var id2 = (logSlidesIndex + 1) % logSlides.length;
    var elem1 = document.getElementById("log" + logSlidesIndex);
    var elem2 = document.getElementById("log" + id2);

    elem1.parentNode.insertBefore(elem1, elem2);

    elem1.style.display = "inline-block";
    elem2.style.display = "inline-block";

    dots[logSlidesIndex].className += " active";
}

function showNextJVSlides() {
    showJVSlides(jvSlidesIndex += 1)
}

function showPreviousJVSlides() {
    showJVSlides(jvSlidesIndex -= 1)
}

function showExplicitJVSlides(slideIndex) {
    showJVSlides(jvSlidesIndex = slideIndex)
}



function showNextLogSlides() {
    showLogSlides(logSlidesIndex += 1)
}

function showPreviousLogSlides() {
    showLogSlides(logSlidesIndex -= 1)
}

function showExplicitLogSlides(slideIndex) {
    showLogSlides(logSlidesIndex = slideIndex)
}