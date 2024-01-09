import React from "react";

const Analytics = () => (
    <>
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KCJ578VBNW"
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-KCJ578VBNW');        
            `
            }}
        />
    </>
)

export default Analytics