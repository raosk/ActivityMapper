
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
    <div class="pop_up_register_base">
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

function settingsPopUp() {
    popUpBase();
    const node = document.createElement("h2");
    const textnode = document.createTextNode("Settings");
    node.appendChild(textnode);
    document.getElementById("pop_up_header").appendChild(node);
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_settings_base">
        <div id="settings_field">
        <img id="profile_img" src="images/icons/thick_logo-modified.png" alt="#"> </img>
            <h3 class="user_email">email@email.com</h3>
        </div>
        <img id="bg_img" src="images/icons/hiker_hd.png" alt="#"> </img>
            
        </div>
    `
    document.getElementById("pop_up_footer").innerHTML = `
        <button id="actual_button" onclick="">Log out</button>  
        <button id="text_button">Delete Account</button> `
}

function createPopUp() {
    popUpBase();
    const node = document.createElement("h2");
    const textnode = document.createTextNode("Create New Activity");
    node.appendChild(textnode);
    document.getElementById("pop_up_header").appendChild(node);
    document.getElementById("pop_up_content_target").innerHTML = `
    <div class="pop_up_create_base">
        <div id="create_field">
            <input type="text" id="title" placeholder="Title">
            <input type="text" id="desc" placeholder="Description">
            <p class="field_text">Price: </p>
            <input type="number" id="price" placeholder="0">
            <p class="field_text">€</p>
            <p class="field_text">Categories: </p>
            <div id="category_choice_field">categories here</div>
            <p class="field_text">Date: </p>
            <input type="date" name="start date" id="start_date">
            <p class="field_text"> - </p>
            <input type="date" name="end date" id="end_date">
            <p class="field_text">Area: </p>
            <input type="text" id="area">
            <p class="field_text">Location: </p>
            <input type="text" id="location">
        </div>
    </div>`
    document.getElementById("pop_up_footer").innerHTML = `
        <button id="actual_button" onclick="">Create</button>   `
}


function closePopUp() {
    let popUpBoard = document.getElementById("pop_up_base");
    popUpBoard.innerHTML = ``;
    popUpBoard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}
