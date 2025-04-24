// Flag to track if initialization succeeds
window.appInitialized = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - Starting application initialization");
    
    try {
        // Verify cards data is available
        if (typeof stateCards === 'undefined' || !Array.isArray(stateCards)) {
            throw new Error("State cards data not found or not an array. Make sure cards-data.js is loaded correctly.");
        }
        
        // Verify other card arrays
        const cardTypes = {
            'relation': relationCards,
            'mind': mindCards,
            'system': systemCards,
            'tradition': traditionCards
        };
        
        for (const [type, cards] of Object.entries(cardTypes)) {
            if (typeof cards === 'undefined' || !Array.isArray(cards)) {
                console.warn(`${type} cards data not found or not an array. These cards may not display properly.`);
            }
        }
        
        // Selectors with error checking
        const cardContainer = document.querySelector('.card-container');
        if (!cardContainer) throw new Error("Card container element not found");
        
        const categoryButtons = document.querySelectorAll('.category-btn');
        if (categoryButtons.length === 0) throw new Error("Category buttons not found");
        
        const languageButtons = document.querySelectorAll('.language-toggle button');
        if (languageButtons.length === 0) throw new Error("Language buttons not found");
        
        const randomButton = document.querySelector('.random-btn');
        if (!randomButton) throw new Error("Random button not found");
        
        const prevButton = document.querySelector('.nav-button.prev');
        if (!prevButton) throw new Error("Previous button not found");
        
        const nextButton = document.querySelector('.nav-button.next');
        if (!nextButton) throw new Error("Next button not found");
        
        console.log("All UI elements successfully found");
        
        // State
        let currentCategory = 'state';
        let currentLanguage = 'simple';
        let currentCardIndex = 0;
        let currentCards = stateCards;
        let isDragging = false;
        let startX = 0;
        let currentX = 0;
        
        // Enhanced card display function
        function updateCardDisplay() {
            console.log("Updating card display...");
            console.log(`Category: ${currentCategory}, Language: ${currentLanguage}, Card Index: ${currentCardIndex}`);
            
            // Remove existing cards for a clean start
            const existingCards = cardContainer.querySelectorAll('.card');
            existingCards.forEach(card => card.remove());
            
            // Make sure instructions stay
            const instructions = cardContainer.querySelector('.instructions');
            if (instructions) {
                // Make sure instructions don't interfere with cards
                instructions.style.zIndex = "1";
            }
            
            // Check if we have cards for this category
            if (!currentCards || currentCards.length === 0) {
                console.warn(`No cards available for category: ${currentCategory}`);
                const placeholderCard = document.createElement('div');
                placeholderCard.className = `card ${currentCategory} card-active`;
                placeholderCard.innerHTML = `
                    <div class="card-header">Brak kart</div>
                    <div class="card-content">
                        <div class="card-description">
                            Karty dla tej kategorii nie zostały jeszcze dodane.
                        </div>
                    </div>
                `;
                cardContainer.appendChild(placeholderCard);
                return;
            }
            
            // Ensure currentCardIndex is valid
            if (currentCardIndex >= currentCards.length) {
                currentCardIndex = 0;
            }
            
            // Create new card
            const card = document.createElement('div');
            card.className = `card ${currentCategory} card-active`;
            
            // Get current card data
            const cardData = currentCards[currentCardIndex];
            
            // Get appropriate text based on selected language
            const description = currentLanguage === 'simple' ? 
                cardData.simpleDescription : 
                cardData.advancedDescription;
                
            const exercise = currentLanguage === 'simple' ? 
                cardData.simpleExercise : 
                cardData.advancedExercise;
            
            // Generate card HTML
            card.innerHTML = `
                <div class="card-header">${cardData.title}</div>
                <div class="card-content">
                    <div class="card-description">
                        ${description}
                    </div>
                    <div class="card-exercise">
                        <h3>Ćwiczenie:</h3>
                        <p>${exercise}</p>
                    </div>
                </div>
            `;
            
            // Add card to container
            cardContainer.appendChild(card);
            console.log("Card successfully added to container");
        }
        
        // Improved navigation function
        function navigateCards(direction) {
            console.log(`Navigating ${direction}`);
            
            if (!currentCards || currentCards.length <= 1) {
                console.log("Not enough cards to navigate");
                return;
            }
            
            const currentCard = cardContainer.querySelector('.card');
            if (currentCard) {
                // Add exit animation class
                currentCard.classList.remove('card-active');
                currentCard.classList.add(direction === 'next' ? 'card-exit' : 'card-exit-right');
                
                // Update index
                if (direction === 'next') {
                    currentCardIndex = (currentCardIndex + 1) % currentCards.length;
                } else {
                    currentCardIndex = (currentCardIndex - 1 + currentCards.length) % currentCards.length;
                }
                
                // After animation completes, update display
                setTimeout(updateCardDisplay, 300);
            } else {
                console.warn("No card found to navigate from");
                // If no card exists, just update the display with the new index
                if (direction === 'next') {
                    currentCardIndex = (currentCardIndex + 1) % currentCards.length;
                } else {
                    currentCardIndex = (currentCardIndex - 1 + currentCards.length) % currentCards.length;
                }
                updateCardDisplay();
            }
        }
        
        // Touch and drag handlers
        function startDrag(e) {
            if (!currentCards || currentCards.length <= 1) return;
            
            isDragging = true;
            startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
            currentX = startX;
            
            const card = cardContainer.querySelector('.card');
            if (card) {
                card.style.transition = 'none';
            }
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            const diffX = x - startX;
            currentX = x;
            
            const card = cardContainer.querySelector('.card');
            if (card) {
                card.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.05}deg)`;
                
                // Adjust opacity based on swipe distance
                const opacity = 1 - Math.min(Math.abs(diffX) / 500, 0.5);
                card.style.opacity = opacity;
            }
        }
        
        function endDrag(e) {
            if (!isDragging) return;
            
            isDragging = false;
            const diffX = currentX - startX;
            const card = cardContainer.querySelector('.card');
            
            if (card) {
                card.style.transition = 'transform var(--transition-time), opacity var(--transition-time)';
                
                // Determine if swipe was strong enough to change card
                if (Math.abs(diffX) > 100) {
                    if (diffX > 0) {
                        // Swiped right
                        card.style.transform = `translateX(100vw) rotate(30deg)`;
                        card.style.opacity = '0';
                        setTimeout(() => {
                            navigateCards('prev');
                        }, 300);
                    } else {
                        // Swiped left
                        card.style.transform = `translateX(-100vw) rotate(-30deg)`;
                        card.style.opacity = '0';
                        setTimeout(() => {
                            navigateCards('next');
                        }, 300);
                    }
                } else {
                    // Reset position
                    card.style.transform = 'translateX(0) rotate(0)';
                    card.style.opacity = '1';
                }
            }
        }
        
        // Initialize the app
        function init() {
            // Set up event listeners for category buttons
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    currentCategory = this.dataset.category;
                    
                    // Change current cards based on selected category
                    switch(currentCategory) {
                        case 'state':
                            currentCards = stateCards;
                            break;
                        case 'relation':
                            currentCards = relationCards;
                            break;
                        case 'mind':
                            currentCards = mindCards;
                            break;
                        case 'system':
                            currentCards = systemCards;
                            break;
                        case 'tradition':
                            currentCards = traditionCards;
                            break;
                    }
                    
                    // Reset to first card and update display
                    currentCardIndex = 0;
                    updateCardDisplay();
                });
            });
            
            // Set up event listeners for language buttons
            languageButtons.forEach(button => {
                button.addEventListener('click', function() {
                    languageButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    currentLanguage = this.dataset.language;
                    updateCardDisplay();
                });
            });
            
            // Set up event listener for random button
            randomButton.addEventListener('click', function() {
                if (currentCards && currentCards.length > 0) {
                    let randomIndex;
                    do {
                        randomIndex = Math.floor(Math.random() * currentCards.length);
                    } while (randomIndex === currentCardIndex && currentCards.length > 1);
                    
                    currentCardIndex = randomIndex;
                    updateCardDisplay();
                }
            });
            
            // Set up event listeners for navigation buttons
            prevButton.addEventListener('click', function() {
                navigateCards('prev');
            });
            
            nextButton.addEventListener('click', function() {
                navigateCards('next');
            });
            
            // Touch and mouse events for card swiping
            cardContainer.addEventListener('mousedown', startDrag);
            cardContainer.addEventListener('touchstart', startDrag, { passive: true });
            
            cardContainer.addEventListener('mousemove', drag);
            cardContainer.addEventListener('touchmove', drag, { passive: true });
            
            cardContainer.addEventListener('mouseup', endDrag);
            cardContainer.addEventListener('touchend', endDrag);
            cardContainer.addEventListener('mouseleave', endDrag);
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    navigateCards('prev');
                } else if (e.key === 'ArrowRight') {
                    navigateCards('next');
                } else if (e.key === ' ' || e.key === 'Spacebar') {
                    randomButton.click();
                }
            });
            
            // Make navigation buttons more visible with CSS
            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    .navigation {
                        display: flex;
                        justify-content: space-between;
                        padding: 20px;
                        border-top: 1px solid #eee;
                        position: relative;
                        z-index: 100;
                    }
                    
                    .nav-button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: #333;
                        color: white;
                        font-size: 24px;
                        cursor: pointer;
                        transition: background-color var(--transition-time);
                        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    }
                    
                    .nav-button:hover {
                        background-color: #555;
                    }
                    
                    .card-container .instructions {
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: rgba(0, 0, 0, 0.7);
                        color: white;
                        padding: 10px 20px;
                        border-radius: 20px;
                        font-size: 14px;
                        z-index: 10;
                    }
                </style>
            `);
            
            // Initial display
            updateCardDisplay();
            console.log("Application initialized successfully");
        }
        
        // Call init to start the app
        init();
        
        // Mark initialization as successful
        window.appInitialized = true;
        
    } catch (error) {
        console.error("Error during application initialization:", error);
        // Display error in the UI
        const cardContainer = document.querySelector('.card-container');
        if (cardContainer) {
            cardContainer.innerHTML = `
                <div class="card state card-active">
                    <div class="card-header">Błąd inicjalizacji</div>
                    <div class="card-content">
                        <div class="card-description">
                            Wystąpił problem podczas inicjalizacji aplikacji: ${error.message}
                        </div>
                    </div>
                </div>
            `;
        }
    }
});
