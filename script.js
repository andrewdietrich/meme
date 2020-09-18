"use strict";

let memeInputs = document.getElementById("meme-inputs");

memeInputs.addEventListener("submit", function(event){
    event.preventDefault();

    let formData = collectFormData(event);
    console.log(formData);
    addMemeToPage(formData);

    memeInputs.reset();
});

// delete functionality
document.addEventListener("click", function (event){
    if (event.target.classList.contains("delete")) {
      event.target.parentElement.remove();
    }
});


function collectFormData(event) {
    return {
      imageurl: event.target.imgurl.value,
      textHigh: event.target.texthigh.value,
      textLow: event.target.textlow.value,
    };
}

function addMemeToPage(data) {
    let imgArea = document.getElementById('meme');
    
    // create div for new meme
    let newImg = document.createElement("div");
    newImg.classList.add("excellence");

    // append image to page
    let img = document.createElement("img");
    img.src = data.imageurl;
    newImg.append(img);

    // Create new text areas
    let p1 = document.createElement("p")
    p1.classList.add("top")
    p1.innerText = data.textHigh;

    let p2 = document.createElement("p")
    p2.classList.add("bottom")
    p2.innerText = data.textLow;

    // Draw the text high
    // let textH = document.getElementById('top');
    // textH.innerText = data.textHigh;

    // Draw the text low
    // let textL = document.getElementById('bottom');
    // textL.innerText = data.textLow;


    let buttonArea = document.createElement("div");
    let buttonBreak = document.createElement("br")
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";

    newImg.append(p1, p2, buttonBreak, deleteButton);

    imgArea.append(newImg);
}
