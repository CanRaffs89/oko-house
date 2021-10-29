import Button from "./Button"

const Section = ({ title, firstPara, secondPara, thirdPara }) => {
    return (
        <div className="section-container">
            <div className="section-content-container">
                <div className="section-text">
                    <h1>{title}</h1>
                    <span className="span-line-text"></span>
                    <p>{firstPara}</p>
                    <p id="secondPara">{secondPara}</p>
                    <p>{thirdPara}</p>
                    <Button link={'/'} text={'MORE'}/>
                </div>
                <div className="section-grid-1">
                    <a className="grid-sm" href="/"></a>
                    <a className="grid-md" href="/"></a>
                    <a className="grid-lg" href="/"></a>
                    <a className="grid-md" href="/"></a>
                    <a className="grid-sm" href="/"></a>
                </div>
            </div>
            <span className="span-line-bottom-border"></span>
        </div>
    )
}

export default Section
