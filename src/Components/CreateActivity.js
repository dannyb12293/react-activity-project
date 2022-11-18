import React from 'react'
import ActivityContext from '../UTILS/ActivityContext';
import { useContext } from 'react';

const CreateActivity = () => {
  const context = useContext(ActivityContext)

    return (
    <div>
    <form onSubmit={context.handleSubmit} className="forms">
        <div className='row'>
        <label htmlFor="title">Title Of Activity</label>
        
        <input name="title" className='form-control' type='text' onChange={context.handleTitleChange} ></input>
        </div>
        <br/>
        <div className='row'>
            <div className='col'>
        <label for="type">Choose Workout Type:</label>
        <br/>
        <select className='form-select'  onChange={context.handleTypeChange}>
            <option selected>Select Workout</option>
            <option value="run">Run</option>
            <option value="cycling">Cycling</option>
            <option value="strength">Strength</option>
            <option value="walk">Walk</option>
        </select>
        </div>
        <div className='col'>
        <label htmlFor="date">Date:</label>
        
        <input type="date" id="date" className='form-control' onChange={context.handleDateChange}></input>
        </div>
        </div>
        <div className='row'>
            <div className='col'>
        <label htmlFor="distance">Distance</label>
        <br/>
        <input className='form-control' id='distance' onChange={context.handleDistanceChange} ></input>
       </div>
       <div className='col'>
        <label htmlFor='duration'>Duration</label>
        <br/>
        <input className='form-control' id='duration' onChange={context.handleDurationChange}></input>
        </div>
        </div>
        <div className='row'>
        <label htmlFor="body">Body of Activity</label>
        <br/>
        <textarea
          rows="5"
          cols="5"
          id="body"
          className='form-control'
          onChange={context.handleBodyChange}>
          </textarea>
          <br/>
          <button onClick={context.handleSubmit} className="btn btn-primary" type="button">
              Add Activity
          </button>
          </div>
    </form>
    </div>
);
}

export default CreateActivity
