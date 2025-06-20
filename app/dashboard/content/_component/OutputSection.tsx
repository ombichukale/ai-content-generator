"use client";
import React, { useState, useEffect } from "react";
import { Check, Copy, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const [copied, setCopied] = useState(false);
  const [generatedDate, setGeneratedDate] = useState("");

  useEffect(() => {
    setGeneratedDate(new Date().toLocaleDateString());
  }, []);

  const handleCopy = async () => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      await navigator.clipboard.writeText(aiOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([aiOutput], { type: "text/html" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-content.html";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="bg-white shadow-xl border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="border-b bg-gray-50/50">
        <div className="flex justify-between items-center p-4 px-6">
          <div>
            <h2 className="font-semibold text-lg text-gray-800">
              Generated Content
            </h2>
            <p className="text-sm text-gray-500">
              Your AI-generated content appears here
            </p>
          </div>

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share content</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={handleDownload}
                  >
                    <Download className="w-4 h-4 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download as HTML</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={copied ? "secondary" : "default"}
                    className={`h-9 px-3 transition-all duration-200 ${
                      copied
                        ? "bg-green-50 text-green-600 border-green-200"
                        : ""
                    }`}
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
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

      {/* Content Display (Rendered HTML) */}
      <div className="p-6 prose max-w-none">
        {aiOutput ? (
          <div dangerouslySetInnerHTML={{ __html: aiOutput }} />
        ) : (
          <p className="text-gray-500">No content generated yet.</p>
        )}
      </div>

      {/* Footer */}
      <div className="border-t px-6 py-3 text-sm text-gray-500 flex justify-between items-center">
        <div>Words: {aiOutput.split(/\s+/).length}</div>
        <div>Last generated: {generatedDate}</div>
      </div>
    </div>
  );
}

export default OutputSection;
