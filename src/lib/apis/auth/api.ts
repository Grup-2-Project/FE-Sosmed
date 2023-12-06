/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponse } from "@/lib/types/api"
import { ILoginType, IRegisterType, LoginPayload, RegisterPayload } from "../auth/types"
import axiosWithConfig from "../axiosWithConfig"

export const userLogin = async (body: ILoginType) => {
  try {
    const response = await axiosWithConfig.post("/login", body)
    return response.data as IResponse<LoginPayload>
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}

export const userRegister = async (body: IRegisterType) => {
  try {
    const response = await axiosWithConfig.post("/users", body)
    return response.data as IResponse<RegisterPayload>
  } catch (error: any) {
    throw Error(error.response.data.message)
  }
}