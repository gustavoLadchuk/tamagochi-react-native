import { FontAwesome } from "@expo/vector-icons";

interface HeaderProps {
    reloadGame: () => void;
    pauseGame: () => void;
    children: JSX.Element;
    isPause: boolean;
}

export default function Header({
    children,
    reloadGame,
    pauseGame,
    isPaused,
})