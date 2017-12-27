import React from 'react';

class SelectInput extends React.Component {
    static displayname = 'SelectInput';

    render(){
        const {selectedItem, isActive, onClickHeader, placeholder} = this.props;
        const { text } = selectedItem;

        return (
            <div>
                <div onClick={onClickHeader}>
                    <input 
                        type= "text"
                        disabled
                        value= {text}
                        placeholder= {placeholder}
                    />
                    <Icon className={isActive} name="angle-dpwn"/>
                </div>
            </div>
        )
    }
}

