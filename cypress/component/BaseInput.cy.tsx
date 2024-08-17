import * as React from 'react';
import BaseInput from '../../src/components/BaseInput';

describe('BaseInput', () => {
    it('should display the outlined variant', () => {
        cy.mount(
            <BaseInput
                variant='outlined'
                disabled={false}
                color='primary'
                label='Outlined Input'
                id='Outlined-Id'
                name='outlined'
                size='small'
                type='text'
                error={false}
                onBlur={() => console.log('blurred')}
                onChange={e => console.log(e)}
                value='1'
            />
        );

        cy.get('#Outlined-Id').should('not.be.disabled');
    });

    it('should display the standard variant', () => {
        cy.mount(
            <BaseInput
                variant='standard'
                disabled={false}
                color='primary'
                label='Outlined Input'
                id='Outlined-Id'
                name='standard'
                size='small'
                type='text'
                error={false}
                onBlur={() => console.log('blurred')}
                onChange={e => console.log(e)}
                value='4'
            />
        );

        cy.get('input').should('be.visible');
    });

    it('should display the filled variant', () => {
        const hasError = false;

        cy.mount(
            <BaseInput
                variant='filled'
                disabled={false}
                color='primary'
                label='Filled Input'
                id='Outlined-Id'
                name='standard'
                size='small'
                type='text'
                error={true}
                onBlur={() => console.log('blurred')}
                onChange={e => console.log(e.target.value)}
                helperText={hasError ? 'Error Text' : ' '}
                inputProps={{ 'data-test': 'testing here' }}
                value='3'
            />
        );

        cy.get('input').should('be.visible');
        cy.get('[data-test="testing here"]').should('have.value', '3');
    });
});
