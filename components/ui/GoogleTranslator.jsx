import React, { useEffect } from 'react';

const GoogleTranslator = () => {
  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages:
              'en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te,gu',
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            defaultLanguage: 'en',
            autoDisplay: false,
          },
          'google_element',
        );
      }
      cleanUpGadgetText();
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById('google_translate_script')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
          'https://translate.google.com/translate_a/element.js?cb=googleTranslateInit';
        script.id = 'google_translate_script';
        script.onerror = () =>
          console.error('Error loading Google Translate script');
        document.body.appendChild(script);
      }
    };
    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector('.goog-te-gadget');
      if (gadgetElement) {
        const textNodes = gadgetElement.childNodes;
        textNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = ''; // Clear text content
          }
        });
      }
    };
    loadGoogleTranslateScript();

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }

    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <div id='google_element' className='google-translate-container'>
      <style jsx>{`
        .goog-te-combo {
          background-color: #272d39 !important; /* Force background */
          border-radius: 0.4rem !important;
          padding: 0.5rem !important;
          font-size: 1rem !important;
          transition: all 0.3s ease-in-out !important;
          outline: none !important;
          font-weight: 500 !important; /* Tailwind: font-medium */
          cursor: pointer !important;
          text-align: center !important;
          color: #fff !important;
        }
    
        .goog-te-combo:hover {
          background-color: #272d31 !important;
          border-color: #0056b3 !important;
          color: #eee !important;
          transform: scale(1.02) !important;
        }
    
        .goog-logo-link {
          display: none !important; /* Hide Google logo */
        }
    
        .goog-te-gadget {
          color: transparent !important;
        }
    
        .goog-te-gadget > span > a {
          display: none !important;
        }
    
        .goog-te-gadget .goog-te-combo {
          color: #fff !important; /* Ensure text color stays white */
        }
    
        .goog-te-gadget .goog-te-combo:hover {
          color: silver !important;
        }
    
        #google_translate_element
          .goog-te-gadget-simple
          .goog-te-menu-value
          span:first-child {
          display: none !important;
        }
    
        #google_translate_element
          .goog-te-gadget-simple
          .goog-te-menu-value:before {
          content: 'Translate' !important; /* Custom text */
          color: #007bff !important; /* Blue text */
          font-weight: 600 !important;
        }
    
        .goog-te-banner-frame {
          display: none !important; /* Hide banner */
        }
    
        .goog-te-menu-frame {
          max-height: 400px !important;
          overflow-y: auto !important;
          background-color: #ffffff !important;
          border: 2px solid #007bff !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 4px 8px rgba(0, 123, 255, 0.1) !important;
        }
    
        /* Customize iframe */
        .skiptranslate > iframe {
          height: 0 !important;
          border-style: none !important;
          box-shadow: none !important;
        }
    
        a,
        button {
          transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease !important;
        }
    
        a:hover,
        button:hover {
          color: #0056b3 !important; /* Darker blue on hover */
          transform: translateY(-3px) !important; /* Lift effect */
        }
      `}</style>
    </div>

  );
};

export default GoogleTranslator;
