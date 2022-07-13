const db = require("../models");

class LevelController {
  static async listAllLevels(req, res) {
    try {
      const levels = await db.Niveis.findAll();
      res.status(200).json(levels);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async findLevelById(req, res) {
    const { id } = req.params;

    try {
      const level = await db.Niveis.findOne({ where: { id } });

      level
        ? res.status(200).json(level)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async findLevelByDescription(req, res) {
    const { descricao } = req.params;

    try {
      const level = await db.Niveis.findOne({ where: { descricao } });

      level
        ? res.status(200).json(level)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async insertLevel(req, res) {
    const level = req.body;

    try {
      await db.Niveis.create(level);
      res
        .status(201)
        .json({ message: "registro inserido com sucesso", nivel: level });
    } catch (error) {
      error.errors
        ? res.status(400).json(error.errors)
        : res.status(500).json(error);
    }
  }

  static async updateLevelById(req, res) {
    const { id } = req.params;
    const descricao = req.body;
    let findAndUpdate;

    try {
      findAndUpdate = await db.Niveis.update(descricao, { where: { id } });

      if (findAndUpdate[0] === 1) {
        res.status(200).json({
          message: "registro atualizado com sucesso",
        });
      } else {
        res.status(404).json({
          message:
            "nenhum registro foi atualizado, verifique os dados enviados",
        });
      }
    } catch (error) {
      error.errors
        ? res.status(400).json({ message: error.errors })
        : res.status(500).json({ message: error });
    }
  }
}

module.exports = LevelController;
