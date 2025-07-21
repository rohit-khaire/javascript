// async function getUsers(){
//   try{const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   const data = await response.json();
//   console.log(data);}
//   catch(e){
//     console.log(e)
//   }
// }
// getUsers();

fetch("https://api.github.com/users/hiteshchoudhary"
).then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log("Error: ",error);
})