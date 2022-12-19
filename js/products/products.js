class Products {

    addEventListeners() {
        const product = this;

        function formSearchNameSubmit(event) {
            event.preventDefault();
            // name
            let nameSearch = $('#searchName').val();
            product.searchProductsByName(nameSearch);
        }

        function formSearchNameID(event) {
            event.preventDefault();

        }

        const formSearchName = document.getElementById('productTypeSearchName');
        const formSearchID = document.getElementById('productTypeSearchName');


        formSearchID.addEventListener('submit', formSearchNameSubmit);
        formSearchName.addEventListener('submit', formSearchNameID);


    }

    searchProductsByName(nameSearch) {
        api("api/get/product/ByName?search=" + nameSearch).then(response => {
            this.displayProducts(response);
        })
    }

    deleteProductById(productID) {
        api("api/delete/productType/ByID?productTypeID=" + productID, "DELETE").then(result => {
            products.searchProductsByName("");

        })


    }

    // takes list of products
    displayProducts(listOfProducts) {

        const table = $('#productDisplayWindow');

        table.empty();


        listOfProducts.forEach(function (product) {
            const productClass = this;
            /*
                const product = {

                        "id": 2,
                        "name": "nød",
                        "price": 10.0,
                        "weightGram": 1000.0,
                        "products": []
                }
         */

            let row = $('<tr></tr>');

            let id = $('<td>' + product.id + '</td>');
            let name = $('<td>' + product.name + '</td>');
            let price = $('<td>' + product.price + '</td>');
            let weightGram = $('<td>' + product.weightGram + '</td>')

            row.append(id);
            row.append(name);
            row.append(price);
            row.append(weightGram);

            let colChange = $('<td></td>');
            let changeBtn = $('<button>Se</button>').addClass('btn btn-sm btn-outline-success table-btn-change');
            changeBtn.val(product.id);

            colChange.append(changeBtn);

            let colDelete = $('<td></td>');
            let deleteBtn = $('<button>Slet</button>').addClass('btn btn-sm btn-outline-danger table-btn-delete');
            deleteBtn.val(product.id);

            colDelete.append(deleteBtn);


            row.append(colChange);
            row.append(colDelete);

            table.append(row);

            $(".table-btn-change").off().on('click', function (event) {
                menu.showPage('menu3');

                products.changeProductMenu(this.value);
            });


            $(".table-btn-delete").off().on('click', function (event) {
                products.deleteProductById(parseInt(this.value));
            });


        });


    }

    editProduct(event){
        event.preventDefault();
        let serializeArray = $('#editProductType').serializeArray();
        let any = formCleaner.cleanFormData(serializeArray);

        api("api/post/create/productType", "POST", any).then(response => {
            products.searchProductsByName("");
        });

    }

    addStock(event){
        event.preventDefault();

        let amount = $('#totalProductsToAdd').val()
        let productID = $('#edit-product-id').val()


        api( "api/post/add/productStock?productID=" + productID +"&amount=" + amount, "POST", {
        }).then(response => {
            products.changeProductMenu(productID)
        });


    }

    saveProduct(event){
        event.preventDefault();
        let serializeArray = $('#createProductType').serializeArray();
        let any = formCleaner.cleanFormData(serializeArray);

        api("api/post/create/productType", "POST", any).then(response => {

            products.searchProductsByName("");
        });


    }

    changeProductMenu(productID) {
        /*
        {
            "id": 45,
            "name": "asdasd",
            "price": 123.0,
            "weightGram": 12.0,
            "": []
        }
         */

        api("api/get/product/byID?productID=" + productID, "GET").then(response => {
            $('#edit-product-id').val(response.id);
            $('#edit-product-name').val(response.name);
            $('#edit-product-price').val(response.price);
            $('#edit-product-weight').val(response.weightGram);

            $('#product-name').text("Ændre: " + response.name);

            $('#total-Products').text(response.products.length);
        });


    }


}