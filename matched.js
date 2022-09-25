// const numbers = [45,65,23,98,19];

// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id:1, name:'walton phone',price:10000},
    {id:2, name:'samsung phone',price:10000},
    {id:3, name:'HTC',price:10000},
    {id:4, name:'nokia',price:10000},
    {id:5, name:'Realme phone',price:10000},
    {id:6, name:'Phone lenovo',price:10000},
    {id:7, name:'one plus',price:10000}
]

// for (const product of products){
//     console.log(product)
// }

function matchedProducts(products,search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
       
    }
    return matched
}

const result = matchedProducts(products,'phone')
console.log(result)