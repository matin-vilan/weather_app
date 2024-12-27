import { ErrorType } from "~types/index";
import { eventEmitter } from "../../libs/event-emitter";

export interface IToast {
  message: string;
  duration?: number;
  action?: React.ReactNode;
}

const axiosErrorToast = (e: unknown) => {
  const err = e as ErrorType;
  error(err.response?.data.Message || "خطا");
};

const success = (message: string, options?: Omit<IToast, "message">) => {
  eventEmitter?.emit("toast", {
    ...options,
    message,
    open: true,
    severity: "success",
  });
};

const info = (message: string, options?: Omit<IToast, "message">) => {
  eventEmitter?.emit("toast", {
    ...options,
    message,
    open: true,
    severity: "info",
  });
};

const error = (message: string, options?: Omit<IToast, "message">) => {
  console.log("hi");

  eventEmitter?.emit("toast", {
    ...options,
    message,
    open: true,
    severity: "error",
  });
};

const warning = (message: string, options?: Omit<IToast, "message">) => {
  eventEmitter?.emit("toast", {
    ...options,
    message,
    open: true,
    severity: "warning",
  });
};

const neutral = (message: string, options?: Omit<IToast, "message">) => {
  eventEmitter?.emit("toast", {
    ...options,
    message,
    open: true,
    severity: "neutral",
  });
};

export const toast = {
  success,
  error,
  info,
  warning,
  neutral,
  axiosErrorToast,
};
