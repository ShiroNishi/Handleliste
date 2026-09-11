//View
    updateView()
    function updateView(){
        app.innerHTML = /*HTML*/ `
            <h1><u>Handleliste</u></h1>
            <div id="grid-container">
                <div class="grid-lists">
                    <div style="text-align: center;"><b>Mine Lister:</b></div>
                    ${showListMenu()}
                </div>
                
                <div class="grid-lists">
                    ${openCurentListPage()}
                </div>
            </div>
        `; 
    }

    function showListMenu(){
        let html = /*HTML*/ `
            <input class="addStuff" 
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
                <td style="cursor:pointer;" class="listItem" 
                onclick="openList(${i})"> <!--Navnet/knappen på den nye listen din -->
                ${listOverwiew[i].name}
                </td> 

                <td>  <!--Søppelbøtta -->
                    <img onclick="deleteList(${i})" 
                    src="trash_idle.png" 
                    onmouseover="this.src='trash_hover.png'" 
                    onmouseout="this.src='trash_idle.png'"
                    >
                </td>
            </tr>`
        }
        return html;
    }


    function openCurentListPage(){ //Denne endrer HELE HTML'en på siden, derfor gjenbruker vi app.innerHTML her
        let html = "";
        if (currentListOpen === -1){
             html = /*HTML*/ `<div style="text-align: center;"><b>Lag en liste og trykk på den 
             for å åpne</b></div>
            `
        } else {
            html = /*HTML*/ `     
                <div style="text-align: center;"><b>Lag en liste og trykk på den 
             for å åpne</b></div>             
                <input class="addStuff"
                placeholder="Legg til noe i listen"
                onchange="addNewListItem(this.value, ${currentListOpen})">
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
                    <td class="listItem">${listOverwiew[index].items[i]}
                    </td>
                </tr>
            `
        }
        return html;
    }
