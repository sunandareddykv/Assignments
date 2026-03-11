// try catch finally exception handling...
let newEmpname: any;
try {
    console.log (newEmpname.toLowerCase());
} catch(error)  {
    console.log("An exception occured. Please check the variable.");
    console.log(newEmpname.toUpperCase());
    }
    finally{
        console.log("exception is completed");
    }