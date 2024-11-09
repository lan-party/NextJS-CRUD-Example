'use client';
import Link from '@node_modules/next/link'
import {useEffect, useState} from 'react'

const PostCard = (props) => {
  
    if(props.clickable){

    return (
      <Link href={"/posts/" + props.id} style={{ textDecoration: 'none' }}>
        <div className="nes-container is-rounded is-dark with-title w-full mb-5" style={{textAlign: "left"}} >
          <p className="title">{props.title}</p>
          <p style={{whiteSpace: "pre-wrap"}}>{props.body}</p>
        </div>
      </Link>
    )
    }else{

        const [post, setPost] = useState({
          title: '',
          body: ''
        });

        useEffect(() => {
          const getPostDetails = async () => {
              const resp = await fetch(`/api/post/${props.id}`)
              const data = await resp.json();
      
              setPost({
                  title: data.title,
                  body: data.body
              });
          }
      
          if(props.id) getPostDetails();
        }, [props.id]);

      return (
        <div className="nes-container is-rounded is-dark with-title w-full mb-5" style={{textAlign: "left"}}>
          <p className="title">{post.title}</p>
          <p style={{whiteSpace: "pre-wrap"}}>{post.body}</p>
        </div>
      )
    }
}

export default PostCard
