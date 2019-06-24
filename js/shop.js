const API_URL = "http://localhost:8090";

window.Shop = {

    getProducts: function () {
        $.ajax({
            url: API_URL + "/products",
            method: "GET"
        }).done(function (response) {
            console.log(response);
        });
    }
};

Shop.getProducts();