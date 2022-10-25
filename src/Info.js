import logo from './icons/logo.png'
import "./index.css"

export default function Info() {
    return (
        <div className="info">
            <div className='info__logo'></div>
            <h3 className='info__name'>Laura Smith</h3>
            <div className='info__position'>Frontend Engineer</div>
            <div className='info__email'>something@wp.pl</div>
            <button className='btn btn_white'>Email</button>
            <button className='btn btn_blue'>LinkedIn</button>
        </div>
    )
}