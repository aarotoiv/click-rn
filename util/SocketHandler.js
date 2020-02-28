import io from 'socket.io-client';
import axios from 'axios';

const URI = 'http://simpleclicker.herokuapp.com';

export default {
    async initialize(dispatch, joinedServer, youClicked, outOfPoints, doRetry) {
        //dummy get to initialize sessions correctly
        await axios.get(URI + '/', {withCredentials: true});
        //connect to the websocket
        const socket = await io(URI, {withCredentials: true});
        //create listeners for when player has succesfully joined or clicked, or is out of points or wants to retry
        socket.on('joinedServer', (data) => {
            dispatch(joinedServer(data));
        });
        socket.on('youClicked', (data) => {
            dispatch(youClicked(data));
        });
        socket.on('outOfPoints', (data) => {
            dispatch(outOfPoints());
        });
        socket.on('doRetry', data => {
            dispatch(doRetry(data));
        });
        return socket;
    },
    //emitters for button clicks
    click(socket) {
        socket.emit('click', {});
    },
    retry(socket) {
        socket.emit('retry', {});
    }
}