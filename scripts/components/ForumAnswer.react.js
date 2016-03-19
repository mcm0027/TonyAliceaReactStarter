var ForumAnswer = React.createClass({

    propTypes: {
        answer: React.PropTypes.object.isRequired
    },

    render: function() {

        var answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { answer.body }
                </div>
            </div>
        )
    }
});