function previewBoxesMain() {
    let displayedText = "";
    for (let i = 0; i < dummyData.length; i++) {
        if (dummyData[i].description.length > 70){
            displayedText = dummyData[i].description.substring(0,70) + "...";
        }else {
            displayedText = dummyData[i].description;
        }
        console.log(displayedText);
        
        let previewBox = document.createElement("div");
        previewBox.innerHTML =
        `
            <div class="preview_box_container">
                <div class="activity_preview_box_image_container"> 
                    <img class="activity_preview_box_image" src="/images/preview/music.png">                   
                    <p class="activity_preview_box_title">${dummyData[i].title}
                    <p class="activity_preview_box_description">${displayedText} </p></p>
                </div>

                <div class="preview_box">
                    <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
                    <p class="activity_preview_box_time"> Time: ${dummyData[i].dateStart} -  ${dummyData[i].dateEnd}</p>
                    <hr size = "4" width = "100%" color = "black">
                </div>
                
            </div>
        `
        
        document.getElementById("previewsTarget").appendChild(previewBox)
    }
}

function checkDate() {
    for (let i = 0; i < dummyData.length; i++) {
        if (dummyData[i].dateStart == dummyData[i].dateEnd){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
            <p class="activity_preview_box_time"> Time: ${dummyData[i].dateStart}</p>
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
        if (dummyData[i].dateStart == dummyData[i].dateEnd && dummyData[i].dateStart == today){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
            <p class="activity_preview_box_time"> Time: Today</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);
        }
        if (dummyData[i].dateStart == dummyData[i].dateEnd && dummyData[i].dateStart == tomorrow){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
            <p class="activity_preview_box_time"> Time: Tomorrow</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);
        } 
        if (dummyData[i].dateStart == dummyData[i].dateEnd && dummyData[i].dateStart == yesterday){
            let previewBox = document.querySelectorAll(".preview_box")[i];
            document.querySelectorAll(".preview_box_container")[i].removeChild(previewBox)
            previewBox.innerHTML = 
            `
            <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
            <p class="activity_preview_box_time"> Time: Yesterday</p>
            <hr size = "4" width = "100%" color = "black">
            `;
            document.querySelectorAll(".preview_box_container")[i].appendChild(previewBox);
        }       
    }
}
/* 
function previewBoxesResults() {
    document.getElementById("previewsTarget").innerHTML = `
        <div class="preview_box_container">
            <div class="preview_box">
                <p>${dummyData[3].title}</p>
                <p>${dummyData[3].area} </p>
                <p>${dummyData[3].dateStart} -  ${dummyData[1].dateEnd}</p>
            </div>
        </div>
    `
} */