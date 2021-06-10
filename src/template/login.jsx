import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../components/buttons';
import './login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className="buttons-login">
                <ButtonPrimary text='Cliente' />
                <ButtonSecondary text='Colaborador' />

            </div>
        </div>
    )
}

export default Login;