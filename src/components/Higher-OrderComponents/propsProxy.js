import React from 'react';
//高阶组件——控制props
const MyContainer = (WrappendComponent) => 

    class extends Component {
        render(){
            const newProps = {
                text: newText,
            };
            return <WrappendComponent {...this.props} {...newProps} />;
        }
    }


//通过 refs 使用引用
//import React,{Component} from 'react';

const MyContainer = (WrappendComponent) => 
    class extends Component {
        proc(WrappendComponentInstance){
            WrappendComponentInstance.method();
        }

        render(){
            const props = Object.assign({},this.props,{
                ref:this.proc.bind(this)
            });
            return <WrappendComponent {...props}/>
        }
    }

// 抽象state

const MyContainer = (WrappendComponent) => 

    class extends Component {
        constructor(props){
            super(props);
            this.state = {
                name: ''
            };

            this.onNmaeChange = this.onNmaeChange.bind(this);
        }

        onNmaeChange(event){
            this.setState({
                name:event.target.value
            })
        }
        render(){
            const newProps = {
                name: {
                    value:this.state.name,
                    onChange: this.onNmaeChange
                }
            };
            return <WrappendComponent {...this.props} {...newProps} />;
        }
    }

//抽象status 的使用方法

class MyComponent extends Component {
    render(){
        return <input name="name" {...this.props.name}/>
    }
}