"use server";

import { cookies } from "next/headers";

const BaseURL = "https://saledev.restoyar.ir/api";

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
  // const token = cookies().get("token");
  // if (!token) {
  //   throw new Error("توکن احراز هویت یافت نشد.");
  // }

  const config = {
    method,
    cache,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjExODEiLCJ1bmlxdWVfbmFtZSI6IjA5OTE5NDQ5NDcxIiwicm9sZSI6IlNhbGVBZG1pbiIsIm5iZiI6MTc2NTgxNzgwMSwiZXhwIjoxNzY1OTA0MjAxLCJpYXQiOjE3NjU4MTc4MDEsImlzcyI6InJlc3RveWFyLmlyIiwiYXVkIjoicmVzdG95YXIuaXIifQ.QFvf1KJTuFsO0VG3xOgde01CTiwHZNTzHj08-s6VJEM`,
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
