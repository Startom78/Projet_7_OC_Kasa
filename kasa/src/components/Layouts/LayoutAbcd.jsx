import '../../styles/layoutabcd.css'

const LayoutAbcd= ({componentA, componentB, componentC, componentD}) => {
    return(
        <div className="abcd">
            <div className="ab">
                <div className="a">
                    {componentA}
                </div>
                <div className="b">
                    {componentB}
                </div>
            </div>

            <div className="cd">
                <div className="c">
                    {componentC}
                </div>
                <div className="d">
                    {componentD}
                </div>
            </div>
        </div>
    )
}

export default LayoutAbcd