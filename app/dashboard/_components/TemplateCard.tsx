import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react' // Import the arrow icon

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className='group relative overflow-hidden bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300'>
        {/* Purple gradient overlay on hover */}
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300' />
        
        <div className='p-6 flex flex-col gap-4'>
          {/* Icon with background */}
          <div className='w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
            <Image 
              src={item.icon} 
              alt={item.name} 
              width={30} 
              height={30}
              className='object-contain'
            />
          </div>

          {/* Content */}
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <h2 className='font-semibold text-lg text-gray-800 group-hover:text-purple-600 transition-colors duration-300'>
                {item.name}
              </h2>
              <ArrowRight className='w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300' />
            </div>
            
            <p className='text-gray-500 text-sm line-clamp-2'>
              {item.desc}
            </p>
          </div>

          {/* Bottom indicator */}
          <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard