import axios from "axios";
import { Component } from "react";

class Post extends Component {

    state = {
        post: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
         axios.get('https://jsonplaceholder.typicode.com/posts/' +id)
         .then(response => {
             this.setState({post:response.data});
         })
        
    }

    render(){

        const post = this.state.post ? (<div>
            <div className='post'>
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        </div>) : (<div className='center'>Loading post...</div>)
        return(
        <div className='container'>
            {post}
        </div>
    );
    }
}

export default Post;