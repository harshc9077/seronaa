'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface AccordionSection {
  title: string;
  content: React.ReactNode;
}

interface ProductAccordionProps {
  sections?: AccordionSection[];
}

export function ProductAccordion({ sections = [] }: ProductAccordionProps) {
  const defaultSections: AccordionSection[] = [
    {
      title: 'Description',
      content: <p>Detailed information about this exquisite piece. Handcrafted with precision and care.</p>
    },
    {
      title: 'The Diamond',
      content: <p>Ethically sourced and meticulously graded for brilliance, fire, and scintillation.</p>
    },
    {
      title: 'Craftsmanship',
      content: <p>Created by our master artisans using traditional techniques combined with modern precision.</p>
    },
    {
      title: 'Delivery & Returns',
      content: <p>Complimentary secure shipping on all orders. 30-day return policy for unblemished items.</p>
    },
    {
      title: 'Care',
      content: <p>To maintain the brilliance of your piece, gently clean with a soft brush and warm soapy water.</p>
    }
  ];

  const displaySections = sections.length > 0 ? sections : defaultSections;
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-cream mt-8">
      {displaySections.map((section, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={section.title} className="border-b border-cream">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <span className="text-[11px] uppercase tracking-[0.15em] text-charcoal group-hover:text-taupe transition-colors">
                {section.title}
              </span>
              <span className="text-taupe text-lg font-light w-4 flex justify-center">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out font-body text-sm text-taupe leading-relaxed",
                isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
              )}
            >
              {section.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
