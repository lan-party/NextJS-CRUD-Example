import React from 'react'
import conn from '@app/database'
import PostCard from './PostCard';
import Link from 'next/link';

const Feed = async () => {
  const resp = await conn.query('SELECT * FROM public.posts ORDER BY id DESC');
  
  const posts = resp.rows.map((post) => 
      <PostCard id={post.id} key={post.title} title={post.title} body={post.body} clickable={true} />
  );

  return (
    <div className="h-full">
      {posts}
    </div>
  )
}

export default Feed
