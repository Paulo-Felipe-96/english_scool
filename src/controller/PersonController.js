// todo: add transactions

const { PersonServices, EnrollmentServices } = require("../services");
const personServices = new PersonServices();
const enrollmentServices = new EnrollmentServices();

class PersonController {
  // there is a default scope where ativo equals true
  static async findActivePeople(req, res) {
    try {
      const people = await personServices.getActivePeople();

      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // there is a specific scope where all records are returned
  static async findAllPeople(req, res) {
    try {
      const people = await personServices.getAllPeople();

      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findPersonById(req, res) {
    const { id } = req.params;

    try {
      const person = await personServices.getOneRecord({ id });

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
      const people = await personServices.getAllPeople({ role });

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
      const newPerson = await personServices.createRecord(data);

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
    let updatedPerson, findAndUpdate, hasUptade;

    try {
      findAndUpdate = await personServices.updatePerson(data, { id });
      hasUptade = findAndUpdate[0] === 1;

      if (hasUptade) {
        updatedPerson = await personServices.getOneRecord({ id });

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
      const findAndDelete = await personServices.deletePerson({ id });

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
        const deletedPeople = await personServices.deleteManyPeople(data);

        deletedPeople
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
      const restoredPerson = await personServices.restorePerson({ id });

      res.status(200).json({
        message: "registro restaurado com sucesso",
        registro_restaurado: restoredPerson,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findEnrollmentByStudantId(req, res) {
    const { id } = req.params;

    try {
      const person = await personServices.getStudantById({ id });

      if (person) {
        const enrollments = await person.getConfirmedEnrollments();

        enrollments.length
          ? res.status(200).json(enrollments)
          : res.status(404).json({
              message:
                "nenhuma matricula foi encontrada para o estudante informado",
              id_estudante: id,
            });
      } else {
        res.status(404).json({ message: "aluno não encontrado ou inativo" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findAllEnrollments(req, res) {
    try {
      const enrollments = await enrollmentServices.getAllRecords();

      res.status(200).json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findAndCountEnrollmentsBySchoolClassId(req, res) {
    const { id_turma } = req.params;

    try {
      const { count, rows } =
        await enrollmentServices.getAndCountEnrollentsBySchoolClassId({
          id_turma,
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
    try {
      const { rows, count } =
        await enrollmentServices.getCrowdedSchoolClasses();

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
      const enrollment = await enrollmentServices.getOneRecord({ id });

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
      const enrollment = await enrollmentServices.getAllRecords({ status });

      enrollment.length
        ? res.status(200).json(enrollment)
        : res.status(404).json({ message: "registro não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async insertEnrollment(req, res) {
    const data = req.body;

    try {
      const newEnrollment = await enrollmentServices.createRecord(data);

      res
        .status(201)
        .json({ message: "registro criado com sucesso", dados: newEnrollment });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async cancelEnrollmentsAndDeactivateStudantById(req, res) {
    const { id } = req.params;
    let hasUptade;

    try {
      const person = await personServices.deactivateStudantById({ id });
      hasUptade = person[0] === 1;

      if (hasUptade) {
        const enrollments =
          await enrollmentServices.cancelEnrollmentsAfterDeactivateStudant(id);

        res.status(200).json({
          message: "sucesso",
          id_estudante: id,
          registros_afetados: enrollments,
        });
      } else {
        res
          .status(404)
          .json({ message: "estudante não encontrado ou inativo" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateEnrollmentById(req, res) {
    const { id } = req.params;
    const data = req.body;
    let hasUptade;

    try {
      const updatedEnrollment = await enrollmentServices.updateRecord(data, {
        id,
      });
      hasUptade = updatedEnrollment[0] === 1;

      if (hasUptade) {
        const enrollment = await enrollmentServices.getOneRecord({ id });

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
      const findAndDelete = await enrollmentServices.deleteRecord({ id });

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
        const deleteEnrollments =
          await enrollmentServices.deleteManyRecordsById(data);

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
    let where;

    //funcao para tratar o dado, posso puxar de helpers

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

    if (id) {
      where = {
        where: { id },
      };
    }

    try {
      const restoredEnrollments =
        await enrollmentServices.restoreManyEnrollmentsById(where);

      res.status(200).json({
        message: "registro restaurado com sucesso",
        registros_atualizados: restoredEnrollments,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PersonController;
