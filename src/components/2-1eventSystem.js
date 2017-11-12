import React from 'react';

class AppComponent extends React.Component {
   
  constructor(props){
    super(props);

    this.constructorBindHandleClick.bind(this);
  }
  
  

  bindHandleClick(e,arg){
    console.log(arg);
  }
  constructorBindHandleClick(e){
    console.log(e);
  }
  arrowBindClick1 = (e) => {
    console.log(e);
  }
  arrowBindClick2(e) {
    console.log(e);
  }
  componentDidMount(){
    var self = this;
    //console.log(self.refs)
    self.refs.button.addEventListener('click', e => {
      self.arrowBindClick2(e);
    })
  }
  componentWillUnmount(){
    var self = this;
    //console.log(self.refs)
    self.refs.button.removeEventListener('click');
  }
  

  render() {
    return (
      <div className="index">
        <button onClick={this.bindHandleClick.bind(this,'test')}>bind方法绑定</button>
        {/* <button onClick={::this.handleClick}>bind方法绑定</button> */}
        <button onClick={this.constructorBindHandleClick}>构造器内声明</button>
        <button onClick={this.arrowBindClick1}>箭头函数</button>
        <button onClick={(e)=> this.arrowBindClick2(e)}>箭头函数</button>

        <button ref="button">原生事件</button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
