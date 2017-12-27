import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

React.creactClass({
    mixins: [PureRenderMixin],

    render(){
        return <div>foo</div>;
    }
})

//class形式组件中不支持mixin
