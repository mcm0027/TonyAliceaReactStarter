/**
 * Created by Mattily on 3/16/2016.
 */
var Forum = React.createClass({

    getInitialState: function() {

        return {
            allAnswers: ForumStore.getAnswers()
        }
    },
   render: function() {
       return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={ this.state.allAnswers} />
                    <hr />
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer={ this._onAddAnswer }/>
                </div>
            </div>
       );
   },

    _onAddAnswer: function(answerText) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_ADDED',
            newAnswer: answerText
        });
    }
});