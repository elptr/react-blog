import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }

    componentDidMount () {
        console.log("FullPost, componentDidMount " + this.props.match.params.id);
        if(this.props.match.params.id){ //update only if we id !== null
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)){
                console.log("!this.state.loadedPost yes");
                axios.get('/posts/' + this.props.match.params.id)
                    .then(responseObj => {
                        console.log(responseObj);
                        this.setState({loadedPost:responseObj.data})
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }


        }
    }
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }
    render () {
        console.log("Full Post Render + id", this.props.match.params.id);
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading...!</p>;
        }
            if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;