import React, { Component } from 'react'
import './Categories.css';
import axios from 'axios';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokesList: [],
      category:"animal",
    };
  }

  componentDidMount() {
    this.refreshJokes();
  }

  refreshJokes = () => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`)
      .then(res=> this.setState({jokesList:res.data}))
      .catch(err=>console.log(err))
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    }, 
    ()=> {
      // console.log(this.state.category)
      this.refreshJokes()
    });
  };
  

  render() {    
    return (
      <div className = "categories">
        <h1>
          Chuck Norris API Application
        </h1>
        <div className="leftsidebar">
          <h3>Categories</h3>
          
        <div className="nav">
          <ul> 
            <li> 
              <input id="animal"value="animal" name="category" type="radio" defaultChecked onChange={this.handleChange}/>
              <span className="text">Animal</span>
            </li> 
            <li> 
              <input id="career"value="career" name="category" type="radio" onChange={this.handleChange}/>
              <span className="text">Career</span>
            </li> 
            <li> 
              <input id="celebrity"value="celebrity" name="category" type="radio" onChange={this.handleChange}/>
              <span className="text">Celebrity</span>
            </li> 
            <li> 
              <input id="dev"value="dev" name="category" type="radio" onChange={this.handleChange}/>
              <span className="text">Dev</span>
            </li>     
            <li> 
              <input id="science"value="science" name="category" type="radio" onChange={this.handleChange}/>
              <span className="text">Science</span>
            </li>
            <li> 
              <input id="music"value="music" name="category" type="radio" onChange={this.handleChange}/>
              <span className="text">Music</span>
            </li>
                      
          </ul>
        </div>
        </div>
        <div className="main">   
          <h4>Chuck Norris joke from {this.state.category} category is as follows:</h4>         
          <p>{this.state.jokesList.value}</p>
        </div>
      </div>
    )
  }
}

export default Categories

