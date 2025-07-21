import { useState, useCallback } from 'react';

export const useLeadFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    // Prevent body scroll when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Restore body scroll when modal is closed
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const handleBackdropClick = useCallback((event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    handleBackdropClick,
    handleEscapeKey,
  };
}; 