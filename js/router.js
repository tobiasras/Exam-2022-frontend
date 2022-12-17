
function route(content){
    handleLocation(content);
}

const routes = {
    404   :         "/404.html",
    "home" :        "/content/main-page.html",
    "page1" :       "/content/page1.html",
    "page2" :       "/content/page2.html",
};gi t

const handleLocation = async (path) => {
    const route = routes[path] || [404];

    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-content").innerHTML = html;
};

// loads the first page
window.onpopstate = handleLocation("home");