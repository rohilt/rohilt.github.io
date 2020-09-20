var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',// <-- replace yourproject with your repo name
    // {
    //     branch: 'master',
    //     repo: 'https://www.github.com/rohilt/rohilt.github.io',
    //     user: {
    //         name: 'rohilt',
    //         email: 'rohil.tuli@gmail.com'
    //     }
    // },
    (err) => {
        console.log(err)
        console.log('Deploy Complete!')
    }
)
