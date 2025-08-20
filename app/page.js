'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AutoScrollingClients from '../components/AutoScrollingClients.js';
import BlogSection from '../components/blogSection.js';
import Counter from '../components/Counter.js';

export default function Home() {
  return (
    <div style={{ color: 'black', backgroundColor: 'white', minHeight: '100vh' }}>
      Hello, Dinuka!
    </div>
  )
}
