import React, { Component } from 'react';
import UserForm from './components/UserForm'
import './App.css';
import Chart from './components/Chart'
import SamplePlan from './components/SamplePlan'
import CSVForm from './components/CSVForm'
//import CSVReader2 from './components/CSVReader2'





class App extends Component {
 constructor(props){
   super(props)
   this.state = { 
     showUserForm: false,
     showChart:false,
     showSamplePlan: false,
     views: '',
    }

   this.handleCLick = this.handleCLick.bind(this)
   this.handleShowChart = this.handleShowChart.bind(this)
   this.handleSamplePlan = this.handleSamplePlan.bind(this)
  }
  handleCLick(){
    console.log("Clicked")
    this.setState({
      showUserForm:true
    })
  }

  handleShowChart(){
    this.setState({
      showChart:true
    })
  }
  handleSamplePlan(){
    this.setState({
      showSamplePlan:true
    })
  }

  renderViews () {
    const view = this.state.view;

    if (view === 'userform') {
      return <UserForm />
    } else if (view === 'csvfile') {
      return <CSVForm />
    } else if (view === 'report') {
      return (
        <div>
        <SamplePlan />
        <Chart />
        </div>
        );
    } else {
      return null;
    }
  }

  switchViews (view) {
    this.setState({
      views: view,
    })
  }

  render() { 
  
  return (
    <div className="App">
      
       <div className="intro-container"class="jumbotron" style={{"padding-bottom":"50px"}}>
          <h1 class="display-4">Welcome to Budgety</h1>
          <p class="lead">You have come to the right place! Our job is to help you achieve your financial goals</p>
          <hr class="my-4"/>
          <p>But first! In order for our team to provide the best advice, please click next to fill out the survey form.</p>
          <p class="lead"/>
          <button className="survey-button" class="btn btn-primary btn-lg" onClick={()=>{this.switchViews('userform')}}>Start Planning!</button>
          <button style={{margin:'auto'}}className="survey-button" class="btn btn-secondary btn-lg" onClick={()=>{this.switchViews('csvfile')}}>I have a CSV File</button>
          <div>
          </div>
          <div className="main">{this.renderViews()}</div>
      </div>
    </div>
  );
}
}

export default App;

{/* {this.state.showUserForm ? <UserForm/> : null}
          </p>
          <button className="sample-plan-button" class="btn btn-warning btn-lg" onClick={this.handleSamplePlan}>Show me a sample!</button>
          {this.state.showSamplePlan ? <SamplePlan/> : null}
          
          <br/>
          <button className="chart-button" class="btn btn-info btn-lg" onClick={this.handleShowChart}>Run My Budget!</button>
          {this.state.showChart ? <Chart/> : null} */}