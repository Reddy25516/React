
'for to work with https install axios'
'npm install axios'

// we are using json placeholder for to get the data

https://jsonplaceholder.typicode.com/


// rce is used to create a class component 

import React, { Component } from 'react'

export class https extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default https

'============================'

// rce to get this 
import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    state={
        posts:[]
    }
    // this is the way of getting data from the jsonplaceholder(API)
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
        })

        // if anyerror in getting the data then it will execute the error 
        .catch(error=>{
            console.log(error)
        })
    }

  render() {
    return ( 
      <div>
        Lists of posts 
      </div>
    )
  }
}

export default PostList

'------------------'

// App.js 

import React, { Component } from 'react'
import './App.css'
import PostList from './components/PostList'
class App extends Component {
  render() {
    return (
      <div className=''>
        <PostList/>
      </div>
    )
  }
}

export default App


'============================================='

// getting the data in the browser


// rce to get this 
import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

  render() {
    const {posts} =this.state
    return ( 
      <div>
        <center>
            List of Posts 
            {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>) : null 
                // here we returning the title data , with key id 
            }
        </center>
      </div>
    )
  }
}

export default PostList

// this is the data present in the posts file 
/*
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },

  ................
]
*/
'we get all the data in the browser(only the title data will be displayed here ) '
/*

List of Posts
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
qui est esse
ea molestias quasi exercitationem repellat qui ipsa sit aut
eum et est occaecati
nesciunt quas odio
dolorem eum magni eos aperiam quia
magnam facilis autem
dolorem dolore est ipsam


*/
'================================================================'


// posting the data to the api 

// creating a form to to post data 


import React, { Component } from 'react'

 class PostForm extends Component {
    state={
        userId :'',
        title : "",
        body : ''
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name] :e.terget.value     
        })
    }
    submitHandler=e=>{
        e.prevent.defaut()
        console.log(this.state)
    }
  render() {
    const {userId, title, body} = this.state 
    return (
      <div>
        <form onSubmit ={this.submitHandler}>
            <div>
                <label>UserId:</label>
                <input type="text" name="UserId" value={userId}
                onChange={this.changeHandler}/>
            </div>
            
            <div>
                <label>title:</label>
                <input type="text" name="title" value={title}
                onChange={this.changeHandler}/>
            </div>
            
            <div>
                <label>body:</label>
                <input type="text" name="body" value={body}
                onChange={this.changeHandler}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}

export default PostForm

'--------------------------'


//uploading data into the api 


import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
    state={
        userId :'',
        title : "",
        body : ''
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name] :e.target.value     
        }) 
    }
    
    submitHandler=e=>{
        e.preventDefaut()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        // the post method takes second argument as a data  
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
  render() {
    const {userId, title, body} = this.state 
    return (
      <div>
        <form onSubmit ={this.submitHandler}>
            <div>
                <label>UserId:</label>
                <input type="text" name="userId" value={userId}
                onChange={this.changeHandler}/>
            </div>
            
            <div>
                <label>title:</label>
                <input type="text" name="title" value={title}
                onChange={this.changeHandler}/>
            </div>
            
            <div>
                <label>body:</label>
                <input type="text" name="body" value={body}
                onChange={this.changeHandler}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}

export default PostForm


'============================================================='
