/**
 * Created by Mattily on 3/18/2016.
 */

var ForumAnswers = React.createClass({

    _onMarkCorrect: function(id) {
        ForumActions.markAnswerCorrect(id);
    },

    render: function() {

        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers) {
            answers.push(<ForumAnswer key={key} id={key} answer={ allAnswers[key] } onMarkCorrect={ this._onMarkCorrect } />)
        }

        return (
            <div>
                { answers }
            </div>
        )
    }
});