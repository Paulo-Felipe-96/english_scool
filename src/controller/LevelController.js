const { LevelServices } = require("../services");
const levelServices = new LevelServices();

class LevelController {
  static async listAllLevels(req, res) {
    try {
      const levels = await levelServices.getAllRecords();

      res.status(200).json(levels);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async findLevelById(req, res) {
    const { id } = req.params;

    try {
      const level = await levelServices.getOneRecord({ id });

      level
        ? res.status(200).json(level)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async findLevelByDescription(req, res) {
    const { descricao } = req.query;

    try {
      const level = await levelServices.getOneRecord({ descricao });

      level
        ? res.status(200).json(level)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async insertLevel(req, res) {
    const level = req.body;

    try {
      await levelServices.createRecord(level);
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
      findAndUpdate = await levelServices.updateRecord(descricao, id);

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

  static async deleteLevelById(req, res) {
    const { id } = req.params;

    try {
      const findAndDelete = await levelServices.deleteRecord(id);

      findAndDelete
        ? res.status(200).json({ message: "registro deletado" })
        : res.status(404).json({ message: "nenhum registro encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async restoreLevelById(req, res) {
    const { id } = req.params;

    try {
      const restoredSchoolClass = await levelServices.restoreRecord(id);

      res.status(200).json({
        message: "registro restaurado com sucesso",
        registros_atualizados: restoredSchoolClass,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = LevelController;
