/**
 * Created by Mattily on 3/18/2016.
 */

var ForumAnswers = React.createClass({

    render: function() {

        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers) {
            answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]}/>)
        }

        return (
            <div>
                { answers }
            </div>
        )
    }
});