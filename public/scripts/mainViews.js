function viewBase() {
    document.getElementById("mainTarget").innerHTML = `
    <div>
        <button onclick="SearchPopUp();">Search</button>
        <button onclick="mainView();">Main</button>
        <button onclick="LoginPopUp();">Profile</button>
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
    previewBoxesMain();
    checkDate();     // This will call in the preview boxes
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