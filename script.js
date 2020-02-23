//let password;
//let tryj = 5;
//while (tryj > 0){
//    password = prompt("Enter the password");
//    if(password==='12345'){
//       alert('welcome to the site')
//        tryj=0
//       }
//       else{
//           tryj--;
//           if(tryj===0){
//                alert('please, try again later')
//           }
//           else{
//               alert('U have ' + tryj + ' trying')
//           }
//       }
//       }



let password;
let tryj = 5;
do {
    password = prompt("Enter the password");
    if(password==='12345'){
       alert('welcome to the site')
        tryj=0
       }
       else{
           tryj--;
           if(tryj===0){
                alert('please, try again later')
           }
           else{
               alert('U have ' + tryj + ' trying')
           }
       }
       }
while (tryj>0);
