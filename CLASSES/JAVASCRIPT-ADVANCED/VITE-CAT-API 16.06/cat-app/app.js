import { fetchCatFactsButton } from "./modules/fetchCatFactsButton.js";

const exampleContainer = document.querySelector("#example-container");
exampleContainer.append(fetchCatFactsButton());
