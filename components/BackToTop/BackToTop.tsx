import { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const scrollButton = document.querySelector(".scroll-button");

        const handleScroll = () => {
            // Show button when the user scrolls down more than 100px
            if (window.pageYOffset > 100) {
                setIsVisible(true);
                scrollButton?.classList.add("show-btn");
            } else {
                setIsVisible(false);
                scrollButton?.classList.remove("show-btn");
            }
        };

        const smoothScrollToTop = () => {
            const scrollY = window.pageYOffset;
            const scrollStep = Math.max(10, Math.floor(scrollY / 20));
            if (scrollY > 0) {
                window.scrollBy(0, -scrollStep);
                requestAnimationFrame(smoothScrollToTop);
            }
        };

        const handleClick = () => {
            requestAnimationFrame(smoothScrollToTop);
        };

        scrollButton?.addEventListener("click", handleClick);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            scrollButton?.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <>
            <button
                className={`scroll-button ${isVisible ? "show-btn" : ""}`}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#29d",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px 18px",
                    cursor: "pointer",
                    display: isVisible ? "block" : "none",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 1000,
                }}
            >
                ↑
            </button>
        </>
    );
};

export default BackToTopButton;
