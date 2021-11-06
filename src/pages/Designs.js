import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Designs = () => {
    return (
        <div className="container page-container">
            <h1>House Designs</h1>
            <span className="designs-span"></span>
            <div className="designs-grid">
                <Link className="designs-grid-item" to="#"></Link>
                <Link className="designs-grid-item" to="#"></Link>
                <Link className="designs-grid-item" to="#"></Link>
                <Link className="designs-grid-item" to="#"></Link>
                <Link className="designs-grid-item" to="#"></Link>
                <Link className="designs-grid-item" to="#"></Link>
            </div>
            <h1>Custom Designs</h1>
            <span className="designs-span"></span>
            <p className="designs-text">Build the eco house that's right for you with our affordable design service. Our architects will work closely with you to design a house plan perfectly suited to your needs and budget. You can also choose one of our plans as a starting point and rework it to suit your unique needs with greater efficiency and ease.</p>
            <p className="designs-text">For further information and quotes, please contact us.</p>
            <Button link={'/contact'} text={'CONTACT'}/>
        </div>
    )
}

export default Designs
