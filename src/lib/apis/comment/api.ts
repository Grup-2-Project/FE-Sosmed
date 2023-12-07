import { IResponse } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IComment } from "./type";
import { AxiosError } from "axios";

export const createComment = async (body: IComment) => {
  try {
    const res = await axiosWithConfig.post("comments", body);

    return res.data as IResponse;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
