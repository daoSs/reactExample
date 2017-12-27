import React from 'react';

class AppComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        this.state = {
            inputValue: '',
            textareaValue: ''
        }
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handleTextareaChange(e){
        this.setState({
            textareaValue: e.target.value
        })
    }

    render(){
        const { inputValue, textareaValue} = this.state;
        return(
            <div>
                <p>单行：
                    <input type="text" value={inputValue} onChange={this.handleInputChange} />
                </p>
                <p>多行:  
                    <input type="text" value={textareaValue} onChange={this.handleTextareaChange} />
                </p>
            </div>
        )
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;