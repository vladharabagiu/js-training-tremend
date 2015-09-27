var container = document.querySelector("#data");
var list = document.createElement("ul");

var masterCheckbox = document.createElement("input");
masterCheckbox.setAttribute("type", "checkbox");
masterCheckbox.setAttribute("class", "masterCheckbox");

masterCheckbox.addEventListener("change", function() {
    var checkboxes = document.querySelectorAll(".itemCheckbox");

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = masterCheckbox.checked;
    }
});


for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var itemContainer = document.createElement("li");
    var basicDataContainer = document.createElement("ul");

    var nameContainer = document.createElement("li");
    nameContainer.textContent = item['name'];
    basicDataContainer.appendChild(nameContainer);

    var descContainer = document.createElement("li");
    descContainer.textContent = item['details']['description'];
    basicDataContainer.appendChild(descContainer);

    var fileTypesContainer = document.createElement("ul");
    for (var j = 0; j < item['filesTypes'].length; j++) {
        var fileType = item['filesTypes'][j];
        var fileTypeNode = document.createElement("li");
        fileTypeNode.textContent = fileType['filename'];
        fileTypesContainer.appendChild(fileTypeNode);
    }
    basicDataContainer.appendChild(fileTypesContainer);

    var checkboxContainer = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "itemCheckbox");
    checkboxContainer.appendChild(checkbox);
    basicDataContainer.appendChild(checkboxContainer);
    itemContainer.appendChild(basicDataContainer);
    list.appendChild(itemContainer);
}
container.appendChild(masterCheckbox);
container.appendChild(list);