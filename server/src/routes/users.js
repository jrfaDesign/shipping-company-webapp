//login and register

import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { UserModel } from "../models/Users.js";
import { validateToken } from "../utils.js";

const router = express.Router();

//  ========> Resgister
router.post("/auth/register", async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  try {
    const userEmail = await UserModel.findOne({ email }); // === {username = username}
    const userUsername = await UserModel.findOne({ username }); // === {username = username}

    if (userEmail || userUsername) {
      return res
        .status(401)
        .json({ message: "Este utilizador ou email já existe!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      admin: false,
      name,
      lastName,
      email,
      username,
      password: hashedPassword,
      videoClasses: [],
      ebooks: [],
    });

    await newUser.save();

    res.status(200).json({ message: "Registo realizado com sucesso!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//  ========> Login
router.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = (await UserModel.findOne({ email: username }))
    ? await UserModel.findOne({ email: username })
    : await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(404)
      .json({ message: "Email ou password estão errados." });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(404)
      .json({ message: "Email ou password estão errados." });
  }

  // create env variable for the secret

  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });

  res.json({
    message: "Login feito com sucesso",
    accessToken: token,
    user: {
      _id: user._id,
      admin: user.admin,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      videoClasses: user.videoClasses,
      ebooks: user.ebooks,
    },
  });
});

//  ========> Get all users
router.get("/users", validateToken, async (req, res) => {
  try {
    const response = await UserModel.find({});
    const usersData = response.map(user => ({
      _id: user._id,
      admin: user.admin,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      videoClasses: user.videoClasses,
      ebooks: user.ebooks,
    }));
    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete specific user
router.delete("users/:id", validateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await UserModel.findById(id);
    if (!deletedUser) {
      return res.status(404).json({
        message:
          "Utilizador não encontrado, se o erro persistir contactar com assistência.",
      });
    }
    res.status(200).json({ messagem: "Utilizador apagado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Edit user data
router.put("/users/:id", validateToken, async (req, res) => {
  const { id } = req.params;
  const { name, lastName, email } = req.body;

  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({
        message:
          "Utilizador não encontrado, se o erro persistir, entre em contato com a assistência.",
      });
    }

    user.name = name;
    user.lastName = lastName;
    user.email = email;

    await user.save();

    res.status(200).json({
      message: "Dados atualizados com sucesso!",
      user: {
        _id: user._id,
        admin: user.admin,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        videoClasses: user.videoClasses,
        ebooks: user.ebooks,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/users/:id/password", async (req, res) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({
        message:
          "Utilizador não encontrado, se o erro persistir, entre em contato com a assistência.",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message:
          "A password original está incorreta. Por favor, tente novamente.",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password atualizada com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export { router as usersRouter };
