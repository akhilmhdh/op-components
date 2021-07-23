# opc-nav Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A web component based on Lit Element for Red hat One Platform Navigation Bar.

## Prerequisites

Red Hat official font must be imported.

```css
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");
```

## Usage

```html
<opc-nav>
  <img slot="opc-nav-logo" />
</opc-nav>
```

Nav with links

```html
<opc-nav>
  <img slot="opc-nav-logo" />
</opc-nav>
```

```js
const links = [
  { name: "Blog", href: "#" },
  { name: "Documentation", href: "#" },
];
document.querySelector("opc-nav").links = links;
```

## Slots

<!-- Add Slots here -->

There are total 4 slots of which 3 are optional and one is mandatory

### Mandatory Slots

- `opc-nav-logo`: To set the logo of the application in navbar. Suggested component would be an `<img/>`

### Optional Slots

- `opc-nav-menu-links`: Container component that contains various nav links. If not given and `links` attribute will be shown.

- `opc-nav-search`: Container component that contains the search component.

- `opc-nav-btn`: The buttons at end of the navbar used for various actions. If not provided by default `Notification Bell Button` and `Menu Button` will be shown with corresponding events.

## Attributes

- `links`
  - Type: `Array`
  - Default value: [ ]

```js
document.querySelector("opc-nav").links = [{ name: "Blog", href: "#" }];
```

- `isSearchHidden`
  - Type: `Boolean`
  - Default value: `false`

```html
<opc-nav isSearchHidden>
  <img slot="opc-nav-logo" src="./logo.svg" height="28px" alt="logo" />
</opc-nav>
```

## Events

There are two events emitted by opc-nav both are dispatched on click of navbar notification(bell icon) and menu(grid icon) button.

1. `opc-nav-btn-menu:click`

Dispatched on menu(grid icon) button click.

Example:

```js
document
  .querySelector("opc-nav")
  .addEventListener("opc-nav-btn-menu:click", function (event) {
    alert("menu got clicked");
  });
```

2. `opc-nav-btn-notification:click`

Dispatched on notification(bell icon) button click.

Example:

```js
document
  .querySelector("opc-nav")
  .addEventListener("opc-nav-btn-notification:click", function (event) {
    alert("notification got clicked");
  });
```

## Install

```sh
npm install
```

## Usage

### Install opc-nav

```sh
npm install --save @one-platform/opc-nav
```

### For VanillaJS

- Import component

```js
import "@one-platform/opc-nav/dist/opc-nav";
```

- Add component in html

```html
<opc-nav> </opc-nav>
```

### For Angular

- In your app.module include the `CUSTOM_ELEMENTS_SCHEMA` and import the component

```js
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import "@one-platform/opc-nav/dist/opc-nav";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- Add component in any component html template

```html
<opc-nav> </opc-nav>
```

### For React

- Import the component in App.js

```js
import "@one-platform/opc-nav/dist/opc-nav";
```

- Add component in any component html render

```html
<opc-nav> </opc-nav>
```

### Development server

- Run development server

```sh
npm run dev opc-nav
```

### Build

```sh
npm run build opc-nav
```

## Run tests

```sh
npm run test
```

## 🤝 Contributors

👤 **[akhilmhdh](https://github.com/akhilmhdh)**
