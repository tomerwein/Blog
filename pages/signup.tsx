
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Layout from "../components/Layout";
const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?^*!@#$%]).{3,24}$/;
const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
const USERNAME_REGEX: RegExp = /^[a-zA-Z0-9]{3,24}$/;

const Register = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

    const [agreeTerms, setAgreeTerms] = useState(false);
    
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidPassword, setIsValidPwd] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState('');

    const [userFocus, setUserFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    
    const userRef = useRef<HTMLInputElement>(null);    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        try {
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:user, email, password, name }),
          });
      
          if (!response.ok) {
            const data = await response.json();
            setErrorMessage(data.message);
            return;
          }

          router.push('/signin');

        } catch (error) {
          setErrorMessage('Network error.');
        }
      };

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setIsValidPwd(PASSWORD_REGEX.test(password));
        setIsValidEmail(EMAIL_REGEX.test(email));
        setIsValidUsername(USERNAME_REGEX.test(user));
        setErrorMessage('');
    }, [user, password, email]) 

    return (
        <Layout>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '300px',
                padding: '20px',
                margin: '0 auto',
                marginTop: '50px'
            }}>
            
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>  Register: </span>     
            <form onSubmit={handleSubmit} >
            <span className="username_register">  Username: </span>     
            <div style={{ marginBottom: '10px' }}> 
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                     onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}     
                /> 

            {!isValidUsername && user.length > 0 && !userFocus &&
            <div style={{ color: 'red' }}>
                Username should be at least 3 letters,
                and contain only letters and number </div>
            }    
            </div>

            <span className="name"> Name: </span>

            <div style={{ marginBottom: '10px' }}> 
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                /> 
            </div>

            <span className="password"> Password: </span>
            
            <div style={{ marginBottom: '10px' }}> 
                <input
                    type={"password"}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                     onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />

            {!isValidPassword && password.length > 0 && !passwordFocus &&
                <div style={{ color: 'red' }}>
                    Password must have small letter, capital letter, number and special character
                </div>
            }
    
            </div>

            <span className="email"> Email: </span>
            
            <div style={{ marginBottom: '10px' }}> 
                <input
                    type={"text"}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />

            {!isValidEmail && email.length > 0 && !emailFocus &&
            <div style={{ color: 'red' }}>
                Email is illegal
            </div>
            }

            </div>         
            
            <button 
                style={{ 
                backgroundColor: '#0070f3', 
                color: 'white', 
                width: '100%', 
                padding: '10px 0', 
                border: 'none', 
                borderRadius: '5px',
                marginTop: '10px',
                cursor: 'pointer' 
                }}
            
             className="sign_up_button"
             type="submit"
             >       
                Create account
            </button>

            </form>
            
            <Link href="/signin" legacyBehavior>
                <a data-active={isActive("/signin")} style={{ marginTop: '10px', color: '#0070f3' }}>
                    Already have an account?
                </a>
            </Link>
            </div>

            </Layout>                       
    )
}

export default Register

