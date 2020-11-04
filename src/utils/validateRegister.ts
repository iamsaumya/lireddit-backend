import { UsernamePasswordInput } from "../types";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "username must be at least 3 char"
      }
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include @"
      }
    ];
  }
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email"
      }
    ];
  }
  if (options.password.length <= 3) {
    return [
      {
        field: "password",
        message: "password must be at least 4 char"
      }
    ];
  }
  return null;
};
