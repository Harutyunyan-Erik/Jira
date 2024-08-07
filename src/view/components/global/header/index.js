import { useContext } from 'react';
import { AuthContext } from '../../../../core/context/AuthContext';
import { Layout, Button, Typography, Space } from 'antd';
import UserProfile from '../../shared/UserProfile';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => { 
    const { isAuth, setIsAuth, userProfileInfo } = useContext(AuthContext)
    const values = useContext(AuthContext);
   
    return (
        <Layout.Header className="main_header">
            <Link to="/">
                <Typography.Title level={3}>
                    Jira
                </Typography.Title>
            </Link>
           
            <Space>
                {
                    isAuth ? (
                        <UserProfile setIsAuth={setIsAuth} userProfileInfo={userProfileInfo} />
                    ) : (
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                    )
                }
            </Space>
        </Layout.Header>
    )
};

export default Header;