import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
            className="writeImg" 
            src="https://pbs.twimg.com/media/G9OARh8XQAA1MbU?format=jpg&name=medium" 
            alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus" style={{cursor:"pointer"}}></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Put your thoughts here." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
