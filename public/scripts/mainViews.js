function viewBase() {
    document.getElementById("mainTarget").innerHTML = `
    
    <div class="navbar">
    <a href="#"><img class="logo-img" img src="images/icons/thick_logo-modified.png" alt="#" width="50px" height="50px"></a>
    <ul class="desktop-list">
        <li><a href="#">Search</a></li>
        <li><a href="#">Profile</a></li>

    </ul>
    <ul class="mobile-list">
      <li><i class="fa-solid fa-user" onclick="SearchPopUp()"></i></li>
      <li><i class="fa-solid fa-magnifying-glass" onclick="mainView()"></i></li>
      <li><i class="fa-solid fa-magnifying-glass" onclick="LoginPopUp()"></i></li>
    </ul>
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
        <h1>Activities</h1>
        <p>New Upcoming Popular Past</p>
    </div>
    `
    previewBoxesMain();     // This will call in the preview boxes
}

function resultsView() {
    viewBase();
    document.getElementById("titleBarTarget").innerHTML = `
    <div>
        <h1>Results</h1>
        <p>New Upcoming Popular Past</p>
    </div>
    `
    previewBoxesResults();     // This will call in the preview boxes
}

