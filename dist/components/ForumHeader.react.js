/**
 * Created by Mattily on 3/16/2016.
 */
var ForumHeader = React.createClass({displayName: "ForumHeader",

    render: function () {

        return (
            React.createElement("nav", {className: "navbar navbar-default"}, 
                React.createElement("div", {className: "container-fluid"}, 
                    React.createElement("div", {className: "navbar-header"}, 
                        React.createElement("a", {className: "navbar-brand", href: "#"}, 
                            "React Forum"
                        )
                    )
                )
            )
        );
    }
});