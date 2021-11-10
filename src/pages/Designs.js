import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Designs = () => {
    const houseDesigns = [
        {
            name: 'Design 001'
        },
        {
            name: 'Design 002'
        },
        {
            name: 'Design 003'
        },
        {
            name: 'Design 004'
        },
        {
            name: 'Design 005'
        },
        {
            name: 'Design 006'
        }
    ];

    return (
        <div className='container page-container'>
            <h1>House Designs</h1>
            <span className='designs-span'></span>
            <div className='designs-grid'>
                {houseDesigns.map((design, index) => (
                    <Link key={index} className='designs-grid-item' to={`/designs/${index + 1}`}></Link>
                ))}
            </div>
            <h1>Custom Designs</h1>
            <span className='designs-span'></span>
            <p className='designs-text'>Build the eco house that's right for you with our affordable design service. Our architects will work closely with you to design a house plan perfectly suited to your needs and budget. You can also choose one of our plans as a starting point and rework it to suit your unique needs with greater efficiency and ease.</p>
            <p className='designs-text'>For further information and quotes, please contact us.</p>
            <Button link={'/contact'} text={'CONTACT'}/>
        </div>
    )
}

export default Designs
