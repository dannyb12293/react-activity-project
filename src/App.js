import React, {useEffect, useState} from 'react';
import AllActivities from './Components/AllActivities';
import API from './UTILS/API';
import './App.css';
import OneActivity from './Components/OneActivity';
import { Routes, Route, useNavigate} from 'react-router-dom'
import UpdateActivity from './Components/UpdateActivity';
import ActivityContext from './UTILS/ActivityContext';
import NavBar from './Components/NavBar';
import CreateActivity from './Components/CreateActivity';
function App() {

  const [allActivities, setAllActivities ] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title:"",
    body:"",
    type:"",
    date:"",
    distance:"",
    duration:"" 

  });

  const [refresh, setRefresh] =useState({count: 0 })

  const navigate = useNavigate();

  useEffect(()=> {

  getAllActivities();

  }, [])

  const getAllActivities = () =>{
    API.getAll().then(res => {
      
      
      setAllActivities(res.data)
    })
  }

  useEffect(()=>{
    getAllActivities();

  }, [refresh]);

  const contextObject = {
    handleSubmit: (e) =>{
      e.preventDefault();
      API.createActivity(newActivity).then(res => {
        console.log(res); 
        setRefresh({...refresh, count: refresh.count + 1});
        navigate("/");
        document.querySelector(".forms").reset();
      });
    },
    handleTitleChange: (e) =>{
      const {value} = e.target;
      setNewActivity({...newActivity, title:value});
    },
    handleBodyChange: (e) => {
      const {value} = e.target;
      setNewActivity({...newActivity, body:value});
    },
    handleDurationChange: (e) => {
      const {value} = e.target;
      setNewActivity({...newActivity, duration:value})
    },
    handleTypeChange: (e) => {
      const {value} = e.target;
      setNewActivity({...newActivity, type:value})
    },
    handleDateChange: (e) => {
      const {value} = e.target;
      setNewActivity({...newActivity, date:value})
    },
    handleDistanceChange: (e) => {
      const {value} = e.target;
      setNewActivity({...newActivity, distance:value})
    },
    handleDurationChange: (e) => {
      const {value} = e.target;
      setNewActivity({...newActivity, duration:value})
    },
    updateActivity: (id)=> {
      API.updateActivity(id, newActivity).then(res => {
        console.log(res);
        setRefresh({...refresh, count: refresh.count + 1});
        navigate("/");
      });
    },
    handleDelete: (id)=> {
      API.deleteActivity(id).then(res => {
        console.log(res);
        setRefresh({...refresh, count: refresh.count + 1});
        navigate("/");
  
      });
    }
  }

  return (
    <div>
      <ActivityContext.Provider value={contextObject}>
        <NavBar/>
      <Routes>
        <Route 
        path="/" 
        exact element={
          <AllActivities activityData={allActivities} />} 
      />
      <Route path="/create-activity" element={<CreateActivity />} />
      <Route path="/one-activity/:id" element={<OneActivity  />} />
      <Route path="/update-activity/:id" element={<UpdateActivity   />} />
      </Routes>
      </ActivityContext.Provider>
    </div>
  );
}

export default App;
 









 // const handleTitleChange = (e) => {
  //   const {value} = e.target;
    
  //   setNewActivity({...newActivity, title: value})
  // }
  // const handleBodyChange = (e) => {
  //   const {value} = e.target;
    
  //   setNewActivity({...newActivity, body: value})
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   API.createActivity(newActivity).then(res => {
  //     console.log(res); 
  //   })
  // }
 

  // const updateActivity = (id) => {
  //   API.updateActivity(id, newActivity).then(res => {
  //     console.log(res);
  //     setRefresh({...refresh, count: refresh.count + 1});
  //     navigate("/");
  //   });
  // }

  // const handleDelete = (id) => {
  //   API.deleteActivity(id).then(res => {
  //     console.log(res);
  //     setRefresh({...refresh, count: refresh.count + 1});
  //     navigate("/");

  //   });
  // }

