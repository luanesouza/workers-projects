import React, {Component} from 'react';
import CardContainer from './components/CardContainer';
import { getWorkOrders, getWorker } from './utils';
import './App.css';

class App extends Component {
  state = {
    workOrders: [],
    error: '',
    worker:''
  }

  async componentDidMount() {
    let workOrders = await getWorkOrders()

    this.setState({
      workOrders
    })
  }

  getWorkerInfo = async (id) => {
    let worker = await getWorker(id);
    return worker;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({
      [name]: value,
    })
  }

  render() {

    return (

      <main className="App">
        <input worker={this.state.worker} name='worker' onChange={this.handleChange} type='text' placeholder='Filter by worker name...'/>
        <CardContainer getWorkerInfo={this.getWorkerInfo} workOrders={this.state.workOrders}/>
      </main>
    );
  }
}

export default App;
