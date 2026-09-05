# Responsive and accessibility checklist

Responsiveness is a requirement for every implementation step, not a final adaptation pass.

## Required viewport checks

- 320px: narrow phone baseline;
- 390px: common modern phone;
- 768px: tablet / intermediate layout;
- 1024px: compact desktop;
- 1440px: wide desktop.

## Per-component checks

- no horizontal page overflow;
- content order remains meaningful without desktop columns;
- navigation and all actions remain available;
- touch targets are comfortably operable;
- text does not truncate or collide, including longer Portuguese copy;
- screenshots preserve useful detail and aspect ratio;
- responsive images do not download unnecessarily large sources;
- spacing and typography retain hierarchy rather than merely shrinking;
- focus indicators remain visible and unobstructed;
- keyboard order follows the visual and semantic order;
- light and dark themes both retain sufficient contrast;
- reduced-motion preferences are respected;
- zoom at 200% does not remove content or functionality.

## Page-level checks

- Home, Projects, case studies, About, CV, and 404;
- English and Portuguese;
- light and dark themes;
- direct loading of every route on static hosting;
- common empty, loading, missing-content, and long-content states.

