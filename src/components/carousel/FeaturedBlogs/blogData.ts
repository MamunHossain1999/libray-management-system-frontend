import img1 from '@/assets/home/pexels-alinevianafoto-2465877.jpg';
import img2 from '@/assets/home/pexels-mikey-dabro-293966-1002655.jpg';
import img3 from '@/assets/home/pexels-nietjuhart-1809340.jpg';

export interface Blog {
  title: string;
  description: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    title: "Creating Streamlined Processes with Online Tools",
    description: "Explore how libraries are going digital to improve efficiency.",
    image: img1,
  },
  {
    title: "What are your safeguarding responsibilities?",
    description: "Understand how to protect data and privacy in digital libraries.",
    image: img2,
  },
  {
    title: "Reworking Membership Models",
    description: "Tips on how to adapt library memberships in 2025.",
    image: img3,
  },
];
