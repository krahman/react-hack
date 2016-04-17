import React from 'react';
import ReactDOM from 'react-dom';
//noinspection JSUnresolvedVariable
import CommentList from './comment-list.jsx';
//noinspection JSUnresolvedVariable
import CommentForm from './comment-form.jsx';

class CommentBox extends React.Component {
    render() {
        return <div className="commentBox">
            <h1>Comment</h1>
            <CommentList />
            <CommentForm />
        </div>;
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);

