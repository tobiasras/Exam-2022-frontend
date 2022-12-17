$(document).ready(function () {
    handleLocation("home")
});

function route(content) {
    handleLocation(content);
}

const routes = {
    404: "html/404.html",
    "home": "html/content/main-page.html",
    "page1": "html/content/page1.html",
    "page2": "html/content/page2.html",
};


const mains = {
    //
    "home": function main() {

        const pages = {
            menu1: ["page-1", "page-1-btn"],
            menu2: ["page-2", "page-2-btn"],
            menu3: ["page-3", "page-3-btn"]
        }

        const menu = new Menu(pages, 'box-link', 'box-page', 'active-box-link')
        menu.showPage('menu1')



    },

    "page1": function main() {


        $(document).ready(function () {



        });

    },


    "page2": function main() {

        $(document).ready(function () {
            console.log(2)
        });

    },


    404: function main() {


        $(document).ready(function () {



        });


    },
}


const handleLocation = async (path) => {
    const route = routes[path] || [404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-content").innerHTML = html;

    mains[path]();

};

// loads the first page
//window.onpopstate = handleLocation("home");

// prevents defaults when clicking links
document.addEventListener("click", function (event) {
    event.preventDefault()
});




