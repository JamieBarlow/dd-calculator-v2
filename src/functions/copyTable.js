// Copy to clipboard
export default function copyElement(el) {
    const type = "text/plain";
    const blob = new Blob([el.innerText], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
  }