import express from "express";
import authRoutes from "../routes/auth.routes.js";

describe("Auth Routes", () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use("/auth", authRoutes);
  });
});
