import { useState } from 'react';
import { Input, Avatar, Button, Divider } from 'antd';
import { hover } from '@testing-library/user-event/dist/hover';
import { PlusOutlined } from '@ant-design/icons';
import CreateIssueModal from '../../shared/CreateIssueModal';
import './index.css';

const SubHeader = () => {
    const [ modalVisible, setModalVisible ] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    }

    return (
        <div className="subHeader">
            <Input.Search className="search_input" placeholder="Search"/>

            <Divider type="vertical" />

            <Avatar.Group 
                max={{
                    count: 4,
                    style: {
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                        cursor: "pointer"
                    },
                    popover: {
                        trigger: hover
                    }
                
                }}
                
            >
            <Avatar style={ {backgroundColor: 'green'} }>
                EH
            </Avatar>

            <Avatar style={ {backgroundColor: 'blue'} }>
                AH
            </Avatar>

            <Avatar style={ {backgroundColor: 'green'} }>
                DS
            </Avatar>

            <Avatar style={ {backgroundColor: 'blue'} }>
                VM
            </Avatar>

            <Avatar style={ {backgroundColor: 'green'} }>
                DS
            </Avatar>
                <Avatar />
            </Avatar.Group>

            <Divider type="vertical" />

            <Button 
                type="primary" icon={ <PlusOutlined /> }
                onClick={handleOpenModal}
            >
                CREATE ISSUE
            </Button>

            <CreateIssueModal 
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </div>
    )
}

export default SubHeader;