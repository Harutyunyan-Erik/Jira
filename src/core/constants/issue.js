import { 
    BugOutlined, 
    FlagOutlined, 
    ArrowUpOutlined, 
    ArrowDownOutlined, 
    CheckSquareOutlined, 

} from '@ant-design/icons';

const ISSUE_OPTIONS = {
    bug: {
        icon: <BugOutlined style={{color: "#e44d42"}} />,
        label: "Bug"
    },
    story: {
        icon: <CheckSquareOutlined style={{color: "#65ba43"}} />,
        label: "Story"
    },
    task: {
        icon: <FlagOutlined style={{color: "#4fade6"}}/>,
        label: "Task"
    }
};

const issueTypes = [
    {
        value: 'bug',
        label: ISSUE_OPTIONS.bug.label,
        icon: ISSUE_OPTIONS.bug.icon
    },
    {
        value: 'task',
        label: ISSUE_OPTIONS.task.label,
        icon: ISSUE_OPTIONS.task.icon
    },
    {
        value: 'story',
        label: ISSUE_OPTIONS.story.label,
        icon: ISSUE_OPTIONS.story.icon
    },
];
const PRIORITY_OPTION = {
    high: {
        icon: <ArrowUpOutlined style={{color: "red"}} />
    },
    highest: {
        icon: <ArrowUpOutlined style={{color: "red"}} />
    },
    medium: {
        icon: <ArrowUpOutlined style={{color: "orange"}}/>
    },
    low: {
        icon: <ArrowDownOutlined style={{color: "green"}}/>
    },
    lowest: {
        icon: <ArrowDownOutlined style={{color: "green"}}/>
    }
}
const priority = [
    {
        value: 'highest',
        label: 'Highest',
        icon: PRIORITY_OPTION.highest.icon
    },
    {
        value: 'high',
        label: 'High',
        icon: PRIORITY_OPTION.high.icon
    },
    {
        value: 'medium',
        label: 'Medium',
        icon: PRIORITY_OPTION.medium.icon
    },
    {
        value: 'low',
        label: 'Low',
        icon: PRIORITY_OPTION.low.icon
    },
    {
        value: 'lowest',
        label: 'Lowest',
        icon: PRIORITY_OPTION.lowest.icon
    }
];

const taskStatus = { 
    TODO: {
        key: '0',
        title: 'Todo'
    },
    IN_PROGRESS: {
        key: '1',
        title: 'In Progress'
    },
    TEST: {
        key: '2',
        title: 'Test'
    },
    DONE: {
        key: '3',
        title: 'Done'
    },
};

export {
    issueTypes, priority, taskStatus, PRIORITY_OPTION, ISSUE_OPTIONS
};

