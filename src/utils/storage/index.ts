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
    let date = new Date();
    let expireTime = 1000 * expireInTimeStamp;
    date.setTime(expireTime);
    expires = "; expires=" + date.toUTCString();
  } else if (expireInSeconds) {
    let date = new Date();
    let time = date.getTime();
    let expireTime = time + expireInSeconds;
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
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
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
