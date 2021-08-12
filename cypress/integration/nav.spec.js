describe( 'Nav menus', () => {
    // desktop
    context('720px res', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
        })

        describe( 'when you visit home', () => {
            it('Should navigate to home page', () => {
                cy.visit('/');
            })

            describe( 'nav', () => {
                it('Should navigate to About Page', () => {
                    cy.get('[data-cy=nav-item]').contains('About').click();
                    cy.url().should('include', '/about/');
                })
            })
        })
    })
    
    // mobile
    // context('720px res', () => {
    //     beforeEach(() => {
    //         cy.viewport(1280, 720)
    //     })

    //     describe( 'when you visit home', () => {
    //         it('Should navigate to home page', () => {
    //             cy.visit('/');
    //         })

    //         describe( 'nav', () => {
    //             it('Should navigate to About Page', () => {
    //                 cy.get('[data-cy=nav-item]').contains('About').click();
    //                 cy.url().should('include', '/about/');
    //             })
    //         })
    //     })
    // })
})