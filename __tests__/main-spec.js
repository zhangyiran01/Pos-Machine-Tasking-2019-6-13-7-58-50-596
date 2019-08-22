const {add,countProducts,fetchProduct,generateReceiptItems,
    countTotalPrice,assemble} = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

it('should count products', () => {
    //given
    const products = ['0003', '0003', '0001'];
    //when
    const countProducts_num = countProducts(products);
    //then
    expect(countProducts_num[0].count).toBe(2);
});

it('should fetch product', () => {
    //given
    const db = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4}
    ]
    const code = '0001';
    //when
    const product = fetchProduct(code, db);
    //then
    expect(product.price).toBe(3);
});

it('结果验证', () => {
    //集成
    let codes = generateReceiptItems(['0003', '0003', '0001']);
    console.log(codes);
    //输出
    // [
    //     {name:'Pepsi-Cola',price:5, count: 2},
    //     {name:'Coca Cola',price:3, count: 1}
    // ]
});

it('结果验证2', () => {
    let countTotalPriceInput = [
            { name: 'Pepsi-Cola', price: 5, count: 2 },
            { name: 'Coca Cola', price: 3, count: 1 }
    ];
    let totalPrice = countTotalPrice(countTotalPriceInput);
    console.log(totalPrice);
});

it('结果验证3', () => {
    let assembleInput = [
        {name: 'Pepsi-Cola', price: 5, count: 2},
        {name: 'Coca Cola', price: 3, count: 1}
    ];
    var receiptText = assemble(assembleInput, 13);
    console.log(receiptText);
});