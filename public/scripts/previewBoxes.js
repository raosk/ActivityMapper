function previewBoxesMain() {
    document.getElementById("previewsTarget").innerHTML = `
    <div class="preview_box_container">
        <div class="preview_box">
            <p>${dummyData[0].title}</p>
            <p>${dummyData[0].area} </p>
            <p>${dummyData[0].dateStart} -  ${dummyData[0].dateEnd}</p>
        </div>
        <div class="preview_box">
            <p>${dummyData[1].title}</p>
            <p>${dummyData[1].area} </p>
            <p>${dummyData[1].dateStart} -  ${dummyData[1].dateEnd}</p>
        </div>
        <div class="preview_box">
            <p>${dummyData[2].title}</p>
            <p>${dummyData[2].area} </p>
            <p>${dummyData[2].dateStart} -  ${dummyData[2].dateEnd}</p>
        </div>
    </div>
    `
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