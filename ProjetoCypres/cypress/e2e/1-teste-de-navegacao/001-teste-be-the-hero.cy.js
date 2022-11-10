/// <reference types="Cypress" />

describe('CRIAR CONTA', () => {
    it('CRIAR CONTA', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.back-link').click();
        cy.get('[placeholder="Nome da ONG"]').type("Filipe");
        cy.get('[type="email"]').type("filipe@filipe.com");
        cy.get('[placeholder="Whatsapp"]').type("11940282351");
        cy.get('[placeholder="Cidade"]').type("Cajamar");
        cy.get('[placeholder="UF"]').type("SP");
        cy.get('.button').click();
        cy.get('.ajs-modal').screenshot();
    });
});


describe('LOGAR COM A CONTA CRIADA', () => {
    it('LOGAR COM A CONTA CRIADA', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input').type("06ed752e");
        cy.get('.button').click();
    });
});

describe('CADASTRAR NOVO CASO', () => {
    it('CADASTRAR NOVO CASO', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input').type("06ed752e");
        cy.get('.button').click();
        cy.get('.button').click();
        cy.get('[placeholder="Titulo do caso"]').type("caso de teste");
        cy.get('textarea').type("caso de teste");
        cy.get('[placeholder="Valor em reais"]').type("10,00");
        cy.get('.button').click();
        cy.get(' li button svg[fill="none"]').click();
    });
});