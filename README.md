# Lab 02 — Student Portfolio

Open `index.html` in a browser. No build step is needed. Bootstrap 5.3.3 loads from jsDelivr, so internet access is required for the dashboard flex utilities.

This portfolio uses illustrative student details, project descriptions, an achievement, and dashboard counts. Replace them in `index.html` and `script.js` with your own. Replace `hashim@example.com` in both contact links with your email address. All four SVG illustrations are local and editable.

## Requirements

| Task | Implementation |
| --- | --- |
| 1: Student profile | `.profile` uses Flexbox, `justify-content`, and `align-items`. The mobile media query stacks the image and information. Three skills appear in `#skills`. |
| 2: Project cards | `.project-list` uses wrapping Flexbox. Cards move upward on hover; images use a grayscale filter that clears on image hover. Each card has an image, title, description, and working project-detail button. |
| 3: Achievement | `.achievement-card` is positioned relatively. `.featured` is absolutely positioned in its top-right corner. `::before` draws the decorative accent line. |
| 4: Dashboard | The container uses Bootstrap `d-flex justify-content-between align-items-center flex-wrap gap-3`. Four equal-width items share a row on desktop and wrap on smaller screens. Custom CSS does not set the dashboard container's display property. |
| 5: Complete portfolio | Navigation, introduction, skills, projects, dashboard, achievement, and footer combine all seven listed concepts. |

## Manual checks

- View at desktop and 375px mobile widths; check for horizontal overflow and a vertical profile on mobile.
- Hover cards and images to see movement and filter changes.
- Open each project button and dismiss with the close button or Escape.
- Tab through links and buttons to check visible focus; use the skip link to reach the main content.
- Enable reduced motion to disable hover movement and smooth scrolling.
