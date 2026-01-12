import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Your Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Account
                </span>
            </div>
            <form action="" className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="https://pbs.twimg.com/media/G9joRN3bUAAau9-?format=jpg&name=small" 
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Josuke" />
                <label>Email</label>
                <input type="email" placeholder="josuke@morioh.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
