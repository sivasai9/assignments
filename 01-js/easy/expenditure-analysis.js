/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let foud;
  let out=[];
  let len=transactions.length;
  for(let i=0;i<len;i++){
    foud=false;
    let len2=out.length;
    for(let j=0;j<len2;j++){
      if(transactions[i]["category"]==out[j]["category"]){
        out[j]["totalspent"]=out[j]["totalspent"]+transactions[i]["price"];
        foud=true;
        break;
      }
    }
    if(foud==false){
      out.push({
        category:transactions[i]["category"],
        totalspent:transactions[i]["price"],
      });
    }
  }

  return out;
}

 let Transaction =
[{
id: 1,
timestamp: 1656076800000,
price: 10,
category: 'Food',
itemName: 'Pizza',
}];
console.log(calculateTotalSpentByCategory(Transaction));

