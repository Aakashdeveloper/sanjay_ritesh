var React = require('react');

var AuthorList = React.createClass({
    propTypes:{
        authors: React.PropTypes.array.isRequired
    },
    
    render: function(){
        var  createAuthorsRow = function(author){
            return(
                <tr key={author.id}>
                    <td><a href={"/#authors/"+author.id}>{author.id}</a></td>
                    <td>{author.firstName}{author.lastName}</td>
                </tr>
            )
        }
        return(
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorsRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports=AuthorList;