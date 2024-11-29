import {
  GiNightSky,
  GiModernCity,
  GiKnockedOutStars,
} from 'react-icons/gi/index';
import { IoCloudyNightOutline } from 'react-icons/io5/index';
import { TbBrandAppleArcade, TbSunset2 } from 'react-icons/tb/index';
import { LiaCarSideSolid } from 'react-icons/lia/index';
import { FaMountainCity } from 'react-icons/fa6/index';
import { FaCameraRetro } from 'react-icons/fa/index';
import { MdOutlineWbTwilight } from 'react-icons/md/index';
import { BiSolidCity } from 'react-icons/bi/index';
import { BsCassetteFill } from 'react-icons/bs/index';

import type { Category } from '../types';

export const lofi: Category = {
  icon: <BsCassetteFill />,
  id: 'lofi',
  sounds: [
    {
      icon: <GiNightSky />,
      id: 'cozy-night',
      label: 'Cozy Night',
      src: '/sounds/lofi/cozy-night.mp3',
    },
    {
      icon: <GiModernCity />,
      id: 'retro-city',
      label: 'Retro City',
      src: '/sounds/lofi/retro-city.mp3',
    },
    {
      icon: <BiSolidCity />,
      id: 'neon-nights',
      label: 'Neon Nights',
      src: '/sounds/lofi/neon-nights.mp3',
    },

    {
      icon: <IoCloudyNightOutline />,
      id: 'midnight-vibes',
      label: 'Midnight Vibes',
      src: '/sounds/lofi/midnight-vibes.mp3',
    },
    {
      icon: <LiaCarSideSolid />,
      id: 'chill-drive',
      label: 'Chill Drive',
      src: '/sounds/lofi/chill-drive.mp3',
    },

    {
      icon: <GiKnockedOutStars />,
      id: 'starry-lake',
      label: 'Starry Lake',
      src: '/sounds/lofi/starry-lake.mp3',
    },
    {
      icon: <FaCameraRetro />,
      id: 'polaroid-dreams',
      label: 'Polaroid Dreams',
      src: '/sounds/lofi/polaroid-dreams.mp3',
    },
    {
      icon: <TbBrandAppleArcade />,
      id: 'vintage-arcade',
      label: 'Vintage Arcade',
      src: '/sounds/lofi/vintage-arcade.mp3',
    },
    {
      icon: <FaMountainCity />,
      id: 'urban-escape',
      label: 'Urban Escape',
      src: '/sounds/lofi/urban-escape.mp3',
    },
    {
      icon: <MdOutlineWbTwilight />,
      id: 'twilight-laze',
      label: 'Twilight Laze',
      src: '/sounds/lofi/twilight-laze.mp3',
    },
    {
      icon: <TbSunset2 />,
      id: 'sunset-boulevard',
      label: 'Sunset Boulevard',
      src: '/sounds/lofi/sunset-boulevard.mp3',
    },
  ],
  title: 'Lofi',
};
