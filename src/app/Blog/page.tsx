import React from 'react';
import Link from "next/link";
import { data } from '@/app/data/blog';
import Image from 'next/image';

const Blogspage = () => {
  return (
    <>
    <div className='bg-[#62929e] py-10'>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-[60px] mb-[60px]">
        {data.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt="img"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.smallText}</p>
              <div className="text-right">
                <Link href={`/Blogs/${blog.slug}`}>
                  <p className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">Read More</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Blogspage;
