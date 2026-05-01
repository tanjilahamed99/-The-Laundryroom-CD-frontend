// app/layout.tsx
import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "The Laundryroom CD | Fresh Clothes, Happy Life – Long Beach Blvd",
  description: "Premium laundry & dry cleaning services in Long Beach Blvd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Remove data-arp attributes before React hydrates
                if (document.documentElement.hasAttribute('data-arp')) {
                  document.documentElement.removeAttribute('data-arp');
                }
                if (document.body.hasAttribute('data-arp')) {
                  document.body.removeAttribute('data-arp');
                }
                
                // Monitor for dynamically added attributes
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes') {
                      if (mutation.attributeName === 'data-arp') {
                        if (document.documentElement.hasAttribute('data-arp')) {
                          document.documentElement.removeAttribute('data-arp');
                        }
                        if (document.body.hasAttribute('data-arp')) {
                          document.body.removeAttribute('data-arp');
                        }
                      }
                    }
                  });
                });
                
                observer.observe(document.documentElement, {
                  attributes: true,
                  attributeFilter: ['data-arp']
                });
                observer.observe(document.body, {
                  attributes: true,
                  attributeFilter: ['data-arp']
                });
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}