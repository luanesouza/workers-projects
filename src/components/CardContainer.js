import React from 'react'
import Card from './Card'
import { getWorker } from '../utils';

export default function CardContainer(props) {
  console.log(props.worker);
    const order = props.workOrders.map(
      order =>
      <Card
      key={order.id}
      name={order.name}
      description={order.description}
      deadline={order.deadline}
      worker={props.worker}
      workerId={order.workerId}
      getWorkerInfo={props.getWorkerInfo }/>
    )


  return (
    <section className='ordersContainer'>
      {order}
    </section>
  )
}
