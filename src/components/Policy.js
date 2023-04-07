import React from 'react'
import Navbar from './Navbar'
import './Policy.css'
import { CheckBox } from '@material-ui/icons'

const Policy = () => {
  return (
    <div className='page-policy'>
    <Navbar></Navbar>
      <div class="policy-compliance-page">
        <div className="container10">
            <div className="main-container">
            <h2>Terms and Conditions</h2>
                <p>
                A privacy policy is a statement that informs users about the data collected by the website and how it is used. It is essential to have a clear privacy policy that complies with data protection regulations such as the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA). The privacy policy should disclose the type of data collected, such as personal information, medical history, and contact information. It should also inform users about how the data is used, stored, and shared. Furthermore, it should outline the measures taken to secure the data and protect it from unauthorized access.
                </p>
                <p>Obtaining consent from users is a critical aspect of policy compliance. The website must obtain explicit consent from users before collecting and processing their data. This means that users must be informed about what data is collected and how it is used before they agree to share it. Consent must be obtained for each specific use of the data, such as registering as a donor, receiving newsletters, or participating in surveys.</p>
                <p>Data protection refers to the measures taken to ensure that users' data is secure and protected from unauthorized access. The website must comply with data protection regulations such as GDPR or CCPA. This includes implementing security measures such as encryption, access controls, and firewalls to protect user data. It is also essential to have a disaster recovery plan in case of a breach or data loss.</p>
            </div>
        </div>    
            <div className="accept-container">
            <input type="checkbox" id="check"/>
            I have read and agree to all the terms and conditions of the company
            </div>
    </div>
        </div>
  )
}

export default Policy
