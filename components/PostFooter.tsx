import React from 'react'
import Link from '@node_modules/next/link'

const PostFooter = ({id, handleDelete}) => {
  return (
    <div className="w-full text-right">
      <form onSubmit={handleDelete} >
        <Link href={"/edit-post/"+id} className="nes-btn" >Edit</Link>
        <button type="submit" className="nes-btn is-error">Delete</button>
      </form>
    </div>
  )
}

export default PostFooter
