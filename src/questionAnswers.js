const questions = [
    {
        question: "What is Pili's nick name?",
        answers: ["Abhisek", "Binku", "Kanduni", "Hazu"],
        rightAnswer: "Binku",
        id: "123456",
    },

    {
        question: "What is Pili's D.O.B?",
        answers: ["12th Dec", "13th Aug", "11th Dec", "29 Feb"],
        rightAnswer: "13th Aug",
        id: "458695",
    }
    ,
    {
        question: "How old is Pili?",
        answers: ["23", "73", "100", "50"],
        rightAnswer: "23",
        id: "858605",
    },

    {
        question: "One of Pili's favourite colors?",
        answers: ["Orange", "Green", "Black", "Golden"],
        rightAnswer: "Black",
        id: "323856",
    },

    {
        question: "Which cartoon character does Hazu look like?",
        answers: ["Nobita", "kochikame", "Shizuka", "Gian"],
        rightAnswer: "Gian",
        id: "128476",
    },

    {
        question: "Where is Hazu's office?",
        answers: ["Kolkata", "Bangalore", "Mumbai", "Jalpaiguri"],
        rightAnswer: "Bangalore",
        id: "128470",
    },

    {
        question: "Where does Pili like to travel?",
        answers: ["Hill Station", "Sea Beach"],
        rightAnswer: "Hill Station",
        id: "128477",
    },

    {
        question: "What does Pili like more?",
        answers: ["Ice creams", "Chocolates"],
        rightAnswer: "Chocolates",
        id: "128479",
    },
];

export default (n = 5) =>  Promise.resolve(questions.sort(()=>0.5-Math.random()).slice(0,n));
