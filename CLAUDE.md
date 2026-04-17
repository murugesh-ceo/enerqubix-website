# Enerqubix Website — Claude Code Context

## PROJECT OVERVIEW

**Company:** Enerqubix AI Private Limited  
**Website:** enerqubix.com  
**Repo:** github.com/[your-username]/enerqubix-website  
**Deployed:** Vercel → enerqubix.com  
**Stack:** Pure HTML + CSS (no framework, no build step)  
**Auto-deploy:** Commit to main → Vercel deploys automatically  

## FOUNDER

**Name:** Murugesh Pattamuthu  
**Role:** Founder & CEO, Enerqubix AI Private Limited  
**Background:** 20 years enterprise IT — TCS, Cognizant, Squareshift  
**Location:** Chennai, Tamil Nadu, India  
**Email:** murugesh@enerqubix.com  
**Also runs:** Pranic Wellness Centre (PWC), Perungudi, Chennai  

## PRODUCT

**LifeChiAI** — AI-powered SaaS platform for pranic healing centres globally  
**URL:** lifechiai.com  
**Tagline:** Your centre runs itself  
**Status:** Live in production (launched March 2026)  

## WEBSITE STRUCTURE

Single file: `index.html`  
Sections:
1. Nav — logo + CTA to lifechiai.com
2. Hero — tagline + scroll
3. About — company background + stats
4. Product — LifeChiAI feature card
5. Contact — email, location, legal
6. Footer — copyright

## DESIGN SYSTEM

```
Primary colour:  #0D7377 (teal)
Light teal:      #14A085
Pale teal:       #E1F5EE
Ink (dark):      #111918
Ink mid:         #3A4A48
Ink light:       #6B7F7D
Cream bg:        #F7F5F0
White:           #FFFFFF

Fonts:
  Display: Instrument Serif (Google Fonts)
  Body:    DM Sans (Google Fonts)

Border radius: 20px cards, 100px pills
```

## HARD CONSTRAINTS

1. **No frameworks** — pure HTML + CSS only. No React, Vue, npm, build steps.
2. **No external dependencies** — only Google Fonts CDN allowed.
3. **Single file** — everything in index.html. No separate CSS or JS files.
4. **Mobile responsive** — must work on iPhone SE (375px) upwards.
5. **No horizontal scrolling** at any screen width.
6. **Touch targets** minimum 44×44px on mobile.
7. **Font size** minimum 16px on all inputs.
8. **No hardcoded personal data** that could change — use variables in CSS.
9. **Never break the teal design system** — all additions must use existing colours.
10. **Commit message format:** `feat:`, `fix:`, `content:`, `style:` prefix always.

## DEPLOY PROCESS

```
Edit index.html
git add index.html
git commit -m "content: [description]"
git push origin main
→ Vercel auto-deploys in ~60 seconds
→ Live at enerqubix.com
```

## WHAT THIS WEBSITE IS FOR

- Company credibility for investors
- Professional email signature destination
- Exotel / vendor verification
- GST + company registration reference
- Links to LifeChiAI product

## WHAT THIS WEBSITE IS NOT FOR

- Patient booking (that is lifechiai.com)
- Product documentation (lifechiai.com)
- Marketing campaigns (future)
- Blog (future — Phase 16)

## FUTURE PAGES TO ADD (not now)

- /privacy — Privacy policy for Enerqubix AI
- /team — Murugesh bio + future team
- /blog — Thought leadership (Phase 16)
- /investors — Investor brief (when ready)

## COMMON TASKS

**Update contact email:**
  Find: murugesh@enerqubix.com
  Replace with new email

**Add a new section:**
  Follow existing section pattern:
  <section class="[name]" id="[name]">
    <div class="[name]-inner"> ... </div>
  </section>

**Change hero tagline:**
  Find: <h1> tag in .hero section
  Edit text only — keep <em> tags for italic teal words

**Update company stats:**
  Find: .about-stats section
  Edit .stat-num and .stat-label values

**Add a new product card:**
  Copy .product-card pattern
  Add new card inside .product section
