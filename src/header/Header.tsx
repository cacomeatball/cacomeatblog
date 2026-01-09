import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img
            className="headerImg"
            src="https://silentblue.remywiki.com/images/7/74/Ichigeki%21_no_Thema.png"
            alt=""
        />
    </div>
  )
}
