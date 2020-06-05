let ProfilePic = () => {
    return <img style={{width:100}} src="simoncute.jpg"/>
    
    //<span>Make this component render an image</span>
}

let CommentBody = () => {
    return <div>
        <h3>Simon</h3>
        <p>Woof woof.</p>
        </div>
    //<span>Make this component render a username in bold above the comment text</span>
}

let Comment = () => {
    return <div>
    <ProfilePic/><CommentBody/>
    </div>

    //<span>Make each comment render a profile picture and the comment body</span>
}

let Comments = () => {
    return <div>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    </div>
    //<span>Make this component render a list of comments</span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))