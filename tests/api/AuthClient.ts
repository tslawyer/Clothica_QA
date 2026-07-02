import { APIRequestContext, request } from "@playwright/test";
import type { LoginData } from "./types/LoginData";
export class AuthCLient {
  private token?: string;
  constructor(private request: APIRequestContext) {}

  async login(data: LoginData) {
    const response = await this.request.post(
      "https://clothica-backend-qy1r.onrender.com/api/auth/login",
      { data },
    );
    const responseBody = await response.json();
    this.token = data.token;
    return response;
  }
}
