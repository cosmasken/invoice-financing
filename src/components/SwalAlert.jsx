import Swal from 'sweetalert2';
import { twMerge } from 'tailwind-merge';

const SwalAlert = ({
  variant = 'info', // Variant: 'success', 'error', 'warning', 'info'
  title = 'Alert',
  text = '',
  showCancelButton = false,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
}) => {
  // Define default styles for each variant
  const variantStyles = {
    success: 'text-green-500 bg-green-50',
    error: 'text-red-500 bg-red-50',
    warning: 'text-yellow-500 bg-yellow-50',
    info: 'text-blue-500 bg-blue-50',
  };

  // Merge the class based on the variant
  const mergedClass = twMerge('p-4 rounded-md shadow-md', variantStyles[variant]);

  return Swal.fire({
    title: `<div class="${mergedClass}">${title}</div>`,
    text,
    icon: variant,
    showCancelButton,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      popup: 'shadow-lg rounded-lg', // Add custom styling for popup if needed
      confirmButton: 'bg-primary text-white rounded-lg px-4 py-2',
      cancelButton: 'bg-neutral-300 text-black rounded-lg px-4 py-2',
    },
  });
};

export default SwalAlert;
