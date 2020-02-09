import React, {Component} from 'react'
import WorkerInfo from './WorkerInfo'

export default class Card extends Component  {

  state = {
    workerInfo: ''
  }

  componentDidMount = async () => {
    const { getWorkerInfo } = this.props;
    let workerInfo = await this.props.getWorkerInfo(this.props.workerId);

    this.setState({
      workerInfo: workerInfo.worker
    })
    console.log(workerInfo);
  }

  render() {
    console.log(this.props.worker);

    const { deadline, description, id, name, workerId } = this.props;

    return (
      <section className='order-info'>

        <article>
          <h3> {name} </h3>
          <p>{description}</p>
        </article>

        <WorkerInfo workerInfo={this.state.workerInfo}/>

        <footer>
          <p> </p>
        </footer>
        <hr />
      </section>
    )
  }

}
