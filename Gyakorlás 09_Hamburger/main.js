const menubtn = document.getElementById('menubtn');
const menu = document.getElementById('menu');
const bar = document.getElementById('bar');

menubtn.addEventListener("click", OpenMenu);

function OpenMenu() {
    if (bar.classList.contains('clickedbtn'))
    {
        bar.classList.remove('clickedbtn');
        bar.classList.add('unclickedbtn');
        

        menubtn.classList.remove('openbtn');
        menubtn.classList.add('closedbtn');

        menu.classList.remove('opened');
        menu.classList.add('closed');
    }
    else
    {
        bar.classList.remove('unclickedbtn');
        bar.classList.add('clickedbtn');
        

        menubtn.classList.remove('closedbtn');
        menubtn.classList.add('openbtn');

        menu.classList.remove('closed');
        menu.classList.add('opened');
    }
}