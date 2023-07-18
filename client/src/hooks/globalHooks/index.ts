import { useEffect, useState } from "react";
import { ResultClass, User, CourseClass, EbookClass } from "~/types/app";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

export const toUrlString = (str: string): string => {
  return str.toLowerCase().replace(/\s+/g, "-");
};

export const Paginate = (
  items:
    | (CourseClass | EbookClass)[]
    | (CourseClass | EbookClass | ResultClass | User)[]
    | CourseClass[]
    | EbookClass[]
    | ResultClass[]
    | User[],
  currentPage: number,
  itemsPerPage: number
) => {
  if (!items) {
    return [];
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const statusToString = (status: number) => {
  const string = {
    200: "success",
    400: "error",
    401: "error",
    404: "error",
    500: "error"
  };

  return string[status] ?? status;
};
