var container = document.querySelector("#data");
var list = document.createElement("ul");

var masterCheckbox = createElement("input", null, {
    "type": "checkbox",
    "class": "masterCheckbox"
});

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

    var nameContainer = createElement("li", null, {}, {"textContent": item['name']});
    basicDataContainer.appendChild(nameContainer);

    var desc = createElement("li", null, {}, {"textContent": item['details']['description']});
    basicDataContainer.appendChild(desc);

    var fileTypesContainer = document.createElement("ul");
    for (var j = 0; j < item['filesTypes'].length; j++) {
        var fileType = item['filesTypes'][j];
        var fileTypeNode = createElement("li", null, {}, {"textContent": fileType["filename"]});
        fileTypesContainer.appendChild(fileTypeNode);
    }
    basicDataContainer.appendChild(fileTypesContainer);

    var checkbox = createElement("input", "li", {
        "type": "checkbox",
        "class": "itemCheckbox"
    });
    basicDataContainer.appendChild(checkbox);

    itemContainer.appendChild(basicDataContainer);
    list.appendChild(itemContainer);
}
container.appendChild(masterCheckbox);
container.appendChild(list);