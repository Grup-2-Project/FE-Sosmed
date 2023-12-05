import { IResponse } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IStory } from "./types";

export const getStory = async () => {
  try {
    const res = await axiosWithConfig.get("/posts");

    return res.data as IResponse<IStory[]>;
  } catch (error) {
    console.log(error);
  }
};

export const getStoryById = async (id: string | undefined) => {
  try {
    const res = await axiosWithConfig.get(`/posts/${id}`);

    return res.data as IResponse<IStory>;
  } catch (error) {
    console.log(error);
  }
};
