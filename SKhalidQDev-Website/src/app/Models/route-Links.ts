interface RouteLinks {
    btnText: string;
    route: string;
    icon: string;
}

export const RouteLinks: RouteLinks[] = [
    {
        btnText: 'Curriculum',
        icon: 'description',
        route: '/curriculum',
    },
    {
        btnText: 'Projects',
        icon: 'code',
        route: '/projects',
    },
    {
        btnText: 'About',
        icon: 'info',
        route: '/about',
    },
];

export const SocialMediaLinks: RouteLinks[] = [
    {
        btnText: 'Twitter',
        icon: '/assets/Images/twitter-brands.svg',
        route: 'https://twitter.com/SKhalidQDev'
    },
    {
        btnText: 'Linkedin',
        icon: '/assets/Images/linkedin-in-brands.svg',
        route: 'https://uk.linkedin.com/in/sad-khalid-qayyum-74488015b/en-us'
    }
];
