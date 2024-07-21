/// <reference path='../cypress.d.ts' />
import './commands';
import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', mount);
