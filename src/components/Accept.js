import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import db from '../firebase'
import './Available.css'
import { Check, CheckBox, Clear } from '@material-ui/icons'
const Accept = () => {
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
              temp['id']=doc.id;
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
                      temp['id']=doc.id;
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
          <th>Patient Name</th>
          <th>Blood Group</th>
          <th>Age</th>
          <th>Accept/Reject</th>
        </tr>
        {
          vals.map((key,index)=>
          {
            console.log(key);
            return(
            <tr className='tr-details'>
            <td data-th="Renter ID" style={{borderRight: `0.5px solid black`}}>
             {key.hospital}
             
           </td>
           <td data-th="Renter ID" style={{borderRight: `0.5px solid black`}}>
             {key.name}
             
           </td>
           <td data-th="Model" style={{borderRight: `0.5px solid black`}}>
             {key.blood}
           </td>
           <td data-th="RegNo" style={{borderRight: `0.5px solid black`}}>
             {key.age}
           </td>
           <td data-th="Phone Number" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                <div className='box-select' id={key.id.toString()+"accept"}>
                <Check style={{color:'green'}} onClick={()=>{
                    db.collection('Organs').doc(key.id).update({status:'accepted'}).then(()=>{
                        alert('Updated successfully');
                        document.getElementById(key.id.toString()+"accept").style.border = '0.75px solid black';
                        document.getElementById(key.id.toString()+"reject").style.border = 'none';
                    }).catch(()=>{
                        alert('Failed to update');
                    });
                }}></Check>
                </div>
                <div className='box-select' id={key.id.toString()+"reject"}>  
                <Clear style={{color:'red'}} onClick={()=>{
                    db.collection('Organs').doc(key.id).update({status:'rejected'}).then(()=>{
                        alert('Updated successfully');
                        document.getElementById(key.id.toString()+"reject").style.border = '0.75px solid black';
                        document.getElementById(key.id.toString()+"accept").style.border = 'none';
                    }).catch(()=>{
                        alert('Failed to update');
                    })
                }}></Clear>
                </div>
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

export default Accept
