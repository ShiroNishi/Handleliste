
//Controller

    function addNewList(newListItem){
        if (newListItem.charAt(0) === " "){
            return;
        }
        let capitalize = newListItem.charAt(0).toUpperCase() + newListItem.slice(1)
        listOverwiew.push({name: capitalize, items: []});
        updateView();
    }

    function deleteList(index){
        listOverwiew.splice(index, 1);
        currentListOpen = -1
        updateView();
    }

    function addNewListItem(newItem, index){
        if (newItem.charAt(0) === " "){
            return;
        }
        let capitalize = newItem.charAt(0).toUpperCase() + newItem.slice(1)
        listOverwiew[index].items.push(capitalize);
        updateView();
    }

    function openList(index){
        currentListOpen = index;
        updateView();
    }