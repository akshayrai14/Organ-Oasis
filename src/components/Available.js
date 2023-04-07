import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import db from '../firebase'
import './Available.css'
const Available = () => {
  const [vals, setvals] = useState([]);
  const [filter, setfilter] = useState("");
  const filters = ['','liver','eyes','kidney','lungs','heart'];
  var obj=[];
  useEffect(() => {
      db.collection('Organs').onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
            var temp={};
            if(filter=="")
            {
            temp['age']=doc.data().age;
            temp['blood']=doc.data().blood;
            temp['city']=doc.data().city;
            temp['name']=doc.data().name;
            temp['organ']=doc.data().organ;
            temp['status']=doc.data().status;
            temp['hospital']=doc.data().hospital;
            obj.push(temp);
            }
            else{
                if(doc.data().organ==filter){
                    temp['age']=doc.data().age;
                    temp['blood']=doc.data().blood;
                    temp['city']=doc.data().city;
                    temp['name']=doc.data().name;
                    temp['organ']=doc.data().organ;
                    temp['status']=doc.data().status;
                    temp['hospital']=doc.data().hospital;
                    obj.push(temp);
                }
            }
            
        })
        setvals(obj);
    })
  }, [filter]);
  return (
    <div>
    <Navbar></Navbar>
    <div className="bgpage"></div>
      <div className="head">
      <div className="filtering">
        <div className="filter-select">
        <select id="parent_selector" class="event-type-select" onChange={(e)=>{
            console.log("thishs ");
            console.log(e.target.selectedIndex);
            setfilter(filters[e.target.selectedIndex]);
        }}>
			  <option value="">Select Organ</option>
			  <option value="cat-1">Liver</option>
			  <option value="cat-2">Eyes</option>
			  <option value="cat-3">Kidney</option>
			  <option value="cat-4">Lungs</option>
			  <option value="cat-4">Heart</option>
			</select>
        </div>
      </div>
    <div class="container" >
    <h1 style={{marginBottom:50,}}></h1>
  <table class="rwd-table">
    <tbody>
      <tr style={{background:'#292828'}}>
        <th>Hospital Name</th>
        <th>Donor Age</th>
        <th>Blood Group</th>
        <th>Status</th>
      </tr>
      {
        vals.map((key)=>{
          console.log(key);
          return(
          <tr>
          <td data-th="Renter ID" style={{borderRight: `0.5px solid black`}}>
           {key.hospital}
           
         </td>
         <td data-th="RegNo" style={{borderRight: `0.5px solid black`}}>
           {key.age}
           
         </td>
         <td data-th="Model" style={{borderRight: `0.5px solid black`}}>
           {key.blood}
           
         </td>
         <td data-th="Phone Number">
           {key.status}
           
         </td>
        </tr>
         )
        }) 
    }
    </tbody>
  </table>
</div>
    </div>
    </div>
  )
}

export default Available
