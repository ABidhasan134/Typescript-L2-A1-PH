1. টাইপকিপ্ট-এ ইন্টারফেস ও টাইপ-এর মধ্যে পার্থক্য নিম্ন
1. পুনরায় ডিক্লেয়ার করা
   ইন্টারফেস বারবার পুনরায় ডিক্লেয়ার করা যায় এবং টাইপকিপ্ট এগুলোকে merge করে ফেলে।
   টাইপ তবে পুনরায় ডিক্লেয়ার করা যায় না। অর্থাৎ একই নামের ইন্টারফেস দুই বা ততোবার লিখতে পারলেও টাইপ লিখা যায় না ।
   উদাহরণ:-
   interface User {
   name: string;
   }

interface User {
age: number;
}
এক্ষেত্রে ইনটারফেস দুটি Merge হয়ে যাবে → { name: string; age: number }

type User = { name: string };
type User = { age: number };

একই টাইপ দুইবার ব্যাবহার করলে ডুপলিকেট করার ইরোর দিবে ।

2. extend করা
   ইন্টারফেস শুধুমাত্র ইন্টারফেস নয়, type-ও extend করতে পারে।
   Type আবার intersection (&) দিয়ে extend করে।
   উদাহরণ:-
   interface User { name: number }
   interface Info extends User { age: number }

type User = { name: number }
type Info = user & { age: number } 3. Union ও Primitive তৈরি করা
Type union, primitives, tuple—অনেক কিছুই তৈরি করতে পারে।
Interface এ ধরনের জিনিস করতে পারে না।
উদাহরণ:-

type ID = string | number;
type Status = "success" | "error";
type Pair = [string, number];

object shape তৈরি করতে Interface বেশি উপযোগী, কারণ এটি extend-friendly হলেও উপরের উদাহরণ ক্ষেত্রে type ব্যাবহার করা যায় না।

5. Provide an example of using union and intersection types in TypeScript.
   Union Type Example

Union type মানে একটি ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটি হতে পারে।

type ID = string | number;

let userId: ID;

userId = 101;  
userId = "17Abid";  
userId = true;  
এক্ষেত্রে বুলিয়ান ভেলু দিলে ইরোর আসবে । 2. Intersection Type Example

Intersection type মানে একাধিক টাইপ মিশে একটি টাইপ তৈরি হবে।

type User = {
name: string;
};

type Employee = {
employeeId: number;
};

type UserEmployee = User & Employee;

const person: UserEmployee = {
name: "Abid",
employeeId: 101,
};

**\***Union + Intersection**\***
type Admin = {
name: string;
role: "admin";
};

type Editor = {
name: string;
role: "editor";
};

type CommonInfo = {
email: string;
};

type User = (Admin | Editor) & CommonInfo;

const user1: User = {
name: "Hasan",
role: "admin",
email: "hasan@example.com"
};

const user2: User = {
name: "Raju",
role: "editor",
email: "raju@example.com"
};
