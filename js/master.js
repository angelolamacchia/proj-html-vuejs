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
        latestPosts: [
            {
                title: "How to make friends as a grown-up",
                url: ["blog-54.jpg",],
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum esse aspernatur dignissimos pariatur nesciunt porro nostrum asperiores similique dolor maiores sapiente, perferendis molestias, quidem aliquam explicabo quam voluptas obcaecati [...]",
                author: "John Doe",
                date: {day: 12, month: "JAN"},
                category: ["Lifestyle", "Travel"],
            },
            {
                title: "Simple ways to have a pretty face",
                url: ["blog-55 (1).jpg",],
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum esse aspernatur dignissimos pariatur nesciunt porro nostrum asperiores similique dolor maiores sapiente, perferendis molestias, quidem aliquam explicabo quam voluptas obcaecati [...]",
                author: "John Doe",
                date: {day: 12, month: "JAN"},
                category: ["Photography", "Travel"],
            },
            {
                title: "Ranking the greatest players in basketball",
                url: ["blog-56 (1).jpg",],
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum esse aspernatur dignissimos pariatur nesciunt porro nostrum asperiores similique dolor maiores sapiente, perferendis molestias, quidem aliquam explicabo quam voluptas obcaecati [...]",
                author: "John Doe",
                date: {day: 12, month: "JAN"},
                category: ["Sports", "Business"],
            },
            {
                title: "Top camper trailer towing tips",
                url: ["blog-58 (1).jpg",],
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum esse aspernatur dignissimos pariatur nesciunt porro nostrum asperiores similique dolor maiores sapiente, perferendis molestias, quidem aliquam explicabo quam voluptas obcaecati [...]",
                author: "John Doe",
                date: {day: 12, month: "JAN"},
                category: ["Travel", "Lifestyle"],
            },
            {
                title: "10 best travel tips after 5 years traveling the world",
                url: ["blog-13.jpg", "blog-16.jpg", "blog-20.jpg", "blog-23.jpg", "blog-29.jpg", "blog-40.jpg"],
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum esse aspernatur dignissimos pariatur nesciunt porro nostrum asperiores similique dolor maiores sapiente, perferendis molestias, quidem aliquam explicabo quam voluptas obcaecati [...]",
                author: "John Doe",
                date: {day: 8, month: "JAN"},
                category: ["Travel", "Lifestyle"],
            },
        ],
        instagramPhotos: ["insta1.jpg","insta2.jpg","insta3.jpg","insta4.jpg","insta5.jpg","insta6.jpg",],
        footerRecentPosts: [
            {
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                date: {
                    hour: "12:53",
                    month: "Dec",
                    day: "19th",
                },
                url: "our-office-4-square.jpg",
            },
            {
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                date: {
                    hour: "12:54",
                    month: "Dec",
                    day: "20th",
                },
                url: "our-office-5-square.jpg",
            },
        ],
        footerComments: [
            {
                author: "John Doe",
                link: "lorem impsum dolo sit amet.",
                date: {
                    hour: "12:55 AM",
                    month: "Dec",
                    day: "19th",
                },
            },
            {
                author: "Maria Carl",
                link: "lorem impsum porget sue amet.",
                date: {
                    hour: "12:57 AM",
                    month: "Dec",
                    day: "21th",
                },
            },
        ],
        footerCategories: ["gadgets", "photography", "lifestyle", "fashion", "recipes", "travel", "business", "architecture", "reviews", "sports", "videos", "technology", "design"],
        footerFaq: {
            image: "logo-footer.png",
            copiright: "© Copyright 2020. All rights reserved.",
            links: ["FAQ's", "Sitemap", "Contact us"],
        },
    },
})