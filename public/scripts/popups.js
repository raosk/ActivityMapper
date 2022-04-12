
function popUpBase() {
    document.getElementById("pop_up_target").innerHTML = `
    <div id="pop_up_base">
        <button id="pop_up_closer" onclick="closePopUp();">X</button>
        <div id=pop_up_content_target></div>
    </div>
    <div id="overlay" onclick="closePopUp()"></div>
    `
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

//ignore for now
function SearchPopUp() {
    popUpBase()
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_search_base">
        <h2>Search</h2>
        <button onclick="">Clear Search</button>  
        <button onclick="resultsView(); closePopUp();">Search</button>  
    </div>
    `
}

function LoginPopUp() {
    popUpBase()
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_login_base">
        <h2>Login</h2>
        <button onclick="">Not a member yet?</button>  
        <button onclick="">Login</button>  
    </div>
    `
}
///ignoooreeee


function closePopUp() {
    let popUpBoard = document.getElementById("pop_up_base");
    popUpBoard.innerHTML = ``;
    popUpBoard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}
