class Empolyee{
    // declare the constructor
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    // declare the method
    detail(){
        document.writeln(this.id+" "+this.name+"<br>");
    }
}
    // we create the method
    let e1=new Empolyee(101,"roy");
    console.log(e1)
    let e2=new Empolyee(102,"masthan");
    // we can accessing the method
   e1.detail();
   
e2.detail()

// ------------prototype--------------

Empolyee.prototype.greetFun=function(){
    return this.name;
}
console.log(e2.__proto__.greetFun());
console.log(e2.greetFun());
// -----------------static keyword----
class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    static display(){
        return "static method is invoked";
    }
     display(){
       return  Student.display()
    }
}
let stu=new Student("101","masthan")
console.log(stu.display())


// --------------Encapsulation------------
class Bank{
    constructor(){
        var amount;
        var bankNo;
    }
    getDetails(){
        return "your amount is $:"+this.amount+" your bank account number is :"+this.bankNo;
    }
    setAmount(amount){
       this.amount=amount;
    }
    setBankNO(bank){
        this.bankNo=bank;
     }
}
let user1=new Bank();
user1.setAmount(10000);
user1.setBankNO(6998113);
console.log(user1.getDetails())


// ------------------EVENTS_-------------------------

function clicked(){
    alert("user has been clicked ")
}


// --------------------addeventListener------

var parent=document.getElementById("parent");
var child=document.getElementById("child");
var event1=document.getElementById("event1");
var event2=document.getElementById("event2");

var tasks=document.getElementById("tasks");
// event bubbing
parent.addEventListener("click",()=>{
    console.log("parent clicked")
})
child.addEventListener("click",()=>{
    console.log("child clicked")
})
event1.addEventListener("click",()=>{
    console.log("event1 clicked")
})
event2.addEventListener("click",()=>{
    console.log("event2 clicked")  
})


   // -----exception handing--------
   try{
    var a=0;
    console.log("hello")
    var num=10/b;
    
   }
   catch(e){
    console.log(e.message)
   }
   finally{
    console.log("finally block excuted")
   }

// -------------------------this keyword----------
function A(){
var a=10;

console.log(this.a)
}
console.log(this.a)
A();