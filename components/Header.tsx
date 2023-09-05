import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../pages/api/auth/authContext";
import cookie from 'js-cookie';

const Header: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const handleLogout = () => {
    auth.setToken(null);
    cookie.remove('token');
    cookie.remove('user');
    router.push('/');

  }


  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (auth.token == null ) {
    right = (
      <div className="right">

        <Link href="/signin" legacyBehavior>
          <button>
            <a>Sign In</a>
          </button>
        </Link>

        <Link href="/signup" legacyBehavior>
          <button>
            <a>Sign Up</a>
          </button>
        </Link>

        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (auth.token!=null) {
    left = (
      <div className="left">
        <Link href="/" legacyBehavior>
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>

        <Link href="/drafts" legacyBehavior>
          <a data-active={isActive("/drafts")}>
            My drafts
          </a>
        </Link>

        <Link href="/profile" legacyBehavior>
            <a data-active={isActive("/profile")}>
              Profile
            </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {auth.user?.username} ({auth.user?.email})
        </p>
        <Link href="/create" legacyBehavior>
          <button>
            <a>New post</a>
          </button>
        </Link>

        <button onClick={() => handleLogout()}>
          <a>Log out</a>
        </button>
         <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }

          button {
            border: none;
          }
        `}</style>
       </div>
    );
  }

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
