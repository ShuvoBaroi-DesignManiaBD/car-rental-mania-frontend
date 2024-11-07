"use client";
import { GlobalToken, theme } from "antd";

const DesignToken = () => {
  const { token }:{token:GlobalToken} = theme.useToken();
  return token;
};

export default DesignToken;
