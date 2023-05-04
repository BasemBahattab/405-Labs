//Cookies side

//if the user voted before will disable the buttons 
window.onload = function(){
    const myCookie = document.cookie;
    if(myCookie && myCookie.indexOf("voted") > -1){

        let newLike = "👍" + myCookie.substring(7, myCookie.indexOf("dislike=") - 1);
        updateButton(newLike, likeButton);
        
        let newDislike = "👎" + myCookie.substring(myCookie.indexOf("dislike=") + "dislike=👎".length, myCookie.indexOf("voted=true"));
        updateButton(newDislike, dislikeButton);
        
        disableButtons();
    }
}



//store buttons
let likeButton = document.getElementById("likeBtn");
let dislikeButton = document.getElementById("dislikeBtn");

//store text from button
let likeText = likeButton.innerText;
likeText = likeText.substring(2, likeText.length);

let dislikeText = dislikeButton.innerText;
dislikeText = dislikeText.substring(2, dislikeText.length);

// like function 
// will take the text substring from the 👍 and only number and increment it
// update the button
// disable all the buttons 
function Like(){
    likeText = "👍" + ++likeText;

    updateButton(likeText, likeButton);
    // likeButton.innerText = likeText;

    dislikeText = "👎" + dislikeText;

    updateButton(dislikeText, dislikeButton);
    // dislikeButton.innerText = dislikeText;

    disableButtons();
    setCookies();

    console.log("Like clicked");
}

// dislike function 
// will take the text substring from the 👎 and only number and decrement it
// update the button
// disable all the buttons 
function Dislike(){
    dislikeText = "👎" + --dislikeText;
    
    updateButton(dislikeText, dislikeButton);
    // dislikeButton.innerText = dislikeText;
    
    likeText = "👍" + likeText;
    
    updateButton(likeText, likeButton);
    // likeButton.innerText = likeText;

    disableButtons();
    setCookies();

    console.log("Dislike clicked");
}

// disable all the buttons 
function disableButtons(){
    likeButton.disabled = true;
    dislikeButton.disabled = true;
}

function updateButton(text, button){
    button.innerText = text;
}


//set cookies
function setCookies(){
    document.cookie =  "like=" + likeText + " dislike=" + dislikeText + " voted=true; Max-Age=" + 60 ;
}