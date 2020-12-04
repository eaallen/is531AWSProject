import './App.css';
import React from 'react'
import axios from 'axios'
import Card from './comps/DoughnutCard.js'
class App extends React.Component{
  constuctor(props){}
  state = {
      data:null
  }
  // const [data, setData] = React.useState(false)
  // db_data = await lambda 
  //setData(db_data)
  
  
  
  async componentDidMount(){
    const _data  = await axios.get('https://2ph3hwixof.execute-api.us-east-1.amazonaws.com/Prod/getter')

    this.setState({
      data:_data.data
    })
  }
  
  
  render(){
    console.log(this.state.data)
    if(!this.state.data){
      return <div>
        loading . . . 
      </div>
    }
    
    
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-success">
          <a className="navbar-brand text-success">Paradise Doughnuts</a>
          <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-success">
              <li className="nav-item active">
                <a className="nav-link text-success">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='body'>
          
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                  <h1 className="font-weight-light">Where all of your doughnut dreams come true!</h1>
                  <p className="lead">Excitement with Every <code>Byte</code></p>
                </div>
              </div>
            </div>
          </header>
          
          <div className='container'>
            <div className='row'>
                {this.state.data.map(x=>{
                  return<div className='col-md-4' key={x.name.S}> 
                    <Card key={x.name.S} name={x.name.S} image={`https://paradise-donut-12-2020.s3.amazonaws.com/krispy+kreme/${x.file_name.S}`}/>
                  </div>
                })}
            </div>
          </div>
          
        </div>
      </div>
      
    );
  }
}

export default App;
