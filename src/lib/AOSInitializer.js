// components/AOSInitializer.js
"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // 动画持续时间
      offset: 50, // 动画触发偏移量
      delay: 100, // 动画延迟时间
      easing: 'ease-in-out', // 动画缓动函数
      once: false, // 是否只初始化一次
    });
  }, []);

  return null;
};

export default AOSInitializer;
