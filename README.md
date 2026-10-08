# How Miriam Can Update This Portfolio

This repository contains the complete source code for Miriam Gonzalez's Revenue Operations portfolio. GitHub is the permanent home for the source. Vercel publishes the website from the `main` branch.

## The three content files

Most wording can be changed without touching the page layout:

- `content/profile.ts` — headline, introduction, About copy, contact details, operating range, systems and certifications.
- `content/projects.ts` — case studies and the smaller operating-area cards.
- `content/experience.ts` — career history.

The site layout is in `app/page.tsx` and the visual styling is in `app/globals.css`.

## Tricentis interview portfolio

The focused interview version is available at `/tricentis`.

- Edit its wording in `content/tricentis.ts`.
- Edit its page structure in `app/tricentis/page.tsx`.
- Edit its visual styling in `app/tricentis/tricentis.module.css`.

This page is marked `noindex`, so search engines are asked not to include the tailored application page in public search results. Anyone with the direct URL can still view it.

## 1. Change the headline

Open `content/profile.ts`. Change the text after `headline:`. You can also change the professional title and supporting introduction in the same file.

## 2. Change the About section

Open `content/profile.ts`. Edit `aboutHeadline` or any paragraph inside the `about` list. Keep quotation marks and commas around each paragraph.

## 3. Add, edit or remove a project

Open `content/projects.ts`. Every case study is one object inside the `projects` list.

To add a project, copy an existing project object from its opening `{` to its closing `},`, paste it underneath, then change the number, title, tags and copy. Optional parts such as `impact`, `highlights` and `sections` can be kept or removed. The website creates the layout from this structured content automatically.

The first project in the list is shown as the flagship case study.

## 4. Update career history

Open `content/experience.ts`. Edit an existing role or copy one role object to add another. Put the newest role first.

## 5. Update systems or certifications

Open `content/profile.ts`. Find the `systems` and `certifications` lists near the bottom of the file. Edit the text, remove an item or copy one item to add another.

## 6. Preview the website on your computer

Install Node.js if it is not already installed. Open a terminal in this repository, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser. Press `Ctrl+C` in the terminal when finished.

## 7. Publish a change

The simplest method is directly in GitHub:

1. Open this repository in GitHub.
2. Open the content file you want to edit.
3. Click the pencil icon.
4. Make the change and choose **Commit changes**.
5. Commit to the `main` branch.

Vercel will notice the GitHub change and publish it automatically. The update normally appears within a few minutes.

## 8. How GitHub and Vercel are connected

GitHub stores the complete, editable source. The Vercel project is linked to this repository and watches the `main` branch. Every commit to `main` starts a new production deployment. The GitHub repository remains the source of truth even if a deployment is removed.

## 9. Ask Codex or ChatGPT to make a change

Use a prompt such as:

> Open my `miriam-revops-portfolio` GitHub repository. Add this new case study to `content/projects.ts`, keep the current visual style, check the mobile layout, and commit the change to the main branch so Vercel republishes it.

Always name the repository and the file when you know them. Ask the assistant to show you the proposed copy before changing any claim you are unsure about.

## 10. Find the project from a completely new conversation

The project can always be recovered from your GitHub account:

1. Sign in to GitHub.
2. Open **Your repositories**.
3. Search for `miriam-revops-portfolio`.

In a new Codex conversation, say:

> Clone/open my GitHub repository `miriam-revops-portfolio` and help me update it. The main content is in the `content` folder.

The Vercel dashboard will also list the linked project, but GitHub is where the editable source lives.

## Useful commands

```bash
npm run dev     # local preview
npm run build   # check the production build
npm run lint    # check TypeScript
```

## Content accuracy and privacy

The public copy intentionally avoids internal Salesforce object names, code names, customer names, invoice references, financial data, internal URLs and detailed proprietary business rules. Check new case studies for the same confidential details before publishing them.
