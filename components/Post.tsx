import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { Video } from '../mongo_util';

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  url?: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps}> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";

  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      
      <div>
      {post.url && 
        <video controls width="40%">
            <source src={post.url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      }
      </div>
      
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />

      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
