'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/logo.png'
import NavBar from './NavBar'

const MHFull = () => {
  const [searchContent, setSearchContent] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearchBtn = () => {
    setSearchOpen(!searchOpen)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchContent.trim()) return
  
    // Step 1: Remove old highlights
    document.querySelectorAll('.highlighted-search-word').forEach(el => {
      const parent = el.parentNode
      parent.replaceChild(document.createTextNode(el.textContent), el)
      parent.normalize()
    })
  
    // Step 2: Highlight matching words
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)
    let found = false
  
    while (walker.nextNode()) {
      const node = walker.currentNode
      const text = node.textContent
      const index = text.toLowerCase().indexOf(searchContent.toLowerCase())
  
      if (index !== -1) {
        const span = document.createElement('span')
        span.className = 'highlighted-search-word'
        span.textContent = text.substring(index, index + searchContent.length)
  
        const after = document.createTextNode(text.substring(index + searchContent.length))
        const before = document.createTextNode(text.substring(0, index))
  
        const parent = node.parentNode
        parent.replaceChild(after, node)
        parent.insertBefore(span, after)
        parent.insertBefore(before, span)
  
        span.scrollIntoView({ behavior: 'smooth', block: 'center' })
        found = true
        break // only scroll to the first one
      }
    }
  
    if (!found) {
      alert(`No match found for "${searchContent}"`)
    }
  }
  
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between relative">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <Link href={'/'}>
          <Image
            src={Logo}
            alt="header-logo"
            className="w-[130px] h-[65px] object-contain object-center logoMidScreen"
          />
        </Link>
      </div>

      {/* NavBar - centered */}
      <div className="flex-grow flex justify-center md:justify-center md:order-none mb-4 customNavbarResponsive">
        <NavBar className="flex items-center" />
      </div>

      {/* Search icon */}
      <div className="w-[120px] flex justify-center md:justify-end searchIconMidScreen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          onClick={handleSearchBtn}
          className="cursor-pointer"
        >
          <path
            d="M15.755 14.6118H14.965L14.685 14.3418C15.665 13.2018 16.255 11.7218 16.255 10.1118C16.255 6.52182 13.345 3.61182 9.755 3.61182C6.165 3.61182 3.255 6.52182 3.255 10.1118C3.255 13.7018 6.165 16.6118 9.755 16.6118C11.365 16.6118 12.845 16.0218 13.985 15.0418L14.255 15.3218V16.1118L19.255 21.1018L20.745 19.6118L15.755 14.6118ZM9.755 14.6118C7.26501 14.6118 5.255 12.6018 5.255 10.1118C5.255 7.62182 7.26501 5.61182 9.755 5.61182C12.245 5.61182 14.255 7.62182 14.255 10.1118C14.255 12.6018 12.245 14.6118 9.755 14.6118Z"
            fill="#3D3D3D"
          />
        </svg>
      </div>

      {/* Search input */}
      {searchOpen && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-md p-4 z-50">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
              placeholder="Search on this page..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default MHFull
