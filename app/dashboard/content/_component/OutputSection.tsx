"use client"
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';

// Dynamically import the Editor to prevent SSR issues
const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <div className="p-4 border rounded">Loading editor...</div>
});
import { Check, Copy, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false);
  const [generatedDate, setGeneratedDate] = useState('');

  useEffect(() => {
    // Set current date on client-side only
    setGeneratedDate(new Date().toLocaleDateString());
  }, []);
  
  // Separate useEffect for editor initialization to ensure it runs after the editor is mounted
  useEffect(() => {
    // Check if we're in the browser and if the editor ref exists and has getInstance method
    if (typeof window !== 'undefined' && 
        editorRef.current && 
        typeof editorRef.current.getInstance === 'function') {
      try {
        const editorInstance = editorRef.current.getInstance();
        if (editorInstance && typeof editorInstance.setMarkdown === 'function') {
          editorInstance.setMarkdown(aiOutput || 'Generated Content will Appear here');
        }
      } catch (error) {
        console.error('Error accessing editor:', error);
      }
    }
  }, [aiOutput, editorRef.current])

  const handleCopy = async () => {
    if (typeof window !== 'undefined' && navigator?.clipboard) {
      await navigator.clipboard.writeText(aiOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const handleDownload = () => {
    const blob = new Blob([aiOutput], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-content.md';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  return (
    <div className='bg-white shadow-xl border rounded-xl overflow-hidden'>
      {/* Header */}
      <div className='border-b bg-gray-50/50'>
        <div className='flex justify-between items-center p-4 px-6'>
          <div>
            <h2 className='font-semibold text-lg text-gray-800'>Generated Content</h2>
            <p className='text-sm text-gray-500'>Your AI-generated content appears here</p>
          </div>
          
          <div className='flex gap-2'>
            <TooltipProvider>
              {/* Share Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className='h-9 w-9'>
                    <Share2 className='w-4 h-4 text-gray-600' />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share content</p>
                </TooltipContent>
              </Tooltip>

              {/* Download Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className='h-9 w-9'
                    onClick={handleDownload}
                  >
                    <Download className='w-4 h-4 text-gray-600' />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download as markdown</p>
                </TooltipContent>
              </Tooltip>

              {/* Copy Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={copied ? "secondary" : "default"}
                    className={`h-9 px-3 transition-all duration-200 ${
                      copied ? 'bg-green-50 text-green-600 border-green-200' : ''
                    }`}
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className='w-4 h-4 mr-2' />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className='w-4 h-4 mr-2' />
                        Copy
                      </>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className='relative group'>
        {/* Subtle gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none' />
        
        <Editor
          ref={editorRef}
          initialValue="Generated Content will Appear here"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
          theme="light"
          previewStyle="vertical"
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task'],
            ['table', 'link'],
            ['code', 'codeblock']
          ]}
        />
      </div>

      {/* Optional: Footer with word count or other metadata */}
      <div className='border-t px-6 py-3 text-sm text-gray-500 flex justify-between items-center'>
        <div>
          Words: {aiOutput.split(/\s+/).length}
        </div>
        <div>
          Last generated: {generatedDate}
        </div>
      </div>
    </div>
  )
}

export default OutputSection