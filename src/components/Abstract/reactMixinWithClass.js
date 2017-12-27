import {getOwnPropertyDescriptors} form './private/utils'

const {defineProperty} = Object;

function handleClass(target,mixins){
    if(!minins.length){
        throw new SyntaxError('@mixin() class ${target.name} requires at least one mixinas an argument');        
    }


    for (let i=0, l=mixins.length; i<l; i++){
        //获取mixins的attributes 对象
        const descs = getOwnPropertyDescriptors(mixins[i]);

        //批量定义 mixins 的attributes 对象
        for(const key in descs){
            if(!(key in target.prototype)) {
                defineProperty(target.prototype,key,descs[key]);
            }
        }
    }
}

export default function mixin(...mixins) {
    if(typeof mixins[0] === 'function'){
        return handleClass(mixins[0],[]);
    }else{
        return target => {
            return handleClass(target,mixins);
        };
    }
}



// use
import React,{component} from 'React';
import {mixin} from 'core-decorators';

const PureRender = {
    shouldComponentUpdate(){

    }
}

const Theme = {
    setTheme(){}
}

mixin(PureRender,Theme)
//@mixin(PureRender,Theme)

class MyComponent extends Component {
    
}






























