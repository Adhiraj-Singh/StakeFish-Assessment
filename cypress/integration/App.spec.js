describe("UI checks", () =>  {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')

    })

    it('CTA visibility check', () => {
        
        cy.get('h2').should('have.css', 'opacity', '0')
    })

    it('Container behaviour check', ()=> {
        cy.get('.container').should('have.css', 'display', 'flex')
        cy.get('.container').should('have.css', 'justify-content', 'center')
        cy.get('.container').should('have.css', 'flex-wrap', 'wrap')
    
    })

    it('Glass properties checks', ()=>{
        cy.get('.card').should('have.css', 'width', '300px')
        cy.get('.card').should('have.css', 'height', '300px')
        cy.get('.card').should('have.css', 'align-content', 'center')

    })

    it('Image animation check', ()=> {
        cy.get('#card1').trigger('mouseenter')
        cy.wait(2000)
        cy.get('#mylogo1').should('have.css', 'box-shadow',  'rgb(65, 74, 76) 0px 8px 2px 4px')
        cy.wait(2000)
        cy.get('h2').should('have.css', 'opacity', '0.5')
        
        
    })


})