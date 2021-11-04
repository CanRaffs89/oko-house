import Button from './Button'
import { Link } from 'react-router-dom'

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
                    <Button link={'/designs'} text={'MORE'}/>
                </div>
                <div className="section-grid-1">
                    <Link className="grid-sm" to="#"></Link>
                    <Link className="grid-md" to="#"></Link>
                    <Link className="grid-lg" to="#"></Link>
                    <Link className="grid-md" to="#"></Link>
                    <Link className="grid-sm" to="#"></Link>
                </div>
            </div>
            <span className="span-line-bottom-border"></span>
        </div>
    )
}

export default Section
