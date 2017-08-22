$(document.getElementsByClassName('lang-button')[0]).click();
$(document.getElementsByClassName('proj-button')[0]).click();

function showLanguageDialog(button) {
    var java_projects = ["Juneau", "Log Searcher", "Neal", "Ore-Logger"];
    var kotlin_projects = ["Felix"];
    var web_projects = ["bbutner.com"];
    var python_projects = ["SpotiPlay"];

    setActiveLanguage(button);

    switch ($(button).html()) {
        case "Java": {
            showProjectList(java_projects);
            break;
        }
        case "Kotlin": {
            showProjectList(kotlin_projects);
            break;
        }
        case "Web": {
            showProjectList(web_projects);
            break;
        }
        case "Python": {
            showProjectList(python_projects);
            break;
        }
    }
}

function showProjectList(projects) {
    $('.project-button-wrapper').empty();

    for (var x = 0; x < projects.length; x++) {
        var button = document.createElement("div");
        button.setAttribute("class", "proj-button centerHoriz");
        button.setAttribute("onclick", "showProjectDetails(this)");
        button.innerHTML = projects[x];
        document.getElementsByClassName('project-button-wrapper')[0].appendChild(button);
    }

    $(document.getElementsByClassName("proj-button")[0]).click();
}

function showProjectDetails(button) {
    setActiveProject(button);

    $.get('../bbutner/project_dialogs/' + $(button).html() + '.txt', function(data) {
        $('#proj-details').html(data);
        appendGithub($(button).html());
    });
}

function setActiveLanguage(button) {
    $('.lang-button').removeClass('lang-button-active');
    $(button).addClass('lang-button-active');
}

function setActiveProject(button) {
    $('.proj-button').removeClass('proj-button-active');
    $(button).addClass('proj-button-active');
}

function appendGithub(projectName) {
            var a = document.createElement("a");
            a.setAttribute("href", "http://github.com/bbutner/" + projectName.replace(" ", "-"));
            a.setAttribute("id", "github");
            var i = document.createElement("i");
            i.setAttribute("class", "fa fa-github");
            i.setAttribute("aria-hidden", "true");
            a.appendChild(i);
            document.getElementById("proj-details").appendChild(a);
}