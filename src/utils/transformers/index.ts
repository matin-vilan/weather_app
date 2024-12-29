/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ICON_SRC } from "@constants/index";
import { EUnitsType } from "@src/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function objectToQueryString(
  params: string | Record<string, any>
): string {
  // if queries be string  will be return same string
  // if queries be object will be returned query string
  if (!params) return "";
  if (typeof params === "string") return params;
  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach((val) => searchParams.append(key, val));
    } else {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
}

export function destructTime(date: string) {
  const hour = date.split(":")[1];
  return hour;
}

export function formatHourToAmPm(hour: string) {
  const numHour = parseInt(hour, 10);
  const suffix = numHour >= 12 ? "PM" : "AM";
  const formattedHour = numHour % 12 || 12;
  return `${formattedHour} ${suffix}`;
}

export function formatDateTime(input: string) {
  if (!input) return;
  const [datePart] = input.split(":");
  const date = new Date(datePart);
  const options = { month: "long", day: "numeric" };
  // @ts-ignore
  return date.toLocaleDateString("en-US", options);
}

export function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);
  const options = { weekday: "long" };
  // @ts-ignore
  return date.toLocaleDateString("en-US", options);
}

export function handleIcons(icon: string) {
  return ICON_SRC.replace("myIcon", icon);
}

export function handleUnits(units: EUnitsType) {
  if (units === EUnitsType.M) {
    return "C";
  } else {
    return "F";
  }
}
