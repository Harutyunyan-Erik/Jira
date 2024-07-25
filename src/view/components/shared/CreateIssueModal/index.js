import { Modal, Form, Input, Select, Divider } from 'antd';
import { issueTypes } from '../../../../core/constants/issue';

const CreateIssueModal = ( {visible, setVisible } ) => {
    const handleCloseModal = () => {
        setVisible(false);
    }

    return (
        <Modal
            title="Create Issue"
            okText="Create Issue"
            centered
            open={visible}
            width={800}
            onCancel={handleCloseModal}
        >
            <Form layout="vertical">
                <Form.Item
                    name="issueType"
                    label="Issue Type"
                >
                    <Select 
                        showSearch
                        placeholder="Issue Type"
                        options={issueTypes}
                    />
                </Form.Item>
            </Form>

            <Divider />

            <Form layout="vertical">
                <Form.Item
                    name="shortSummary"
                    label="Short Summary"
                >
                    <Input 
                        placeholder="Short Summary"
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
};

export default CreateIssueModal;