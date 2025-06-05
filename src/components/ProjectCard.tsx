"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  type?: string
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  deployLink?: string;
}

export default function ProjectCard({
  title,
  type,
  description,
  tags,
  image,
  githubLink,
  deployLink,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer"
    >
      {/* Selo do tipo */}
      <span className={`
          absolute bottom-2 right-2 px-3 py-1 rounded-full text-xs font-bold 
          ${type === 'profissional'
          ? 'bg-blue-600 text-white'
          : 'bg-green-600 text-white'
        }
          shadow-md
          `}>
        {type === 'profissional' ? 'PRO' : 'ACADÊMICO'}
      </span>

      <div className="h-48 relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />


      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 ">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-8">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <FiGithub /> Código
            </a>
          )}
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              className="text-green-600 hover:underline flex items-center gap-1"
            >
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}