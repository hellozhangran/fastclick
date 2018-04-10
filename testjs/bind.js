
function Ran(){
    function bind(method, context) {
        return function() { return method.apply(context, arguments); };
    }
    this.name = 'zhangran'
    
    // this.doSome = function(){
    //     console.log(this)
    // }

    this.doSome = bind(this.doSome, this)
}

// new Ran过程中，先解析prototype中的定义
Ran.prototype.doSome = function(){
    console.log(this)
}