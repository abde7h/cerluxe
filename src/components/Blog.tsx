// src/components/Blog.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  link: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Cómo elegir la puerta perfecta para tu hogar',
    excerpt: 'Descubre los factores clave a considerar al elegir una puerta para tu hogar.',
    imageUrl: '/assets/blog/puerta1.jpg',
    date: '2024-12-17',
    link: '/blog/como-elegir-puerta',
  },
  {
    id: 2,
    title: 'Todo lo que necesitas saber sobre cerrajería',
    excerpt: 'Descubre los servicios de cerrajería, cómo elegir un cerrajero de confianza y más.',
    imageUrl: '/assets/blog/puerta.jpg',
    date: '2024-11-10',
    link: '/blog/cerrajeria',
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 mt-16">Nuestro Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={post.link}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;