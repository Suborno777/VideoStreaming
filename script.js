var users = [`Suborno`]

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn" onclick='transitionToPage("/browse")'><span>${curElem}</span></button>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let user = prompt('please enter your name');

    if(user != null && !users.includes(user)){
        users.push(user);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${user}</span></button>
        `);
    }else{
        alert('username already exist');
    }
})


userIcons();

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}
