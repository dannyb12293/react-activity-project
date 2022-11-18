import React from 'react'
import CreateActivity from './CreateActivity'
import ActivityContext from '../UTILS/ActivityContext'
import { useContext } from 'react'

const AllActivities = ({ activityData }) => {
    const context = useContext(ActivityContext);
    

  return (
    <div className='card text-center'>
        {/* <CreateActivity /> */}
        <h1 className='card-header'> My Activities</h1>
      {activityData.map((activity) => (
        <div key={activity.id}>
            <div className='card-body'>
            <h3>{activity.title}</h3>
            <a className='btn btn-light' href={`one-activity/${activity.id}`} > 
            {''}
            View Activity{""}
            </a>
            <a className='btn btn-secondary' href={`update-activity/${activity.id}`} > 
            {''}
            Update Activity{""}
            </a>
            <button className='btn btn-primary'  onClick={() => context.handleDelete(activity.id)}>Delete</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default AllActivities
