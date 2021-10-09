const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const fs = require('fs');

var filename = "";
var directory = "";
var content = "";


var createDirectoryWizard = () =>{
   rl.question("Enter Directory Name: ",(ans) =>{
      directory = ans;
      fs.mkdir(ans,(err) =>{
          if(err){
              console.log(err);
          }else{
              console.log(directory + " Created");
            }
            repeat();
      });
   });
};

var removeDirectoryWizard = () =>{
  rl.question("Enter Name of Directory which you want to remove: ",(ans) =>{
    directory = ans;
    fs.rmdir(ans,(err) =>{
      if(err){
          console.log(err);
      }else{
          console.log(directory + " Deleted");
      }
      repeat();
    });
  });
};

var writeFileWizard = () =>{
    rl.question("Enter File name: ",(ans) =>{
     filename = ans + ".txt";
      rl.question("Enter File Content: ",(ans) =>{
          content = ans;
         fs.writeFile(filename,content,(err) =>{
            if(err){
                console.log(err);
            }else{
                console.log(filename+" Created Successfully!!!")
            }
            repeat();
         });       
     });
    });
};
var readFileWizard = () =>{
    rl.question("Enter File Name that you want to read: ",(ans) =>{
     filename = ans + ".txt";
     fs.readFile(filename , 'utf8',(err,result) =>{
       if(err){
           console.log(err);
       }else{
           console.log(result);
       }
       repeat();
     });
    });
};
var deleteFileWizard = () =>{
    rl.question("Enter File Name which you want to delete: ",(ans) =>{
       filename = ans + ".txt";
       fs.unlink(filename,(err) =>{
           if(err){
               console.log(err);
           }else{
               console.log(filename + " Deleted");
           }
           repeat();
       });
    });
};
var appendFileWizard = () =>{
    rl.question("Enter File name in which you want to append: ",(ans) =>{
      filename = ans + ".txt";
      rl.question("Enter content: ",(ans) =>{
       content = ans;
       fs.appendFile(filename,content,(err) =>{
          if(err){
              console.log(err);
          }else{
              console.log("Content appended in File " + filename);
          }
          repeat();
       });
      });
    });
};
var updateFileWizard = () =>{
    rl.question("Enter File Name which you want to modify: ",(ans) =>{
     filename = ans + ".txt";
     rl.question("Enter content: ",(ans) =>{
         content = ans;
         fs.writeFile(filename,content,(err)=>{
           if(err){
               console.log(err);
           }else{
               console.log("Data Updated in File "+ filename);
           }
           repeat();
         });
     });
    });
};
var renameFileWizard = () =>{
    rl.question("Enter File name to rename: ",(ans) =>{
       filename = ans + ".txt";
       rl.question("Enter new name for rename File: ",(ans) =>{
        var newfilename = ans+".txt";
        fs.rename(filename,newfilename,(err) =>{
          if(err){
              console.log(err);
          }else{
              console.log("New File Name is " + newfilename);
          }
          repeat();
        });
       });
    });
};

console.log("Welcome to Khushi's File System\n");

var instructions = () =>{
    console.log("Enter 1 for Create Directory");
    console.log("Enter 2 for Remove Directory");
    console.log("Enter 3 for Write in File");
    console.log("Enter 4 for Read File");
    console.log("Enter 5 for Delete File");
    console.log("Enter 6 for Append Data in File");
    console.log("Enter 7 for Update File with New Data");
    console.log("Enter 8 for Rename File");
    console.log("Enter 9 for Exit");
};

var start =() =>{
    rl.question("Enter Your Choice: ",(ans) =>{
         if(ans == '1'){
             createDirectoryWizard();
         }else if(ans == '2'){
             removeDirectoryWizard();
         }else if(ans == '3'){
             writeFileWizard();
         }else if(ans == '4'){
             readFileWizard();
         }else if(ans == '5'){
             deleteFileWizard();
         }else if(ans == '6'){
             appendFileWizard();
         }else if(ans == '7'){
             updateFileWizard();
         }else if(ans == "8"){
             renameFileWizard();
         }else if(ans == "9"){
             rl.close();
         }else{
             console.log("Invalid Choice!!!");
             start();
         }
    });
};

var repeat = () =>{
    instructions();
    start();
};
repeat();