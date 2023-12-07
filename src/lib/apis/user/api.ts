/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponse } from "@/lib/types/api"
import axiosWithConfig from "../axiosWithConfig"
import { IUserUpdateType, Profile } from "./types"

export const getUser = async (username: string) => {
  try {
    const response = await axiosWithConfig.get(`/users/${username}`)
    return response.data as Profile
  } catch (error: any) {
    throw Error(error.response.data.message)

  }
}

export const updateUser = async (body: IUserUpdateType) => {
  try {
    const response = await axiosWithConfig.put("/users", body)
    return response.data as IResponse

  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export const deleteUser = async () => {
  try {
    const response = await axiosWithConfig.delete("/users")
    return response.data as IResponse

  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}