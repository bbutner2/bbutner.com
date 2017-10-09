var timer = false;

function createEnemy() {
    var colors = ["red", "blue", "green", "purple", "yellow", "pink"];

    var size = randomGen(50, 150);

    var enemy = document.createElement("div");

    $(enemy).css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[randomGen(0, colors.length - 1)],
        "position": "absolute",
        "border-radius": "50%"
    });

    $(enemy).appendTo($('body'));

    spawnEnemy(enemy);
}

function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function runTimer() {
    setTimeout(function() {
        createEnemy();
    }, 1000)
}

function spawnEnemy(enemy) {
    switch (randomGen(0, 3)) {
        case 0:
            $(enemy).css({
                "top": "0px",
                "left": randomGen(0, $('body').width()) + "px"
            });
            break;
        case 1:
            $(enemy).css({
                "left": "0px",
                "top": randomGen(0, $('body').height()) + "px"
            });
            break;
        case 2:
            $(enemy).css({
                "bottom": "0px",
                "right": randomGen(0, $('body').width()) + "px"
            });
            break;
        case 3:
            $(enemy).css({
                "right": "0px",
                "bottom": randomGen(0, $('body').height()) + "px"
            });
            break;
    }

    $(enemy).animate({
        left: $('.test').position().left,
        top: $('.test').position().top
    }, randomGen(3000, 10000));

    runTimer();
}