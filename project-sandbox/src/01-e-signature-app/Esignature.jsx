import React from 'react'
import Title from '../components/Title'

const Esignature = () => {
  const inputStyle={
    border:"none",
    borderBottom:"2px dotted",
    outline:"none",
    padding:".35rem 0"
  };
  document.body.style.background="#eee";
  return (
    <div className='container text-center'>
          <Title text={"Name"}/> 
          <Title text={"Date"}/>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit officiis neque mollitia unde nulla dolore tempora, distinctio autem tenetur eaque commodi excepturi vitae omnis quis perspiciatis consequuntur ea officia atque!
          </p>
          <footer className='d-flex' style={{
            justifyContent:"space-around",
            position:"relative",
            top:"40vh",
          }}>
          <input type="date" value={""} style={inputStyle}/>
          <input type="text" value={""} style={inputStyle}/>
          </footer>

    </div>
  )
}

export default Esignature