import axios from 'axios';
import { 
    TEST_TYPE,
    SOCKET_CONNECTING,
    SOCKET_CONNECTED,
    JOINED_SERVER,
    YOU_CLICKED,
    OUT_OF_POINTS,
    DO_RETRY
} from './types';
import SocketHandler from '../util/SocketHandler'

export const socketConnect = () => {
    return (dispatch) => {
        dispatch({
            type: SOCKET_CONNECTING
        }); 
        SocketHandler.initialize(dispatch, joinedServer, youClicked, outOfPoints, doRetry)
        .then((socket) => {
            dispatch({
                type: SOCKET_CONNECTED,
                payload:socket
            });
        });
    }
}

const joinedServer = (data) => {
    return {
        type: JOINED_SERVER,
        payload: data.points
    }
};

const youClicked = (data) => {
    return {
        type: YOU_CLICKED,
        payload: data
    }
};

const outOfPoints = () => {
    return {
        type: OUT_OF_POINTS
    };
}

const doRetry = (data) => {
    return {
        type: DO_RETRY,
        payload: data.points
    }
}




