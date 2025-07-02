import { v4 as uuidv4 } from 'uuid';


export const setupUUIDButton = (buttonElement) => {
    buttonElement.addEventListener('click', () => {
        alert(`Your new UUID: ${uuidv4()}`)
    })
};