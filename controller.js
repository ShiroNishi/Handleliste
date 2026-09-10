
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
        listOverwiew[index].items.push(newItem);
        openCurentListPage(index);
    }