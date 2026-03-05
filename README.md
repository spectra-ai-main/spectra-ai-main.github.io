📚 Spectra.AI
This repository contains the source code for a multi-subject digital library built with MkDocs and the Material for MkDocs theme. It uses a Ghost Deployment strategy to maintain a public production site and a hidden User Acceptance Testing (UAT) environment.

📂 File Structure Overview 

.
├── .github/workflows/       # GitHub Actions (The Automation Engines)
│   ├── deploy-prod.yml      # Pushes to the public /latest/ folder
│   └── deploy-uat.yml       # Pushes to the hidden folder
├── docs/                    # The actual textbook content (Markdown)
│   ├── assets/              # Images, Diagrams, and Team photos
│   ├── biology/             # Biology subject folder
│   ├── physics/             # Physics subject folder
│   ├── index.md             # The main library homepage
│   ├── team.md              # "Meet the Team" page
│   └── robots.txt           # Prevents Google from indexing the Sandbox
├── mkdocs.yml               # Site configuration (Brain of the site)
└── requirements.txt         # Python dependencies (MkDocs, Mike, etc.)


🚀 How to Deploy
To Production: Simply push your changes to the main branch.
To Sandbox: Push your changes to the uat branch.

🛠 Maintenance & Rules

1. The "Ghost" Rule
The uat branch has a modified mkdocs.yml that disables the version dropdown. This ensures that people in the Sandbox cannot easily see a link back to Production, and people in Production cannot see the link to the Sandbox.

2. Merging Content
When you want to move content from the Sandbox to Production:
DO: Merge the docs/ folder.
DO NOT: Overwrite the mkdocs.yml on the main branch with the one from uat.