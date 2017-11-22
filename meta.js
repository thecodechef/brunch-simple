module.exports = {
    prompts: {
        name: {
            type: 'string',
            label: 'Project Name: ',
            required: true
        },
        description: {
            type: 'string',
            label: 'Project Description: ',
            required: true,
            default: 'A Vue.js Project.'
        },
        version: {
            type: 'string',
            label: 'Project Version: ',
            default: '0.0.1'
        },
        author: {
            type: 'string',
            label: 'Project Author: '
        },
        user: {
            type: 'string',
            default: 'thecodechef'
        },
        license: {
            type: 'string',
            label: 'License: ',
            default: 'MIT'
        }
    }
}