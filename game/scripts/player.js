var canFire = true;

$(document).on("click", function(event) {
    fireGun(event.pageX, event.pageY);
    canFire = false;
});

function fireGun(mouseX, mouseY) {
    if (canFire) {
        $('.bullet').css({
            position: 'absolute'
        }).animate({top: mouseY, left: mouseX}, 150,
        function() {
            $('.bullet').css({
                position: 'static',
                left: 'auto',
                top: 'auto'
            });
            canFire = true;
        });
    }
}