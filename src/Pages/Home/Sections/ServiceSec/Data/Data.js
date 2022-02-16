import { HiOutlineLightBulb } from 'react-icons/hi';
import { FcFlowChart, FcTodoList, FcServices } from 'react-icons/fc';
import { BsBarChart } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';


const Services = [
    {
        id: "service1",
        title: "Business strategy and consulting",
        para: "Corporate Loft thrives to help your business needs towards its anticipated future, everyone needs a road map.Everyone deserves correct mentorship and guidance to grow.",
        icon: <HiOutlineLightBulb />
    },
    {
        id: "service2",
        title: "Business plan",
        para: "Every successful business is founded on a sound business plan that concisely and clearly outlines the business purpose, vision, mission, goals and objectives and strategy, and an idea for a way the business will execute.",
        icon: <FcFlowChart />
    },
    {
        id: "service3",
        title: "Logo Designing",
        para: "Corporate Loft has its style of expression through design the aim is to capture the emotional and subjective needs of the product or service where we are applying our expertise.Our designing service will give you a new way of visual communication",
        icon: <BsBarChart />
    },
    {
        id: "service4",
        title: "Web design and development",
        para: "Our web professionals recognize the worth of solid information architecture design and integrative branding that engages the customer from the primary stop at your site.",
        icon: <CgWebsite />
    },
    {
        id: "service5",
        title: "Digital marketing and social media marketing",
        para: "Corporate loft team focuses on digital marketing audits, consulting, social media marketing, and target-oriented online advertisement.",
        icon: <FcTodoList />
    }, {
        id: "service6",
        title: "SEO Services",
        para: "Search engine optimization is indeed an extended-term and ongoing process with the very best ROI for your business.The results of the patience and tenacity results in better user experience and review.",
        icon: <FcServices />
    }
]

export default Services