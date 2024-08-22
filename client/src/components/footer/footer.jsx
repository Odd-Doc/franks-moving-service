export const scrollTo = (el) => {
  const yOffset = -20; // Adjust the offset to your liking
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
export const Footer = () => {
  return <></>;
};
