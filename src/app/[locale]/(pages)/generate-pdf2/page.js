'use client'

import ImageBanner from '@/components/common/Layout/Banner';
import Image from 'next/image';
import GurrentyBadge from "@/assets/images/OurBrands/GurrentyBadge.png";
import Banner from "@/assets/images/OurBrands/HoneyBack.png";

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GeneratePDF() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const batchNumber = searchParams.get('batchNumber');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePDFAction = async (action) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkReportOrganic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ batch_number: batchNumber }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        if (action === 'view') {
          // Open PDF in a new tab
          window.open(url, '_blank');
        } else if (action === 'download') {
          // Download PDF
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `batch_${batchNumber}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }

        // Clean up
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to process PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
     <div className=''>
     <div className="w-full relative">
        <ImageBanner banner={Banner} className="h-full w-full" />
        <Image
          src={GurrentyBadge}
          className="hidden z-0 -bottom-[100px] right-0 lg:inline absolute h-[375px] w-[375px]"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[70px]">
      <h1 className="text-2xl font-bold mb-4">Your batch of Apis Honey is 100% compliant on all Quality parameters. Please download your purity certificate.{batchNumber}</h1>
      <div className="space-x-4">
        <button
          onClick={() => handlePDFAction('view')}
          className="bg-[#835415] hover:bg-[#835415] text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'View PDF'}
        </button>
        <button
          onClick={() => handlePDFAction('download')}
          className="bg-[#835415] hover:bg-[#835415] text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Download PDF'}
        </button>
        <button
          onClick={handleBack}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Check Again
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
     </div>
    </>
  );
}