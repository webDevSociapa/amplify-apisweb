"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const BlogDetailPage = () => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs?id=${blogId}`);
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  if (loading || !blog) {
    return <div className="text-center py-20 text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 font-jost">{blog.blogTitle}</h1>
      <div className="mb-8">
        <Image
          src={blog.blogImage}
          alt={blog.blogTitle}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div
        className="prose max-w-none font-jost"
        dangerouslySetInnerHTML={{ __html: blog.contentData }}
      ></div>
    </div>
  );
};

export default BlogDetailPage;
