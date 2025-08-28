# Lendsqr FE Test (React + TS)

Small admin UI that lists users from a mock API, supports client-side pagination, caches responses in `localStorage`, and shows a user detail view. Includes a mock login.

## Stack
React + TypeScript + Vite • React Router • SCSS

## Features
- Cache-first data loading (list + detail) with `localStorage`
- Client-side pagination (compact ellipsis display)
- Centralized types in `src/types.ts`
- Simple component structure (Nav, Sidebar, Cards, Contact, Pagination, Profile, PersonalInfo)

## Routes
/ → Login (mock)
/Dashboard → Users list
/UserDetails/:userId → Single user details

## Data Flow
Dashboard → GET /users → cache (utils/storage) → table slice per page
UserDetails → GET /users/:id → cache → Profile + PersonalInfo

## File Structure
src/
  components/ (Nav, Sidebar, Cards, Contact, Pagination, Profile, PersonalInfo)
  pages/ (Login, Dashboard, UserDetails)
  utils/ (storage, Sidebar)
  types.ts, App.tsx, main.tsx


## ▶️ Run the project

```bash
npm install
npm run dev
# open http://localhost:5173

