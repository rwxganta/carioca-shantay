import { useState } from 'react';
import logo from '../assets/logo.png';

export function Login() {
    const [active, setActive] = useState('login');

    const handleActive = (e) => {
        const attr = e.target.getAttribute('id');
        setActive(attr);
    }

    return (
        <>
            <section className='login'>
                <div className="img-wrapper">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.travelvisapro.com%2Fwp-content%2Fuploads%2F2018%2F03%2FCopacabana.jpg&f=1&nofb=1&ipt=4774ad9e4589816e61ab74729cef16b945b9a3352487540ecb1e420f80ec68d5&ipo=images" alt="" />
                </div>
                <div className="login-content">
                    <img src={ logo } alt="" />
                    <form action="#" method="post">
                        <input type="email" name="email" id="email" placeholder='email' required />
                        <input type="password" name="password" id="password" placeholder='password' required />
                        <a href='#'>esqueceu a senha?</a>
                        <button>Login</button>
                    </form>

                    <div className="actions">
                        <button
                            type='button'
                            id='login'
                            data-active={active === 'login'}
                            onClick={handleActive}
                        >Login</button>

                        <button
                            type='button'
                            id='signup'
                            data-active={active === 'signup'}
                            onClick={handleActive}
                        >Sign up</button>
                    </div>
                </div>
            </section>
        </>
    )
}