import React from 'react'

// Color mapping for different contexts
const colorVariants = {
  // Primary colors
  blue: {
    bg: "bg-blue-500",
    hover: "hover:bg-blue-600",
    border: "hover:border-blue-500",
    text: "text-white",
    hoverText: "hover:text-blue-500"
  },
  teal: {
    bg: "bg-teal-500", 
    hover: "hover:bg-teal-600",
    border: "hover:border-teal-500",
    text: "text-white",
    hoverText: "hover:text-teal-500"
  },
  orange: {
    bg: "bg-orange-600",
    hover: "hover:bg-orange-700", 
    border: "hover:border-orange-500",
    text: "text-white",
    hoverText: "hover:text-orange-500"
  },
  
  // Neutral colors
  black: {
    bg: "bg-black",
    hover: "hover:bg-gray-800",
    border: "hover:border-black", 
    text: "text-white",
    hoverText: "hover:text-black"
  },
  gray: {
    bg: "bg-gray-500",
    hover: "hover:bg-gray-600",
    border: "hover:border-gray-500",
    text: "text-white", 
    hoverText: "hover:text-gray-500"
  },
  white: {
    bg: "bg-white",
    hover: "hover:bg-gray-50",
    border: "hover:border-gray-300 border-gray-300",
    text: "text-gray-900",
    hoverText: "hover:text-gray-900"
  },

  // Success/Action colors
  green: {
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
    border: "hover:border-green-500", 
    text: "text-white",
    hoverText: "hover:text-green-500"
  },
  
  // Warning/Alert colors
  red: {
    bg: "bg-red-500",
    hover: "hover:bg-red-600",
    border: "hover:border-red-500",
    text: "text-white",
    hoverText: "hover:text-red-500"
  },
  yellow: {
    bg: "bg-yellow-300", 
    hover: "hover:bg-yellow-500",
    border: "hover:border-yellow-500",
    text: "text-black",
    hoverText: "hover:text-yellow-500"
  },

  // Modern colors
  purple: {
    bg: "bg-purple-500",
    hover: "hover:bg-purple-600", 
    border: "hover:border-purple-500",
    text: "text-white",
    hoverText: "hover:text-purple-500"
  },
  indigo: {
    bg: "bg-indigo-500",
    hover: "hover:bg-indigo-600",
    border: "hover:border-indigo-500", 
    text: "text-white",
    hoverText: "hover:text-indigo-500"
  },
  pink: {
    bg: "bg-pink-500",
    hover: "hover:bg-pink-600",
    border: "hover:border-pink-500",
    text: "text-white", 
    hoverText: "hover:text-pink-500"
  }
};

type ColorVariant = keyof typeof colorVariants;

interface CtaBtnsProps {
  value?: string;
  color?: ColorVariant;
  variant?: 'filled' | 'outline' | 'ghost';
  icon?: React.ReactNode;
}

export default function CtaBtns({
  value = "Get Started",
  color = "teal", 
  variant = "filled",
    icon = null
}: CtaBtnsProps) {
  
  const colorConfig = colorVariants[color] || colorVariants.teal;
  
  // Different button variants
  const getButtonClasses = () => {
    const baseClasses = "px-8 py-2  flex items-center justify-center gap-x-1 rounded-md font-bold transition duration-200 border-2";
    
    switch (variant) {
      case 'filled':
        return `${baseClasses} ${colorConfig.bg} ${colorConfig.text} hover:bg-white ${colorConfig.hoverText} border-transparent ${colorConfig.border}`;
      
      case 'outline':
        return `${baseClasses} bg-transparent ${colorConfig.hoverText} border-current hover:${colorConfig.bg} hover:text-white`;
        
      case 'ghost':
        return `${baseClasses} bg-transparent ${colorConfig.hoverText} border-transparent hover:bg-gray-100 ${colorConfig.hoverText}`;
        
      default:
        return `${baseClasses} ${colorConfig.bg} ${colorConfig.text} hover:bg-white ${colorConfig.hoverText} border-transparent ${colorConfig.border}`;
    }
  };

  return (
    <button className={getButtonClasses()}>
      {icon}{value}
    </button>
  )
}
