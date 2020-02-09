import React from 'react'
import Card from './Card'

export default function WorkerInfo(props) {
  const { companyName, email, image, name } = props.workerInfo;
  return (
    <section className='worker-info'>
      <img src={`${image}`} alt='worker-img' />
      <div>
        <h3>{name}</h3>
        <p>{companyName}</p>
        <p>{email}</p>
      </div>
    </section>
  )
}
