import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import API from '../UTILS/API'
import ActivityContext from '../UTILS/ActivityContext'
import { useContext } from 'react'



const OneActivity = () => {
    const [activity, setActivity] = useState({});
    const {id} = useParams();
    const context = useContext(ActivityContext);

    useEffect(() =>{
        const getActivity = () =>{
            API.getActivityById(id).then(res =>{
                console.log(res)
                setActivity(res.data)
                console.log(activity)
            })
        }
        getActivity();
    },[])
  return (
     
    <div className="card" >
        <div className="card-header">
            {activity.title}
        <p class="card-text"> <br/>{activity.body}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Date: <br/>{activity.date}</li>
            <li className="list-group-item">Activity Type: <br/>{activity.type}</li>
            <li className="list-group-item">Distance: <br/>{activity.distance}</li>
            <li className="list-group-item">Duration: <br/>{activity.duration}</li>
        </ul>

        <button className='btn' onClick={() => context.handleDelete(activity.id)}></button>
        <a className='btn btn-primary' href={`/update-activity/${activity.id}`}> update activity </a>
    </div>
  )
}

export default OneActivity
