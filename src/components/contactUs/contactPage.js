var React = require('react');

var Contact = React.createClass({
    render:function(){
        return(
           <div>
                <h1>This is Contact page</h1>
            <div class="panel-group">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse1">Collapsible panel</a>
                    </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse">
                    <div class="panel-body">Panel Body</div>
                    <div class="panel-footer">Panel Footer</div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
});


module.exports= Contact; 