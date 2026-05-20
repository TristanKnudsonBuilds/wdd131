
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {

    let current = selectElem.value;

    if (current == 'dark') {

        document.body.classList.add('dark');

        logo.setAttribute('src', 'images/byui-logo_white.png');

    } else {

        document.body.classList.remove('dark');

        logo.setAttribute('src', 'images/byui-logo.png');
    }
}    
                    