import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Success({ message }) {
  useEffect(() => {
    // Display the SweetAlert success message when the component is rendered
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message,
    });
  }, [message]); // Trigger the effect when the 'message' prop changes

  // Return an empty div or null since you're not rendering any JSX here
  return null;
}
