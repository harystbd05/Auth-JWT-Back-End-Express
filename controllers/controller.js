import express from "express";
import jwt from "jsonwebtoken";

async function testGet(req, res, next) {
  res.status(200).json({
    message: "ini cuma test",
  });
}

async function login(req, res, next) {
  const { username } = req.body;
  console.log(username);
  const user = {
    id: 1,
    username: "testuser",
  };

  const accessToken = jwt.sign(user, "hr-media", { expiresIn: "1h" });
  res.json({ accessToken });
}

async function testCheck(req, res) {
  res.json({ message: "Token is valid", user: req.user });
}

export default { testGet, login, testCheck };
