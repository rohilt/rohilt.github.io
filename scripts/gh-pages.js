var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',// <-- replace yourproject with your repo name
    {
        branch: 'master',
        repo: 'rohilt.github.io',
        user: {
            name: 'Rohil Tuli',
            email: 'rohil.tuli@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
