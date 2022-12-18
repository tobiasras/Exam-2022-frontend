class Menu {

    /* pages object
    const pages = {
        menu1: ["page-1", "page-1-btn"],
        menu2: ["page-2", "page-2-btn"],
        menu3: ["page-3", "page-3-btn"]
    }
    */

    constructor(pages, btnClass, boxClass, activeBtnClass) {
        // used to hide boxes
        this.boxClass = boxClass;
        // used to deactivate btn

        this.btnClass = btnClass;
        this.pages = pages;
        this.activeBtnClass = activeBtnClass;

        for (let key in pages) {
            this.listen(key)
        }

    }

    hideElements(){
        $('.' + this.btnClass).removeClass(this.activeBtnClass);
        $('.' + this.boxClass).hide();
    }

     showPage(page){
        this.hideElements();
        $('#' + this.pages[page][0]).show();
        $('#' + this.pages[page][1]).addClass(this.activeBtnClass);
    }


    listen(page){
        let menu = this;
        $('#' + this.pages[page][1]).click(function(){
            menu.showPage(page);
        });
    }

}