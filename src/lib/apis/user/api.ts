/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponse } from "@/lib/types/api"
import axiosWithConfig from "../axiosWithConfig"
import { IUserUpdateType } from "./types"

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
    console.log(response)
    // return response.data as IResponse
    return response

  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}