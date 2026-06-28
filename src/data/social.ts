// Social media links
// EDITABLE — Update social media links as needed

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/628112500112',
    label: 'WA',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.46 0 .1 5.36.1 11.96c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.63a11.94 11.94 0 0 0 5.86 1.5h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.2-3.51-8.43ZM12.07 21.85h-.01a9.92 9.92 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.9 9.9 0 0 1-1.51-5.31c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
      </svg>
    `,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/indococopeat',
    label: 'IG',
    icon: `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
      </svg>
    `,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/indococopeat',
    label: 'LI',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.98H3.92V20h3.02V8.98ZM5.43 4A1.75 1.75 0 1 0 5.4 7.5 1.75 1.75 0 0 0 5.43 4ZM20.1 13.7c0-3.02-1.62-4.42-3.78-4.42a3.25 3.25 0 0 0-2.95 1.62h-.04V8.98h-2.9V20h3.02v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.78 1.64 1.78 2.92V20h3.02v-6.3h-.2Z"/>
      </svg>
    `,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/indococopeat',
    label: 'FB',
    icon: `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.2 8.2V6.9c0-.65.15-1.05 1.08-1.05h1.45V3.2A18.6 18.6 0 0 0 14.6 3c-2.1 0-3.55 1.28-3.55 3.62V8.2H8.65v2.95h2.4V21h3.15v-9.85h2.45l.38-2.95h-2.83Z"/>
      </svg>
    `,
  },
];