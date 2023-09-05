// "lib/csrf"
import { nextCsrf } from "next-csrf";

const { csrf, setup } = nextCsrf({
 secret: process.env.CSRFְְֹֹֹֹֹ_SECRET,
});

export { csrf, setup };