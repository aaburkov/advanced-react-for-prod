import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
    path: string,
    text: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Main page title',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'About page title',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile page title',
        Icon: ProfileIcon,
    },
];
