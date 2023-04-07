import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Donation.css'
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import db from '../firebase';
import { Link, useHistory, useParams } from 'react-router-dom';
const Donation = () => {
    const {username}=useParams();
    const history=useHistory();
    const [vals, setvals] = useState([]);
    useEffect(() => {
    //    var obj=[];
    //     db.collection('Accounts').doc(username).collection('Donation').onSnapshot(
    //         snapshot=>{
    //             snapshot.docs.map(doc=>{
    //                     var temp={};
    //                     temp['age']=doc.data().age;
    //                     temp['blood']=doc.data().blood;
    //                     temp['city']=doc.data().city;
    //                     temp['name']=doc.data().name;
    //                     temp['organ']=doc.data().organ;
    //                     temp['status']=doc.data().status;
    //                     temp['hospital']=doc.data().hospital;
    //                     obj.push(temp);
    //                     console.log(obj);
    //             })
    //             setvals(obj)
    //         }
    //     )
   }, []);
   const addDB =(name,city,age,hospital,blood,organ)=>{
    var obj=[];
    db.collection('Accounts').doc(username).collection('Donation').add({
       name: name,
       city: city,
       age: age,
       hospital:hospital,
       blood: blood,
       organ:organ,
    }).then((res)=>{db.collection('Organs').add({
        name: name,
       city: city,
       age: age,
       hospital:hospital,
       blood: blood,
       organ:organ,
    })
    alert("Updated successfully");
    history.push('/'+username+'/donate');
}).catch((err)=>{console.log(err)});
   }
  return (
    <div className="donate-page">
    <Navbar></Navbar>
    <div className="donate-contain">
    <div className="donate-div1">
    <h2>Donate an Organ</h2>
    <h4>Donation Details :</h4>
        <div className="form">
            <input type="text" id="name" placeholder='Enter Doner Name'/>
            <input type="text" id='age' placeholder='Enter Donor age'/>
            <input type="text" id="city" placeholder='Enter the city' />
            <input type="text" id="hospital" placeholder='Enter the hospital name' />
            <input type="text" id='organ' placeholder='Enter the organ'/>
            <input type="text" id='blood' placeholder='Enter blood Group' />
        </div>
        
        <div className="btn-down">
            <button onClick={()=>{
            var name = document.getElementById('name').value;
            var city = document.getElementById('city').value;
            var age = document.getElementById('age').value;
            var hospital = document.getElementById('hospital').value;
            var organ = document.getElementById('organ').value;
            var blood = document.getElementById('blood').value;
            if(name!=""&&city!=""&&age!=""&&hospital!=""&&blood!=""&&organ!="")
            {
            addDB(name,city,age,hospital,blood,organ);
            }
            }}>Donate an Organ</button>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Donation
