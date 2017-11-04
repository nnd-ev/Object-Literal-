var human = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName;     
    },
    myName:function(){
        return this.lastName+" "+ this.age+" "+ this.fullName();
    }
};
var human2={
    secondName: "some text",
    wrapper:function(argument1){
        return this.secondName+" "+human.fullName()+" "+argument1;
    }

};

 
document.write("<br>"+human.fullName()); //Output: Virat Kohli
document.write("<br>"+human.myName());
document.write("<br>"+human2.wrapper("some another text"));
