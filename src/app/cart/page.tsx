import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
// We'll need a client component to render the cart logic on the page since state is client-side.
import CartPageClient from './CartPageClient';

export const metadata: Metadata = {
  title: 'Shopping Bag | SERONAA',
  description: 'Review your selected luxury jewellery pieces.',
};

export default function CartPage() {
  return (
    <div className="pt-[24vw] md:pt-[12vw] pb-[16vw] md:pb-[8vw] min-h-screen bg-ivory">
      <Container>
        <SectionHeading 
          title="Your Bag" 
          description="Review your selections." 
          className="mb-12 md:mb-16"
        />
        <CartPageClient />
      </Container>
    </div>
  );
}
