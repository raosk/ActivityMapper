
function popUpBase() {
    document.getElementById("pop_up_target").innerHTML = `
    <div id="pop_up_base">
        <div id=pop_up_header>
            <button id="pop_up_closer" onclick="closePopUp();">X</button>
        </div>
        <div id=pop_up_content_target></div>
        <div id=pop_up_footer></div>
    </div>
    <div id="overlay" onclick="closePopUp()"></div>
    `
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function detailsPopUp() {
    popUpBase()
    //detail view stuff here
}


function searchPopUp() {
    popUpBase()
    const node = document.createElement("h2");
    const textnode = document.createTextNode("Search");
    node.appendChild(textnode);
    document.getElementById("pop_up_header").appendChild(node);
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_search_base">
        <div id="search_field">
            <div id="parameter_field">
                <p class="field_text">start date</p>
                <input type="date" name="start date" id="start_date">
                <p class="field_text">end date</p>
                <input type="date" name="end date" id="end_date">
                <p class="field_text">price</p>
                <input type="number" name="price" id="price">
            </div>
            <p class="field_text">free word search</p>
            <input type="text" id="word_search">
            <p id="added_info">if any fields are left empty, they will not be considered in the search</p>
        </div>
              
            
        </div>
    `
    document.getElementById("pop_up_footer").innerHTML = `
        <button id="text_button" onclick="">Clear Search</button>  
        <button id="actual_button" class="searcher" onclick="resultsView();">Search</button> `
    }

function isLoggedIn() { /* checks for whether or not the user is logged in, code and more somewhere else maybe*/ 
    if (false) {
        console.log("brings to profile view if logged in")
    }
    else {
        loginPopUp();
    }
}

function loginPopUp() {
    popUpBase()
    const node = document.createElement("h2");
    const textnode = document.createTextNode("Log in");
    node.appendChild(textnode);
    document.getElementById("pop_up_header").appendChild(node);
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_login_base">
        <div id="login_field">
            <p class="field_text">username</p>
            <input type="text" id="username" placeholder="username">
            <p class="field_text">password</p>
            <input type="password" id="password" placeholder="password">
            </div>
              
            
        </div>
    `
    document.getElementById("pop_up_footer").innerHTML = `
        <button id="text_button" onclick=" registerPopUp();">Not a member yet?</button> 
        <button id="actual_button" onclick="">Login</button>  `
}

function registerPopUp() {
    popUpBase();
    const node = document.createElement("h2");
    const textnode = document.createTextNode("Register");
    node.appendChild(textnode);
    document.getElementById("pop_up_header").appendChild(node);
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_login_base">
        <div id="register_field">
            <p class="field_text">email</p>
            <input type="email" id="email" placeholder="email@email.com">
            <p class="field_text">username</p>
            <input type="text" id="username" placeholder="username">
            <p class="field_text">password</p>
            <input type="password" id="password" placeholder="password">
            </div>
        </div>`
    document.getElementById("pop_up_footer").innerHTML = `
        <button id="text_button" onclick=" loginPopUp();">Already a member??</button> 
        <button id="actual_button" onclick="">Register</button>    `
}


function closePopUp() {
    let popUpBoard = document.getElementById("pop_up_base");
    popUpBoard.innerHTML = ``;
    popUpBoard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}
