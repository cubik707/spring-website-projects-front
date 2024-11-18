export const handleError = (e) => {
  console.error(e);

  // Check if there's a response object and data
  if (e.response && e.response.data) {
    const { data } = e.response;

    // Return the error data directly as field-specific error messages
    return data;
  }

  // If no specific error data, return a general error message
  return { general: 'An unexpected error occurred' };
};
