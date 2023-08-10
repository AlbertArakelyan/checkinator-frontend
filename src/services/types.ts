export interface IResponseData<T = any> {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
}
