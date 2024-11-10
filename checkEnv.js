import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

console.log("Liveblocks Public Key:", process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY);
