const storage = [
    {
        id: 12353,
        project__name: "Arcarta",
        project__description: "Hello world!",
        tasks: [
            {
                number: 5,
                title: "Add new tech",
                description: "djg,sdbg klajgkaj aklggkrj",
                status: "Queue",
                start__date: "",
                end__date: "",
                time__in__work: "",
                prioritet: "Common",
                subtasks: [
                    {
                        id: 234234,
                        subtask__title: "skgjdnkg",
                    }
                ],
            },
            {
                number: 1,
                title: "Add new tech",
                description: "djg,sdbg klajgkaj aklggkrj",
                status: "Queue",
                start__date: "",
                end__date: "",
                time__in__work: "",
                prioritet: "Common",
                subtasks: [
                  {
                    id: 234234,
                    subtask__title: "skgjdnkg",
                  }
                ],
            },
            {
                number: 2,
                title: "Update existing feature",
                description: "jdsfjg, sdfgdfsg klasdfg jkdfg",
                status: "Development",
                start__date: "",
                end__date: "",
                time__in__work: "",
                prioritet: "High",
                subtasks: [],
            },
            {
                number: 3,
                title: "Bug fixes",
                description: "Fix various bugs in the application",
                status: "Done",
                start__date: "2023-09-28",
                end__date: "2023-09-30",
                time__in__work: "3 days",
                prioritet: "Critical",
                subtasks: [
                  {
                    id: 98765,
                    subtask__title: "Fix login issue",
                  },
                  {
                    id: 87654,
                    subtask__title: "Resolve performance problem",
                  }
                ],
            }
        ]
    },
    {
        id: 12354,
        project__name: "Coolpics",
        project__description: "",
        tasks: [],
    },  
]

export default storage;

