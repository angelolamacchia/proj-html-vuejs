var root = new Vue ({
    el: "#root",

    data: {
        accountBar: {
            slogan: "Everything about Lifestyle, Travel and Gadgets!",
            functions: ["sign in", "about us", "contact us", "buy now"],
        },
        menuBar: ["home", "elements", "features", "pages", "portfolio", "blog", "shop"],
        news: [
            {
                text: "How to take better concert pictures in 30 seconds",
                category: "photography",
                url: "blog-46.jpg",
            },
            {
                text: "Gadgets that make your smartphone even smarter",
                category: "gadgets",
                url: "blog-47.jpg",
            },
            {
                text: "20 top-rated tour attractions in Manhattan",
                category: "travel",
                url: "blog-48.jpg",
            },
            {
                text: "The best way to ride a motorcycle",
                category: "lifestyle",
                url: "blog-49.jpg",
            },
            {
                text: "5 fun things to do at the beach",
                category: "travel",
                url: "blog-50.jpg",
            },
            {
                text: "Amazingly fresh fruit and herb drinks for summer",
                category: "recipes",
                url: "blog-51.jpg",
            },
        ],
        popularPosts: [
            {
                title: "Simple ways to have a pretty face",
                date: "Jenuary 12, 2021",
                url: "blog-55.jpg",
            },
            {
                title: "Ranking the greatest players in basketball",
                date: "Jenuary 12, 2021",
                url: "blog-56.jpg",
            },
            {
                title: "4 ways to look cool in glasses",
                date: "Jenuary 12, 2021",
                url: "blog-57.jpg",
            },
            {
                title: "Top camper trailer towing tips",
                date: "Jenuary 12, 2021",
                url: "blog-58.jpg",
            },
            {
                title: "5 lovely walks in New York",
                date: "Jenuary 12, 2021",
                url: "blog-59.jpg",
            },
        ],
        recentPosts: [
            {
                title: "Main reasons to stop texting and driving",
                date: "Jenuary 12, 2021",
                url: "blog-65.jpg",
            },
            {
                title: "Tips to help you quickly prepare your lunch",
                date: "Jenuary 12, 2021",
                url: "blog-66.jpg",
            },
            {
                title: "Why should i buy a smartwatch?",
                date: "Jenuary 12, 2021",
                url: "blog-67.jpg",
            },
            {
                title: "The best augmented realty smartglasses",
                date: "Jenuary 12, 2021",
                url: "blog-68.jpg",
            },
            {
                title: "12 healthiest foods to eat for breakfast",
                date: "Jenuary 12, 2021",
                url: "blog-69.jpg",
            },
        ],
    },
})