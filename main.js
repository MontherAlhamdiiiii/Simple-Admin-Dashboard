let tabs = document.querySelectorAll(".tab:not(:last-child)");
let sidebar = document.querySelector(".sidebar");
let imgs = document.querySelectorAll(".sidebar .img");
let icons = document.querySelectorAll(".tab a i");
let lastTab = document.querySelector(".tab:last-child");
let main = document.querySelector(".main");
let black = document.querySelector(".black");


tabs.forEach(tab => {
    tab.onclick = function () {
        tabs.forEach( tab => {
            tab.classList.remove("tab-hover")
        })
        this.classList.add("tab-hover");
        sidebar.classList.toggle("expand");
        imgs.forEach( img => {
            img.classList.toggle("img-onToggle");
        });
        icons.forEach( icon => {
            icon.classList.toggle("icon-edit");
        })
        lastTab.classList.toggle("last-tab");
        main.classList.toggle("mind-expand");
        black.classList.toggle("bk");
    }
})