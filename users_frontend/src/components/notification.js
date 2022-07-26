import { Button, notification, Space } from "antd";

const openNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export const success = (message, description) => {
  openNotification("success", message, description);
};

export const error = (message, description) => {
  openNotification("error", message, description);
};

export const info = (message, description) => {
  openNotification("info", message, description);
};

export const warning = (message, description) => {
  openNotification("warning", message, description);
};
