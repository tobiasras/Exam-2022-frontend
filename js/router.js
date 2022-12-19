function activeBtn(content) {

    $('.nav-link').removeClass("active")

    switch (content) {
        case "home":
            $('#home-btn').addClass("active")
            break;
        case "products":
            $('#page1-btn').addClass("active")
            break;
        case "delivery":
            $('#page2-btn').addClass("active")
            break;
    }

}

function route(content) {
    handleLocation(content);
    activeBtn(content);
}

const routes = {
    404: "html/404.html",
    "home": "html/content/home.html",
    "products": "html/content/products.html",
    "delivery": "html/content/delivery.html",
};


const mains = {
    "home": function main() {


    },
    "products": function main() {
        const pages = {
            menu1: ["page-1", "page-1-btn"],
            menu2: ["page-2", "page-2-btn"],
            menu3: ["page-3", "page-3-btn"]
        }


        const menu = new Menu(pages, 'box-link', 'box-page', 'active-box-link')

        menu.showPage('menu1')

        const products = new Products();

        products.addEventListeners();
        products.searchProductsByName("");


    },
    "delivery": function main() {

        $(document).ready(function () {

        });
    },
    404: function main() {
    },
}

$(document).ready(function () {
    route("home")
});



const handleLocation = async (path) => {

    const route = routes[path] || [404];

    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-content").insertAdjacentHTML('afterbegin',  html);

    mains[path]();

};

// prevents defaults when clicking links
document.addEventListener("click", function (event) {
    event.preventDefault()
});




