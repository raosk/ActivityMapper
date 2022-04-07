function previewBoxesMain() {
    let displayedText = "";
    for (let i = 0; i < dummyData.length; i++) {
        if (dummyData[i].description.length > 50){
            displayedText = dummyData[i].description.substring(0,50) + "...";
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
                    <div class="activity_preview_box_title">${dummyData[i].title}</div>
                    <div class="activity_preview_box_description">${displayedText} </div>
                </div>

                <div class="preview_box">
                    <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
                    <p class="activity_preview_box_time"> Time: ${dummyData[i].dateStart} -  ${dummyData[i].dateEnd}</p>
                </div>
                <hr size = "4" width = "100%" color = "black">
            </div>
        `
        if (dummyData[i].dateStart == dummyData[i].dateEnd){
            document.querySelector("preview_box")[i].innerText = 
            `
            <p class="activity_preview_box_area"> Area: ${dummyData[i].area}</p>
            <p class="activity_preview_box_time"> Time: ${dummyData[i].dateStart}</p>
            `
        }
        
        document.getElementById("previewsTarget").appendChild(previewBox)
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