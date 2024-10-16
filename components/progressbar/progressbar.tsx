import { useEffect, useState } from "react";

const Progressbar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollProgress(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: "5px",
                backgroundColor: "#29d", // Customize the color
                zIndex: 9999,
                transition: "width 0.25s ease-out", // Smooth transition
            }}
        />
    );
};

export default Progressbar;
