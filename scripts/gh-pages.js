var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/rohilt.github.io',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rohilt/rohilt.github.io.git',
        user: {
            name: 'Rohil Tuli',
            email: 'rohil.tuli@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
