import React, { useState, useEffect } from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
import router from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = parseInt((context.query.page as string) || "1");
  const postsPerPage = 10; 

  if (isNaN(page) || page < 1) {
    return {
      notFound: true,
    };
  }

  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    skip: (page - 1) * postsPerPage,
    take: postsPerPage,
  });

  const totalPosts = await prisma.post.count({
    where: {
      published: true,
    },
  });

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (page > totalPages) {
    return {
      notFound: true,
    };
  }

  return {
    props: { feed, currentPage: page, totalPages },
  };
};

type Props = {
  feed: PostProps[];
  currentPage: number;
  totalPages: number;
};

const Blog: React.FC<Props> = (props) => {
  const [currPage, setCurrPage] = useState<number>(props.currentPage);
  const [pageButtons, setPageButtons] = useState<number[]>([]);

  useEffect(() => {
    const startPage = Math.floor((currPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, props.totalPages);
    const newPageButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      newPageButtons.push(i);
    }

    setPageButtons(newPageButtons);
  }, [currPage, props.totalPages]);

  const fetchPosts = async (page: number) => {
    router.replace({pathname: router.asPath.split("?")[0], query: {page: page}})
  };

  useEffect(() => {
    if (currPage !== props.currentPage) {
      fetchPosts(currPage);
    }
  }, [currPage, props.currentPage]);

  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post 
              post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
      {currPage > 1 && (
        <button onClick={() => setCurrPage(currPage - 1)}>
          Previous
        </button>
      )}
      {pageButtons.map((page) => (
        <button
          key={page}
          onClick={() => setCurrPage(page)}
          style={{
            fontWeight: page === currPage ? 'bold' : 'normal',
          }}
        >
          {page}
        </button>
      ))}
      {currPage < props.totalPages && (
        <button onClick={() => setCurrPage(currPage + 1)}>
          Next
        </button>
      )}

    </Layout>
  );
};

export default Blog;
