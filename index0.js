let addTask = document.getElementById("dodaj");
let removeAll = document.getElementById("usun");
let noweZadanie = document.getElementById("zadania")
let lista = document.getElementById('lista');




addTask.addEventListener("click", function() {
    let nowySpan = document.createElement("span")
    lista.appendChild(nowySpan);
    
    nowySpan.innerHTML = `<span id="wyjeb mnie">
    ${noweZadanie.value} <button id="remove">Remove </button> <br><br></span>`;
    noweZadanie.value = "";
    nowySpan.addEventListener('click', function (){
        lista.removeChild(nowySpan);})})

        removeAll.addEventListener("click",  function() {lista.innerHTML=""})

    


    


        
       







