# Kyle's Portfolio Website

This is my super simple portfolio site.

My primary goals with this project were to:

- Have a lightweight, responsive portfolio site
- Be able to add blog posts without messing with code

Rollup and Svelte made it easy to accomplish this, since we can run whatever code we want in Node.js as a preprocessing step, which lets me pull all the files out of the posts folder and generate the post listing using its contents. This setup relies on me adding some metadata (a title and date) in comments as the top of each post, but I'm alright with this being a little brittle since I'm the only one who'll ever need to use it.

Firebase also has a [really slick setup](https://firebase.google.com/docs/hosting/github-integration) where I can build my site and deploy it automatically whenever I push to this repo. That means to add a post to the blog, all I need to do is add it to the posts folder and push it here.

Between Svelte's small bundle size and minimal design, my entire site including images and fonts weighs in at less than 100kb. Mission accomplished!

This uses my Svelte project starter template Go Bag, which [you can find here if you're interested](https://github.com/kowsen/go-bag).
