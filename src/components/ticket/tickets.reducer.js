const actions = {
    OPEN_TICKET_TEST_MANAGER: "OPEN_TICKET_TEST_MANAGER",
    CLOSE_TICKET_TEST_MANAGER: "CLOSE_TICKET_TEST_MANAGER",
    LINK_TEST_TO_TICKET: "LINK_TEST_TO_TICKET",
    UNLINK_TEST_TO_TICKET: "UNLINK_TEST_TO_TICKET",
    LOAD_TICKETS: "LOAD_TICKETS",
    LOAD_TICKET_TESTS: "LOAD_TICKET_TESTS",
    FILTER_TICKETS: "FILTER_TICKETS",

    ERROR: "ERROR",
    CLEAR_ERROR: "CLEAR_ERROR"
}

export const ticketsReducer = (state,action) => {
    
    switch (action.type) {
        case action.OPEN_TICKET_TEST_MANAGER:
            return {...state};

        case action.CLOSE_TICKET_TEST_MANAGER:
            return {...state};

        case action.LINK_TEST_TO_TICKET:
            return {...state};

        case action.UNLINK_TEST_TO_TICKET:
            return {...state};

        case action.LOAD_TICKETS:
            return {...state};

        case action.LOAD_TICKET_TESTS:
            return {...state};

        case action.ERROR:
            return {...state};

        case action.CLEAR_ERROR:
            return {...state};
    }
    throw new Error('No matching action type.');
  };