// todo: add transactions

const { Op } = require("sequelize");
const { SchoolClassServices } = require("../services");
const schoolClassServices = new SchoolClassServices();

class SchoolClassController {
  static async findAllSchoolClasses(req, res) {
    let schoolClasses, where;
    const hasRangeDate = Object.keys(req.query).length;
    const { data_inicio, data_fim } = req.query;

    if (data_inicio) {
      where = {
        where: { data_inicio: { [Op.gte]: data_inicio } },
      };
    }

    if (data_fim) {
      where = {
        where: { data_inicio: { [Op.lte]: data_fim } },
      };
    }

    if (data_inicio && data_fim) {
      where = {
        where: { data_inicio: { [Op.between]: [data_inicio, data_fim] } },
      };
    }

    try {
      hasRangeDate
        ? (schoolClasses = await schoolClassServices.getAllRecordsRangeDate(
            where
          ))
        : (schoolClasses = await schoolClassServices.getAllRecords());

      res.status(200).json(schoolClasses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findSchoolClassById(req, res) {
    const { id } = req.params;

    try {
      const schoolClass = await schoolClassServices.getOneRecord({ id });

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
      const schoolClasses = await schoolClassServices.getAllRecords({
        id_nivel,
      });

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
      const schoolClasses = await schoolClassServices.getAllRecords({
        id_docente,
      });

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
      const newSchoolClass = await schoolClassServices.createRecord(
        schoolClass
      );

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

    try {
      const updatedSchoolClass = await schoolClassServices.updateRecord(data, {
        id,
      });

      if (updatedSchoolClass[0] === 1) {
        const findSchoolClass = await schoolClassServices.getOneRecord({ id });

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
      const findAndDelete = await schoolClassServices.deleteRecord({ id });

      findAndDelete
        ? res.status(200).json({ message: "registro deletado" })
        : res.status(404).json({ message: "nenhum registro encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async restoreSchoolClass(req, res) {
    const { id } = req.params;

    try {
      const restoredSchoolClass = await schoolClassServices.restoreRecord({
        id,
      });

      res.status(200).json({
        message: "registro restaurado com sucesso",
        registros_atualizados: restoredSchoolClass,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = SchoolClassController;
