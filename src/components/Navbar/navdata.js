import React from 'react';
import { FaLinkedin, AiFillLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/FabianWeidner',
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/fabian-weidner/',
    icon: <FaLinkedin />,
  },
];
