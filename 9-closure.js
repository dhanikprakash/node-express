function outer() {
    return function inner(){
       console.log(a);
    }
    var a = "hello"
}

outer()();