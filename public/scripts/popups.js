/* function checkDate2(i){
    let indi_date_var = ""
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //because january is 00
    let year = today.getFullYear();

    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    let dayTomorrow = String(tomorrow.getDate()).padStart(2, '0');
    let monthTomorrow = String(tomorrow.getMonth() + 1).padStart(2, '0');
    let yearTomorrow = tomorrow.getFullYear();
    
    tomorrow = dayTomorrow + '.' + monthTomorrow + '.' + yearTomorrow;

    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    let dayYesterday = String(yesterday.getDate()).padStart(2, '0');
    let monthYesterday = String(yesterday.getMonth() + 1).padStart(2, '0');
    let yearYesterday = yesterday.getFullYear();
    
    yesterday = dayYesterday + '.' + monthYesterday + '.' + yearYesterday;
    
    today = day + '.' + month + '.' + year;
    if (data[i].dateStart == data[i].dateEnd && data[i].dateStart == today){
        let indi_date_var = "today"
        return indi_date_var;
    }
    if (data[i].dateStart == data[i].dateEnd && data[i].dateStart == tomorrow){
        let indi_date_var = "tomorrow"
        return indi_date_var;
    } 
    if (data[i].dateStart == data[i].dateEnd && data[i].dateStart == yesterday){
        let indi_date_var = "yesterday"
        return indi_date_var;
    }

    if (indi_date_var != ""){
        let indi_date_var2 = indi_date_var
        return indi_date_var2;
    }
} */

function popUpBase() {
    let mainTarget = document.getElementById("mainTarget")
    pop_up_target.innerHTML = `
    <div id="pop_up_base">
    <div class="pop_up_base2">
        <div id=pop_up_header>
            <button id="pop_up_closer" onclick="closePopUp();">x</button>
        </div>
        <div id=pop_up_content_target></div>
        <div id=pop_up_footer></div>
    </div>
    </div>
    <div id="overlay" onclick="closePopUp()"></div>
    `
    mainTarget.appendChild
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
    <div class="buttons_bottom">
        <button id="text_button" onclick="">Clear Search</button>  
        <button id="actual_button" class="searcher" onclick="resultsView();">Search</button>
    </div>
     `
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
            <div class="form-group">
                <label for="price" class="field_text">Price: </label>
                <input type="number" name="price" id="price_field" placeholder="0" min="0" max="9999">
            <p class="field_text">€</p>
            </div>
            <div id="category_choice_field">
                <div class="form-group">
                    <label for="category1" class="field_text">First Category: </label>
                    <select name="category1" id="category1" required>
                    <option hidden disabled selected value> -- </option>
                    <option value="arts">Arts</option>
                    <option value="crafts">Crafts</option>
                    <option value="culture">Culture</option>
                    <option value="food">Food</option>
                    <option value="learning">Learning</option>
                    <option value="music">Music</option>
                    <option value="nature">Nature</option>
                    <option value="other">Other</option>
                    <option value="party">Party</option>
                    <option value="sport">Sport</option>
                    </select>
                </div>
                <div class="form-group">
                <label for="category2" class="field_text">Second Category*: </label>
                <select name="category2" id="category2">
                <option hidden disabled selected value> -- </option>
                    <option value="arts">Arts</option>
                    <option value="crafts">Crafts</option>
                    <option value="culture">Culture</option>
                    <option value="food">Food</option>
                    <option value="learning">Learning</option>
                    <option value="music">Music</option>
                    <option value="nature">Nature</option>
                    <option value="other">Other</option>
                    <option value="party">Party</option>
                    <option value="sport">Sport</option>
                </select>
                </div>
                <div class="form-group">
                <label for="category3" class="field_text">Third Category*: </label>
                <select name="category3" id="category3">
                <option hidden disabled selected value> -- </option>
                    <option value="arts">Arts</option>
                    <option value="crafts">Crafts</option>
                    <option value="culture">Culture</option>
                    <option value="food">Food</option>
                    <option value="learning">Learning</option>
                    <option value="music">Music</option>
                    <option value="nature">Nature</option>
                    <option value="other">Other</option>
                    <option value="party">Party</option>
                    <option value="sport">Sport</option>
                </select>
                <p>* not required</p>
                </div>
            </div>
            </div>
            <div class="form-group">
                <label for="start_date" class="field_text">Date: </label>
                <input type="date" name="start_date" id="start_date" required>
                <p class="field_text"> - </p>
                <input type="date" name="end_date" id="end_date" required>
            </div>
            <div class="form-group">
                <label for="area" class="field_text">Area: </label>
                <input type="text" id="area" name="area" required>
            </div>
            <div class="form-group">
                <label for="location" class="field_text">Location: </label>
                <input type="text" id="location" name="location" required>
            </div>
        </div>
        <div id="in_form_footer"></div>    
    </form>`
    document.getElementById("in_form_footer").innerHTML = `
        <input type="submit" id="actual_button" onclick="" value="Create"></input> `
        const oldFooter = document.getElementById("pop_up_footer");
        oldFooter.remove();

    
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

/* function activityPopup(n) {
    let mainTarget = document.getElementById("mainTarget")
    fullscreen.innerHTML = `
        <div class="indi_fullscreen"> 
            <div class="indi_info_part">
                <div class="indi_img_box">
                    <div class="indi_img">${data[n]}</div>
                    <div class="indi_exit_btn" onclick="closeActivityPopup()"></div>
                    <div class="indi_title"></div>
                </div>
                <div class="indi_text_desc">
                    <div class="indi_desc"></div>
                    <div class="indi_bonus_box">
                        <div class="indi_category_list"></div>
                        <div class="indi_price">${data[n].price}</div>
                        <div class="indi_date">
                    </div>
                    <div class="bottom_bar indi_add_to_list_segment">
                        <div class="bottom_bar_text"> Add to list:</div>
                        <div class="bottom_bar_btns indi_bottom_btns">
                            <a onclick="addToDo(${data[n].id})><button class="bottom_btn">To-do</button></a>
                            <a onclick="addDone(${data[n].id})><button class="bottom_btn">Done</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="overlay" onclick="closeActivityPopUp()"></div>
    `
    mainTarget.appendChild(fullscreen)
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 

    checkDate2(n);
    imgSelect(n);
} */

/* let base = "/images/preview/";
    let images = [base+"arts.jpg", base+"crafts.jpeg", base+"culture.png", base+"food.png", base+"learning.jpg", base+"music.png", base+"nature.webp", base+"party.jpeg", base+"sport.jpg", base+"other.jpg"];
    images = images.reverse();
    for(let k = 0; k < data[i].category.length; k++){ 
        for(let j = 0; j < images.length; j++){ 
            if(data[i].category[k].includes(images[j].substring(16,20))){
                let imageAddress = images[j];
                let previewBox = document.createElement("div");
    previewBox.innerHTML =
    `
        <div class="preview_box_container" onclick="activityPopup(${i});">
            <div class="activity_preview_box_image_container"> 
                <img class="activity_preview_box_image" src="${imageAddress}">                   
                <p class="activity_preview_box_title">${data[i].title}
                <p class="activity_preview_box_description">${displayedText} </p></p>
            </div>

            <div class="preview_box">
                <p class="activity_preview_box_area">${data[i].area}</p>
                <p class="activity_preview_box_time">${data[i].dateStart} -  ${data[i].dateEnd}</p>
                <hr size = "4" width = "100%" color = "black">
            </div>
            
        </div>
    `;
    if(document.getElementById("mainTarget").children[3].length <= i){document.getElementById("previewsTarget").appendChild(previewBox);} 
    }

        }
    } */