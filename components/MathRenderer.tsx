import React, { useEffect, useRef } from 'react';

interface MathRendererProps {
  content: string;
  block?: boolean;
  className?: string;
}

declare global {
  interface Window {
    katex: any;
  }
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let intervalId: any = null;

    const renderMath = () => {
      if (window.katex && containerRef.current) {
        try {
          window.katex.render(content, containerRef.current, {
            throwOnError: false,
            displayMode: block,
            strict: false,
            trust: true
          });
          return true; // Render successful
        } catch (e) {
          console.error("KaTeX rendering error:", e);
          containerRef.current.innerText = content;
          return true; // Treated as handled
        }
      }
      return false; // Not ready yet
    };

    // Attempt render immediately
    if (!renderMath()) {
      // If failed (likely katex not loaded), poll until loaded
      intervalId = setInterval(() => {
        if (renderMath()) {
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [content, block]);

  return <span ref={containerRef} className={className} />;
};

// Helper to parse text containing $...$ or $$...$$
export const TextWithMath: React.FC<{ text: string, className?: string }> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split by $$ for block math first
  // Capture the delimiters to identify parts
  const blockParts = text.split(/(\$\$[\s\S]*?\$\$)/g);

  return (
    <div className={`text-base leading-relaxed ${className}`}>
      {blockParts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Remove $$ delimiters
          const math = part.slice(2, -2);
          return <MathRenderer key={index} content={math} block={true} className="my-2 block overflow-x-auto" />;
        }

        // Then split by $ for inline math
        const inlineParts = part.split(/(\$[\s\S]*?\$)/g);
        return (
          <span key={index}>
            {inlineParts.map((subPart, subIndex) => {
              if (subPart.startsWith('$') && subPart.endsWith('$')) {
                const math = subPart.slice(1, -1);
                return <MathRenderer key={`${index}-${subIndex}`} content={math} block={false} />;
              }
              return <span key={`${index}-${subIndex}`}>{subPart}</span>;
            })}
          </span>
        );
      })}
    </div>
  );
};