"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { IconChevronDown, IconArrowRight } from '@tabler/icons-react'
import { NavItem } from '@/utils/navItems'

interface DropdownMenuProps {
  item: NavItem;
  onItemClick?: () => void;
  isActive?: boolean;
  onHover?: (isHovered: boolean) => void;
}

export function DropdownMenu({ item, onItemClick, isActive, onHover }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
    onHover?.(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      onHover?.(false)
    }, 150)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    onItemClick?.()
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // If it's a simple link (no dropdown)
  if (item.link && !item.dropdown) {
    return (
      <Link
        href={item.link}
        onClick={onItemClick}
        className={`
          relative px-4 py-2 text-neutral-600 dark:text-neutral-300 
          hover:text-blue-600 transition-colors duration-200
          ${isActive ? 'text-blue-600' : ''}
        `}
      >
        {isActive && (
          <motion.div
            layoutId="active-nav"
            className="absolute inset-0 h-full w-full rounded-full bg-blue-50 dark:bg-blue-900/20"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-20">{item.name}</span>
      </Link>
    )
  }

  // Dropdown menu
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`
          flex items-center gap-1 px-4 py-2 text-neutral-600 dark:text-neutral-300 
          hover:text-blue-600 transition-colors duration-200
          ${isActive || isOpen ? 'text-blue-600' : ''}
        `}
      >
        {(isActive || isOpen) && (
          <motion.div
            layoutId="active-nav"
            className="absolute inset-0 h-full w-full rounded-full bg-blue-50 dark:bg-blue-900/20"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-20">{item.name}</span>
        <IconChevronDown
          size={16}
          className={`
            relative z-20 transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700 overflow-hidden z-50"
          >
            {/* Dropdown Header */}
            {item.dropdown.title && (
              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border-b border-gray-100 dark:border-neutral-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.dropdown.title}
                </h3>
              </div>
            )}

            {/* Dropdown Items */}
            <div className="py-2">
              {item.dropdown.items.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.link}
                  onClick={handleItemClick}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm">{subItem.name}</div>
                    {subItem.description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {subItem.description}
                      </div>
                    )}
                  </div>
                  <IconArrowRight 
                    size={16} 
                    className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200" 
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MobileDropdownMenuProps {
  item: NavItem;
  onItemClick?: () => void;
}

export function MobileDropdownMenu({ item, onItemClick }: MobileDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    onItemClick?.()
  }

  // If it's a simple link (no dropdown)
  if (item.link && !item.dropdown) {
    return (
      <Link
        href={item.link}
        onClick={onItemClick}
        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
      >
        <span className="font-medium">{item.name}</span>
        <span className="text-gray-400 group-hover:text-blue-600 transition-colors">→</span>
      </Link>
    )
  }

  // Mobile dropdown menu
  return (
    <div className="space-y-1">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
      >
        <span className="font-medium">{item.name}</span>
        <IconChevronDown
          size={16}
          className={`
            text-gray-400 group-hover:text-blue-600 transition-all duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 space-y-1 overflow-hidden"
          >
            {item.dropdown.items.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.link}
                onClick={handleItemClick}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {subItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
