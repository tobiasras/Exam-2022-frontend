const pages = {
    menu1: ["page-1", "page-1-btn"],
    menu2: ["page-2", "page-2-btn"],
    menu3: ["page-3", "page-3-btn"]
}

const menu = new Menu(pages, 'box-link', 'box-page', 'active-box-link')
menu.showPage('menu1')

const products = new Products();


products.displayProductsForDelivery("");