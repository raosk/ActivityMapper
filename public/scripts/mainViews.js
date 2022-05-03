function viewBase() {
    document.getElementById("mainTarget").innerHTML = `
    <div class="flexbox-container">
    <div class="navbar">
        <a href="#"><img class="logo-img" img src="images/icons/thick_logo-modified.png" alt="#" width="50px" height="50px"></a>
        <ul class="desktop-list">
        <li><i class="fa-solid fa-user" onclick="isLoggedIn()"></i></li>
        <li><i class="fa-solid fa-globe" onclick="isLoggedIn()"></i></li>
        <li><i class="fa-solid fa-magnifying-glass" onclick="searchPopUp()"></i></li>
        </ul>
        <ul class="mobile-list">
            <li><i class="fa-solid fa-user" onclick="isLoggedIn()"></i></li>
            <li><i class="fa-solid fa-globe" onclick="isLoggedIn()"></i></li>
            <li><i class="fa-solid fa-magnifying-glass" onclick="searchPopUp()"></i></li>
        </ul>
    </div>

    <div class="navbar2">
    <ul class="desktop-activity-list">
        <i class="fa-solid fa-table-list"onclick="todoView();"></i>
        <i class="fa-solid fa-check"onclick="doneView();"></i>
        <i class="fa-solid fa-circle-plus"onclick="createPopUp();"></i>
        <i class="fa-solid fa-gear"onclick="settingsPopUp();"></i>
        <li onclick="todoView();"><a href="#">To-do</a></li>
        <li onclick="doneView();"><a href="#">Done</a></li>
        <li onclick="createPopUp();"><a href="#">Create</a></li>
        <li onclick="settingsPopUp();"><a href="#">Settings</a></li>
    </ul>

    <ul class="mobile-activity-list">
        <li onclick="todoView();"><a href="#">To-do</a></li>
        <li onclick="doneView();"><a href="#">Done</a></li>
        <li onclick="createPopUp();"><a href="#">Create</a></li>
        <li onclick="settingsPopUp();"><a href="#">Settings</a></li>
    </ul>
        </div>
        </div>

    <div>
	    <div id="titleBarTarget"></div>
    </div>
    <div id="previewsTarget"></div>
    `
}

function mainView() {
    viewBase();
    document.getElementById("titleBarTarget").innerHTML = `
    <div>
    </div>
    `
    previewBoxesMain("/new");
}

function resultsView() {
    viewBase();
    closePopUp();
    document.getElementById("titleBarTarget").innerHTML = `
    <div id="previewsTarget">
    
    </div>
    `
    previewBoxesResults();
}

function doneView() {
    viewBase();
    document.getElementById("titleBarTarget").innerHTML = `
    <div>
    </div>
    `
    previewBoxesMain("/profile/done");
}

function todoView() {
    viewBase();
    document.getElementById("titleBarTarget").innerHTML = `
    <div>
    </div>
    `
    previewBoxesMain("/profile/todo");
}