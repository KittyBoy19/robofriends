import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this);
    }
  
    render() {
      return (
        <div>
            <Card id={this.state.value} name={robots[0].name} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );

// ReactDOM.render(
    // <div>
    //     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    //     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    //     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    //     {/* <input onChange={Disguise} className="pa2 input-reset ba bg-transparent w-100 measure"/> */}
    // </div>
//     , document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


