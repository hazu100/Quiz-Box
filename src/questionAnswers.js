const questions = [
    {
        question: "Where do most of the events in Game of Thrones take place?",
        answers: ["Northeros", "Easteros", "Westeros"],
        rightAnswer: "Westeros",
        id: "128471",
    },

    {
        question: " Who shot the burning arrow that sunk Lord Hoster Tully’s ship at his funeral?",
        answers: ["Brynden Tully", "Edmure Tully", "WestCatelyn Tullyeros"],
        rightAnswer: "Brynden Tully",
        id: "128472",
    },

    {
        question: "For how many kings did Lord Tywin Lannister serve as Hand?",
        answers: ["0", "2", "3"],
        rightAnswer: "3",
        id: "123457",
    },

    {
        question: "“A crow gone bad. A man gone mad. A people so had. A North so sad.” Who said these lines?",
        answers: ["Jon Snow", "Mance Rayder", "Bran Stark"],
        rightAnswer: "Mance Rayder",
        id: "123447",
    },

    {
        question: "Which of these was The King Who Knelt?",
        answers: ["Eddard Stark", "Mikken Stark", "Torrhen Stark"],
        rightAnswer: "Torrhen Stark",
        id: "122457",  
    },

    {
        question: "Patchface came from which of the Free Cities?",
        answers: ["Valyria", "Lorath", "Volantis"],
        rightAnswer: "Volantis",
        id: "113457",
    },

    {
        question: "Where did Lyanna die?",
        answers: ["The Tower of Joy", "Winterfell", "The Shadow Tower"],
        rightAnswer: "The Tower of Joy",
        id: "133457",
    },

    {
        question: "Who forged Arya’s sword, Needle?",
        answers: ["Donal Noye", "Mikken", "Tobho Mott"],
        rightAnswer: "Mikken",
        id: "143457",
    },

    {
        question: "Which language is commonly spoken in the Game of Thrones?",
        answers: ["Valyrian", "Old English", "Norse"],
        rightAnswer: "Valyrian",
        id: "153457",
    },

    {
        question: "How many robbers died in the heist?",
        answers: ["One", "Three", "Four"],
        rightAnswer: "Three",
        id: "163457",
    },

    
    {
        question: "What is The professor's real name?",
        answers: ["Agustin Ramos", "Sergio Marquina", "Andrés de Fonollosa"],
        rightAnswer: "Sergio Marquina",
        id: "173547",
    },
    
    {
        question: "Raquel's mother has how many daughters?",
        answers: ["2", "1", "4"],
        rightAnswer: "2",
        id: "183547",
    },
    
    {
        question: "Inspector Raquel's mother suffered from which medical condition?",
        answers: ["Parkinson's disease", "Alzheimer's disease", "Congestive heart failure"],
        rightAnswer: "Alzheimer's disease",
        id: "193457",
    },
    
    {
        question: "How many people did the professor recruit to help him carry out his plan?",
        answers: ["Nine", "Seven", "Eight"],
        rightAnswer: "Eight",
        id: "202475",
    },
    
    {
        question: "Whose idea and plan was for the heist?",
        answers: ["The professor's father", "The professor's", "Angel"],
        rightAnswer: "The professor's father",
        id: "210245",
    },

];

export default (n = 5) =>  Promise.resolve(questions.sort(()=>0.5-Math.random()).slice(0,n));
