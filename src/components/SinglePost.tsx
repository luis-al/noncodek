import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';
import { posts } from '../lib/posts';

const SinglePost = () => {
  const { id } = useParams();
  const post = id ? posts[Number(id)] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | NonCodek`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', post.title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.description);
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', post.image);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4">
          <h1>Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <article className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-8"
            />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <time className="text-gray-500 mb-8 block">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePost;