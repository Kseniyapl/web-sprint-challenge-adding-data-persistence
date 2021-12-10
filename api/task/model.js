const db = require('../../data/dbConfig')

const get = async () => {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select();
    const result = []
    rows.forEach(task => {
        if (task.task_completed) {
            result.push({
                ...task,
                task_completed: true
            })
        } else {
            result.push({
                ...task,
                task_completed: false
            })
        }
    })
    return result;
}
const getById = async id => {
    const result = await db('tasks').where('task_id', id).first();
    return {
        ...result, 
        task_completed: result.task_completed ? true : false
    }
}

const create = async(task) => {
    const [id] = await db('tasks').insert(task)
    return getById(id)
}
module.exports = {
    get,
    getById,
    create
}