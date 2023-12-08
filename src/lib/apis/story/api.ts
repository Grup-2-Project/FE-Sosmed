import { IResponse } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IStory, IStoryType } from "./types";
import { AxiosError } from "axios";

export const getStory = async () => {
  try {
    const res = await axiosWithConfig.get("/posts");

    return res.data as IResponse<IStory[]>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getStoryById = async (id: string | undefined) => {
  try {
    const res = await axiosWithConfig.get(`/post/${id}`);

    return res.data as IResponse<IStory>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const createStory = async (body: IStoryType) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;

    for (key in body) {
      if (body[key]) {
        formData.append(key, body[key]);
      }
    }

    const res = await axiosWithConfig.post("/posts", formData);

    return res.data as IResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const editStoryById = async (body: IStory, id: number) => {
  try {
    const res = await axiosWithConfig.put(`/posts/${id}`, body);

    console.log(body);

    return res.data as IResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const deleteStoryById = async (id: number | undefined) => {
  try {
    const res = await axiosWithConfig.delete(`/posts/${id}`);

    return res.data as IResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
