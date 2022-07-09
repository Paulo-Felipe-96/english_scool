const db = require("../models");

class PersonController {
  static async findAllPeople(req, res) {
    try {
      const people = await db.Pessoas.findAll();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findPersonById(req, res) {
    const { id } = req.params;

    try {
      const person = await db.Pessoas.findOne({ where: { id } });

      person
        ? res.status(200).json(person)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findPeopleByRoleName(req, res) {
    const { role } = req.params;

    try {
      const people = await db.Pessoas.findAll({ where: { role } });

      people.length
        ? res.status(200).json(people)
        : res
            .status(404)
            .json({ message: `nenhum registro encontrado para "${role}"` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async insertPerson(req, res) {
    const data = req.body;

    try {
      const newPerson = await db.Pessoas.create(data);

      res.status(201).json({
        message: "registro inserido com sucesso",
        registro: newPerson,
      });
    } catch (error) {
      error.errors
        ? res.status(400).json({ message: error.errors })
        : res.status(500).json({ message: error });
    }
  }

  static async updatePersonById(req, res) {
    const data = req.body;
    const { id } = req.params;
    let updatedPerson;
    const whereId = { where: { id } };

    try {
      const findAndUpdate = await db.Pessoas.update(data, whereId);

      if (findAndUpdate[0] === 1) {
        updatedPerson = await db.Pessoas.findOne(whereId);

        res.status(200).json({
          message: "registro atualizado com sucesso",
          dados_atualizados: updatedPerson,
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

  static async deletePersonById(req, res) {
    const { id } = req.params;

    try {
      const findAndDelete = await db.Pessoas.destroy({ where: { id } });

      findAndDelete
        ? res.status(200).json({ message: "registro deletado" })
        : res.status(404).json({ message: "nenhum registro encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteManyById(req, res) {
    const { data } = req.body;
    const isArray = Array.isArray(data);

    try {
      if (isArray) {
        const deletePeople = await db.Pessoas.destroy({ where: { id: data } });

        deletePeople
          ? res.status(200).json({ message: "registros deletados" })
          : res.status(404).json({ message: "nenhum registro deletado" });
      } else {
        res.status(400).json({
          message: "verifique os dados enviados e tente novamente",
          causedBy: data,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PersonController;
