var container = document.querySelector("#data");
var list = document.createElement("ul");
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

    itemContainer.appendChild(basicDataContainer);
    list.appendChild(itemContainer);
}
container.appendChild(list);