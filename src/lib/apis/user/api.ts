/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponse } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IUserUpdateType, Profile } from "./types";
import { IStory } from "../story/types";

export const getUser = async (username: string | undefined) => {
  try {
    const response = await axiosWithConfig.get(`/users/${username}`);

    return response.data as Profile;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateUser = async (body: IUserUpdateType) => {
  try {
    const formData = new FormData();

    // Tambahkan properti non-file ke FormData
    formData.append("nama_depan", body.nama_depan);
    formData.append("nama_belakang", body.nama_belakang);
    formData.append("username", body.username);
    formData.append("email", body.email);
    formData.append("gender", body.gender);
    formData.append("hp", body.hp);

    // Tambahkan file gambar ke FormData jika ada
    if (body.foto_profil.length > 0) {
      formData.append("foto_profil", body.foto_profil[0]);
    }

    const response = await axiosWithConfig.put("/users", formData);
    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUser = async () => {
  try {
    const response = await axiosWithConfig.delete("/users");
    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getStoryByUsername = async (username: string | undefined) => {
  try {
    const response = await axiosWithConfig.get(`/posts/${username}`);

    return response.data as IResponse<IStory[]>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
