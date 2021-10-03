(function(){
    "use strict";

    // script starts here
    var navMenu = document.getElementById('navmenu');
    var catbtn = document.getElementById('catmenubtn');
    var catmenu = document.getElementById('catmenulist');




    //navmenu 
    navMenu.querySelectorAll('li').forEach(itm => {
        itm.addEventListener('click', () => {
            if(itm.classList.contains('relative')) {
                itm.querySelector('ul').classList.toggle('hidden');
            }
        })
    });

    // catmenu
    catbtn.addEventListener('click', () => {
        catmenu.classList.toggle('hidden');
    });

    //
})();