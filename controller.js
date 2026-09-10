
//Controller

    function addNewList(newListItem){
        let capitalize = newListItem.charAt(0).toUpperCase() + newListItem.slice(1)
        listOverwiew.push({name: capitalize, items: []});
        updateView();
    }

    function deleteList(index){
        listOverwiew.splice(index, 1);
        updateView();
    }

    function addNewListItem(newItem, index){
        let capitalize = newItem.charAt(0).toUpperCase() + newItem.slice(1)
        listOverwiew[index].items.push(capitalize);
        openCurentListPage();
    }

    function openList(index){
        currentListOpen = index;
        updateView();
    }