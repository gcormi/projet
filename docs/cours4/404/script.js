// Exercices interactifs
const exercises = [
    {
        id: 'exercise1',
        title: 'Exercice 1 : Identifier les Composants',
        type: 'drag-drop',
        question: 'Glissez chaque composant vers la bonne catégorie :',
        items: [
            { id: 'capteur-temp', text: 'Capteur de température', category: 'capteurs' },
            { id: 'moteur', text: 'Moteur électrique', category: 'actionneurs' },
            { id: 'arduino', text: 'Arduino', category: 'interfaces' },
            { id: 'led', text: 'LED', category: 'actionneurs' },
            { id: 'capteur-lum', text: 'Capteur de luminosité', category: 'capteurs' },
            { id: 'raspberry', text: 'Raspberry Pi', category: 'interfaces' }
        ],
        categories: [
            { id: 'capteurs', name: 'Capteurs' },
            { id: 'actionneurs', name: 'Actionneurs' },
            { id: 'interfaces', name: 'Interfaces Programmables' }
        ]
    },
    {
        id: 'exercise2',
        title: 'Exercice 2 : Chaînes d\'Information et d\'Énergie',
        type: 'multiple-choice',
        question: 'Dans un système d\'arrosage automatique, quel élément appartient à la chaîne d\'information ?',
        options: [
            { id: 'a', text: 'La pompe à eau', correct: false },
            { id: 'b', text: 'Le capteur d\'humidité du sol', correct: true },
            { id: 'c', text: 'Les tuyaux d\'arrosage', correct: false },
            { id: 'd', text: 'La batterie d\'alimentation', correct: false }
        ],
        explanation: 'Le capteur d\'humidité appartient à la chaîne d\'information car il ACQUIERT des données sur l\'environnement. La pompe, les tuyaux et la batterie font partie de la chaîne d\'énergie.'
    },
    {
        id: 'exercise3',
        title: 'Exercice 3 : Séquence de Fonctionnement',
        type: 'sequence',
        question: 'Remettez dans l\'ordre les étapes de fonctionnement d\'une lampe automatique :',
        steps: [
            { id: 'step1', text: 'Le capteur de luminosité mesure l\'éclairage ambiant', order: 1 },
            { id: 'step2', text: 'Le microcontrôleur compare la valeur au seuil programmé', order: 2 },
            { id: 'step3', text: 'Le microcontrôleur décide d\'allumer la lampe', order: 3 },
            { id: 'step4', text: 'Un signal électrique est envoyé aux LED', order: 4 },
            { id: 'step5', text: 'Les LED s\'allument et éclairent', order: 5 }
        ]
    }
];

// Initialisation des exercices
function initializeExercises() {
    exercises.forEach(exercise => {
        const container = document.getElementById(exercise.id);
        if (container) {
            container.innerHTML = createExerciseHTML(exercise);
            setupExerciseInteractions(exercise);
        }
    });
}

// Création du HTML pour chaque exercice
function createExerciseHTML(exercise) {
    let html = `
        <div class="exercise-card">
            <h3>${exercise.title}</h3>
            <p>${exercise.question}</p>
            <div class="exercise-content">
    `;

    switch (exercise.type) {
        case 'drag-drop':
            html += createDragDropHTML(exercise);
            break;
        case 'multiple-choice':
            html += createMultipleChoiceHTML(exercise);
            break;
        case 'sequence':
            html += createSequenceHTML(exercise);
            break;
    }

    html += `
            </div>
            <div class="exercise-feedback" id="${exercise.id}-feedback"></div>
            <button class="check-answer-btn" onclick="checkAnswer('${exercise.id}')">Vérifier</button>
        </div>
    `;

    return html;
}

// HTML pour exercice glisser-déposer
function createDragDropHTML(exercise) {
    let html = '<div class="drag-drop-container">';
    
    // Zone des éléments à glisser
    html += '<div class="draggable-items">';
    exercise.items.forEach(item => {
        html += `<div class="draggable-item" draggable="true" data-id="${item.id}" data-category="${item.category}">${item.text}</div>`;
    });
    html += '</div>';
    
    // Zones de dépôt
    html += '<div class="drop-zones">';
    exercise.categories.forEach(category => {
        html += `<div class="drop-zone" data-category="${category.id}">
                    <h4>${category.name}</h4>
                    <div class="drop-area" data-category="${category.id}"></div>
                 </div>`;
    });
    html += '</div>';
    
    html += '</div>';
    return html;
}

// HTML pour QCM
function createMultipleChoiceHTML(exercise) {
    let html = '<div class="multiple-choice-container">';
    exercise.options.forEach(option => {
        html += `
            <label class="option-label">
                <input type="radio" name="${exercise.id}" value="${option.id}" data-correct="${option.correct}">
                <span>${option.text}</span>
            </label>
        `;
    });
    html += '</div>';
    return html;
}

