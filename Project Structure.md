Project Structure📂
```
├── .dockerignore
├── .eslintrc.json
├── .github
    ├── ISSUE_TEMPLATE
    │   ├── bug_report.md
    │   ├── custom.md
    │   └── feature_request.md
    └── workflows
    │   ├── auto-label.yml
    │   ├── issue-close-open.yml
    │   ├── pr-checker.yml
    │   ├── pr-merge.yml
    │   └── pr-raise.yml
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CODING_STANDARDS.md
├── CONTRIBUTING.md
├── Dockerfile
├── LICENSE
├── README.md
├── SECURITY.md
├── app
    ├── App.tsx
    ├── Room.tsx
    ├── api
    │   ├── logout
    │   │   └── route.ts
    │   ├── signin
    │   │   └── route.ts
    │   └── signup
    │   │   └── route.ts
    ├── blogs
    │   └── page.tsx
    ├── contact
    │   └── page.tsx
    ├── contributors
    │   └── page.tsx
    ├── faq
    │   └── page.tsx
    ├── favicon.ico
    ├── front-navbar.tsx
    ├── globals.css
    ├── images
    │   └── design-deck-logo.png
    ├── layout.tsx
    ├── login
    │   └── page.tsx
    ├── not-found.tsx
    ├── page.tsx
    ├── pricing
    │   └── page.tsx
    ├── privacy_policy
    │   └── page.tsx
    ├── provider.tsx
    ├── signup
    │   ├── page.tsx
    │   └── search.png
    ├── support
    │   └── page.tsx
    ├── terms_of_use
    │   └── page.tsx
    └── workspace
    │   └── page.tsx
├── components.json
├── components
    ├── BackToTop
    │   └── BackToTop.tsx
    ├── LeftSideBar.tsx
    ├── Live.tsx
    ├── Loader.tsx
    ├── Navbar.tsx
    ├── Preloader.jsx
    ├── RightSideBar.tsx
    ├── ShapesMenu.tsx
    ├── comments
    │   ├── Comments.tsx
    │   ├── CommentsOverlay.tsx
    │   ├── NewThread.tsx
    │   ├── NewThreadCursor.tsx
    │   ├── PinnedComposer.tsx
    │   └── PinnedThread.tsx
    ├── cursor
    │   ├── Cursor.tsx
    │   ├── CursorChat.tsx
    │   └── LiveCursors.tsx
    ├── progressbar
    │   └── progressbar.tsx
    ├── reaction
    │   ├── FlyingReaction.module.css
    │   ├── FlyingReaction.tsx
    │   └── ReactionButton.tsx
    ├── settings
    │   ├── Color.tsx
    │   ├── Dimensions.tsx
    │   ├── Export.tsx
    │   └── Text.tsx
    ├── ui
    │   ├── GoogleTranslator.jsx
    │   ├── ThemeSwitcher.tsx
    │   ├── button.tsx
    │   ├── context-menu.tsx
    │   ├── dropdown-menu.tsx
    │   ├── faq.tsx
    │   ├── footer.tsx
    │   ├── input.tsx
    │   ├── label.tsx
    │   ├── review.tsx
    │   └── select.tsx
    └── users
    │   ├── ActiveUsers.tsx
    │   ├── Avatar.module.css
    │   ├── Avatar.tsx
    │   └── index.module.css
├── constants
    └── index.ts
├── context
    └── UserContext.tsx
├── designdeckui.png
├── docker-compose.yml
├── gssoc.jpg
├── hack.jpg
├── hooks
    └── useInterval.ts
├── lib
    ├── canvas.ts
    ├── key-events.ts
    ├── shapes.ts
    ├── useMaxZIndex.ts
    └── utils.ts
├── liveblocks.config.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── prisma
    ├── migrations
    │   ├── 20241024074156_init
    │   │   └── migration.sql
    │   └── migration_lock.toml
    └── schema.prisma
├── public
    ├── 404.svg
    ├── Liam.jpg
    ├── assets
    │   ├── ChevronDown.tsx
    │   ├── CursorSVG.tsx
    │   ├── Screenshot_from_2024-07-27_21-52-39-removebg-preview.png
    │   ├── align-bottom.svg
    │   ├── align-horizontal-center.svg
    │   ├── align-left.svg
    │   ├── align-right.svg
    │   ├── align-top.svg
    │   ├── align-vertical-center.svg
    │   ├── back.svg
    │   ├── circle.svg
    │   ├── comments.svg
    │   ├── contact-us-dark.svg
    │   ├── contact-us-light.svg
    │   ├── delete.svg
    │   ├── design-deck-logo.png
    │   ├── favicon.ico
    │   ├── freeform.svg
    │   ├── front.svg
    │   ├── group.svg
    │   ├── hash.svg
    │   ├── image.svg
    │   ├── line.svg
    │   ├── loader.gif
    │   ├── logo.png
    │   ├── main.gif
    │   ├── polygon.svg
    │   ├── rectangle.svg
    │   ├── reset.svg
    │   ├── select.svg
    │   ├── text.svg
    │   ├── triangle.svg
    │   └── ungroup.svg
    ├── ava.jpg
    ├── download.png
    ├── download1.png
    ├── download1.webp
    ├── download2.png
    ├── five.webp
    ├── four.webp
    ├── james.jpg
    ├── offline.html
    ├── one.webp
    ├── service-worker.js
    ├── sophia.jpg
    ├── three.webp
    ├── two.webp
    └── zara.jpg
├── tailwind.config.ts
├── tsconfig.json
└── types
    ├── declaration.d.ts
    └── type.ts
```
