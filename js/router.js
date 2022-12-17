
function route(content){
    handleLocation(content);
}

const routes = {
    404   :         "html/404.html",
    "home" :        "html/content/main-page.html",
    "page1" :       "html/content/page1.html",
    "page2" :       "html/content/page2.html",
};

const handleLocation = async (path) => {
    const route = routes[path] || [404];

    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-content").innerHTML = html;
};

// loads the first page
window.onpopstate = handleLocation("home");