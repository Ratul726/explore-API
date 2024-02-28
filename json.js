// const user = {id : 1, name : 'Gorib Amir', job : 'actor'};
// const stringfied = JSON.stringify(user);
// console.log(user)
// console.log(stringfied)

const shop = {
    owner : 'Alia',
    address : {
        street : 'Kochokhet Vuter goli',
        city : 'ranbir',
         country : 'BD'
    },
    products : ['laptop','mac','monitor','keyboard'],
    revenue : 45000,
    isOpen  :true,
    isNew : false
}
console.log(shop);
const shopJSON = JSON.stringify(shop)
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)