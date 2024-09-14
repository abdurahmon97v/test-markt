"use server";
import { productType } from "../types/product";

const url = process.env.APP_URL;

export const getProducts = async (): Promise<productType[]> => {
  try {
    const res = await fetch(`${url}/notebook`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
