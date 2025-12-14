"use server";

import { cookies } from "next/headers";

const BaseURL = "https://api.google.com/api/";

export const apiCall = async (
  url,
  method = "GET",
  body = null,
  headers = {},
  cache = "no-store"
) => {
  const config = {
    method,
    cache,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(`${BaseURL}${url}`, config);

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(
        `مشکل در درخواست - کد وضعیت: ${res.status}, جزئیات: ${errorBody}`
      );
    }

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("خطا در درخواست:", error);
    throw error;
  }
};

export const apiCallWithToken = async (
  url,
  method = "GET",
  body = null,
  headers = {},
  cache = "no-store"
) => {
  const token = cookies().get("token");
  if (!token) {
    throw new Error("توکن احراز هویت یافت نشد.");
  }

  const config = {
    method,
    cache,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(`${BaseURL}${url}`, config);

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(
        `مشکل در درخواست - کد وضعیت: ${res.status}, جزئیات: ${errorBody}`
      );
    }

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("خطا در درخواست توکن دار:", error);
    throw error;
  }
};

export const apiCallWithTokenFormData = async (
  url,
  method = "GET",
  body = null,
  headers = {},
  cache = "no-store"
) => {
  const token = cookies().get("token");
  if (!token) {
    throw new Error("توکن احراز هویت یافت نشد.");
  }

  const config = {
    method,
    cache,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
      ...headers,
    },
  };

  if (body) {
    config.body = body;
  }

  try {
    const res = await fetch(`${BaseURL}${url}`, config);

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(
        `مشکل در درخواست - کد وضعیت: ${res.status}, جزئیات: ${errorBody}`
      );
    }

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("خطا در درخواست توکن دار:", error);
    throw error;
  }
};
