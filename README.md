This is a simple showcase app that I am working on in my free time.

![alt text](https://decision-making-app.s3.amazonaws.com/d-m-app-1.png)

## The Idea
In summary, this is a brainstorming app that allows you to **clearly see how to solve your problem or issue** by decomposing it into solutions (options) and analyzing these options using arguments. 🤓

## How it works?!

Have a problem that needs to be solved, but it's not that easy?

#### 1. Try to define the problem (Issue)

In the next window, you can add more detailed description of this problem if it is more complicated.

> Problem or issue is not as well solved as we would like, mainly because it takes several "layers" to solve. This is how our brain works...

#### 2. Add options one by one using the "Add Option" form

So, the next step is to brainstorm and create a list of potential solutions (options) **without considering whether they are suitable or not**. The important thing to focus on at this stage is simply generating ideas, rather than evaluating their feasibility.

#### 3. Add reasons

And **only now (!)**, go through each option one by one and consider the **pros** and **cons** or **neutral** points (reasons) with respect to the main problem.

The program will now analyze the data and provide a percentage breakdown of which solution is the best choice and which ones are not as effective.

I hope this helps you. 😃

*I don't want to present myself as an expert in this solution, but I have personally found that periodically considering it and using this method often helps me to focus and make the most logical decision.*

## Implementation Strategy and Motivation

The primary focus of this project is to apply **clean architecture** principles in order to _separate the business logic from the infrastructure_.

Implementing clean architecture can make it easier to **maintain and test** the code, and also make the system more **flexible** and **adaptable to change**.

For example, if we need to modify the UI, we can do so _without affecting the business logic_. Similarly, if we need to switch to a different DB provider, we can do so without having to modify the core business logic of the system.

## My Stack

In this project, I am using a variety of tools and technologies to build a modern, scalable, and maintainable web application. These include **ReactJS** for building UI, **Redux** for managing application state, and **Redux-Sagas** for managing side effects and asynchronous logic.

I am also making use of custom **Material-UI** (MUI) components to enhance the look and feel of my app, as well as reusable **functional components** to promote code reuse and maintainability.

To optimize and bundle my code for deployment, I am employing **Parcel**. In addition, I have developed a **custom library** that uses browser local storage to imitate a database and simulate asynchronous behavior.

To ensure that my codebase is scalable and maintainable, I am following a **clean architecture** approach.

## License

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/pwr3/decision-making-app/blob/main/LICENSE)