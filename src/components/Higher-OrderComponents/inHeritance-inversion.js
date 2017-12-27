import React from 'react';
const MyContainer = (WrappendComponent) => 

    class extends WrappendComponent {
        render(){
            return super.render();
        }
    }



//渲染劫持

////条件渲染
const MyContainer = (WrappendComponent) =>
    class extends WrappendComponent {
        render(){
            if(this.props.loggedIn){
                return super.render();
            }else{
                return null;
            }
        }
    }

////修改render输出结果
const MyContainer = (WrappendComponent) =>
    class extends WrappendComponent {
        render() {
            const elementsTree = super.render();
            let newProps = {};
            if(elementsTree && elementsTree.type === 'input'){
                newProps = {value : 'may the force be with you'};
            }
            const props = Object.assign({},elementsTree.props ,newProps);
            const newElementsTree = React.cloneElement(elementsTree,props,elementsTree.props.children);
            return newElementsTree;
        }
    }

//控制state
const MyContainer = (WrappendComponent) =>
    class extends WrappendComponent {
        render() {
            return (
                <div>
                    <h2>HOC Debugger Component</h2>
                    <p>{JSON.stringify(this.props,null,2)}</p>
                    <p>{JSON.stringify(this.state,null,2)}</p>
                    {super.render()}
                </div>
            )
        }
    }
