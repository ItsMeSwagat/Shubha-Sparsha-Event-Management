import React, { useEffect } from 'react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showNavigation?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
}
export function Modal({
  isOpen,
  onClose,
  children,
  showNavigation,
  onPrevious,
  onNext
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 max-w-7xl w-full mx-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors z-20">
          <XIcon className="w-8 h-8" />
        </button>

        {showNavigation && onPrevious && <button onClick={onPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-500 transition-colors z-20">
            <ChevronLeftIcon className="w-12 h-12" />
          </button>}

        {showNavigation && onNext && <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-500 transition-colors z-20">
            <ChevronRightIcon className="w-12 h-12" />
          </button>}

        {children}
      </div>
    </div>;
}