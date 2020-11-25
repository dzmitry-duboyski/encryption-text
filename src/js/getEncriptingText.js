export function getEncriptingText(inputText) {
  const newText = inputText.split('').map((el) => el.charCodeAt())
  return newText;
}
