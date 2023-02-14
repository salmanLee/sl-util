export default function upload(cb: (e: Event) => void) {
  const element = document.createElement("input");
  element.setAttribute("type", "file");
  element.onchange = cb;
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
