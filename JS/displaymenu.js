const wholeMenu = document.querySelector('.menu-items');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuHeader = document.querySelector('.menu-header');

filterBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        const dataCategory = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(menuItem => 
            menuItem.category === dataCategory
        );
        displayMenuItems(menuCategory);
        displayMenuHead(menuCategory);
        
        filterBtns.forEach(btn => {
            btn.classList.remove('chosen');
        });
        btn.classList.add('chosen');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const appCategory = menu.filter(menuItem => 
        menuItem.category === 'appetizers'
        );
    displayMenuItems(appCategory);
    displayMenuHead(appCategory);
});

function displayMenuHead(menuItems){
    let menuHead = menuItems.map(obj => {
        return `<h2>
                    ${obj.category}
                </h2>`;
    });
    menuHead = menuHead[0];
    menuHeader.innerHTML = menuHead;
}


function displayMenuItems(menuItems){
    

    let menuInfo = menuItems.map(item => {
        return `<article class="menu-item">
                    <div class="item-header">
                        <h4 class="menu-title">
                            ${item.title}
                        </h4>
                        <p class="price">
                            ${item.price}
                        </p>
                    </div>
                    <p class="menu-info">
                        ${item.info}
                    </p>
                </article>`;
    });
    menuInfo = menuInfo.join('');
    wholeMenu.innerHTML = menuInfo;
};