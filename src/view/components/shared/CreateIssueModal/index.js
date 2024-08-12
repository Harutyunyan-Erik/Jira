import React, { useState } from 'react';
import { Modal, Form, Input, Select, Divider, notification } from 'antd';
import { issueTypes, priority, taksStatus } from '../../../../core/constants/issue';
import Editor from '../Editor';
import { db, doc, setDoc } from '../../../../services/firebase/firebase';

const CreateIssueModal = ( {visible, setVisible, users } ) => {
    const [ form ] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);
        
    const handleCloseModal = () => {
        setVisible(false);
        form.resetFields();
    }

    const handleCreateIssue = async (values) => {
        setConfirmLoading(true);

        const taskDataModel = {
            status: taksStatus.TODO,
            ...values
        }

        console.log(taskDataModel);
        try {
            const createDoc = doc(db, "issue", `${ Date.now() }`);
            setDoc(createDoc, taskDataModel);

            notification.success({
                message: "Your task has been created",
            })

            setVisible(false);
            form.resetFields();
        } catch (error) {
            notification.error({
                message: "Error oops :( ",
            })

        } finally {
            setConfirmLoading(false);
        }
    }

    return (
        <Modal
            title="Create Issue"
            okText="Create Issue"
            centered
            open={visible}
            width={800}
            confirmLoading={confirmLoading}
            onCancel={handleCloseModal}
            onOk={form.submit}
        >
            <Form layout="vertical" form={form} onFinish={handleCreateIssue}>
                <Form.Item
                    name="issueType"
                    label="Issue Type"
                    rules={[{required: true, message: "Please selecet Issue Type!"}]}
                >
                    <Select 
                        showSearch
                        placeholder="Issue Type"
                        options={issueTypes}
                    />
                </Form.Item>

                <Divider />

                <Form.Item
                    name="shortSummary"
                    label="Short Summary"
                    rules={[{required: true, message: "Please input Short Summary!"}]}
                >
                    <Input 
                        placeholder="Short Summary"
                    />
            </Form.Item>
          
                <Divider />

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{required: true, message: "Please input Description!"}]}
                >
                    <Editor />
                </Form.Item>

                <Divider />

                <Form.Item
                    name="reporter"
                    label="Reporter"
                    rules={[{required: true, message: "Please select Reporter!"}]}
                >
                    <Select 
                        showSearch
                        placeholder="Reporter"
                        options={users}
                    />
                </Form.Item>

                <Form.Item
                    name="assignees"
                    label="Assignees"
                    rules={[{required: true, message: "Please select Assignees!"}]}
                >
                    <Select 
                        showSearch
                        placeholder="Assignees"
                        options={users}
                    />
                </Form.Item>

                <Form.Item
                    name="priority"
                    label="Priority"
                    rules={[{required: true, message: "Please select Priority!"}]}
                >
                    <Select 
                        showSearch
                        placeholder="Priority"
                        options={priority}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default CreateIssueModal;