import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

// TODO - Cannot figure out why I need both d.ts files. Also, don't feel like looking so it is what it is.
