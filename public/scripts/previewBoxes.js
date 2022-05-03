let data;   // This will hold either the real data from the DB or our dummy data
let useDummyData = false;
if (useDummyData === true) {console.log("You are currently using the dummy data. You can change 'useDummyData' to 'false' to use the DB instead.")}
else {console.log("You are currently set to use the DB. You can change 'useDummyData' to 'true' to use the dummy data instead.")}
console.log("DUMMY DATA:");     // Just for testing
console.log(dummyData);         // Just for testing

//find out user's screen width:
let screenWidth = window.innerWidth;
let characterAmount = screenWidth*0.2
if (screenWidth >= 550){
    characterAmount = screenWidth*0.09;
}
if (screenWidth >= 1200){
    characterAmount = screenWidth*0.063
}

// Fetch the data from DB
async function dataRequest(path){
    if (useDummyData == true) {
        data = dummyData;
    } else {
        const response = await fetch(path)
        const json = await response.json()
        data = json.results
        console.log("REAL DATA:");      // Just for testing
        console.log(data);              // Just for testing
    }
} 

async function previewBoxesMain(path) {
    await dataRequest(path)
    await previewBoxes()
    checkDate();
}

function previewBoxes() {
    let displayedText = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].description.length > characterAmount){
            displayedText = data[i].description.substring(0,characterAmount) + "...";
        }else {
            displayedText = data[i].description;
        }
        
        let base = "/images/preview/";
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
                    <p class="activity_preview_box_time">${data[i].date_start} -  ${data[i].date_end}</p>
                    <hr size = "4" width = "100%" color = "black">
                </div>
                
            </div>
        `;
        if(document.getElementById("previewsTarget").children.length <= i){document.getElementById("previewsTarget").appendChild(previewBox);} 
        }

            }
        }
        
        
    }
    //checkDate();
}

function checkDate() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].date_start == data[i].date_end){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area">${data[i].area}</p>
            <p class="activity_preview_box_time">${data[i].date_start}</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);                    
        }
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
        if (data[i].date_start == data[i].date_end && data[i].date_start == today){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area">${data[i].area}</p>
            <p class="activity_preview_box_time">Today</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);
        }
        if (data[i].date_start == data[i].date_end && data[i].date_start == tomorrow){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area">${data[i].area}</p>
            <p class="activity_preview_box_time">Tomorrow</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);
        } 
        if (data[i].date_start == data[i].date_end && data[i].date_start == yesterday){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area">${data[i].area}</p>
            <p class="activity_preview_box_time">Yesterday</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);
        }       
    }
}