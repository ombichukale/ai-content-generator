import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: { onSearchInput: (value: string) => void }) {
  return (
    <div className='relative overflow-hidden'>
      {/* Background with animated gradient */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/90' />
      
      {/* Content */}
      <div className='relative px-6 py-10 flex flex-col justify-center items-center text-white'>
        {/* Header Text */}
        <div className='text-center space-y-2 mb-6'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Browse all Templates
          </h2>
          <p className='text-sm text-white/80'>
            What Would you Like to create today ??
          </p>
        </div>

        {/* Search Box */}
        <div className='w-full max-w-xl mx-auto relative'>
          <div className='flex items-center bg-white rounded-lg shadow-md'>
            <Search className='text-gray-400 w-5 h-5 ml-4' />
            <input
              type="text"
              placeholder='Search templates...'
              onChange={(event) => onSearchInput(event.target.value)}
              className='w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-400 text-sm focus:outline-none'
            />
            {/* Keyboard shortcut indicator */}
            <div className='hidden md:flex items-center gap-1 px-3 text-xs text-gray-400 border-l'>
              <kbd className='px-1.5 py-0.5 bg-gray-50 rounded text-xs'>⌘</kbd>
              <kbd className='px-1.5 py-0.5 bg-gray-50 rounded text-xs'>K</kbd>
            </div>
          </div>
        </div>

        {/* Popular searches */}
        <div className='mt-4 flex flex-wrap justify-center gap-2 text-xs'>
          <span className='text-white/60'>Popular:</span>
          {['Blog Posts', 'Social Media', 'SEO Content', 'Product Description'].map((term) => (
            <button
              key={term}
              onClick={() => onSearchInput(term)}
              className='px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200'
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSection