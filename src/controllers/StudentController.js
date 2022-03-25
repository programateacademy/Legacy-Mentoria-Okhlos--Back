import StudentModel from "../models/StudentModel.js";

export const getStudent = async (req, res) => {
    try {
        const students = await StudentModel.findAll()
        res.json(students)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getOneStudent = async (req, res) => {
    try {
        const student = await StudentModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(student[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const createStudent = async (req, res) => {
    try {
        await StudentModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
         res.json( {message: error.message} )
     }
}

export const updateStudent = async (req, res) => {
    try {
        await StudentModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await StudentModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}