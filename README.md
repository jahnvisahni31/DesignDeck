
# DesignDeck:



![6dcd94c7c4bf4800648ef7cbe0113c33](https://github.com/user-attachments/assets/310410c6-b621-4720-8b3d-5d54af6d15b2)





DesignDeck is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With Designdeck, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.

<img width="700" alt="image" src="https://github.com/user-attachments/assets/e565ce14-9949-4d36-9855-d6f7b3105ded">

# Table of Contents:


<img width="622" alt="image" src="https://github.com/user-attachments/assets/5b950dc1-40ad-4f54-904c-55499202233b">

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Contribution](#contributing)

# Demo
You can see a live demo of the portfolio website at [https://design-deck.vercel.app/]

# Features

![image](https://github.com/user-attachments/assets/e7ba372a-ae78-4a7e-a531-be0e289d4178)


| Feature               | Description                                                                                               |
|----------------------|-----------------------------------------------------------------------------------------------------------|
| **Live Collaboration** | Multiple users can simultaneously work on the canvas with live updates of cursor positions and changes. |
| **Shape Manipulation** | Add, modify, and delete shapes. Customize properties like width, height, stroke color, and more.        |
| **Free Drawing**      | Utilize the pencil feature to free draw on the canvas.                                                  |
| **Text Addition**     | Add text to designs and adjust font size, weight, and style.                                            |
| **Copy and Paste**    | Easily duplicate elements on the canvas.                                                                 |
| **Comment Threads**   | Add comments to specific elements and reply to them.                                                    |
| **Real-Time Updates** | Instant updates for all users in real-time.                                                              |
| **Undo/Redo**        | Easily undo or redo actions using keyboard shortcuts (Ctrl+Z and Ctrl+Y).                               |
| **Chat Bubbles**     | Quick communication among team members through chat bubbles.                                              |
| **Reactions**        | Express reactions to designs using keyboard shortcuts.                                                   |
| **Export to PDF**    | Export selected elements on the canvas to PDF format.                                                   |


# Technologies Used:

![image](https://github.com/user-attachments/assets/117c3633-7d45-46a4-ad85-47732777acfb)


| Technology        | Description                                                        |
|-------------------|--------------------------------------------------------------------|
| **Next.js**       | Server-side rendering and routing.                                 |
| **TypeScript**    | Adds static types to JavaScript.                                  |
| **Tailwind CSS**  | Utility-first CSS framework for styling.                          |
| **LiveBlocks API**| Real-time collaboration API for syncing data across clients.      |
| **Fabric.js**     | HTML5 canvas library for manipulating graphics and interactive content. |
| **Shadcn**        | Component library for UI elements.        

# Environment Variables

The project relies on environment variables stored in a `.env.exapmle` file located at the root of the `Designdeck` directory to manage configurations. Ensure that essential variables such as database connection strings, API keys, or any other sensitive information are properly set up.

```bash
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY="<YOUR_LIVEBLOCKS_API_PUBLIC_KEY>"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="<YOUR_CLERK_PUBLISHABLE_KEY>"
CLERK_SECRET_KEY="<YOUR_CLERK_SECRET_KEY>"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```


**Note**: Note: Replace `YOUR LIVEBLOCKS API PUBLIC KEY`,  `<YOUR_CLERK_PUBLISHABLE_KEY>`, and `<YOUR_CLERK_SECRET_KEY>` with your actual key. Sensitive information should not be committed to version control; include the .env files in your project's `gitignore.`

### Getting started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/jahnvisahni31/Designdeck.git
```

2. Change to the project directory:

```bash
cd Designdeck
```

3. Install and run client dependencies:

```bash
npm install
npm run dev
```

Open your web browser and visit http://localhost:3000 to see the website in action during development.

## Running the Project Locally Using Docker

You can also run DesignDeck locally using Docker by following these steps:

1. Make sure you have Docker installed on your machine.

2. Go to the `docker-compose.yml` file in the root of your project and put your api key in this section:

```bash
  environment:
      NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY: your_api_key_goes_here
```

3. To start the application using Docker, run the following command in your terminal:

```bash
docker-compose up --build
```

This command builds the image and starts the container. You can then access the application at `http://localhost:3000`. 


# CONTRIBUTING 

We welcome contributions to DesignDeck! To contribute:

1. Fork the repository 🍴
2. Create a new branch (`git checkout -b feature/your-feature`) 🌱
3. Make your changes ✨
4. Commit and push your changes 🚀
5. Create a pull request 🔄

 # CONTRIBUTORS
![a29b365eb885f9b07c6fbc8b193d4a74](https://github.com/user-attachments/assets/bf620ecc-bd2c-48db-bf85-c7526449bed8)
> Contributions are welcome!

Specially thanks ❤️ for contributors bellow:

<a href="https://github.com/jahnvisahni31/github-readme-profile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jahnvisahni31/DesignDeck" />
</a>


 # Contact 📬

For any questions or support, please reach out to [Jahnvisahni98@gmail.com](mailto:jahnvisahni98@gmail.com).
