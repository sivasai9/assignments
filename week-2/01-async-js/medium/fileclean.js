const fs=require("fs");
function r(){
    fs.readFile("1-file-cleaner.md","utf-8",function(err,data){
        const word=data.split(" ");
        let res=" ";
        for (const words of word){
            if(words!==" "){
                res+=words;
            }
        }
        res=res.trim();
        console.log(res);
        fs.writeFile("1-file-cleaner.md",res,"utf-8" ,function(err,data){
            console.log("successfuly cleaned and written back");
        });
    }); 
}
r();
