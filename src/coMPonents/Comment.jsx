import React from 'react'

const Comment = ({imagelink, name, commentText}) => {
  return (
    <div className="Commentwrapper">
        <div className="CommentImageContainer">
            <img src={imagelink} className="CommentImage" alt="로딩중"/> 
        </div>
        <div className="CommentContent">
            <span className="CommentName">{name}</span>
            <span className="CommentText">{commentText}</span>
        </div>

    </div>
  )
}

export default Comment