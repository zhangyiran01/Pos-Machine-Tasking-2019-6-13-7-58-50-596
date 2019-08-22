function add (left, right) {
    return left + right;
}

const db =
    [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ]

function generateReceipts() {

}

function countProducts(products) {
    let map = new Map();
    let arr = new Array();
    for (let i = 0; i < products.length; i++) {
        if (!map.has(products[i])) {
            map.set(products[i], {
                product: products[i],
                count: 1
            });
        } else {
            map.get(products[i]).count++;
        }
    }
    map.forEach(function (item) {
        arr.push(item);
    });
    return arr;
}

function fetchProduct(code, db) {
    for (let i = 0; i < db.length; i++) {
        if (code === db[i].id) {
            return {
                "id": db[i].id,
                "name": db[i].name,
                "price": db[i].price
            };
        }
    }
}

function generateReceiptItems(codes) {
    let arr = new Array();
    let products_table = new Array();
    arr = countProducts(codes);
    arr.forEach(function (item) {
        let product = fetchProduct(item.product, db);
        products_table.push({
            name: product.name,
            price: product.price,
            count: item.count
        });
    });
    return products_table;
}

function countTotalPrice(countTotalPriceInput) {
    let sum = 0;
    countTotalPriceInput.forEach(function (item) {
        sum += item.price * item.count;
    });
    return sum;
}

function assemble(assembleInput,sum) {
    let str =
        "Receipts\n" +
        "----------------------------------\n"
    assembleInput.forEach(function (item) {
        str = str +
            item.name + "\t" + item.price + "\t" + item.count + "\n";
    })
    str = str +
        "----------------------------------\n" +
        "Price: " + sum;
    return str;
}

module.exports = {add,countProducts,fetchProduct,generateReceiptItems,
    countTotalPrice,assemble};