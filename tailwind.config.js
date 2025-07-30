/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    blueOne: '#00448b',
                    blueTwo: '#0091da',
                },
            },
            keyframes: {
                slideDown: {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
                beaconPulse: {
                    '0%': { transform: 'scale(0)', opacity: '1' },
                    '50%': { opacity: '0.6' },
                    '100%': { transform: 'scale(1.6)', opacity: '0' },
                },
                shakeRotate: {
                    '0%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                    '10%': { transform: 'rotate(-25deg) scale(1) skew(1deg)' },
                    '20%': { transform: 'rotate(25deg) scale(1) skew(1deg)' },
                    '30%': { transform: 'rotate(-25deg) scale(1) skew(1deg)' },
                    '40%': { transform: 'rotate(25deg) scale(1) skew(1deg)' },
                    '50%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                    '100%': { transform: 'rotate(0deg) scale(1) skew(1deg)' },
                },
                popupScaleIn: {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                popupScaleOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0)', opacity: '0' },
                },
            },
            animation: {
                slideDown: 'slideDown 0.4s ease-out',
                beacon: 'beaconPulse 2s infinite ease-out',
                shake: 'shakeRotate 1s ease-in-out infinite',
                popupIn: 'popupScaleIn 0.3s ease-out forwards',
                popupOut: 'popupScaleOut 0.3s ease-out forwards',
            },
        },
    },
    plugins: [],
};
