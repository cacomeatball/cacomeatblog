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
            src="https://pbs.twimg.com/media/G9-IUG9XcAE7qaD?format=jpg&name=900x900"
            alt=""
        />
    </div>
  )
}
