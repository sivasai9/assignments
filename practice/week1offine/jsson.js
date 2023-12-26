const users={
    nams:"siva",
    age:45,
};
const us='{"name":"sai","age":24,"gender":"male"}';
const newuser=JSON.parse(us);
console.log(newuser.name);
console.log(JSON.stringify(users));
