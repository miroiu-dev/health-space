import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

export const credentials: Provider = Credentials({
  credentials: {
    email: {},
    password: {},
  },
  authorize: async credentials => {
    return {};
  },
});
