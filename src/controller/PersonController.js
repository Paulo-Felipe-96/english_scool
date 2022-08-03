const db = require("../models");
const { literal } = require("sequelize");

class PersonController {
  static async findActivePeople(req, res) {
    try {
      const people = await db.Pessoas.findAll();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findAllPeople(req, res) {
    try {
      const people = await db.Pessoas.scope("all").findAll();

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
      if (error.errors) {
        const { message, value } = error.errors[0];

        res.status(400).json({
          message: message,
          causedBy: value,
        });
      } else {
        res.status(500).json({ message: error });
      }
    }
  }

  static async updatePersonById(req, res) {
    const data = req.body;
    const { id } = req.params;
    let updatedPerson;
    const whereId = { where: { id } };

    try {
      const findAndUpdate = await db.Pessoas.scope("all").update(data, whereId);

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
      if (error.errors) {
        const { message, value } = error.errors[0];

        res.status(400).json({
          message: message,
          causedBy: value,
        });
      } else {
        res.status(500).json({ message: error });
      }
    }
  }

  static async deletePersonById(req, res) {
    const { id } = req.params;

    try {
      const findAndDelete = await db.Pessoas.scope("all").destroy({
        where: { id },
      });

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
        const deletePeople = await db.Pessoas.scope("all").destroy({
          where: { id: data },
        });

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

  static async restorePerson(req, res) {
    const { id } = req.params;

    try {
      const restoredPerson = await db.Pessoas.scope("all").restore({
        where: { id },
      });

      res.status(200).json({
        message: "registro restaurado com sucesso",
        registros_atualizados: restoredPerson,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findEnrollmentByStudantId(req, res) {
    const { id } = req.params;
    let enrollments, person;

    try {
      person = await db.Pessoas.scope("studantRole").findOne({ where: { id } });

      if (person) {
        enrollments = await person.getConfirmedEnrollments();

        if (enrollments.length) {
          res.status(200).json(enrollments);
        } else {
          res.status(404).json({
            message:
              "nenhuma matricula foi encontrada para o estudante informado",
            id_estudante: id,
          });
        }
      } else {
        res.status(404).json({ message: "aluno não encontrado ou inativo" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findAllEnrollments(req, res) {
    try {
      const enrollments = await db.Matriculas.findAll();

      res.status(200).json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findAndCountEnrollmentsBySchoolClassId(req, res) {
    const { id_turma } = req.params;

    try {
      const { count, rows } = await db.Matriculas.scope(
        "confirmedStatus"
      ).findAndCountAll({
        where: {
          id_turma,
        },
      });

      count
        ? res.status(200).json({
            id_turma: id_turma,
            quantidade_matriculas: count,
            registros: rows,
          })
        : res.status(404).json({
            message: "não há registros para o id de turma informado",
            id_turma: id_turma,
          });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findCrowdedSchoolClasses(req, res) {
    const crowded = 5;
    const agregation = {
      attributes: ["id_turma"],
      group: ["id_turma"],
      having: literal(`count(id_turma) >= ${crowded}`),
    };

    try {
      const { rows, count } = await db.Matriculas.scope(
        "confirmedStatus"
      ).findAndCountAll(agregation);

      if (rows.length && count.length) {
        res.status(200).json({ contagem: count, registros: rows });
      } else {
        res.status(404).json({ message: "não há turmas lotadas" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findEnrollmentById(req, res) {
    const { id } = req.params;

    try {
      const enrollment = await db.Matriculas.findOne({ where: { id } });

      enrollment
        ? res.status(200).json(enrollment)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findEnrollmentByStatus(req, res) {
    const { status } = req.query;

    try {
      const enrollment = await db.Matriculas.findAll({ where: { status } });

      enrollment.length
        ? res.status(200).json(enrollment)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findEnrollmentBySchoolClassId(req, res) {
    const { id } = req.params;

    try {
      const enrollment = await db.Matriculas.findOne({ where: { id } });

      enrollment
        ? res.status(200).json(enrollment)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async insertEnrollment(req, res) {
    const data = req.body;

    try {
      const newEnrollment = await db.Matriculas.create(data);

      res
        .status(201)
        .json({ message: "registro criado com sucesso", dados: newEnrollment });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateEnrollmentById(req, res) {
    const { id } = req.params;
    const data = req.body;
    const whereId = { where: { id } };

    try {
      const updatedEnrollment = await db.Matriculas.update(data, whereId);

      if (updatedEnrollment[0] === 1) {
        const enrollment = await db.Matriculas.findOne(whereId);

        res.status(200).json({
          message: "registro atualizado com sucesso",
          dados: enrollment,
        });
      } else {
        res.status(404).json({
          message: "nenhum registro atualizado, verifique os dados enviados",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteEnrollmentById(req, res) {
    const { id } = req.params;

    try {
      const findAndDelete = await db.Matriculas.destroy({ where: { id } });

      findAndDelete
        ? res.status(200).json({ message: "registro deletado" })
        : res.status(404).json({ message: "nenhum registro encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteManyEnrollmentsById(req, res) {
    const { data } = req.body;
    const isArray = Array.isArray(data);

    try {
      if (isArray) {
        const deleteEnrollments = await db.Matriculas.destroy({
          where: { id: data },
        });

        deleteEnrollments
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

  static async restoreEnrollmentsById(req, res) {
    const { id } = req.query;
    const { data } = req.body;
    let restoredEnrollment, where;

    if (id && data) {
      where = {
        where: { id },
      };
    }

    if (data) {
      where = {
        where: { id: data },
      };
    }

    try {
      restoredEnrollment = await db.Matriculas.restore(where);

      res.status(200).json({
        message: "registro restaurado com sucesso",
        registros_atualizados: restoredEnrollment,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PersonController;
