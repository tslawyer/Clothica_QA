import { AuthCLient } from "./../AuthClient";
import { expect, test } from "@playwright/test";
test("Successfull login", async ({ request }) => {
  const authClient = new AuthCLient(request);
  const response = await authClient.login({
    email: "nikita8078@gmail.com",
    password: "12345678",
  });
  const body = await response.json();
  expect(response.status()).toBe(200);
  expect(body).toHaveProperty("token");
  expect(body.is_admin).toBe(false);
});
