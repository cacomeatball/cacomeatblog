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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
            Ut, vitae. Architecto error impedit quae assumenda, debitis aspernatur <br/>
            tenetur dicta cumque harum alias. Assumenda, necessitatibus natus <br/>
            perspiciatis dolorem temporibus qui illum!</p>
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
