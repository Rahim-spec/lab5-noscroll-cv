# Prompts 
## 📌 Google Stitch Prompt (Project 2: Interactive Single-View CV)

```text
Create a sleek, dark-themed single-page CV web application designed to fit entirely on a single screen with zero vertical page scrolling. All sections sit on the same page, with content updating dynamically in a main display area when clicking navbar items (without page reloads, opening new tabs, or vertical scrolling).

Use a rich charcoal/black background (#111318) with subtle dark container cards (#1A1D24) and crisp white and silver typography for a clean, modern aesthetic.

Include a top fixed navigation bar that controls which section is visible in the main content container:

1. Header / Personal Profile (Default Active Tab):
   - A side-by-side card featuring a profile photo placeholder on the left.
   - On the right, display the full name "ALEX MERCER" in bold, high-contrast all-caps, followed by the title "Full Stack Developer / Designer".
   - Include a compact metadata list for Age, Phone, Email, and Location with subtle grey icons.

2. 'About' & 'Education' View:
   - Combine a short introductory summary with a vertical timeline for education history.
   - Display entries clearly (e.g., "B.Sc. in Computer Science" and "B.Sc. Company Shani") with node icons and light grey institution details.

3. Skills View:
   - Present technical skills using dark rounded pill tags with clear white labels (UI/UX Design, JavaScript, Project Management, Python, etc.).
   - Arrange items in a clean multi-column grid layout with generous spacing.

4. Hobbies View:
   - Display hobbies in a horizontal row of minimalist dark card tiles (Photography 📷, Travel ✈️, Chess ♟️, Reading 📚).
   - Center-align line-art icons and titles on each tile.

5. Certificates View:
   - Grid layout displaying certificate credential cards (e.g., Google UX Design, AWS Certified Cloud Practitioner).
   - Include image preview thumbnails at the top, credential titles below, and outline "View" action buttons at the bottom.

Ensure the entire layout fits cleanly within the browser viewport with page scrollbars disabled, using interactive tab/section switching so clicking a navbar item seamlessly displays the selected section in place.