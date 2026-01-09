import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <br/>
            <img
                src="https://info-ongeki.sega.jp/wp-content/uploads/2023/01/2f7d24301814d66289328a852c75e999.png"
                alt=""
                className="sidebarImg"
            />
            <br/>
            <p>My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, 
                where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, 
                and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, 
                and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about 
                twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like 
                a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last 
                check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to 
                trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is 
                how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't 
                lose to anyone.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Projects</li>
                <li className="sidebarListItem">Hobbies</li>
                <li className="sidebarListItem">Goals</li>
                <li className="sidebarListItem">Other Stuff</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Me</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-bluesky"></i>
            </div>
        </div>
    </div>
  )
}
