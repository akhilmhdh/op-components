# opc-nav Component 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/1-Platform/op-components/graphs/commit-activity)

A web component based on Lit Element for Red Hat One Platform Navbar

## Prerequisites

<!-- Add if any -->

## Usage

<!-- Add usage here -->

```html
<opc-nav></opc-nav>
```

## Slots

<!-- Add Slots here -->

## Attributes

<!-- Add attributes here -->

## Themes

<!-- Change colors here -->

| color   | hex                                                                     |
| ------- | ----------------------------------------------------------------------- |
| default | <span class="readme-color-preview" style="--bg:#ffffff"></span> #ffffff |

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

👤 **akhilmhdh**
