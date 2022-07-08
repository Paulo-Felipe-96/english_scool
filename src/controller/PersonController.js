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
    const personId = req.params.id;

    try {
      const person = await db.Pessoas.findOne({
        where: {
          id: personId,
        },
      });

      person
        ? res.status(200).json(person)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findPeopleByRoleName(req, res) {
    const role = req.params.role;

    try {
      const people = await db.Pessoas.findAll({
        where: {
          role: role,
        },
      });

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
    const personId = req.params.id;
    let updatedPerson;

    try {
      const findAndUpdate = await db.Pessoas.update(data, {
        where: {
          id: personId,
        },
      });

      if (findAndUpdate[0] === 1) {
        updatedPerson = await db.Pessoas.findOne({
          where: {
            id: personId,
          },
        });

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
    const personId = req.params.id;
    try {
      const findAndDelete = await db.Pessoas.destroy({
        where: {
          id: personId,
        },
      });

      findAndDelete
        ? res.status(200).json({ message: "registro deletado" })
        : res.status(404).json({ message: "nenhum registro encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PersonController;
