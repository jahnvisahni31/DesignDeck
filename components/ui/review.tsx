'use client';
import { ArrowLeft, ArrowRight, Sparkles, Stars, Zap } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  emotion: string;
  techStack: string[];
  aiContribution: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This AI is a game-changer! It's like having an entire research team that never sleeps. My productivity has skyrocketed.",
    author: "Liam Garcia",
    position: "AI Enthusiast",
    emotion: "amazed",
    techStack: ["Deep Learning", "Predictive Analytics", "GPT"],
    aiContribution: "Productivity boosted by 400%",
    image: "/Liam.jpg"
  },
  {
    text: "It feels like magic – the AI adjusts to each project’s needs! From generating fresh ideas to refining complex designs, it's my creative assistant.",
    author: "Ava Thompson",
    position: "Tech Explorer",
    emotion: "inspired",
    techStack: ["Adaptive Learning", "Creative Networks", "AI Art"],
    aiContribution: "Idea generation speed increased by 5x",
    image: "/ava.jpg"
  },
  {
    text: "I never imagined AI could understand niche industry jargon so well. It’s been a lifesaver for technical content creation.",
    author: "James Kim",
    position: "Content AI Specialist",
    emotion: "mindblown",
    techStack: ["Natural Language Processing", "Custom GPT Models", "Content AI"],
    aiContribution: "Content accuracy improved by 85%",
    image: "/james.jpg"
  },
  {
    text: "AI-powered insights have made data visualization so intuitive! Now I can see trends that would’ve taken weeks to identify before.",
    author: "Sophia Perez",
    position: "Data Enthusiast",
    emotion: "amazed",
    techStack: ["Data Visualization", "Machine Learning", "NLP"],
    aiContribution: "Data insight speed increased by 3x",
    image: "/sophia.jpg"
  },
  {
    text: "Using AI to handle customer support queries was the best decision ever! It provides immediate responses, keeping customers happy and saving me time.",
    author: "Zara Williams",
    position: "Customer Support Lead",
    emotion: "inspired",
    techStack: ["Customer AI", "Sentiment Analysis", "Automated Support"],
    aiContribution: "Customer response time reduced by 75%",
    image: "/zara.jpg"
  },
];

const DesignDeckTestimonial: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  const getEmotionColor = (emotion: string) => {
    const colors: Record<string, string> = {
      amazed: 'bg-purple-600',
      inspired: 'bg-blue-600',
      mindblown: 'bg-green-600',
    };
    return colors[emotion] || 'bg-gray-600';
  };

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen transition-colors duration-300 p-8 bg-inherit dark:bg-black text-black dark:text-white">
        <div className="max-w-4xl mx-auto rounded-2xl p-8 bg-gradient-to-r from-gray-300 via-white to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-slate-600 dark:to-gray-950  transition-colors duration-300">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 mr-2 text-[#704EF8]" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#704EF8] to-purple-400 dark:text-purple-400">
              DesignDeck Stories
            </h2>
          </div>

          <div className="space-y-6 transition-opacity duration-500">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <blockquote className="text-2xl font-light italic text-center mb-8 text-gray-900 dark:text-gray-300">
                "{currentTestimonial.text}"
              </blockquote>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  className="w-20 h-20 rounded-full ring-4 ring-[#704EF8] transition-transform duration-300 hover:scale-110"
                  width={200}
                  height={200}
                />
                <div
                  className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full ${getEmotionColor(
                    currentTestimonial.emotion
                  )} flex items-center justify-center`}
                >
                  <Stars className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentTestimonial.author}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{currentTestimonial.position}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {currentTestimonial.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 rounded-full bg-purple-800 border border-purple-800 cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:scale-105"
                  >
                    <span className="text-sm text-white">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-900 dark:text-gray-200">
                <Zap className="w-4 h-4" />
                <span>{currentTestimonial.aiContribution}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 rounded-full bg-purple-800 hover:bg-purple-600 transition-colors duration-300"
            >
              <ArrowLeft className="text-white" />
            </button>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 rounded-full bg-purple-800 hover:bg-purple-600 transition-colors duration-300"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDeckTestimonial;
