import React, { useEffect } from 'react';

// 1. Tell TypeScript about the global Google variables
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          // Type for the constructor
          new (
            options: {
              pageLanguage: string;
              includedLanguages?: string;
              layout?: number;
            },
            elementId: string
          ): void;
          // Type for the static layout property
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // 2. Define the initialization function that Google's script will call
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { 
            pageLanguage: 'en', // Change this to your website's primary language
            includedLanguages: 'en,es,hi,fr,de,ar,zh,uk,tr,tl,ta,te,ru,pt', // Optional: restrict to specific languages
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE 
          },
          'google_translate_element' // The ID of the div where the widget will render
        );
      }
    };

    // 3. Prevent adding the script multiple times if the component re-renders
    const existingScript = document.getElementById('google-translate-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    // 4. This is where the Google dropdown will appear
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;