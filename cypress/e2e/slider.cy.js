describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});


describe('Swiper Gallery - Additional Tests', function () {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Navigates to each slide and checks content', () => {
    cy.visit('http://localhost:3000');
  
    
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  
    cy.wait(1500); 
    cy.get('.swiper-button-next').click();
    cy.wait(1500); 
    cy.get('.swiper-slide-active').should('contain', 'London');
  
 
    cy.get('.swiper-button-next').click();
    cy.wait(1500); 
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  
  
    cy.get('.swiper-button-prev').click();
    cy.wait(1500);
    cy.get('.swiper-slide-active').should('contain', 'London');
  });

  it('Displays title and description correctly for each slide', () => {
    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];

    slides.forEach(({ title, description }) => {
      cy.get('.swiper-slide-active').within(() => {
        cy.contains('h1', title).should('be.visible');
        cy.contains('p', description).should('be.visible');
      });
      cy.wait(2000);
      cy.get('.swiper-button-next').click();
    });
  });

  const viewports = [
    { device: 'macbook-15', name: 'desktop' },
    { device: 'ipad-2', name: 'tablet' },
    { device: 'iphone-6', name: 'mobile' }
  ];

  viewports.forEach(({ device, name }) => {
    it(`Properly displays gallery on ${name}`, () => {
      cy.viewport(device);
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-slide-active').should('exist');
    });
  });

  it('Initial gallery structure is visible', () => {
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.swiper-button-next').should('exist').and('be.visible');
    cy.get('.swiper-button-prev').should('exist').and('be.visible');
  });
});
