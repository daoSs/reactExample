import {mixin} from './mixin';
import React from 'react';
class AppComponent extends React.Component {
    constructor(props){

        super(props);

        const BigMixin = {
            fly: () => {
                console.log('I can fly');
            }
        }

        const Big = function(){
            console.log('new big');
        }

        //console.log(mixin)

        const FlyBig = mixin(Big,BigMixin);
        
        const flyBig = new FlyBig;
        //console.log(flyBig)
        flyBig.fly();
      }

      render() {
        return (
          <div className="index">
            
          </div>
        );
      }


}

AppComponent.defaultProps = {
};

export default AppComponent;