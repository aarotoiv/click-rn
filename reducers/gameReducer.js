import { 
    TEST_TYPE,
    SOCKET_CONNECTING,
    SOCKET_CONNECTED,
    JOINED_SERVER,
    YOU_CLICKED,
    OUT_OF_POINTS,
    DO_RETRY
} from '../actions/types';

const INITIAL_STATE = {
    socket: null,
    points: 0,
    connecting: false,
    connected: false,
    joined: false,
    ask_retry: false,
    hitsTillPrize: 0
};
//very basic reducer 
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SOCKET_CONNECTING: 
            return {...state, connecting: true};
        case SOCKET_CONNECTED: 
            return {...state, connecting: false, connected: true, socket: action.payload};
        case JOINED_SERVER: 
            return {...state, joined: true, points: action.payload};
        case YOU_CLICKED: 
            return {...state, points: state.points + action.payload.points, hitsTillPrize: action.payload.hitsTillPrize};
        case OUT_OF_POINTS: 
            return {...state, points: 0, ask_retry: true};
        case DO_RETRY:
            return {...state, ask_retry: false, points: action.payload};
        default:
            return state;
    }
};