![CF](https://i.imgur.com/7v5ASc8.png)  Class 11: Production & Deployment
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->
*The focus of this class is on with development and production environments. We'll look at Heroku, the deployment process, configuration of environment variables, and general issues that can arise during the deployment phase of a project. We'll also discuss development, production, and feature branches and how they are used in collaborative development.*

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->
- [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)
- [IaaS, PaaS, SaaS (Explained and Compared)](https://apprenda.com/library/paas/iaas-paas-saas-explained-compared/)

## Deployment Instructions / Checklist
- [ ] heroku create [name]
  - *Creates an app on heroku.com and a git remote*
  
- [ ] heroku git:remote -a [appname]
  - ** (for an existing app)

- [ ] git remote -v
- [ ] git push heroku master
- [ ] git push heroku [branch]:master (for a branch)
- [ ] heroku addons
- [ ] heroku addons:create heroku-postgresql:hobby-dev
- [ ] heroku pg:info
- [ ] heroku pg:push kilovolt [postgres-db-name] --app [appname]
- [ ] https://[appname].herokuapp.com
  - Should be a welcome page, with SWAPI data in the console
- [ ] https://[appname].herokuapp.com/proof-of-life
  - Should say Hello World
- [ ] https://[appname].herokuapp.com/articles
  - Should be a JSON array of your articles
- [ ] https://[appname].herokuapp.com/asdlfkjdfs
  - Should give you an error


## Learning Objectives
- Be able to push a dev site to production, so the world can see it.
- Understand the difference between a static page and a dynamically generated app page.

