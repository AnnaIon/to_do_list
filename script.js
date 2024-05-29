const inputBox =  document.getElementById('input');
const listContainer = document.getElementById('list');

function addTask(){
    // validation if input is empty
    if(inputBox.value === ''){
        alert('You must write a task');
    }
    else{
        // add a li elem and display with the value of input
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // create a cross for removing the elem
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    // delete input after click
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    // if click on li it will style it in certain way
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    // if click on span it willl remove it
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

},false);

// store the data
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}


// save it if u close the browser
function showList(){
    listContainer.innerHTML= localStorage.getItem('data');
}

showList();