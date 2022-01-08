const isElementHandle = (element: Element): boolean => {
  if (element instanceof HTMLElement && element.dataset.nodeHandle === "true") {
    return true;
  }
  if (element.parentElement) {
    return isElementHandle(element.parentElement);
  }
  return false;
}

export default isElementHandle;

