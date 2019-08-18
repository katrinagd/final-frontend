import React from 'react'

import Actions from './List.Actions'

export default ({ currentUserId, destroyPost, user }) => {
  const posts = user.posts.map(post => (
    <div key={post._id} className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Project Title: { post.emotion }</h4>
        <div className='mb-0'>
          <p className='card-text'>Project Description: { post.content }</p>
        </div>
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyPost={destroyPost}
        post={post}
        user={user} />
    </div>
  ))

  return (
    <>
      <h1 className='mb-4'>{ user.username }'s Assignments</h1>
      { posts }
    </>
  )
}
