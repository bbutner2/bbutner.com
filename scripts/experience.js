var active = null;


function showExperienceDialog(button) {
    var language = $(button).children().eq(1).attr('id');
    $('.bar-language-wrapper').html("");

    if (active != null) {
        $('#' + active + '-bar').animate({
            'height': '0'
        }, 300);
    }

    if (active == language) {
        $('.bar-language-wrapper').animate({
            'height': '0'
        }, 300);

        active = null;
    } else {
        active = language;

        $('#' + language + '-bar').animate({
            'height': '200px'
        }, 300, function() {
            setExperienceDialog(language);
        });
    }
}

function setExperienceDialog(language) {
    $.get('../bbutner/language_dialogs/' + language + '.txt', function(data) {
        $('#' + language + "-bar").html("<p>" + data + "</p>");
    });
}