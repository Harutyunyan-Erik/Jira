import { Avatar, Dropdown, Typography, Flex, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const user = {
    firstName: "Davit",
    lastName: "Sargsyan",
    Headline: "Front-End Developer",
    email: "email@email.com",
    logout: ""
}

const items = [
    {
        key: "profile",
        label: (
            <Flex vertical justify="center" align="center">
                <Avatar 
                    size={64}
                    icon={<UserOutlined />}
                />

                <Text>
                    Davit Sargsyan
                </Text>

                <Text underline>
                    email@email.com
                </Text>

                <Divider />
            </Flex>
        )
    },
    {
        key: "logout",
        label: "Logout"
    }
]

const UserProfile = () => {
    return(
        <Dropdown menu={{
            items
            }}
        >
            <Avatar> 
                D S
            </Avatar>
        </Dropdown>
    )
}

export default UserProfile