
//Model
const pages = {

}

let listCount = 0;
let currentList = "";

let listOverwiew = [];

//View
    updateView()
    function updateView(){
        app.innerHTML = /*HTML*/ `
            <input class="addStuff" onchange="addNewList(this.value)">
            <table>${showList()}</table>
        `; 
    }


    function showList(){          //Må bruke return siden ul i UpdateView() kjører denne i en t.l.
        let html = "";
        for (let i = 0; i < listOverwiew.length; i++){
            html += /*HTML*/ `
            <tr> 
                <td style="cursor:pointer;" onclick="openCurentListPage(${i})">${listOverwiew[i].name}</td>
                <td>  
                    <img onclick="deleteList(${i})" src="trash_idle.png" onmouseover="this.src='trash_hover.png'" onmouseout="this.src='trash_idle.png'">
                </td>
            </tr>`
        }
        return html;
    }


    function openCurentListPage(index){ //Denne endrer HELE HTML'en på siden, derfor gjenbruker vi app.innerHTML her
        app.innerHTML = /*HTML*/ `                  
            <button onclick="updateView()">Back to start</button>
            <input class="addStuff" onchange="addNewListItem(this.value, ${index})">
            <table>${showCurrentList(index)}</table>
        `                        
    }
    
    function showCurrentList(index){
        let html = "";
        for (let i = 0; i < listOverwiew[index].items.length; i++){
            html += /*HTML*/ `
                <tr>
                    <td>${listOverwiew[index].items[i]}
                    </td>
                </tr>
            `
        }
        return html;
    }


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