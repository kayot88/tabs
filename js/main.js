;(() => {
    function showTab(event) {

        event.preventDefault();
        document.querySelectorAll(".ba-tab").forEach(elem => {
            elem.classList.remove("ba-tab--active");
        });
        document.querySelectorAll(".ba-menu-item").forEach(elem => {
            elem.classList.remove("ba-menu-item--active");
        });

        event.target.closest('.ba-menu-item').classList.add("ba-menu-item--active");
        let link = this.querySelector('.ba-item-link');
        let id = link.getAttribute("href");
        let tab = document.querySelector(id);
        // console.dir(tab);

        tab.classList.add("ba-tab--active");
    }
     var  tabLin = document.querySelector('.ba-item-link');
console.dir(tabLin);
    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('.ba-menu-item').forEach(tabLin => {
            tabLin.addEventListener('click', showTab)
        });
    });
})();
