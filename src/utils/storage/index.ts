type SetCookieType = {
  name: string;
  value: string;
  expireInTimeStamp?: number;
  expireInSeconds?: number;
  path?: string;
};

export function setCookie({
  name,
  value,
  expireInTimeStamp,
  expireInSeconds,
  path = "/",
}: SetCookieType) {
  let expires = "";
  if (expireInTimeStamp) {
    const date = new Date();
    const expireTime = 1000 * expireInTimeStamp;
    date.setTime(expireTime);
    expires = "; expires=" + date.toUTCString();
  } else if (expireInSeconds) {
    const date = new Date();
    const time = date.getTime();
    const expireTime = time + expireInSeconds;
    date.setTime(expireTime);
    expires = "; expires=" + date.toUTCString();
  } else {
    // Default expiration: 30 days
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
}

export function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function clearCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

type SetLocalStorageType = {
  name: string;
  value: string;
};

export function setLocalStorage({ name, value }: SetLocalStorageType) {
  localStorage.setItem(name, value);
}

export function getLocalStorage(name: string) {
  return localStorage.getItem(name);
}

export function removeLocalStorage(name: string) {
  localStorage.removeItem(name);
}
