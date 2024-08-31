import { useEffect, useState, useContext } from 'react';
import IssueModalForm from '../IssueModalForm';
import { ISSUE_OPTIONS } from '../../../../core/constants/issue';
import { Modal, Form, Typography, Space, notification } from 'antd';
import { doc, db, updateDoc } from '../../../../services/firebase/firebase';
import { AuthContext } from '../../../../context/AuthContext';

const { Text } = Typography;

const EditIssueModal = ({ visible, onClose, issueData }) => {
    const [ form ] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { handleGetIssues } = useContext(AuthContext);

    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        const { key, index, ...restData } = issueData;
        form.setFieldsValue(restData);
    }, []);

    const handleEdit = async (values) => {
        setConfirmLoading(true);
        const docRef = doc(db, 'issue', issueData.key);
        await updateDoc(docRef, values);
        handleGetIssues();
        handleClose();
        notification.success({
            message: 'Your task has been updated',
        });
        try {
            
        } catch (error) {
            console.log(error, "ERROR CATCH");
        } finally {
            setConfirmLoading(false);
        }
    };

    return (
        <Modal
            title={
                <Space>
                    {ISSUE_OPTIONS[issueData.issueType].icon }
                    <Text type="secondary">
                        {ISSUE_OPTIONS[issueData.issueType].label}
                        {"-"}
                        {issueData.key}
                    </Text>
                </Space>
            }
            okText="Edit Issue"
            centered
            open={visible}
            onOk={form.submit}
            onCancel={handleClose}
            confirmLoading={confirmLoading}
            width={800}
            // onOk={form.submit}
            styles={{
                body: {
                    maxHeight: '600px',
                    overflowY: 'auto',
                    overflowX: 'hidden'
                }
            }}
        >
            <IssueModalForm 
                form={form}
                onFinish={handleEdit}
                users={[]}
            />
        </Modal>
    )
};

export default EditIssueModal;