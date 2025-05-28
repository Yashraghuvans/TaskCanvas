# Task Canvas - Streamlined Task Management

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)](https://semver.org)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/Yashraghuvans/TaskCanvas.svg?style=flat-square)](https://github.com/Yashraghuvans/TaskCanvas/commits/main)
[![Issues Open](https://img.shields.io/github/issues/Yashraghuvans/TaskCanvas.svg?style=flat-square)](https://github.com/Yashraghuvans/TaskCanvas/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Yashraghuvans/TaskCanvas/pulls)

<p align="center">
  <img src="https://github.com/Yashraghuvans/TaskCanvas/blob/main/public/cover.png" alt="Task Canvas Logo" width="400">
</p>

[**Task Canvas** ](https://task-canvas-one.vercel.app) is a modern and intuitive task management dashboard designed to streamline your workflow, effectively manage team responsibilities, and help you stay focused on your personalized tasks. Whether you're an individual looking to boost productivity or a team collaborating on complex projects, Task Canvas provides the tools you need to succeed.

---

## Features

* **Intuitive Dashboard:** A clean and organized interface provides a clear overview of your tasks, projects, and team activities.
* **Task Management:** Easily create, assign, track, and prioritize tasks with deadlines and detailed descriptions.
* **Team Collaboration:** Facilitate seamless communication and coordination within teams, ensuring everyone is aligned and working efficiently.
* **Project Organization:** Group tasks into projects for better management and a holistic view of progress.
* **Progress Tracking:** Monitor the status of tasks and projects with visual indicators and progress bars.
* **User Roles:** Dedicated dashboards for administrators and employees, providing role-specific functionalities and views.
* **Demo Login:** Convenient demo login credentials to quickly explore the application's features.
* **Responsive Design:** Access Task Canvas from any device, ensuring a consistent experience across desktops, tablets, and mobile phones.
* **Modern UI:** Built with a contemporary design and user experience in mind.

---

## Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Hooks](https://img.shields.io/badge/React_Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Local Storage](https://img.shields.io/badge/Local_Storage-F5E050?style=for-the-badge&logo=javascript&logoColor=black)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (version >= 18 recommended)
* npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Yashraghuvans/TaskCanvas.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd TaskCanvas
    ```
3.  Install dependencies using npm:
    ```sh
    npm install
    ```
    or using yarn:
    ```sh
    yarn install
    ```

### Running the Application

1.  Start the development server using npm:
    ```sh
    npm run dev
    ```
    or using yarn:
    ```sh
    yarn dev
    ```
2.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view Task Canvas.

### Demo Login

You can explore the application using the following demo credentials:

* **Admin Access:**
    * **Email:** `admin@me.com`
    * **Password:** `123`
* **Employee Access:**
    * **Email:** `employee@me.com`
    * **Password:** `123`

**⚠️ Note:** These are for demonstration purposes only and do not represent secure credentials for a production environment.

---

## Visual Studio Code 

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceRoot}/src",
    "sourceMapPathOverrides": {
      "webpack:///src/*": "${webRoot}/*"
    }
  }]
}
```
>Note: the URL may be different if you've made adjustments via the [HOST or PORT environment variables](#advanced-configuration).

Start your app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

Having problems with VS Code Debugging? Please see their [troubleshooting guide](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).


## Supported Browsers

By default, the generated project usee the latest version of React.

You can refer [to the React documentation](https://react.dev/learn) for more information about supported browsers.
