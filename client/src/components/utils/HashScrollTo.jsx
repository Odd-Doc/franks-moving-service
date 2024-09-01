export const ScrollTo = (el) => {
  const screenWidth = window.screen.width;
  let yOffset = 0; // Adjust the offset to your liking
  let screenCheck = (sizeToCheck, screen) => {
    const res = screen <= sizeToCheck ? true : false;
    return res;
  };
  switch (true) {
    case screenCheck(375, screenWidth):
      yOffset = -65;
      break;
    default:
      yOffset = 55;
      break;
  }

  let y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
