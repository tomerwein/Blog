import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { useAuth } from './api/auth/authContext';

const Draft: React.FC = () => {
  const auth = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [video, setVideo] = useState<File | null>(null);   

  let email = auth?.user?.email;
  let token = auth?.token;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideo(file);
  };

  const removeFile = () => setVideo(null);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {

      const formData = new FormData();
  
      const videoUrl = null;

      let body = { title, content, token, email, videoUrl: null };
      if (video){
        formData.append("video", video);
        const resp = await fetch(`/api/uploads`, {
          method: "POST",
          body: formData
        });
      
        
      const videoUploadResult = resp ? 
      await resp.json() : null; // get the result from the video upload
      const videoUrl = videoUploadResult.url;
      body = { title, content, token, email, videoUrl };
      }
  
      // Then send the original data to the '/api/post/' endpoint
      const response = await fetch(`/api/post/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body), 
      });
  
      if (response.ok) {
        await Router.push("/drafts");
      } else {
        // handle error
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            id= "title"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            id="content"
            value={content}
          />
          {!video ? (
            <input type="file" accept="video/*" onChange={handleFileChange} />
          ) : (
            <div>
              <p>Video: {video.name}</p>
              <button onClick={removeFile}>Remove video</button>
            </div>
          )}
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
