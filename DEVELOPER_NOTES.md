# Developer Notes & System Configuration

## 1. Appwrite Configuration
**Credentials:**
- **Endpoint:** `https://fra.cloud.appwrite.io/v1`
- **Project ID:** `697dc1740035c082e94c`
- **Database ID:** `697dccb2002d63dec99b`

**Collections:**
- **Projects**
  - ID: `projects`
  - Permissions: Role `Any` -> `read` enabled.
  - Schema:
    - `title`: String (255) - Stores JSON `{"en": "...", "az": "..."}`
    - `desc`: String (5000) - Stores JSON `{"en": "...", "az": "..."}`
    - `slug`: String (100)
    - `category`: String (50)
    - `image`: URL

**Platforms (CORS):**
To ensure correct access from all environments, the following platforms must be added in Appwrite Console > Integrations > Platforms:
1. `localhost` (Development)
2. `xeyalnecefsoy.com` (Production)
3. `www.xeyalnecefsoy.com` (Production - crucial as it's treated as a separate domain)

## 2. Localization Strategy
- **Static Content:** Managed via `i18n/az.ts` and `i18n/en.ts` dictionaries.
- **Dynamic Content (Appwrite):**
  - Fields like Title and Description are stored as JSON strings.
  - Parsed in `lib/data.ts` into a structured object `{ en: string, az: string }`.
  - Frontend selects language via `project.title[lang] || project.title['en']`.

## 3. Vercel Deployment Checklist
- **Environment Variables:** Must match `.env.local`.
- **Redeploy:** Changing Env Vars requires a Redeploy to take effect.
- **Build Errors:** Ensure TypeScript types match strictly.
  - *Lesson:* Appwrite returns `string` for attributes, but we parse them to Objects. `Project` interface must reflect the parsed structure, while the raw fetcher handles the parsing.

## 4. Common Issues & Fixes
- **Hydration Mismatch:** Often caused by browser extensions (Grammarly, etc.). Safe to ignore in dev, doesn't affect prod.
- **Admin Redirect Loop:** Caused by `template.tsx` with stale logic. **Solution:** Removed intermediate layout files, used direct page logic.
- **NetworkError (Appwrite):** Indicates missing Domain in Appwrite Platforms list.

## 5. UI/UX Refinements
- **About Section:** Reduced left/right whitespace by using `max-w-5xl` and centering the flex container.
- **Glassmorphism:** Applied to Services and Admin cards for a modern feel.
