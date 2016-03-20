/**
 * Created by Mattily on 3/16/2016.
 */


ReactDOM.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
);


var myEmitter = new EventEmitter();

myEmitter.on('STARTED_THE_APP', function(){
    console.log('started the app');
});

myEmitter.on('STARTED_THE_APP', function(){
    console.log('started the app #2');
});

myEmitter.emit('STARTED_THE_APP');