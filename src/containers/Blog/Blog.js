import React, { Component } from 'react';

//import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                // pathname:this.props.match.url + '/new-post', //relative path
                                pathname:'/new-post', //absolute path
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>

                {/*<Route exact path="/" render={() => (<h1>Home</h1>)}/>*/}
                {/*<Route path="/" render={() => (<h1>Home 2</h1>)}/>*/}
                <Route exact path="/" component={Posts}/>
                <Route path="/new-post" component={NewPost}/>

            </div>
        );
    }
}

export default Blog;