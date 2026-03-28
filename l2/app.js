//  indexing  0     1      2   
// let frds = ["Ali","Khan","hadi"];
// console.log(frds[2]);
// console.log(frds.length);


// methods
// frds.push("Muzaffar");
// console.log(frds);

// let removed  = frds.pop()
// console.log(frds);
// console.log(removed);

// frds.map((frd)=>console.log(frd));
// frds.forEach((frd)=>console.log(frd))


// let num = [1,4,5,77,88,99];
// let fnd = num.find((f)=> f == 5);
// console.log(fnd);

// let inc = num.includes(51);
// console.log(inc);

// let n = num.filter((n)=>n >= 10)
// console.log(n);

// Objects
// let users = [
//     {
//     name:"Muzaffar Ali",
//     id:1,
//     email:"muzaffar@gmail.com",
//     frd:{name:"Ali"}
//    },
//    {
//     name:"Ali",
//     id:2,
//     email:"ali@gmail.com"
//    },

// ]
// // console.log(user["name"]);
// // console.log(user.email);
// console.log(users[0].name);

// Destructuring
// let user  = {
//     name:"Muzaffar Ali",
//     age:20,
//     email:"muzafar@gmail.com"
// };

// let {name:fname} = user;
// console.log(fname);

// let num = [2,4,5,6,72,34,55];
// let [a,b,,,f] = num;
// console.log(a,b,f);


// Spread & Rest Operator
// let a = [1,2,3];
// let b = [4,5,6];
// let c = [...a,...b]
// console.log(c);

// let user1 = {
//     name:"Ali",
//     id:1
// };
// let user2 = {
//     email:"Ali@gmail.com"
// };

// let data = {...user1,...user2};
// console.log(data);


// //
// const original = { brand: 'Ford', model: 'Mustang' };
// let copyData = {...original};
// copyData['name'] = "Muzaffar";
// console.log(copyData);
// console.log(original);


// function nums(...nums){
//     let total = 0;
//     for(let i=0; i <= nums.length; i++){
//         total += i
//     };
//     return total
// };
// let res = nums(1,2,3,4,5)
// console.log(res);


// Error Handling
// try{
//    let num = 10;
//    console.log(num + 10);
// }catch(err){
//     console.log(err.message);
// }finally{
//     console.log("done");
// }

function greet(){
    console.log("Welcome back!");
};

function loggin(callback){
   callback();
}

loggin(greet)