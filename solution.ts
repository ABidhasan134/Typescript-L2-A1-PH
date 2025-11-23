
type formetType=string|number|boolean
const formatValue=(value:formetType)=>{
    if(typeof value==='string'){
        return value.toUpperCase();
    }
    else if(typeof value==='number'){
        return value*10;
    }
    else{
        return !value;
    }
}




const getLength=<T>(value:T)=>{
    if(typeof value==='string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    else{
        return null;
    }
}


class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
    getDetails(){
        let details=`'Name: ${this.name}, Age: ${this.age}';`
        return details
    }
}


type BookType = { title: string; rating: number };
type BooksInput = BookType[];

const filterByRating = (books: BooksInput):BookType[] => {
  return books.filter(book => book.rating > 4);
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];



type ActiveUser={id:number,name:string,email:string,isActive:true|false}
const filterActiveUsers=(users:ActiveUser[]):ActiveUser[]=>{
    return users.filter((user=>user.isActive===true))
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// solition 6
interface Book{
    title:string,
    author: string,
    publishedYear: number,
    isAvailable: true|false
}

const printBookDetails=(book:Book)=>{
    if(book.isAvailable===true){
        const result=`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: Yes`;
        return result;
    }
    else{
        const result= 'this book is not available';
        return result;
    }
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

type Unique = number[];

const getUniqueValues = (arr1: Unique, arr2: Unique): Unique => {
    const combined: number[] = [];
    const uniqueValues: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        combined[combined.length] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        combined[combined.length] = arr2[i];
    }

    
    for (let i = 0; i < combined.length; i++) {
        const current = combined[i];

        let alreadyExists = false;

        
        for (let j = 0; j < uniqueValues.length; j++) {
            if (uniqueValues[j] === current) {
                alreadyExists = true;
                break;
            }
        }

        if (!alreadyExists) {
            uniqueValues[uniqueValues.length] = current; 
        }
    }

    return uniqueValues;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


type CalculatePrice = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (product: CalculatePrice[]): number => {
    return product.reduce((total, item) => {
        let itemTotal = item.price * item.quantity;

        if (item.discount) {
            itemTotal = itemTotal - (itemTotal * item.discount) / 100;
        }

        return total + itemTotal;
    }, 0);
};

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));


 