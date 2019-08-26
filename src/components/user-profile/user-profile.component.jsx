import React from 'react'

class UserProfile extends React.Component {
    state = {posts: []};
    
    componentDidMount() {
        fetch(this.props.dataSource)
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }
    render(){
        return(
            <div className='container'>
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>
                Posts:
                {
                    this.state.posts.map(post => (
                        <div key='post.id' className='post'>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default UserProfile;