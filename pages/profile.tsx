import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useAuth } from './api/auth/authContext';

const Profile = () => {
    const auth = useAuth();
    const [name, setName] = useState<string | undefined | null>('');
    const [email, setEmail] = useState<string | undefined | null>('');
    const [username, setUsername] = useState<string | undefined | null>('');
    const [id, setId] = useState<string | undefined | null>('');

    const handleProfileFetch = async () => {
        setEmail(auth?.user?.email);
        setName(auth?.user?.name);
        setUsername(auth?.user?.username);
        setId(auth?.user?.id.toString());
    };

    useEffect(() => {
        handleProfileFetch();
    }, []);

    return ( 
        <Layout>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '500px',
                padding: '20px',
                margin: '0 auto',
                marginTop: '50px'
            }}>      
            <h2 style={{
                fontSize: '25px', 
                fontWeight: 'bold', 
                color: '#333', 
                marginBottom: '20px'
            }}>User Profile</h2>
            <div style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                width: '100%'
            }}>
                <p style={{ margin: '10px 0' }}><strong>Id:</strong> {id}</p>
                <p style={{ margin: '10px 0' }}><strong>Username:</strong> {username}</p>
                <p style={{ margin: '10px 0' }}><strong>Name:</strong> {name}</p>
                <p style={{ margin: '10px 0' }}><strong>Email:</strong> {email}</p>
                
                
            </div>
        </div>
        </Layout>
    );
}

export default Profile;