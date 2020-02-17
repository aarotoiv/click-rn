import io from 'socket.io-client';
import axios from 'axios';

const URI = 'http://simpleclicker.herokuapp.com';

export default {
    async initialize(dispatch, joinedServer, youClicked, outOfPoints, doRetry) {
        await axios.get(URI + '/', {withCredentials: true});
        const socket = await io(URI, {withCredentials: true});
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
    click(socket) {
        socket.emit('click', {});
    },
    retry(socket) {
        socket.emit('retry', {});
    }
}