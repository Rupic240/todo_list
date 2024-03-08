window.addEventListener('load', () => {

    const form = document.querySelector('#submit-form');
    const input = document.querySelector('#input-text');
    const addList = document.querySelector('#lists');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newList = document.createElement('div');
        newList.classList.add('new-list');

        const contentEl = document.createElement('div');
        contentEl.classList.add('content');

        newList.appendChild(contentEl);

        const testComplete = document.createElement('input');
        testComplete.classList.add('testComp');
        testComplete.type = "radio";
        
        const editInputEl = document.createElement('input');
        editInputEl.classList.add('text');
        editInputEl.type = "text";
        editInputEl.value = input.value
        editInputEl.setAttribute("readonly", "readonly");

        contentEl.appendChild(testComplete);
        contentEl.appendChild(editInputEl);
        
        const actionEl = document.createElement('div');
        actionEl.classList.add('actions');

        const editEl = document.createElement('button');
        editEl.classList.add('edit');
        editEl.innerHTML = "Edit";
        
        const deleteEl = document.createElement('button');
        deleteEl.classList.add('delete');
        deleteEl.innerHTML = "Delete";
        deleteEl.style.color = "#bf1111"

        actionEl.appendChild(editEl);
        actionEl.appendChild(deleteEl);
        
        newList.appendChild(actionEl);

        addList.appendChild(newList);

        input.value = "";

        testComplete.addEventListener('click', () => {
            editInputEl.style.textDecoration = "line-through";
            editInputEl.style.opacity = "0.7";

            if(editInputEl.style.textDecoration === "line-through") {
                editInputEl.setAttribute("readonly", "readonly");
                editEl.disabled = true;
                editEl.style.opacity = "1";
            }
        })

        editEl.addEventListener('click', () => {
            if(editEl.innerText.toLowerCase() == 'edit') {
                editInputEl.removeAttribute("readonly");
                editInputEl.focus();
                editEl.innerText = "Save";
            }else {
                editInputEl.setAttribute("readonly", "readonly");
                editEl.innerText = "Edit";
            }

        });

        deleteEl.addEventListener('click', () => {
            addList.removeChild(newList);
        });
        
    });
});