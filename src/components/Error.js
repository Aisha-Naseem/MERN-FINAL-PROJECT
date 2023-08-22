import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Error({ error }) {
  useEffect(() => {
    // Display the SweetAlert when the component is rendered
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    });
  }, [error]); // Trigger the effect when the 'error' prop changes

  // Return an empty div or null since you're not rendering any JSX here
  return null;
}
