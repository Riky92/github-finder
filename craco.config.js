module.exports = {
    style: {
        postcss: {
            postOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
            } 
        },
    },
}