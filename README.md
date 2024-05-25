This is a Next.js project, hosted on Vercel.

## Solution Overview

We build the entire website statically, pulling videos and comments from FastAPI.  

For dynamic parts of the site, like creating videos and comments, we use server actions for ajax endpoints to our forms.  To update the static site, we simply use `revalidatePath` to trigger an incremental rebuild of the appropriate pages after the data is mutated in those actions.

For displaying the videos, we get all the features we need from the HTML5 `<video>` tag. 

## Developer Setup and Testing

Run `yarn install` and then you can use the dev server via `yarn dev`.  If you run `yarn build` you can create a production build.

To deploy the app, just merge your code into `master`.  Ask Ben if you need access to Vercel.

The API is publicly accessible on [FastApi](https://take-home-assessment-423502.uc.r.appspot.com/docs).

You can run the Jest tests (found in `/__tests__/`) with `yarn test`.

## Screenshots

**Videos Listing Page**

![image](https://github.com/bsgreenb/scope-video-player/assets/980217/93de3aba-6add-48bf-9242-9b0575777fd2)

**Video Page**

![image](https://github.com/bsgreenb/scope-video-player/assets/980217/9bf6ecc1-b009-448a-88fe-9a75b2afc07b)

**Upload Video Form**

![image](https://github.com/bsgreenb/scope-video-player/assets/980217/5b25b961-690c-4bbe-a372-614e182b9579)



