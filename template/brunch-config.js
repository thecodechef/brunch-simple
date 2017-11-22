exports.paths = {
    
    watched: ['app']

};

exports.files = {
    
    javascripts: {
    
        joinTo: {
            'vendor.js': /^(?!app|test)/,
            'app.js': /^app/
        }
    
    },

    templates: {
    
        joinTo: 'app.js'
    
    },

    stylesheets: {
    
        joinTo: 'app.css'
    
    }
};

exports.plugins = {

    babel: {
        presets: ['env']
    },
    vue: {
        extractCSS: true,
        out: 'public/components.css'
    }

}