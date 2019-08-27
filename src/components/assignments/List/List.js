import React from 'react'

import Actions from './List.Actions'
import Score from './List.Score'

export default ({ currentUserId, destroyAssignment, user }) => {
  const assignments = user.assignments.map(assignment => (
    <div key={assignment._id} className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Project Title: { assignment.title }</h4>
        <div className='mb-0'>
          <p className='card-text'>Project Description: { assignment.project_description }</p>
        </div>
        <Score assignmentScore={assignment.score} assignmentBase={assignment.base} />
      </div>
      <Actions
        currentUserId={currentUserId}
        destroyAssignment={destroyAssignment}
        assignment={assignment}
        user={user} />
    </div>
  ))

  return (
    <>
      <h1 className='mb-4'>{ user.first_name }'s Assignments</h1>
      { assignments }
    </>
  )
}
