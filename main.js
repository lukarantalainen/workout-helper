function exerciseListAppend(id) {
    if (!id) {
        id = document.getElementById("exercise-name-input").value;
    }

    let element = document.getElementById(id);

    if (element != null) {
        msg = "Name already exists";
        inputError(msg);
    }

    else {
        if (inputEmpty(id) === false) {

            if (document.getElementById("error-text")) {
                let errorContainer = document.getElementById("error-container");
                errorContainer.removeChild(document.getElementById("error-text"));

            }

            let listContainer = document.createElement("div");
            listContainer.setAttribute("id", id);
            listContainer.setAttribute("class", "list-container");

            let buttons = createListButtons(id);
            let item = createListItem(id);

            listContainer.appendChild(item);
            listContainer.appendChild(buttons);
            document.getElementById("exercise-list").appendChild(listContainer);
            clearInput();
        }

    }

}

function createListButtons(id) {
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "button-container");

    let durationButton = document.createElement("button");

    durationButton.setAttribute("id", "list-duration-button");
    durationButton.setAttribute("class", "list-button");
    durationButton.textContent = "Duration";
    durationButton.onclick = () => {
        return
    }

    let skipButton = document.createElement("button");

    skipButton.setAttribute("id", "list-skip-button");
    skipButton.setAttribute("class", "list-button");
    skipButton.textContent = "Skip";
    skipButton.onclick = () => {
        skipExercise(id);
    }

    let delButton = document.createElement("button");

    delButton.setAttribute("id", "list-delete-button");
    delButton.setAttribute("class", "list-button");
    delButton.textContent = "Delete";
    delButton.onclick = () => {
        deleteListItem(id);
    }

    buttonContainer.append(durationButton);
    buttonContainer.appendChild(skipButton);
    buttonContainer.appendChild(delButton);

    return buttonContainer;
}

function createListItem(id) {
    let item = document.createElement("li");
    let label = document.createElement("label");
    let text = id;

    label.textContent = text;
    item.appendChild(label);

    return item;
}

function inputEmpty(input) {
    if (input.trim() === "") {

        msg = "Name can't be empty";

        inputError(msg);

        return true;
    }

    else {
        return false;
    }
}

function inputError(msg) {
    let errorContainer = document.getElementById("error-container");
    error = document.createElement("span");
    error.setAttribute("id", "error-text");
    error.textContent = msg;
    if (document.getElementById("error-text")) {
        errorContainer.removeChild(document.getElementById("error-text"));
    }
    errorContainer.appendChild(error);
    error.classList.add("horizontal-shake");


}

function addExerciseToList(event) {
    event.preventDefault();
    exerciseListAppend();
}

function select_preset() {


}

function skipExercise(id) {
    document.getElementById(id).style.textDecoration = "line-through";
}

function resetList() {
    const root = document.getElementById("exercise-list");
    while (root.firstChild) {

        root.removeChild(root.firstChild);
    }
}

function deleteListItem(id) {
    document.getElementById(id).remove();
}

function startExercise() {
    let item = document.getElementById("exercise-list");
    let list = document.getElementsByTagName("item");
    console.log(list);

    function listItems() {
        for (i in list) {
            console.log(item)
        }

    }
    listItems();
}

function inputFocus() {
    let container = document.getElementById("input-container");
    container.style.outline = "2px solid #146eff";
}

function inputBlur() {
    let container = document.getElementById("input-container");
    container.style.outline = "none";
}

function clearInput() {
    document.getElementById("exercise-name-input").value = "";
}