This is a Next.js project, hosted on Vercel.

## Solution Overview

We build the entire website statically, pulling videos and comments from FastAPI.  For the dynamic parts of the site, like creating videos and comments, we simply use `revalidatePath` to trigger an incremental rebuild of the appropriate pages after the data is mutated.

For displaying the videos, we get all the features we need from the HTML5 `<video>` tag. 

## Developer Setup

Run `yarn install` and then you can use the dev server via `yarn dev`.  If you run `yarn build` you can create a production build.

To deploy the app, just merge your code into `master`.  Ask Ben if you need access to Vercel.

The API is publicly accessible on [FastApi](https://take-home-assessment-423502.uc.r.appspot.com/docs).



