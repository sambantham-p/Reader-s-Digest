import { Avatar } from '@mui/material'
import React from 'react'
import './Book/style.css'
const Profile = (userDetails) => {
  const user = userDetails.user;
  return (
    <div>
        <div className="container">
			<h1 className="heading">Home</h1>
			<div className="form_container">
				<div className="left">
					<img className="img" src="./images/profile.jpg" alt="login" />
				</div>
				<div className="right">
					<h2 className="from_heading">Profile</h2>
					<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
					<input
						type="text"
						defaultValue={user.name}
						className="input"
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className="input"
						placeholder="Email"
					/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
