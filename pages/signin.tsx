import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import { useAuth } from "./api/auth/authContext";
import cookie from 'js-cookie';


const SignIn = () => {
    const auth = useAuth();
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
    
    const [errorMessage, setErrorMessage] = useState('');
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [userFocus, setUserFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    
    const userRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        userRef.current?.focus();
        setErrorMessage('');
    }, [])

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          try {
            const response = await fetch('/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                setErrorMessage('Incorrect credentials!');
            return;
             }

            const { token, user } = await response.json();
            console.log(token, 'token');
            
            cookie.set('token', token);
            cookie.set('user', JSON.stringify(user));
            
            auth.setToken(token);
            auth.setUser(user);

            setErrorMessage('');
            router.push('/');

            } catch (error) {
        }
    }

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
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>  Sign in: </span>     
 
             <div className="border_the_login">
                <form onSubmit={handleSignIn} className="submit_signin">
                    <span className="sign_in_heading"> Username:  </span>    
                    <div style={{ marginBottom: '10px' }}> 
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />        
                    </div>

                    <span className="password"> Password: </span>

                    <div style={{ marginBottom: '10px' }}> 
                        <input
                            type={"password"}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                    </div>  

                    <button 
                        className="sign_in_button"
                        type="submit"
                        style={{ 
                            backgroundColor: '#0070f3', 
                            color: 'white', 
                            width: '100%', 
                            padding: '10px 0', 
                            border: 'none', 
                            borderRadius: '5px',
                            marginTop: '10px',
                            cursor: 'pointer' 
                        }}>

                        Login
                    </button> 

                </form> 

                {errorMessage && <p>{errorMessage}</p>}

                <span className="register_password_container"> 
                
                <div style={{ marginBottom: '10px' }}> 

                <Link href="/signup" legacyBehavior>
                    <a data-active={isActive("/signup")} style={{ marginTop: '10px', color: '#0070f3' }}>
                        Not registered yet?
                    </a>
                </Link>

                </div>

                </span>
            
            </div>
        </div> 
        </Layout>

                        
    )
}

export default SignIn