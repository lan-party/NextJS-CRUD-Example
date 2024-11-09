'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

import PostForm from '@components/PostForm';

const EditPostPage = ( { params }: { params: { id: string } } ) => {

  const router = useRouter();
  const postId = useParams().id;

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  useEffect(() => {
    const getPostDetails = async () => {
        const resp = await fetch(`/api/post/${postId}`)
        const data = await resp.json();

        setPost({
            title: data.title,
            body: data.body
        });
    }

    if(postId) getPostDetails();
  }, [postId]);

  const updatePost = async(e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!postId) return alert("Error");

    try {
      const resp = await fetch(`/api/post/${postId}`, {
        method: 'POST',
        body: JSON.stringify({
          id: postId,
          title: post.title,
          body: post.body
        })
      });

      if(resp.ok){
        router.push(`/posts/${postId}`);
      }
    }catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mx-auto w-10/12">
      <PostForm type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePost} />
    </div>
  )
}

export default EditPostPage
