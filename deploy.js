var ghpages = require('gh-pages')

ghpages.publish('dist/project', {
  branch: 'master',
  repo: 'https://github.com/at-ngocnguyen/Deploy-Project.git'
}, function (e) {
  console.log('Deploy Success')
  console.log(e);
})
