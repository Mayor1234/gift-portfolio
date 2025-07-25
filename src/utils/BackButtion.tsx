'use client';

import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const BackButtion = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-6">
        <button
          type="button"
          className="text-sm flex items-center gap-2 text-pry font-poppins cursor-pointer transition-all duration-300 ease-linear hover:opacity-70"
          onClick={() => router.back()}
        >
          <MdArrowBack size={20} />
          Back
        </button>
      </div>
    </div>
  );
};

export default BackButtion;
