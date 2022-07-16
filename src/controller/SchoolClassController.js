const db = require("../models");

class SchoolClassController {
  static async findAllSchoolClasses(req, res) {
    try {
      const schoolClasses = await db.Turmas.findAll();
      res.status(200).json(schoolClasses);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async findSchoolClassById(req, res) {
    const { id } = req.params;

    try {
      const schoolClass = await db.Turmas.findOne({ where: { id } });

      schoolClass
        ? res.status(200).json(schoolClass)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findSchoolClassesByLevelId(req, res) {
    const { id_nivel } = req.params;

    try {
      const schoolClasses = await db.Turmas.findAll({ where: { id_nivel } });

      schoolClasses.length
        ? res.status(200).json(schoolClasses)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findSchoolClassesByTeacherId(req, res) {
    const { id_docente } = req.params;

    try {
      const schoolClasses = await db.Turmas.findAll({ where: { id_docente } });

      schoolClasses.length
        ? res.status(200).json(schoolClasses)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findSchoolClassesByStartDate(req, res) {
    const { data_inicio } = req.query;

    try {
      const schoolClasses = await db.Turmas.findAll({ where: { data_inicio } });

      schoolClasses.length
        ? res.status(200).json(schoolClasses)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async insertSchoolClass(req, res) {
    const schoolClass = req.body;

    try {
      const newSchoolClass = await db.Turmas.create(schoolClass);

      res.status(201).json({
        message: "registro inserido com sucesso",
        novo_revistro: newSchoolClass,
      });
    } catch (error) {
      res.status(500).json({ message: error.error });
    }
  }

  static async updateSchoolClassById(req, res) {
    const { id } = req.params;
    const data = req.body;
    const whereId = { where: { id } };

    try {
      const updatedSchoolClass = await db.Turmas.update(data, whereId);

      if (updatedSchoolClass[0] === 1) {
        const findSchoolClass = await db.Turmas.findOne(whereId);

        res.status(200).json({
          message: "registro atualizado com sucesso",
          dados_atualizados: findSchoolClass,
        });
      } else {
        res.status(404).json({
          message:
            "nenhum registro foi atualizado, verifique os dados enviados",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteSchoolClassById(req, res) {
    const { id } = req.params;

    try {
      const findAndDelete = await db.Turmas.destroy({ where: { id } });

      findAndDelete
        ? res.status(200).json({ message: "registro deletado" })
        : res.status(404).json({ message: "nenhum registro encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = SchoolClassController;
