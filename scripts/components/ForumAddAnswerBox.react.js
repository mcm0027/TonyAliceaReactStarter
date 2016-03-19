/**
 * Created by Mattily on 3/18/2016.
 */

var ForumAddAnswerBox = React.createClass({

    render: function() {
        return (
            <div>
                <textarea id="addAnswer" className="col-md-6 col-xs-8"></textarea>
                &nbsp;<input type="button" className="btn btn-primary" value="Add" />
            </div>
        )
    }
});