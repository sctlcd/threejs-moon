# [threejs-moon](https://threejs-moon.web.app/)

<br />
<img src="https://github.com/sctlcd/threejs-moon/blob/main/design/threejs-moon-mockup-presentation.png" alt="threejs-moon" width="800">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Deployment](#deployment)
	- [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
	- [Deployment – Live website](#deploymentLiveWebsite)

4. [Credits](#credits)
	- [Media](#media)
---

## Introduction <a name="introduction"></a>

Creating an animated 3D galaxy with Three.js

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>
### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:  
    - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
    - Please see `.nvmrc` file at the root of `threejs-moon` repo.
    - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
2. In GitHub click on the repository nammed [threejs-moon](https://github.com/sctlcd/threejs-moon)
3. Clone the repository locally. Run

    ````
      git clone https://github.com/sctlcd/threejs-moon.git
    ````

4. Install all modules listed as dependencies in package.json

    ```
      cd threejs-moon
      npm i 
    ```

    note: in this app 
    - [three](https://www.npmjs.com/package/three) - **a JavaScript 3D library**, 
    - [vite](https://vitejs.dev/) - **a built in development server**,

5. Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

[threejs-moon](https://github.com/sctlcd/threejs-moon) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

    ```
      npm install -g firebase-tools
    ```

2. Create firebase.json and .firebaserc at the root of your project with the following content:

    `firebase.json`:

    ```
      {
        "hosting": {
          "public": "dist",
          "ignore": [],
          "rewrites": [
            {
              "source": "**",
              "destination": "/index.html"
            }
          ]
        }
      }
    ```

    `.firebaserc`:

    ```
      {
        "projects": {
          "default": "<YOUR_FIREBASE_ID>"
        }
      }
    ```

3. After running `npm run build`, deploy using the command `firebase deploy`.


=> live link: https://threejs-moon.web.app/

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

### Media <a name="media"></a>

- [favicon.ico](https://www.flaticon.com/free-icon/planet_3336074?term=planet&related_id=3336074) - [Flaticon](https://www.flaticon.com/) | copyright [Freepik](https://www.freepik.com)

- [pexels-nicole-avagliano-2312040-min.jpg](https://www.pexels.com/photo/milky-way-photography-2312040/) - [Pexels](https://www.pexels.com) | copyright [Nicole Avagliano](https://www.pexels.com/@nicole-avagliano-1132392/)

- [7XyId7s-min.jpeg](https://imgur.com/gallery/7XyId7s) - [Imgur](https://i.imgur.com/7XyId7s.jpeg) | copyright [rudneicunha](https://imgur.com/user/rudneicunha)

- [172_norm-min.JPG](https://opengameart.org/content/50-free-textures-4-normalmaps) - [Open Game Art](https://opengameart.org/) | copyright [rubberduck](https://opengameart.org/users/rubberduck)

- [151_norm-min.JPG](https://opengameart.org/content/50-free-textures-4-normalmaps) - [Open Game Art](https://opengameart.org/) | copyright [rubberduck](https://opengameart.org/users/rubberduck)

- [161_norm-min.JPG](https://opengameart.org/content/50-free-textures-4-normalmaps) - [Open Game Art](https://opengameart.org/) | copyright [rubberduck](https://opengameart.org/users/rubberduck)

- [197_norm-min.JPG](https://opengameart.org/content/50-free-textures-4-normalmaps) - [Open Game Art](https://opengameart.org/) | copyright [rubberduck](https://opengameart.org/users/rubberduck)

- [172_norm-min.JPG](https://opengameart.org/content/50-free-textures-4-normalmaps) - [Open Game Art](https://opengameart.org/) | copyright [rubberduck](https://opengameart.org/users/rubberduck)

- [pexels-bella-chew-1368317-min.jpg](https://www.pexels.com/photo/rock-formation-1368317/) - [Pexels](https://www.pexels.com) | copyright [Bella Chew](https://www.pexels.com/@bella-chew-590708/)

- [pexels-karolina-grabowska-4040567-min.jpg](https://www.pexels.com/photo/set-of-shiny-transparent-amethysts-grown-together-4040567/) - [Pexels](https://www.pexels.com) | copyright [Karolina Grabowska](https://www.pexels.com/@karolina-grabowska/)

- [pexels-lucas-pezeta-3772378-min.jpg](https://www.pexels.com/photo/photo-of-stars-and-galaxy-3772378/) - [Pexels](https://www.pexels.com) | copyright [Lucas Pezeta](https://www.pexels.com/@lucaspezeta/)

- [pexels-maksim-romashkin-7108217-min.jpg](https://www.pexels.com/photo/abstract-background-of-frozen-river-with-rough-surface-7108217/) - [Pexels](https://www.pexels.com) | copyright [Maksim Romashkin](https://www.pexels.com/@maksim-romashkin/)

- [seamless-g8ce10d423_1920-min.jpg](https://pixabay.com/illustrations/seamless-repeat-repetitive-2033682/) - [Pixabay](https://pixabay.com/) | copyright [Prawny](https://pixabay.com/users/prawny-162579/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2033682)

- [pexels-cottonbro-9665188-min.jpg](https://www.pexels.com/photo/white-dust-particles-on-black-background-9665188/) - [Pixabay](https://pixabay.com/) | copyright [cottonbro](https://www.pexels.com/@cottonbro/)

Back to [top](#tableOfContents)

---