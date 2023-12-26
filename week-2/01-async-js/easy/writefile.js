const fs=require("fs");
const newf="completed my 10th and intermediate in my native plac which is fom andhra pradesh";
function f(){
    fs.writeFile("a.txt",newf,"utf-8",function(err){
        console.log("file have been upadte succesfully");
        return;
    });
}
f();

