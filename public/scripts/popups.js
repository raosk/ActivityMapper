
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
    <form class="pop_up_login_base">
        <div id="login_field">
            <p class="field_text">username</p>
            <input type="text" id="username" placeholder="username" required>
            <p class="field_text">password</p>
            <input type="password" id="password" placeholder="password" required>
            </div>
            <div id="in_form_footer"></div>
            
        </form>
    `
    document.getElementById("in_form_footer").innerHTML = `
        <button id="text_button" onclick=" registerPopUp();">Not a member yet?</button> 
        <button id="actual_button" onclick="">Login</button>  `
    const oldFooter = document.getElementById("pop_up_footer");
    oldFooter.remove();
}

function registerPopUp() {
    popUpBase();
    const node = document.createElement("h2");
    const textnode = document.createTextNode("Register");
    node.appendChild(textnode);
    document.getElementById("pop_up_header").appendChild(node);
    document.getElementById("pop_up_content_target").innerHTML = `
    <form class="pop_up_register_base">
        <div id="register_field">
            <p class="field_text">email</p>
            <input type="email" id="email" placeholder="email@email.com" required>
            <p class="field_text">username</p>
            <input type="text" id="username" placeholder="username" required>
            <p class="field_text">password</p>
            <input type="password" id="password" placeholder="password" required>
            </div>
            <div id="in_form_footer"></div>
        </form>`
    document.getElementById("in_form_footer").innerHTML = `
        <button id="text_button" onclick=" loginPopUp();">Already a member??</button> 
        <input type="submit" id="actual_button" value="Register" onclick=""></input>    `
    const oldFooter = document.getElementById("pop_up_footer");
    oldFooter.remove();
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
    <form id="create_field">
        <div class="pop_up_create_base">
            <input type="text" id="title_field" placeholder="Title" required>
            <input type="text" id="desc_field" placeholder="Description" required>
            <label for="price" class="field_text">Price: </label>
            <input type="number" name="price" id="price_field" placeholder="0" min="0" max="9999">
            <p class="field_text">€</p>
            <p class="field_text">Categories: </p>
            <div id="category_choice_field">
                <input type="checkbox" class="catCheck" id="nature" name="nature" value="nature" onclick="limitChecks(this);">
                <label for="nature">Nature</label>
                <input type="checkbox" class="catCheck" id="sport" name="sport" value="sport" onclick="limitChecks(this);">
                <label for="sport">Sport</label>
                <input type="checkbox" class="catCheck" id="culture" name="culture" value="culture" onclick="limitChecks(this);">
                <label for="culture">Culture</label>
                <input type="checkbox" class="catCheck" id="music" name="music" value="music" onclick="limitChecks(this);">
                <label for="music">Music</label>
                <input type="checkbox" class="catCheck" id="arts" name="arts" value="arts" onclick="limitChecks(this);">
                <label for="arts">Arts</label>
                <input type="checkbox" class="catCheck" id="crafts" name="crafts" value="crafts" onclick="limitChecks(this);">
                <label for="crafts">Crafts</label><br>
                <input type="checkbox" class="catCheck" id="learning" name="learning" value="learning" onclick="limitChecks(this);">
                <label for="learning">Learning</label>
                <input type="checkbox" class="catCheck" id="party" name="party" value="party" onclick="limitChecks(this);">
                <label for="party">Party</label>
            </div>
            <p class="field_text">Date: </p>
            <input type="date" name="start date" id="start_date" required>
            <p class="field_text"> - </p>
            <input type="date" name="end date" id="end_date" required>
            <p class="field_text">Area: </p>
            <input type="text" id="area" required>
            <p class="field_text">Location: </p>
            <input type="text" id="location" required>
        </div>
        <div id="in_form_footer"></div>    
    </form>`
    document.getElementById("in_form_footer").innerHTML = `
        <input type="submit" id="actual_button" onclick="" value="Create"></input> `
        const oldFooter = document.getElementById("pop_up_footer");
        oldFooter.remove();

    
}
let chosenCats = [];
function limitChecks(ele) {
    
    let catCheckList = document.querySelectorAll(".catCheck");
    
    if (document.getElementById(`${ele.id}`).checked) {
        actualLimitCheck();
        if (chosenCats.length < 3) {
            chosenCats.push(`${ele.id}`);
            console.log(chosenCats);
            
        }
    }
    else {
        actualLimitCheck();
            console.log(`${ele.id} to be removed from array`);
            chosenCats = chosenCats.filter(function(item) {
                return item != `${ele.id}`;
            });
            console.log("modified chosenCats below:");
            console.log(chosenCats);

            
        
        /*let catCheckList = document.querySelectorAll(".catCheck");
            for (let i = 0; i < catCheckList.length; i++) {
                catCheckList[i].disabled = false;
                
                
            }*/
    }
    
}
function actualLimitCheck() {
    let catCheckList = document.querySelectorAll(".catCheck");
    if (chosenCats.length <= 3) {
        for (let i = 0; i < catCheckList.length; i++) {
                    document.getElementById(`${catCheckList[i].id}`).disabled = false;
                }
    }
    while (chosenCats.length >= 3) {
        console.log("no more than 3 categories can be selected");
        for (let i = 0; i < catCheckList.length; i++) {
            if (document.getElementById(`${catCheckList[i].id}`).checked === false) {
                document.getElementById(`${catCheckList[i].id}`).disabled = true;
            } 
            console.log(catCheckList[i]);
            
        }
    }
}
/* ^^^currently testing out forms, required inputs and submit actions*/


function closePopUp() {
    let popUpBoard = document.getElementById("pop_up_base");
    popUpBoard.innerHTML = ``;
    popUpBoard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    chosenCats = [];
}
