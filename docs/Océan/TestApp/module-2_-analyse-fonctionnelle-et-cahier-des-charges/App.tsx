
import React from 'react';
import { Introduction } from './components/Introduction';
import { Section, SectionData } from './components/Section';
import { Conclusion } from './components/Conclusion';
// FIX: Removed GlossaryTerm from this import, will be imported from ./types
import { Glossary } from './components/Glossary';
// FIX: Removed QuizQuestion from this import, will be imported from ./types
import { Quiz } from './components/Quiz';
import { LightBulbIcon, BookOpenIcon, QuestionMarkCircleIcon, AcademicCapIcon } from './components/icons/Icons';
// FIX: Added import for GlossaryTerm and QuizQuestion from ./types
import { GlossaryTerm, QuizQuestion } from './types';

const App: React.FC = () => {
  const sectionsData: SectionData[] = [
    {
      id: 'section1',
      title: "Comprendre le besoin : À quoi sert cet objet ? La \"Bête à cornes\"",
      icon: <QuestionMarkCircleIcon className="w-8 h-8 text-custom-blue" />,
      content: [
        { type: 'paragraph', text: "Avant de créer quoi que ce soit, un inventeur ou un ingénieur se pose une question essentielle : à quel besoin cet objet va-t-il répondre ? Pour y voir clair, on utilise un outil super pratique qui s'appelle la 'bête à cornes'." },
        { type: 'paragraph', text: "Imagine une drôle de bête avec trois questions sur ses cornes :" },
        { type: 'list', items: [
            "<strong>À qui</strong> l'objet rend-il service ? (C'est l'utilisateur)",
            "<strong>Sur quoi</strong> l'objet agit-il ? (C'est la matière d'œuvre)",
            "<strong>Dans quel but</strong> l'objet existe-t-il ? (C'est la fonction globale ou fonction d'usage)"
        ]},
        { type: 'image', src: 'https://picsum.photos/seed/bicorn/600/300', alt: 'Schéma de la bête à cornes' },
      ],
      examples: [
        {
          title: 'Exemple: Le Smartphone',
          description: "Un smartphone moderne est un concentré de technologie ! Appliquons la bête à cornes :",
          items: [
            "<strong>À qui :</strong> L'utilisateur (toi, tes parents, tes amis...).",
            "<strong>Sur quoi :</strong> Les informations, les contacts, le divertissement, la communication.",
            "<strong>Dans quel but :</strong> Permettre à l'utilisateur de communiquer, s'informer, se divertir et gérer des tâches en mobilité."
          ],
          image: 'https://picsum.photos/seed/smartphone/300/200'
        },
        {
          title: 'Exemple: Le Vélo',
          description: "Même un objet simple comme un vélo a sa raison d'être :",
          items: [
            "<strong>À qui :</strong> Le cycliste.",
            "<strong>Sur quoi :</strong> Le cycliste lui-même (pour le transporter) et le sol (sur lequel il roule).",
            "<strong>Dans quel but :</strong> Permettre au cycliste de se déplacer d'un point A à un point B en utilisant sa force musculaire (ou une assistance électrique pour les VAE)."
          ],
          image: 'https://picsum.photos/seed/velo/300/200'
        }
      ],
      focusPoint: {
        title: "Point Focus : La matière d'œuvre, c'est quoi ?",
        content: "La matière d'œuvre, c'est ce sur quoi l'objet agit pour remplir sa fonction. Pour un stylo, c'est le papier et l'encre. Pour un mixeur, ce sont les aliments ! Pour une trottinette, c'est l'utilisateur (qu'elle transporte) et le sol (sur lequel elle roule)."
      }
    },
    {
      id: 'section2',
      title: "De la mission principale aux petites tâches : Le diagramme Pieuvre",
      icon: <AcademicCapIcon className="w-8 h-8 text-custom-green" />,
      content: [
        { type: 'paragraph', text: "Une fois le besoin principal identifié avec la bête à cornes (c'est la fonction globale), on va détailler un peu plus. Un objet ne fait pas qu'une seule chose ! Il doit aussi respecter certaines règles. Pour visualiser tout ça, on utilise le diagramme 'pieuvre'." },
        { type: 'paragraph', text: "Imagine ton objet au centre d'une toile d'araignée. Chaque fil le relie à un élément de son environnement (l'utilisateur, l'air, le sol, d'autres objets...). Ces fils représentent :" },
        { type: 'list', items: [
            "<strong>Les Fonctions Principales (FP) :</strong> Ce sont les actions principales que l'objet doit faire pour l'utilisateur. Par exemple, pour un smartphone, FP1: Permettre de téléphoner.",
            "<strong>Les Fonctions Contraintes (FC) :</strong> Ce sont les exigences que l'objet doit respecter. Par exemple, FC1: Doit résister aux petites chutes, FC2: Doit avoir une bonne autonomie de batterie."
        ]},
        { type: 'image', src: 'https://picsum.photos/seed/pieuvre/600/350', alt: 'Schéma simplifié d\'un diagramme pieuvre' },
      ],
      examples: [
        {
          title: 'Exemple: La Trottinette Électrique',
          description: "Ta trottinette électrique a plusieurs missions :",
          items: [
            "<strong>Produit :</strong> Trottinette électrique",
            "<strong>FP1 :</strong> Permettre à l'utilisateur de se déplacer (relation utilisateur ↔ sol).",
            "<strong>FP2 :</strong> Permettre à l'utilisateur de la diriger (relation utilisateur ↔ trottinette).",
            "<strong>FC1 :</strong> Être stable pour la sécurité (relation utilisateur ↔ sol).",
            "<strong>FC2 :</strong> Résister à une petite pluie (relation trottinette ↔ environnement).",
            "<strong>FC3 :</strong> Avoir une autonomie de X km (relation utilisateur ↔ batterie)."
          ],
          image: 'https://picsum.photos/seed/trottinette/300/200'
        },
        {
          title: 'Exemple: Une Maison',
          description: "Une maison, c'est complexe, mais simplifions :",
          items: [
            "<strong>Produit :</strong> Maison",
            "<strong>FP1 :</strong> Permettre aux habitants de s'abriter des intempéries (relation habitants ↔ environnement extérieur).",
            "<strong>FP2 :</strong> Permettre aux habitants de dormir confortablement (relation habitants ↔ lits/chambres).",
            "<strong>FC1 :</strong> Être solide et ne pas s'effondrer (relation structure ↔ sol/forces).",
            "<strong>FC2 :</strong> Respecter les règles d'urbanisme (relation maison ↔ réglementation)."
          ],
          image: 'https://picsum.photos/seed/maison/300/200'
        }
      ],
      focusPoint: {
        title: "Le Savais-tu ? Les contraintes sont partout !",
        content: "Même pour un simple crayon, il y a des contraintes ! Il ne doit pas être trop cher (contrainte de coût), doit bien tenir en main (contrainte d'ergonomie), ne pas se casser facilement (contrainte de solidité), et la mine doit écrire correctement (contrainte de performance) !"
      }
    },
    {
        id: 'section3',
        title: "Comment ça marche à l'intérieur ? Fonctions et Solutions Techniques",
        icon: <LightBulbIcon className="w-8 h-8 text-custom-orange" />,
        content: [
            { type: 'paragraph', text: "Maintenant qu'on sait ce que l'objet doit faire pour l'utilisateur (fonctions de service FP et FC), on va regarder sous le capot ! Comment l'objet fait-il pour y arriver ? On parle alors de fonctions techniques et de solutions techniques." },
            { type: 'list', items: [
                "<strong>Fonction Technique (FT) :</strong> C'est une action interne à l'objet, réalisée par un ou plusieurs de ses composants, qui permet de réaliser une fonction de service. C'est le 'quoi faire' à l'intérieur. Souvent, l'utilisateur ne la voit pas directement. Exemple: pour qu'une voiture freine, une fonction technique est de 'transmettre la force du pied du conducteur aux roues'.",
                "<strong>Solution Technique (ST) :</strong> C'est le moyen concret, le composant ou l'ensemble de composants choisis par les ingénieurs pour réaliser une fonction technique. C'est le 'comment faire'. Exemple: pour 'transmettre la force', la solution technique peut être un système de câbles, ou un système hydraulique (avec des liquides)."
            ]},
            { type: 'image', src: 'https://picsum.photos/seed/ftst/600/300', alt: 'Illustration lien entre Fonction de Service, Fonction Technique et Solution Technique' },
        ],
        examples: [
            {
                title: 'Exemple: Freiner une Voiture',
                description: "Regardons le système de freinage d'une voiture :",
                items: [
                    "<strong>FP (Fonction Principale) :</strong> Permettre au conducteur de ralentir ou arrêter la voiture.",
                    "<strong>FT1 :</strong> Amplifier l'effort du conducteur sur la pédale.",
                    "<strong>ST1 :</strong> Mastervac (assistance au freinage).",
                    "<strong>FT2 :</strong> Transmettre l'effort de freinage aux roues.",
                    "<strong>ST2 :</strong> Circuit hydraulique (tuyaux, liquide de frein).",
                    "<strong>FT3 :</strong> Créer une friction pour ralentir la rotation des roues.",
                    "<strong>ST3 :</strong> Disques et plaquettes de frein (ou tambours et garnitures)."
                ],
                image: 'https://picsum.photos/seed/voiturefrein/300/200'
            },
            {
                title: 'Exemple: Afficher une image sur un Smartphone',
                description: "Comment ton smartphone affiche tes photos ?",
                items: [
                    "<strong>FP :</strong> Permettre à l'utilisateur de voir des informations visuelles.",
                    "<strong>FT1 :</strong> Convertir les données numériques de l'image en signaux électriques pour l'écran.",
                    "<strong>ST1 :</strong> Processeur graphique, puces de contrôle de l'écran.",
                    "<strong>FT2 :</strong> Émettre de la lumière colorée et organisée en pixels.",
                    "<strong>ST2 :</strong> Écran (technologie LCD, OLED, etc.).",
                    "<strong>FT3 :</strong> Protéger l'écran des rayures et des chocs légers.",
                    "<strong>ST3 :</strong> Verre renforcé (type Gorilla Glass ou similaire)."
                ],
                image: 'https://picsum.photos/seed/smartphonedisplay/300/200'
            }
        ],
        focusPoint: {
            title: "Point Focus : Une fonction, plusieurs solutions !",
            content: "Pour une même fonction technique, il existe souvent plusieurs solutions techniques possibles ! Par exemple, pour la fonction technique 'assembler deux pièces d'un meuble', on peut utiliser des vis et des écrous (solution A), de la colle (solution B), ou des chevilles en bois (solution C). Le choix dépendra du coût, de la solidité voulue, si on veut pouvoir démonter facilement, etc."
        }
    },
    {
        id: 'section4',
        title: "Le Grand Livre des Règles : Le Cahier des Charges Fonctionnel (CdCF)",
        icon: <BookOpenIcon className="w-8 h-8 text-indigo-600" />,
        content: [
            { type: 'paragraph', text: "Imagine que tu commandes un gâteau super spécial pour ton anniversaire. Tu vas expliquer au pâtissier exactement ce que tu veux : le goût, la forme, la décoration... Le Cahier des Charges Fonctionnel (CdCF), c'est un peu pareil, mais pour les objets techniques !" },
            { type: 'paragraph', text: "Le CdCF est un document très important qui rassemble toutes les fonctions (Fonctions Principales et Fonctions Contraintes) que le produit doit remplir. Pour chaque fonction, on précise :" },
            { type: 'list', items: [
                "<strong>Le critère d'appréciation :</strong> C'est ce qu'on va mesurer ou observer pour savoir si la fonction est bien remplie (ex: pour la fonction 'être léger', le critère est le 'poids').",
                "<strong>Le niveau :</strong> C'est la performance qu'on attend pour ce critère (ex: poids < 1 kg). Ce niveau peut être une valeur chiffrée, une description, ou une référence à une norme.",
                "<strong>La flexibilité :</strong> Est-ce que ce niveau est absolument obligatoire, ou peut-on être un peu souple ? (ex: Impératif, Négociable, Souhaitable)."
            ]},
            { type: 'paragraph', text: "Le CdCF, c'est comme un contrat entre celui qui demande l'objet (le client) et celui qui va le fabriquer (le concepteur). Il permet de s'assurer que tout le monde est d'accord avant de commencer le travail, et d'éviter les mauvaises surprises !" },
            { type: 'image', src: 'https://picsum.photos/seed/cdcf/600/300', alt: 'Exemple simplifié d\'un Cahier des Charges Fonctionnel' },
        ],
        examples: [
            {
                title: 'Extrait d\'un CdCF pour une Nouvelle Trottinette Électrique pour Ados',
                description: "",
                items: [
                    "<strong>FP1 : Transporter une personne en toute sécurité.</strong><br/> - Critère : Poids maximal de l'utilisateur. Niveau : 90 kg. Flexibilité : Impératif.<br/> - Critère : Vitesse maximale. Niveau : 25 km/h (selon réglementation). Flexibilité : Impératif.",
                    "<strong>FP2 : Avoir une autonomie suffisante.</strong><br/> - Critère : Distance parcourable sur une charge. Niveau : Au moins 20 km. Flexibilité : Négociable (minimum 18 km).",
                    "<strong>FC1 : Être facilement transportable (pliée).</strong><br/> - Critère : Poids total de la trottinette. Niveau : Moins de 12 kg. Flexibilité : Souhaitable.<br/> - Critère : Dimensions une fois pliée. Niveau : Tient dans un coffre de petite voiture. Flexibilité : Important.",
                    "<strong>FC2 : Coûter moins de X euros.</strong><br/> - Critère : Prix de vente public. Niveau : Moins de 350€. Flexibilité : Impératif."
                ],
            },
            {
                title: 'Extrait d\'un CdCF pour une Application Mobile de Jeu Éducatif',
                description: "",
                items: [
                    "<strong>FP1 : Permettre à l'élève d'apprendre en s'amusant.</strong><br/> - Critère : Taux de bonnes réponses aux quiz. Niveau : > 70% après 3 sessions. Flexibilité : Souhaitable.<br/> - Critère : Temps moyen passé sur l'appli par session. Niveau : 10-15 minutes. Flexibilité : Négociable.",
                    "<strong>FC1 : Fonctionner sur les smartphones courants.</strong><br/> - Critère : Compatibilité OS. Niveau : Android 8+ et iOS 13+. Flexibilité : Impératif.",
                    "<strong>FC2 : Être intuitive et facile à utiliser pour un enfant de 10-12 ans.</strong><br/> - Critère : Temps pour comprendre le but du jeu principal. Niveau : Moins de 2 minutes sans aide. Flexibilité : Important."
                ]
            }
        ],
        focusPoint: {
            title: "Le Savais-tu ? Un CdCF peut faire des dizaines de pages !",
            content: "Pour des objets très complexes comme une fusée Ariane, une voiture de Formule 1 ou un nouveau smartphone haut de gamme, le cahier des charges est un document énorme, parfois de plusieurs centaines de pages ! Il détaille des milliers de fonctions et de contraintes très précises. Chaque détail compte pour la sécurité, la performance et la réussite du projet !"
        }
    }
  ];

  const glossaryData: GlossaryTerm[] = [
    { term: "Analyse fonctionnelle", definition: "Méthode pour comprendre à quoi sert un objet et comment il fonctionne en étudiant ses fonctions." },
    { term: "Besoin", definition: "Ce qui est nécessaire ou désiré par un utilisateur, et que l'objet technique cherche à satisfaire." },
    { term: "Bête à cornes", definition: "Outil graphique simple pour exprimer le besoin fondamental auquel répond un produit (À qui rend-il service ? Sur quoi agit-il ? Dans quel but ?)." },
    { term: "Cahier des Charges Fonctionnel (CdCF)", definition: "Document qui décrit précisément toutes les fonctions qu'un produit doit remplir et les performances (niveaux) attendues pour chacune, avec leur flexibilité." },
    { term: "Contrainte (Fonction Contrainte FC)", definition: "Exigence ou limite que le produit doit respecter (ex: sécurité, coût, esthétique, normes, environnement)." },
    { term: "Critère d'appréciation", definition: "Caractéristique observable ou mesurable qui permet de juger si une fonction est bien remplie (ex: le 'poids' pour la fonction 'être léger')." },
    { term: "Diagramme pieuvre (ou diagramme des interacteurs)", definition: "Schéma qui montre les relations entre un produit (au centre) et les éléments de son environnement, illustrant ses fonctions principales et contraintes." },
    { term: "Flexibilité (d'un niveau)", definition: "Indique si un niveau de performance pour une fonction est obligatoire (impératif), peut être discuté (négociable) ou est simplement un plus (souhaitable)." },
    { term: "Fonction d'usage (ou globale)", definition: "La raison principale pour laquelle l'objet a été créé ; ce à quoi il sert globalement pour l'utilisateur. C'est la réponse à la question 'Dans quel but ?' de la bête à cornes." },
    { term: "Fonction Principale (FP)", definition: "Action que le produit doit réaliser pour satisfaire directement un besoin de l'utilisateur." },
    { term: "Fonction de service", definition: "Ensemble des actions attendues d'un produit pour répondre à un besoin de l'utilisateur. Comprend les fonctions principales (FP) et les fonctions contraintes (FC)." },
    { term: "Fonction technique (FT)", definition: "Action interne à l'objet, réalisée par un ou plusieurs composants (solutions techniques), pour assurer une ou plusieurs fonctions de service." },
    { term: "Matière d'œuvre (M.O.)", definition: "Ce sur quoi le produit agit pour remplir sa fonction (ex: l'air pour un ventilateur, les aliments pour un réfrigérateur, l'information pour un ordinateur)." },
    { term: "Niveau (de performance)", definition: "Valeur ou description de la performance attendue pour un critère d'appréciation (ex: poids < 500g ; autonomie > 10 heures)." },
    { term: "Solution technique (ST)", definition: "Moyen concret (composant, assemblage de composants, technologie, matériau) choisi pour réaliser une fonction technique." }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question: "Dans la 'bête à cornes' pour un vélo, 'Permettre au cycliste de se déplacer' est...",
      options: [
        { text: "L'utilisateur", id: "q1o1" },
        { text: "La matière d'œuvre", id: "q1o2" },
        { text: "La fonction globale", id: "q1o3" }
      ],
      correctAnswerId: "q1o3",
      feedback: "Correct ! C'est le but principal du vélo, sa fonction globale."
    },
    {
      question: "La couleur rouge d'une voiture de sport est principalement une...",
      options: [
        { text: "Fonction Principale (FP)", id: "q2o1" },
        { text: "Fonction Contrainte (FC)", id: "q2o2" },
        { text: "Solution Technique (ST)", id: "q2o3" }
      ],
      correctAnswerId: "q2o2",
      feedback: "Bien vu ! La couleur est liée à l'esthétique, c'est donc une Fonction Contrainte. Une FP serait 'transporter des passagers'."
    },
    {
      question: "Dans un Cahier des Charges (CdCF), le 'niveau' pour une fonction 'être étanche' pourrait être :",
      options: [
        { text: "'Très important'", id: "q3o1" },
        { text: "'Résister à une immersion sous 1m d'eau pendant 30 min (IP67)'", id: "q3o2" },
        { text: "'Utiliser un joint en caoutchouc'", id: "q3o3" }
      ],
      correctAnswerId: "q3o2",
      feedback: "Exactement ! Le niveau précise la performance attendue. 'Très important' est une flexibilité, et 'joint en caoutchouc' une solution technique."
    },
    {
      question: "Pour un smartphone, la 'batterie au lithium-ion' est un exemple de :",
      options: [
        { text: "Fonction Principale (FP) : Stocker l'énergie", id: "q4o1" },
        { text: "Fonction Technique (FT) : Convertir l'énergie chimique en énergie électrique", id: "q4o2" },
        { text: "Solution Technique (ST) pour la FT 'stocker l'énergie électrique'", id: "q4o3" }
      ],
      correctAnswerId: "q4o3",
      feedback: "C'est ça ! La batterie est la solution choisie pour stocker l'énergie. La FT serait de stocker de l'énergie, et une FP serait 'avoir une autonomie suffisante'."
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 text-slate-800 font-sans">
      <header className="bg-gradient-to-r from-custom-blue to-sky-500 text-white p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Module 2 : Analyse fonctionnelle et cahier des charges</h1>
          <p className="text-sky-100 mt-1 text-sm md:text-base">Technologie - Classe de 5ème</p>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 space-y-12">
        <Introduction
          hook="Sais-tu comment les ingénieurs transforment une idée géniale, comme le dernier smartphone ou la voiture de tes rêves, en un objet qui fonctionne parfaitement ? Ce n'est pas de la magie ! Ils utilisent une méthode spéciale pour bien comprendre ce que l'objet doit faire, pour qui, et comment. C'est comme être un détective des objets ! On va explorer ensemble comment on décompose un objet complexe, comme ta trottinette électrique, en plein de petites missions simples qu'il doit accomplir. Prêt à découvrir les secrets de la conception ?"
          objectives={[
            "S'approprier un cahier des charges.",
            "Identifier les fonctions techniques d'un objet.",
            "Proposer des solutions techniques pour répondre à des fonctions."
          ]}
          knowledge={[
            "Fonction globale (ou fonction d'usage).",
            "Fonctions techniques et solutions techniques.",
            "Cahier des charges fonctionnel (CdCF).",
            "Diagramme 'bête à cornes'.",
            "Diagramme 'pieuvre' (fonctions principales et contraintes)."
          ]}
        />

        {sectionsData.map((section) => (
          <Section key={section.id} {...section} />
        ))}
        
        <Quiz questions={quizQuestions} />
        <Glossary terms={glossaryData} />
        <Conclusion
          summary="Voilà, tu as découvert les outils des designers et ingénieurs ! La 'bête à cornes' pour bien cerner le besoin, le 'diagramme pieuvre' pour lister tout ce que l'objet doit faire et respecter, et le 'cahier des charges' comme un contrat super précis. Tu sais maintenant qu'avant de dessiner ou construire, il faut analyser : décomposer le problème en fonctions simples (fonctions de service, fonctions techniques) pour ensuite trouver les meilleures solutions techniques."
          opening="Ces outils ne servent pas qu'aux ingénieurs ! Tu peux les utiliser pour tes propres projets, pour organiser une fête, ou même pour choisir ton prochain smartphone en listant tes besoins et contraintes. Dans les prochains modules, nous verrons comment on choisit concrètement les matériaux et les énergies pour donner vie à ces solutions techniques !"
          reflectionQuestion="Si tu devais inventer un objet révolutionnaire pour faciliter la vie des collégiens à l'école, quelle serait sa fonction globale et deux fonctions contraintes importantes selon toi ?"
        />
      </main>
      <footer className="text-center p-6 bg-slate-800 text-slate-300 text-sm">
        <p>&copy; 2024 Cours de Technologie. Contenu généré à des fins éducatives.</p>
      </footer>
    </div>
  );
};

export default App;
