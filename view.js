//View
    updateView()
    function updateView(){
        app.innerHTML = /*HTML*/ `
            <h1><u>Mine lister</u></h1>
            <div id="grid-container">
                <div>${showListMenu()}</div>
                
            </div>
            
        `; 
    }

    function showListMenu(){
        let html = /*HTML*/ `
            <input class="addStuff" onchange="addNewList(this.value)">
            <table>${showList()}</table>
        `
        return html

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
