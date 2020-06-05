let TextInput = () => {
    return <input className="textBox" type="text"></input>
    //return <span>Make this component render a styled text input tag</span>
}

let YesNoRadio = () => {
    return <div>
        <input className="radioButtons" type="radio" id="yes" name="yesRadio" value="yes"></input>
        <label htmlFor="yes" className="radioButtons">Yes</label><br></br>
        <input className="radioButtons" type="radio" id="no" name="noRadio" value="no"></input>
        <label htmlFor="no" className="radioButtons">No</label>
</div>
    //<span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
}

let SubmitButton = () => {
    return <button className="theButton" type="submit">Click me!</button>
    //<span>Make this component render a styled button of type "submit"</span>
}

let Form = () => {
return <div>
    <form>
        <TextInput/>
        <TextInput/>
        <YesNoRadio/>
        <TextInput/>
        <YesNoRadio/>
        <SubmitButton/>
    </form>
</div>
    
    //return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))