const obj1 = {
    fname: 'Ritesh',
    lname: 'Kumar',
    getfullname : function(){
        
    if(this.lname !== undefined){
        return this.fname;
    }
    return `${this.fname} ${this.lname}`;

    },
};
const obj2 = {
    fname: 'Anjali',
    lname: 'jwala',
    fullname : function(){
          if(this.lname !== undefined){
        return this.fname;
    }
    return `${this.fname} ${this.lname}`;
},

};

console.log(obj1);
console.log(obj1.fname);
console.log(obj2);
console.log(obj1.getfullname());
console.log(obj2.fullname());

