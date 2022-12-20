class Orders {
    constructor() {
    }


    findOrderByID(event){
        event.preventDefault();

        let val = $('#order-id').val();

        api("api/get/fetch/by/productOrderID?orderID=" + val, "GET").then(products => {

            console.log(231)

            console.log()

            let table = $('#productDisplayWindow');
            table.empty();


            products.forEach(function (product){

                let productCorrect = product.type;

                orders.renderOneProduct(productCorrect, table)

            })



        })
    }


    renderOneProduct(product, table) {



        let row2 = $('<tr></tr>');

        let id = $('<td>' + product.id + '</td>');
        let name = $('<td>' + product.name + '</td>');
        let price = $('<td>' + product.price + '</td>');
        let weightGram = $('<td>' + product.weightGram + '</td>')

        row2.append(id);
        row2.append(name);
        row2.append(price);
        row2.append(weightGram);

        table.append(row2);
    }

    displayOrders() {
        api("api/get/fetch/all/ProductOrder", "GET").then(response => {
            let table = $('#productDisplayWindow');
            table.empty();


            response.forEach(function (order) {

                let row1 = $('<tr></tr>').addClass('bg-dark text-white');

                let fill1 = $('<td></td>').text("ODRER")
                let orderTitle = $('<td>' + order.id + '</td>')
                let fill2 = $('<td></td>').text("adsasd")
                let fill3 = $('<td></td>').text("adsasd")
                let fill4 = $('<td></td>').text("adsasd")

                row1.append(fill1);
                row1.append(orderTitle);
                row1.append(fill3);
                row1.append(fill4);

                table.append(row1);


                order.products.forEach(function (products) {

                    let product = products.productType;
                    orders.renderOneProduct(product, table);
                });


            });
        })
    }




}


const orders = new Orders();



