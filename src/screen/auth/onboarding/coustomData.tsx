import { ImageSourcePropType } from "react-native";
import imageIndex from "../../../assets/imageIndex";

interface Slidse {
    id: string;
    title: string;
    description: string;
    image: ImageSourcePropType;
}
  export interface Slide {
    id: string;
    title: string;
    description: string;
    image: ImageSourcePropType;
}

const slides: Slidse[] = [
    {
        id: '1',
        title: 'Find Your Favorite flat and more in Just a Few Clicks! ',
        description: 'Discover thousands of properties tailored to your preferences. Search, compare, and save your favoritesall in one place.',
        image: imageIndex.ba2,
    },
   
    {
        id: '3',
        title: 'Stay Updated with Property Alerts ',
        description: 'The biggest fashion community for inspiration and shopping.',
        image: imageIndex.ba2,
    },
   

]; 
export default slides