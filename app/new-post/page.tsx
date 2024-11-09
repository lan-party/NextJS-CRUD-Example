'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import PostForm from '@components/PostForm';

const NewPostPage = () => {

  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const createPost = async(e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const resp = await fetch("/api/post/new", {
        method: 'POST',
        body: JSON.stringify({
          title: post.title,
          body: post.body
        })
      });

      if(resp.ok){
        router.push('/');
      }
    }catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mx-auto w-10/12">
      <PostForm type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPost} />
    </div>
  )
}

export default NewPostPage
