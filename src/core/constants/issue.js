const issueTypes = [
    {
        value: "bug",
        label: "Bug"
    },
    {
        value: "task",
        label: "Task"
    },
    {
        value: "story",
        label: "Story"
    }
];

const priority = [
    {
        value: "highest",
        label: "Highest"
    }, 
    {
        value: "high",
        label: "High"
    },
    {
        value: "medium",
        label: "Medium"
    }, 
    {
        value: "low",
        label: "low"
    }, 
    {
        value: "lowest",
        label: "Lowest"
    }
]

const taksStatus = {
    TODO: "0",
    IN_PROGRESS: "1",
    TEST: "2",
    DONE: "3"
}

export { issueTypes, priority, taksStatus }