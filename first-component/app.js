//Variable form

let newComponent =
     <div> {/* You can only have one parent element in JSX.  So everything needs to go within THIS div. */}
                <div className="boxContainer"> {/* This is the container to hold the top two boxes. */}
                    <div className="redBox"></div> {/* Each div is a box with a class named after the color I'd like it to be. */}
                    <div className="greenBox"></div>
                </div>
                <div className="boxContainer"> {/* This is the container to hold the bottom two boxes. */}
                    <div className="blueBox"></div>
                    <div className="yellowBox"></div>
                </div>
            </div> /*  End of the parent div from line 2 */
    //return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>

//Function form

let FirstComponent = () => {
    return <div> {/* You can only have one parent element in JSX.  So everything needs to go within THIS div. */}
                <div className="boxContainer"> {/* This is the container to hold the top two boxes. */}
                    <div className="redBox"></div> {/* Each div is a box with a class named after the color I'd like it to be. */}
                    <div className="greenBox"></div>
                </div>
                <div className="boxContainer"> {/* This is the container to hold the bottom two boxes. */}
                    <div className="blueBox"></div>
                    <div className="yellowBox"></div>
                </div>
            </div> /*  End of the parent div from line 2 */
    //return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

ReactDOM.render(newComponent, document.getElementById('root'))

//Function form
// ReactDOM.render(<FirstComponent />, document.getElementById('root'))