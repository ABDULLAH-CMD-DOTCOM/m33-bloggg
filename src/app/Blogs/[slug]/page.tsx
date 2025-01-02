import React from 'react';
import { data } from '@/app/data/blog';
import Comment from "@/app/component/Comment";
import Image from 'next/image';

const dynamic = ({ params }: { params: { slug: string } }) => {
  // Find the blog by slug
  const blog = data.find((b) => b.slug === params.slug);

  if (!blog) {
    // Return a 404-like message if blog is not found
    return (
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center bg-[#62929e] py-3 px-3 font-bold underline mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-700">Sorry, the blog post you are looking for could not be found.</p>
      </div>
    );
  }

  return (
    <>
     <div className='bg-[#62929e] py-10'>
      <div className="max-w-4xl mx-auto mt-[40px] px-4 sm:px-6 lg:px-8 py-2">
        {/* Blog Title and Image Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-7">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6 w-full sm:w-[40%] relative h-56 sm:h-[300px]">
            <Image
              src={blog.image}
              alt="Blog Image"
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex-grow text-gray-700">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white bg-[#62929e] py-3 px-3 font-bold underline mb-4">{blog.title}</h1>
            <p className="text-lg sm:text-xl mb-6">{blog.content}</p>
          </div>
        </div>

        {/* Comment Section */}
        <div className="mb-8">
          <Comment />
        </div>

        {/* Author Section */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4">
            Written by: <span className="text-blue-950 text-xl sm:text-2xl font-semibold underline">Abdullah</span>
          </h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default dynamic;
