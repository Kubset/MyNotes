
function loadStorage() {
    for(let i=0; i<localStorage.length; i++) {
        newWindow(localStorage.key(i), localStorage.getItem(localStorage.key(i)));    
    }

}

function saveStorage() {
    localStorage.clear();
    var notes = document.getElementsByClassName("note");
    for(let i=0; i<notes.length; i++) {
        let content = notes[i].getElementsByTagName("textarea");
        console.log(content[0].value + "    " + content[1].value);
        localStorage.setItem(content[0].value, content[1].value);
    }
}


function newWindow(header, body) {
    var mainDiv = document.getElementById("main-content");
    var injectDiv = document.createElement("div");
    injectDiv.setAttribute("class", "card note");

    const noteFiller = `<div class="card-header bg-secondary">
                            <textarea class="bg-secondary" row="1" >${header}</textarea>
                        </div>
                        <div class="card-body bg-light">
                            <textarea class="bg-light" row="1">${body}</textarea>
                            <i class="fas fa-trash delete-card"></i>
                        </div>`

    injectDiv.innerHTML = noteFiller;
    mainDiv.appendChild(injectDiv);

    addListeners();
}


function deleteCard() {
    this.parentNode.parentNode.remove();

    var key =this.parentNode.parentNode.getElementsByTagName("textarea")[0].innerHTML;
    localStorage.removeItem(key);
    
}

             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


function addListeners() {
    addEventListener("beforeunload", saveStorage)

    var textAreas = document.getElementsByTagName("textarea");
    for(let i=0; i<textAreas.length; i++) {
        textAreas[i].addEventListener('keydown', autosize);
    }

    var notesBin = document.getElementsByClassName("delete-card");
    for(let i=0; i<notesBin.length; i++) {
        notesBin[i].addEventListener('click', deleteCard);
    }
}


window.onload = function() {
    loadStorage();
    var textAreas = document.getElementsByTagName("textarea");
    for(let i=0; i<textAreas.length; i++) {
        autosize.call(textAreas[i])
    }
}





