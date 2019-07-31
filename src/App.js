import React from 'react';
import './App.css';

class App extends React.Component {
   constructor(props){
     super(props);
     this.state ={
       count: 0,
       overTen: false
     }
   }
   handleClick = () => {
     this.setState({count: this.state.count + 1})
   }

   componentDidUpdate(props,state){
    if(this.state.count >= 10 && this.state.count !== state.count){
      this.setState({overTen: true});
    }
   }

  render(){
    let {count} =this.state
  return (
    <div className="App">
      <h1> You clicked the button {count} time</h1>
      {(this.state.overTen)?
        <h4>Best high score of 10</h4>
        :null  
      }
      <button onClick={() => this.handleClick() }>Click</button>
    </div>
  );
}
}

export default App;
