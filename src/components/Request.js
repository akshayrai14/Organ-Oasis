import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Donate.css'
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import db from '../firebase';
import { Link, useParams } from 'react-router-dom';
const Requested = () => {
    const {username}=useParams();
    const [vals, setvals] = useState([]);
    useEffect(() => {
       var obj=[];
        db.collection('Accounts').doc(username).collection('Request').onSnapshot(
            snapshot=>{
                snapshot.docs.map(doc=>{
                        var temp={};
                        temp['age']=doc.data().age;
                        temp['blood']=doc.data().blood;
                        temp['city']=doc.data().city;
                        temp['name']=doc.data().name;
                        temp['organ']=doc.data().organ;
                        temp['status']=doc.data().status;
                        temp['hospital']=doc.data().hospital;
                        obj.push(temp);
                        console.log(obj);
                })
                setvals(obj)
            }
        )
   }, []);
  return (
    <div className="donate-page">
    <Navbar></Navbar>
    <div className="donate-contain">
    <h2>
    Requests Made:
    </h2>
    <div className="donate-div">
        {
           vals.map((key)=>{
            return(
            <div className="donate">
                <div className="organ-name">{key.organ}</div>
                <div className="patient-name">{key.name} , {key.age}</div>
                <div className="blood-group">{key.blood}</div>
                <hr></hr>
            </div>
            )
           })
        }
        </div>
        <Link to="requested">
        <div className="btn-down">
            <button>Request an Organ</button>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Requested
