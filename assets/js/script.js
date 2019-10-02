$('.box').circursor({
    size1: "4px",
    width1: "4px",
    color1: "rgba(255, 235, 242, 0.9)",
    duration1: "200",
    size2: "30px",
    width2: "30px",
    color2: "rgba(217, 0, 70, 0.69)",
    duration2: "2000",
    easing: "easeOut"
});

$('html').easeScroll({
    frameRate: 30,
    animationTime: 2000,
    stepSize: 60,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
});
