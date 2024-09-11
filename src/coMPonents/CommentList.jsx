import React from 'react'
import Comment from './Comment'

const comments = [
    {
        image: "https://i.namu.wiki/i/wk_duf-c0VIg2KyJ8xEJlLM3sLYbDgZNg2CTSTj_lVZRJDmGqX91Pz9TRBwgiZ0lpaWmxZ6ey12e5S-u7dsEuA.webp",
        name: "뽀로로",
        comment: "노는게 제일 좋아"
    }, 
    {
        image: "https://i.namu.wiki/i/VomlBNiU7Eivzakzhr7H9DtQaLKOfclJImzuqekiG9ewTVg8S0lPcnKu0tK-2imwrlkk9x_9UYngSccstbq9kA.webp",
        name: "코난",
        comment: "범인은 바로 너"
    }
]; 

const CommentList = () => {
  return (
    <div>
        {comments.map((comment) => {
            return (<Comment imagelink={comment.image} name={comment.name} commentText={comment.comment}/>);
        } )}
    </div>
  )
}

export default CommentList