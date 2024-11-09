'use client';
import PostCard from '@components/PostCard';
import PostFooter from '@components/PostFooter';
import { useRouter, useParams } from 'next/navigation';

const PostViewPage = ( { params }: { params: { id: string } } ) => {

  const router = useRouter();
  const postId = useParams().id;

  const deletePost = async (post) => {
    post.preventDefault();

    const hasConfirmed = confirm("Are you sure you want to delete this post?");
    if(hasConfirmed){
      try {
        const resp = await fetch(`/api/post/${postId}`, {method: 'DELETE'});
        

        if(resp.ok){
          router.push('/');
        }
      }catch(error){
        console.log(error)
      }
    }
  }

  return (
    <div className="container mx-auto text-center w-10/12">
      <PostCard id={postId} clickable={false} />
      <PostFooter id={postId} handleDelete={deletePost} />
    </div>
  )
}

export default PostViewPage
