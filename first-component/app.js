let FirstComponent = () => {
    return <div>
                <div className="boxContainer">
                    <div className="redBox"></div>
                    <div className="greenBox"></div>
                </div>
                <div className="boxContainer">
                    <div className="blueBox"></div>
                    <div className="yellowBox"></div>
                </div>
            </div>
    //return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))