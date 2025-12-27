import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeWidget = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            // Catppuccin Mocha (Dark)
            document.body.style.setProperty('--bg-color', '#1e1e2e');
            document.body.style.setProperty('--text-color', '#cdd6f4');
            document.body.style.setProperty('--element-bg', '#313244');
        } else {
            // Catppuccin Latte (Light)
            document.body.style.setProperty('--bg-color', '#eff1f5');
            document.body.style.setProperty('--text-color', '#4c4f69');
            document.body.style.setProperty('--element-bg', '#ffffff');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#cdd6f4', // Keep consistent with navbar links
                padding: '10px',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.2s ease'
            }}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>
    );
};

export default ThemeWidget;
