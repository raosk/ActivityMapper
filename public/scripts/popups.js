function popUpBase() {
    document.getElementById("mainTarget").innerHTML = `
    <div class="popUpBase">
        <button onclick="mainView();">X</button>
        <div id=popUpContentTarget></div>
    </div>
    `
}

function SearchPopUp() {
    popUpBase()
    document.getElementById("popUpContentTarget").innerHTML = `
    <div class="popUpBase">
        <h2>Search</h2>
        <button onclick="">Clear Search</button>  
        <button onclick="resultsView();">Search</button>  
    </div>
    `
}

function LoginPopUp() {
    popUpBase()
    document.getElementById("popUpContentTarget").innerHTML = `
    <div class="popUpBase">
        <h2>Login</h2>
        <button onclick="">Not a member yet?</button>  
        <button onclick="">Login</button>  
    </div>
    `
}


