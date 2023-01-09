export default function getRandomHexColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }
  if (getLuminance(color) > 0.354) {
    return getRandomHexColor();
  }
  return color;
}

function getLuminance(color) {
  let r = parseInt(color.substring(1, 3), 16) / 255;
  let g = parseInt(color.substring(3, 5), 16) / 255;
  let b = parseInt(color.substring(5, 7), 16) / 255;
  let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
}

// function getRandomHexColor() {
//   let randomColor = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
//   return randomColor;
// }
