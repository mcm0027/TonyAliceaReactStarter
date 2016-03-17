/**
 * Created by Mattily on 3/16/2016.
 */
var Forum = React.createClass({

    getInitialState: function() {

        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2":{
                    body: "React and Flux are so nice",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        }
    },
   render: function() {
       return React.createElement(
            'div',
            null,
            React.createElement(ForumHeader, {allAnswers: this.state.allAnswers })
       );
   }
});