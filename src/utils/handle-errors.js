
export const handleError = (e) => {
  if (e.response && e.response.data) {
    return e.response.data[0]?.msg || e.response.data.message;
  }
  return "An unexpected error occurred";
};
