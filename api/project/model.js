const db = require('../../data/dbConfig');

const get = async () => {
    const projects = await db('projects');
    const result = []
    projects.forEach(project => {
        if (project.project_completed) {
            result.push({
                ...project,
                project_completed: true
            })
        } else {
            result.push({
                ...project,
                project_completed: false
            })
        }
    })
    return result;
}
const getById = async id => {
    const result = await db('projects').where('project_id', id).first();
    return {
        ...result, 
        project_completed: result.project_completed ? true : false
    }
}
const create = async(project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
}
module.exports = {
    get,
    getById,
    create
}