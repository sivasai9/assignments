/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(le){
    const t=this.le=[];

  }

  add(todo){
    t.add(todo);
  }
  remove(index){
    if(index>=0 && index<to.length){
      
      
    }
    else{
      console.log("index out of boud of exception");
    }
  }
  update(index,updatetodo){
    if(index>=0 && index<to.length){
      this.todos[index]=updatetodo;
    }
    else{
      console.log("index out of boud of exception");
    }
  }
  getall(){
    return t;

  }
  get(index){
    if(index>=0 && index<to.length){
      console.log(t[index]);
    }
    else{
      console.log("index out of boud of exception");
    }
  }
  clear(){
    this.todos=[];
  }

}
const t=new Todo();
t.add("siva");
t.add("sai");
t.add("krishna");
console.log(getall());
