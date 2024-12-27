function on(eventName: string, listener: EventListenerOrEventListenerObject) {
  document.addEventListener(eventName, listener);
}

function off(eventName: string, listener: EventListenerOrEventListenerObject) {
  document.removeEventListener(eventName, listener);
}

function emit<T = any>(eventName: string, data: T) {
  const event = new CustomEvent(eventName, {
    detail: data,
  });
  document.dispatchEvent(event);
}

export const eventEmitter = {
  on,
  off,
  emit,
};
