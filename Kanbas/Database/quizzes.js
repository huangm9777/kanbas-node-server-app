export default [

    {
        qid: 1,
        'course': 'RS101',
        'title': 'Quiz 1',
        'type': '2',
        'point': 10,
        'dueDate': '2025-11-23T12:34:56.789Z',
        'availibleDate': '2024-11-23T12:34:56.789Z',
        'untilDate': '2025-11-23T12:34:56.789Z',
        'numberOfP': '5',
        isPublished: true,
        assignmentGroup: "2",
        isShuffle: true,
        timeLimit: 30, // in minutes
        attempts: 3,
        isShowAnswer: false,
        accessCode: "MATH101",
        isOnePATime: true,
        isCamReq: false,
        isLockAfter: false,
        isAccessCode: true,
        isTimeLimit: true,
        isMultiAttempts:true,
        instruction: "This is a quiz for the course RS101"


    },
    {
        qid: 2,
        'course': 'RS101',
        'title': 'Quiz 2',
        type: '1',
        'point': 100,
        'dueDate': '2024-11-23T12:34:56.789Z',
        'availibleDate': '2025-11-23T12:34:56.789Z',
        'untilDate': '2025-11-23T12:34:56.789Z',
        'numberOfP': '5',
        'isPublished': false,
        assignmentGroup: "2",
        isShuffle: true,
        timeLimit: 30, // in minutes
        attempts: 3,
        isShowAnswer: false,
        accessCode: "MATH101",
        isOnePATime: true,
        isCamReq: false,
        isLockAfter: false,
        isAccessCode: false,
        isTimeLimit: false,
        isMultiAttempts:true,
        instruction: "This is a quiz for the course RS101"
    },

]