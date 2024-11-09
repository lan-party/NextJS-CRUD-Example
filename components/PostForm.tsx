import React from 'react'
import Link from 'next/link';

const PostForm = ({
  type, post, setPost, submitting, handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      
      <div className="nes-container is-rounded is-dark with-title w-full mb-5">
        <form onSubmit={handleSubmit} >
          <h1 className="title">{type} Post</h1>
          <input type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value})} className="nes-input is-dark" placeholder="Post Title" style={{"marginBottom": "1em"}} required />
          <textarea className="nes-input is-dark" rows={17} value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} placeholder="Post body contents..." required></textarea>
          <div className="w-full text-right">
            <button type="submit" disabled={submitting} className="nes-btn">Save</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PostForm