// HTML pour séquence
function createSequenceHTML(exercise) {
    let html = '<div class="sequence-container">';
    
    // Mélanger les étapes
    const shuffledSteps = [...exercise.steps].sort(() => Math.random() - 0.5);
    
    shuffledSteps.forEach((step, index) => {
        html += `
            <div class="sequence-item" data-id="${step.id}" data-order="${step.order}">
                <span class="sequence-number">${index + 1}</span>
                <span class="sequence-text">${step.text}</span>
                <div class="sequence-controls">
                    <button onclick="moveStep('${step.id}', 'up')">↑</button>
                    <button onclick="moveStep('${step.id}', 'down')">↓</button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Configuration des interactions
function setupExerciseInteractions(exercise) {
    if (exercise.type === 'drag-drop') {
        setupDragAndDrop(exercise.id);
    }
}

// Configuration du glisser-déposer
function setupDragAndDrop(exerciseId) {
    const container = document.getElementById(exerciseId);
    const draggableItems = container.querySelectorAll('.draggable-item');
    const dropAreas = container.querySelectorAll('.drop-area');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.id);
            e.dataTransfer.setData('category', e.target.dataset.category);
        });
    });

    dropAreas.forEach(area => {
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            const itemId = e.dataTransfer.getData('text/plain');
            const draggedElement = container.querySelector(`[data-id="${itemId}"]`);
            
            if (draggedElement) {
                e.target.appendChild(draggedElement);
            }
        });
    });
}

// Déplacement des étapes dans l'exercice de séquence
function moveStep(stepId, direction) {
    const container = document.querySelector(`[data-id="${stepId}"]`).parentElement;
    const step = container.querySelector(`[data-id="${stepId}"]`);
    
    if (direction === 'up' && step.previousElementSibling) {
        container.insertBefore(step, step.previousElementSibling);
    } else if (direction === 'down' && step.nextElementSibling) {
        container.insertBefore(step.nextElementSibling, step);
    }
    
    updateSequenceNumbers(container);
}

// Mise à jour des numéros de séquence
function updateSequenceNumbers(container) {
    const items = container.querySelectorAll('.sequence-item');
    items.forEach((item, index) => {
        item.querySelector('.sequence-number').textContent = index + 1;
    });
}

// Vérification des réponses
function checkAnswer(exerciseId) {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const feedback = document.getElementById(`${exerciseId}-feedback`);
    
    let isCorrect = false;
    let message = '';

    switch (exercise.type) {
        case 'drag-drop':
            isCorrect = checkDragDropAnswer(exerciseId, exercise);
            message = isCorrect ? 
                '🎉 Excellent ! Tous les composants sont dans la bonne catégorie.' :
                '❌ Certains composants ne sont pas dans la bonne catégorie. Réessayez !';
            break;
            
        case 'multiple-choice':
            isCorrect = checkMultipleChoiceAnswer(exerciseId, exercise);
            message = isCorrect ? 
                '🎉 Bonne réponse ! ' + exercise.explanation :
                '❌ Ce n\'est pas la bonne réponse. ' + exercise.explanation;
            break;
            
        case 'sequence':
            isCorrect = checkSequenceAnswer(exerciseId, exercise);
            message = isCorrect ? 
                '🎉 Parfait ! La séquence est dans le bon ordre.' :
                '❌ L\'ordre n\'est pas correct. Réfléchissez à la logique du système !';
            break;
    }

    feedback.innerHTML = `<div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">${message}</div>`;
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Vérification glisser-déposer
function checkDragDropAnswer(exerciseId, exercise) {
    const container = document.getElementById(exerciseId);
    let correct = 0;
    
    exercise.categories.forEach(category => {
        const dropArea = container.querySelector(`[data-category="${category.id}"] .drop-area`);
        const items = dropArea.querySelectorAll('.draggable-item');
        
        items.forEach(item => {
            if (item.dataset.category === category.id) {
                correct++;
            }
        });
    });
    
    return correct === exercise.items.length;
}

// Vérification QCM
function checkMultipleChoiceAnswer(exerciseId, exercise) {
    const container = document.getElementById(exerciseId);
    const selectedOption = container.querySelector('input[type="radio"]:checked');
    
    return selectedOption && selectedOption.dataset.correct === 'true';
}

// Vérification séquence
function checkSequenceAnswer(exerciseId, exercise) {
    const container = document.getElementById(exerciseId);
    const items = container.querySelectorAll('.sequence-item');
    
    for (let i = 0; i < items.length; i++) {
        const expectedOrder = parseInt(items[i].dataset.order);
        if (expectedOrder !== i + 1) {
            return false;
        }
    }
    
    return true;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeExercises();
    
    // Navigation fluide
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe 'fade-in'
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // Bouton retour en haut
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
});

