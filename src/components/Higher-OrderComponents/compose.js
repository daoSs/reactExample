//compose的参数是函数，返回的也是函数
//第一个函数接受多个参数，接下来的函数接受上一个函数的返回值
//可接受任意数量的参数，自右向左的

var compose = function(...args){
    var len = args.length
    var count = len-1
    var result
    return function f1(...args1){
        result = args[count].apply(this,args1)

        if(count<= 0 ){
            count = len - 1
            return result
        }else{
            count --
            return f1.call(null, result)
        }
    }
}

