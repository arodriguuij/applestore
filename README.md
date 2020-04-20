[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/arodriguuij/applestore">
    <img src="public/logo512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Apple store</h3>

  <p align="center">
    React web app with adaptive design for mobile
    <br />
    <a href="https://github.com/arodriguuij/applestore"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://apple-store-online.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/arodriguuij/applestore/issues">Report Bug</a>
    ·
    <a href="https://github.com/arodriguuij/applestore/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Deployment](#deployment)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

[![Apple Store Desktop Screen Shot][product-desktop-screenshot]](https://user-images.githubusercontent.com/22448366/79738565-cf505180-82f4-11ea-9227-475bab2b76fc.jpg)

This device store shows how React components and Redux can be used to build a friendly user experience with instant visual updates and scaleable code in ecommerce applications.

#### Features 
- Incremet, decrement add or remove devices of your bag.
- Filter devices by own catgories and subcategories of each collection.
- Devices persist in the bag after page reloads.
- Login with Google account
- Buy devices and have access to your purchase history
- Resposive design

What would happen if react belonged to apple... _See it!_

### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-hooks](https://reactjs.org/docs/hooks-intro.html)
* [ES9](https://www.ecma-international.org/ecma-262/9.0/index.html)


<!-- GETTING STARTED -->
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
To get a local copy up and running follow these simple steps.

### Prerequisites
In your terminal after you clone your project down, run either yarn or npm install to build all the dependencies in the project.
This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/arodriguuij/applestore.git
```
2. Install NPM packages
```sh
npm install
```

### Deployment
Runs the app in the development mode.<br />
```sh
npm start
```

<!-- USAGE EXAMPLES -->
## Usage
Let us make a demostration how to make a purchase. For this occasion, we will use a mobile.

_Clicks are defined by a green container arround the element which is clicked._

```
[Step 1] Find the device and add it to the bag.
```
[![Apple Store Mobile Step1 Screen Shot][product-mobile-step1]](https://user-images.githubusercontent.com/22448366/79743340-56ed8e80-82fc-11ea-9e71-f215fd35d0f7.jpg)

* In the home page (1), click the hamburger menu to open the mobile menu.

* Once the menu is displayed (2), find the category od the device you are looking for. In this case, it is "Mac".

* Filter the collection to find the device faster (3). After the device is found, click the "buy" button.

* In the review page (4), add as much devices as you need and click the "checkout" button to start the purchasing process.

```
[Step 2] Sign in with your google account and pass through the purchasing process to buy your device.
```
[![Apple Store Mobile Step2 Screen Shot][product-mobile-step2]](https://user-images.githubusercontent.com/22448366/79743789-1e9a8000-82fd-11ea-8589-48f7e97ccb48.jpg)

* If you are not aready logged (5) sign in with google clicking the hamburger menu and "Sign in with Google" button (6) to enable the "continue" button to click it. Otherwhise, just click the "continue" button.

* Fill up the form with the details of your residence (7) and click the "buy" item to finish purchase process.

* You will be redirect to your orders (8) where you can see all them.


_Errors and timeout are handled by error pages and spinners as it can be seen in the images bellow._

[![Apple Store Mobile Error Handler Screen Shot][product-mobile-error-handler
]](https://user-images.githubusercontent.com/22448366/79748351-3249e480-8305-11ea-903b-133e5bdee43a.jpg)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/arodriguuij/applestore/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Alejandro Rodríguez Escudero - arodriguuij@gmail.com

Project Link: [https://github.com/arodriguuij/applestore](https://github.com/arodriguuij/applestore)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-saga](https://redux-saga.js.org/)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Redux-reselect](https://github.com/reduxjs/reselect)
* [React-hooks](https://reactjs.org/docs/hooks-intro.html)
* [Jest](https://jestjs.io/)
* [Enzyme](https://enzymejs.github.io/enzyme/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/arodriguuij/applestore
[contributors-url]: https://github.com/arodriguuij/applestore/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/arodriguuij/applestore
[forks-url]: https://github.com/arodriguuij/applestore/network/members
[stars-shield]: https://img.shields.io/github/stars/arodriguuij/applestore
[stars-url]: https://github.com/arodriguuij/applestore/stargazers
[issues-shield]: https://img.shields.io/github/issues/arodriguuij/applestore
[issues-url]: https://github.com/arodriguuij/applestore/issues
[license-shield]: https://img.shields.io/github/license/arodriguuij/applestore
[license-url]: https://github.com/arodriguuij/applestore/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alejandro-rodriguez-escudero-260362144/
[product-desktop-screenshot]: https://user-images.githubusercontent.com/22448366/79738565-cf505180-82f4-11ea-9227-475bab2b76fc.jpg
[product-mobile-step1]: https://user-images.githubusercontent.com/22448366/79743340-56ed8e80-82fc-11ea-9e71-f215fd35d0f7.jpg
[product-mobile-step2]: https://user-images.githubusercontent.com/22448366/79743789-1e9a8000-82fd-11ea-8589-48f7e97ccb48.jpg
[product-mobile-error-handler]: https://user-images.githubusercontent.com/22448366/79748351-3249e480-8305-11ea-903b-133e5bdee43a.jpg
