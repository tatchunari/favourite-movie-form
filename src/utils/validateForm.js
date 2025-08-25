export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateForm = ({ name, email, favMovie }) => {
  const messages = {};

  if (!name.trim()) messages.name = "Name is required";
  if (!email.trim()) messages.email = "Email is required";
  else if (!emailRegex.test(email)) messages.email = "Invalid Email Format";
  if (!favMovie.trim()) messages.favMovie = "Please choose your favourite movie";

  return messages;
};