function previewBoxesMain() {
    let displayedText = "";
    for (let i = 1; i < dummyData.length; i++) {
        if (dummydata[i].description.length > 30){
            displayedText = dummydata[i].description.substring(0,30);
        }else {
            displayedText = dummydata[i].description;
        }
        
        document.getElementById("previewsTarget").innerHTML = `
            <div class="preview_box_container">
                <div class="activity_preview_box_image_container"> 
                    <img class="activity_preview_box_image" src="/images/music.png">
                    
                    <p class="activity_preview_box_title">${dummyData[i].title}</p>
                    <p class="activity_preview_box_description">${dummyData[i].area} </p>
                </div>

                <div class="preview_box">
                    <p class="activity_preview_box_title"> Area: ${dummyData[i].area}</p>
                    <p class="activity_preview_box_description"> Time: ${dummyData[i].dateStart} -  ${dummyData[i].dateEnd}</p>
                </div>
                <hr size = "4" width = "100%" color = "black">
            </div>
        `
        if (dummyData[i].dateStart == dummyData[i].dateEnd){
            document.querySelectorAll("preview_box")[i].childNodes[1].innerHTML = 
            `
                <p> Time: ${dummyData[i].dateStart}</p>
            `
        }
    }
}

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
}