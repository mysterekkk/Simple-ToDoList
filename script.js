const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function addItem() {
    if (input.value.trim() === "") { // added conditional instruction
        return;
    }

    const item = document.createElement("li");
    const text = document.createElement("span");
    text.innerText = input.value;
    item.appendChild(text);

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&#x2716;";
    removeBtn.addEventListener("click", function() {
        item.remove();
    });

    item.appendChild(removeBtn);
    list.appendChild(item);

    input.value = "";
}

addBtn.addEventListener("click", addItem);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});