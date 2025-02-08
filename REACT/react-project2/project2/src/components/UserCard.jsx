import React from 'react'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-card'>
        <p className='user-name' id='user-name'>{props.name}</p>
        <img src={props.image} alt="user-img" id='user-image'/>
        <p id='user-desc'>{props.desc}</p>
      
    </div>
  )
}

export default UserCard
