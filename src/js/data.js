import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLightbulb,
  faPaintBrush,
  faBullhorn,
  faLaptopCode,
  faDolly,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export const social = [
  {
    link: "https://www.facebook.com/",
    icon: faFacebookF,
  },
  {
    link: "https://twitter.com/",
    icon: faTwitter,
  },
  {
    link: "https://www.instagram.com/",
    icon: faInstagram,
  },
  {
    link: "https://www.linkedin.com/",
    icon: faLinkedinIn,
  },
  {
    link: "https://dribbble.com/",
    icon: faDribbble,
  },
];

export const counters = [
  {
    number: 127,
    title: "Awards Received",
  },
  {
    number: 1505,
    title: "Cups of Coffee",
  },
  {
    number: 109,
    title: "Projects Completed",
  },
  {
    number: 102,
    title: "Happy Clients",
  },
];

export const services = [
  {
    title: "Brand Identity",
    txt:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: faLightbulb,
  },
  {
    title: "Illustration",
    txt:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: faPaintBrush,
  },
  {
    title: "Marketing",
    txt:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: faBullhorn,
  },
  {
    title: "Web Design",
    txt:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: faLaptopCode,
  },
  {
    title: "Packaging Design",
    txt:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: faDolly,
  },
  {
    title: "Web Development",
    txt:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
    icon: faLayerGroup,
  },
];

export const gallery = [
  {
    img: require("./../imgs/photographer.webp").default,
    title: "Shutterbug",
    job: "Branding",
  },
  {
    img: require("./../imgs/chair.webp").default,
    title: "Woodcraft",
    job: "Web Design",
  },
  {
    img: require("./../imgs/car.webp").default,
    title: "THE BEETLE",
    job: "Web Development",
  },
  {
    img: require("./../imgs/grass.webp").default,
    title: "Grow Green",
    job: "Branding",
  },
  {
    img: require("./../imgs/singer.webp").default,
    title: "Guitarist",
    job: "Web Design",
  },
  {
    img: require("./../imgs/plant.webp").default,
    title: "Palmeira",
    job: "Web Design",
  },
];
