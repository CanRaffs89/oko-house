import arrow from '../img/arrow.svg'

const Button = ({ link, text }) => {
    return (
        <button>
            <a href={link}>{text} </a>
            <img className="btn-arrow" src={arrow} alt="" />
        </button>
    )
}

export default Button

// TODO
// Props for Button - width, text, link
