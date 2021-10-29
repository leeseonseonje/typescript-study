//any Type
let value: any = 5;
value = 'value'

//유니언 타입
let u: number | string = 5;
u = 'string';

//타입 별칭
type StringOrNumber = number | string;
let x: StringOrNumber = '555';
x = 1;

let itemPrice: number;

const setItemPrice = (price: StringOrNumber): void => {
    if (typeof price === 'string') {
        itemPrice = 0;
    } else {
        itemPrice = price;
    }
}

setItemPrice(50);
