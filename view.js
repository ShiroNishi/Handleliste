//View
    updateView()
    function updateView(){
        app.innerHTML = /*HTML*/ `
            <h1><u>Mine lister</u></h1>
            <div id="grid-container">
                <div>${showListMenu()}</div>
                <div>${openCurentListPage()}</div>
            </div>
        `; 
    }

    function showListMenu(){
        let html = /*HTML*/ `
            <input style="background-color: #f75260;" 
            onchange="addNewList(this.value)"
            placeholder="Lag ny liste">
            <table>${showList()}</table>
        `
        return html
    }

    function showList(){ //Må bruke return siden ul i UpdateView() kjører denne i en t.l.
        let html = "";
        for (let i = 0; i < listOverwiew.length; i++){
            html += /*HTML*/ `
            <tr> 
                <td style="cursor:pointer;" 
                onclick="openList(${i})">
                ${listOverwiew[i].name}
                </td> <!--Navnet/knappen på den nye listen din -->

                <td>  
                    <img onclick="deleteList(${i})" src="trash_idle.png" onmouseover="this.src='trash_hover.png'" onmouseout="this.src='trash_idle.png'">
                </td>
            </tr>`
        }
        return html;
    }


    function openCurentListPage(){ //Denne endrer HELE HTML'en på siden, derfor gjenbruker vi app.innerHTML her
        let html = "";
        if (currentListOpen === -1){
             html = /*HTML*/ `
            <input style="background-color: #f5e6b6;"
            placeholder="Legg til noe i listen">
            `
        } else {
            html = /*HTML*/ `                  
                <input onchange="addNewListItem(this.value, ${currentListOpen})">
                <table>${showCurrentList(currentListOpen)}</table>
            `
        }
        return html
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
