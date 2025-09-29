import { LoadingSpinner } from '@/components/common/Loader';

export default function Loading() {
  return (
    <div className='flex min-h-[calc(100vh-118px)] w-full flex-col items-center justify-center overflow-hidden p-4'>
      <LoadingSpinner className='text-darkGreen-500' />
    </div>
  );
}
