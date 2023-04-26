function filterSearch() {
    let input = document.getElementById("searchBox");
    let word = input.value.toLowerCase();

    let qureySaudi = document.querySelectorAll(".Saudi-food");

    for (table of qureySaudi) {
        let row = document.querySelectorAll("tbody tr");
        Filter(row, 0, word);
    }

}

function filterBySelect() {
    let menuItem = document.getElementsByClassName("select_type")[0];
    let word = menuItem.value.toLowerCase();


    let tableSaudi = document.getElementById("saudi-table");
    let tableEgyptian = document.getElementById("egyptian-table");
    let tableLabanese = document.getElementById("labanese-table");
    let tableIndian = document.getElementById("indian-table");

    if ("saudi food".match(word)) {
        tableEgyptian.setAttribute("hidden", "hidden");
        tableLabanese.setAttribute("hidden", "hidden");
        tableIndian.setAttribute("hidden", "hidden");

        tableSaudi.removeAttribute("hidden", "hidden");
    } else if ("egyptian food".match(word)) {
        tableSaudi.setAttribute("hidden", "hidden");
        tableLabanese.setAttribute("hidden", "hidden");
        tableIndian.setAttribute("hidden", "hidden");
        
        tableEgyptian.removeAttribute("hidden", "hidden");
    } else if ("labanese food".match(word)) {
        tableSaudi.setAttribute("hidden", "hidden");
        tableEgyptian.setAttribute("hidden", "hidden");
        tableIndian.setAttribute("hidden", "hidden");
        
        tableLabanese.removeAttribute("hidden", "hidden");
    } else if ("indian food".match(word)) {  
        tableSaudi.setAttribute("hidden", "hidden");
        tableEgyptian.setAttribute("hidden", "hidden");
        tableLabanese.setAttribute("hidden", "hidden");

        tableIndian.removeAttribute("hidden", "hidden");
    } else if ("selecttype".match(word)) {  
        tableSaudi.removeAttribute("hidden", "hidden");
        tableEgyptian.removeAttribute("hidden", "hidden");
        tableLabanese.removeAttribute("hidden", "hidden");
        tableIndian.removeAttribute("hidden", "hidden");
    }
}

function Filter(row, column, word) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        let td = row[i].getElementsByTagName("td")[column];
        let text = td.innerText;
        if (text.toLowerCase().indexOf(word) > -1) {
            row[i].style.display = "";
        } else {
            row[i].style.display = "none";
        }
    }
}