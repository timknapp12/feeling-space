import React, { Component } from "react";
import './App.css';


export default class Home extends Component {
  state = {
    feelings: [
      {
        name: "happy",
        color: "yellow",
        margin: 0
      },
      {
        name: "sad",
        color: "blue",
        margin: 100
      },
      {
        name: "angry",
        color: "red",
        margin: 200
      },
      {
        name: "lonely",
        color: "purple",
        margin: 300
      },
      {
        name: "jealous",
        color: "green",
        margin: 400
      }
    ],
    selected: '',
    margin: null
  };

  changeSelected(item) {
    this.setState({
      selected: item.color,
      margin: item.margin
    });
  }

  render() {
      console.log(this.state.selected)
    const colors = this.state.feelings.map((item, i) => {
      return(
        <div key={item.name}
        className='feelings-wrapper'
        onClick={() => this.changeSelected(item)}
        style={{color: item.color}}
        >
         {item.name}
         <div >
         </div>
        </div>
      ) 
    });

    return <div>
        <h1>Click on how you are feeling!</h1>
        {colors}
            <div className='' >
                <div style={{
                    backgroundColor: this.state.selected, 
                    width: 50, 
                    height: 50,
                    borderRadius: 25,
                    marginLeft: this.state.margin,
                    marginTop: 100
                    }} >
                </div >
            </div>
        </div>;
  }
}
