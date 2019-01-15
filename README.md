# Second Career Devs Website

This is the source code for the Second Career Devs website.

> Second Career Devs is a podcast that shares the stories of people who changed their lives by changing their careers to web development or software engineering. It's about the roads less traveled, and the lessons learned along the way.

## How to Contribute

1. Create a fork of the project by using the "Fork" button above
2. Clone the fork onto your machine: `git clone git://github.com/YOUR-GITHUB-USERNAME/website.git`
3. At this point, it's a good idea to setup the `upstream` master (this repo), so that you can pull updates from it down into your fork's master branch. To do this, do the following steps.
   1. `cd` into the directory: `cd into/cloned/fork`
   2. Add the upstream remote: `git remote add upstream git://github.com/SecondCareerDevs/website.git`
   3. Fetch upstream branches: `git fetch upstream`
   4. Now you can update from the upstream master branch with `git pull upstream master`. You can pull other branches by using the corresponding branch name instead of master.
4. Install the node modules with `npm install`
5. Once the modules have finished installing, you can start the dev server with `npm run start`.
6. When the server has started, you will see instructions in the terminal instructing you what URL (most likely `localhost:8000`) you can use to view the project as well as the Graphiql playground (`localhost:8000/___graphql`).
7. When you've made your changes, commit them to a feature branch to your fork and make a pull request on this repo.
8. After review, revisions and approval, 💥 you're done!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4333144?v=4" width="100px;" alt="Kyle Shevlin"/><br /><sub><b>Kyle Shevlin</b></sub>](https://kyleshevlin.com)<br />[💻](https://github.com/SecondCareerDevs/website/commits?author=kyleshevlin "Code") [🎨](#design-kyleshevlin "Design") [🤔](#ideas-kyleshevlin "Ideas, Planning, & Feedback") [📦](#platform-kyleshevlin "Packaging/porting to new platform") [💬](#question-kyleshevlin "Answering Questions") [👀](#review-kyleshevlin "Reviewed Pull Requests") [📢](#talk-kyleshevlin "Talks") | [<img src="https://avatars1.githubusercontent.com/u/27247160?v=4" width="100px;" alt="Jacob M-G Evans"/><br /><sub><b>Jacob M-G Evans</b></sub>](https://www.linkedin.com/in/jacob-m-g-evans/)<br />[💻](https://github.com/SecondCareerDevs/website/commits?author=JacobMGEvans "Code") [📖](https://github.com/SecondCareerDevs/website/commits?author=JacobMGEvans "Documentation") |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the MIT License
