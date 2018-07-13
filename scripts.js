
function newWindow() {
    var mainDiv = document.getElementById("main-content");
    var injectDiv = document.createElement("div");
    injectDiv.setAttribute("class", "card note");

    //TODO: REFACTOR
    const cardFiller =      "<div class=\"card-header bg-secondary\">" +
                                "<textarea class=\"bg-secondary\" row=\"1\" >Press to add note header</textarea>" +
                            "</div>" +
                            "<div class=\"card-body bg-light\">" +
                                "<textarea class=\"bg-light\" row=\"1\">Press to add note body</textarea>" +
                                "<i class=\"fas fa-trash delete-card\"></i>" +
                            "</div>" ;

    injectDiv.innerHTML = cardFiller;
    mainDiv.appendChild(injectDiv);

    addListeners();
}





function deleteCard() {
    this.parentNode.parentNode.remove();
}


             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function addListeners() {

    var textarea = document.getElementsByTagName("textarea");
    for(var i=0; i<textarea.length; i++) {
        textarea[i].addEventListener('keydown', autosize);
    }


    var cardsBin = document.getElementsByClassName("delete-card");

    for(var j=0; j<cardsBin.length; j++) {
        cardsBin[j].addEventListener('click', deleteCard);
    }

}


window.onload = addListeners();




