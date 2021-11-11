import React from 'react'

function Togellipse() {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_79:484)">
        <circle cx="13" cy="9" r="9" fill="url(#paint0_angular_79:484)"/>
        </g>
        <defs>
        <filter id="filter0_d_79:484" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_79:484"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_79:484" result="shape"/>
        </filter>
        <radialGradient id="paint0_angular_79:484" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.2 10.5429) rotate(34.6242) scale(13.1244 11.8765)">
        <stop stop-color="#00FFFF"/>
        <stop offset="1" stop-color="#698AFF"/>
        </radialGradient>
        </defs>
        </svg>
        
    )
}

export default Togellipse
