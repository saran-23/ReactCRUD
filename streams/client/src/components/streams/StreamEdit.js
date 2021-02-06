import  _  from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css'; // 
import {Spin} from 'antd';


import {fetchStream,editStream} from '../../actions';
import  StreamForm from './StreamForm';
class  StreamEdit extends React.Component {
componentDidMount () {
    this.props.fetchStream(this.props.match.params.id);
}

onSubmit = formvalues => {
    this.props.editStream(this.props.match.params.id,formvalues);
};

    render() {
        if(!this.props.stream){
                return <div><Spin></Spin></div>
        }
    return  (

 
        <div>
     
     <h2 className=" ui header purple" > CRUD Operations</h2>
            <h3 className=" ui header">Edit a Form</h3>
            <StreamForm 
            initialValues={_.pick(this.props.stream, 'name','age','email','phone','address','course','feespaid','mothername','fathername',)}    // _. pick helps to pick the specific content (title) in same array
            onSubmit={this.onSubmit}/>
            </div>
    );
    }
}


const mapStateToProps = (state,ownProps) => {
  
    return {stream:state.stream[ownProps.match.params.id]};
}

export default  connect (mapStateToProps,{fetchStream,editStream})(StreamEdit);