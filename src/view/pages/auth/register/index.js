import React, { useState } from 'react';
import { Typography, Input, Button, Divider, Form, notification, Flex } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, setDoc, doc, db } from '../../../../services/firebase/firebase';
import AuthWrapper from '../../../components/shared/AuthWrapper';
import registerCoverImg from '../../../../core/images/registerCover.png';
import { Link, useNavigate } from 'react-router-dom';

import './index.css';

const { Title, Text } = Typography;

const Register = () => {
    const [ loading, setLoading ] = useState(false);
    const [ form ] = Form.useForm();
    const navigate = useNavigate();

    const handleRegister = async (values) => {
        setLoading(true);

        try {
            const { email, password, ...restData } = values;
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const uid = response.user.uid;
            const createDoc = doc(db, 'registerUsers', uid);

            await setDoc(createDoc, {
                email, ...restData
            })            

            navigate("/login");
        } catch (error) {
            notification.error({
                message: 'Wrong Registration',
                description: `Ooooops :(`
            })
        } finally {
            setLoading(false); 
        }
    }
    return (
        <AuthWrapper coverImg={registerCoverImg}>
            <Title level={2}>
                Register
            </Title>

            <Form onFinish={handleRegister} form={form} layout="vertical">
                <Form.Item 
                    label="First Name" 
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: "First Name is required!."
                        }
                    ]}
                >
                    <Input 
                        type="text"
                        placeholder="First Name"
                    />
                </Form.Item>

                <Form.Item 
                    label="Last Name" 
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: "Last Name is required!."
                        }
                    ]}
                >
                    <Input 
                        type="text"
                        placeholder="Last Name"
                    />
                </Form.Item>

                <Form.Item l
                    abel="Headline" 
                    name="headline"
                    rules={[
                        {
                            required: true,
                            message: "Headline is required!."
                        }
                    ]}
                >
                    <Input 
                        type="text"
                        placeholder="Headline"
                    />
                </Form.Item>

                <Form.Item 
                    label="Email" 
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Email is required!."
                        }
                    ]}
                >
                    <Input 
                        type="email"
                        placeholder="Email"
                    />
                </Form.Item>

                <Form.Item 
                    label="Password" 
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Password is required!."
                        }
                    ]}
                >
                    <Input.Password
                        placeholder="Password"
                    />
                </Form.Item>

                <Divider />

                <Flex justify="space-between" align="flex-end">
                    <Text underline>
                        <Link to="/login">
                            Sign In
                        </Link>
                    </Text>
                    
                    <Button
                        type="primary" 
                        loading={loading}
                        htmlType="submit"
                    >
                        Register
                    </Button>
                </Flex>
            </Form>
        </AuthWrapper>
    )
}

export default Register;