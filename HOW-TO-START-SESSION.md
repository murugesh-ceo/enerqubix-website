# How To Start A Claude Code Session — enerqubix-website

## Step 1 — Open Terminal in the right folder

```bash
cd ~/Documents/MyCompany/Enerqubix/enerqubix-website
claude
```

## Step 2 — Paste this at the start of every session

```
Read CLAUDE.md and about-murugesh.md
Run /orchestrator for a quick briefing.
```

## Step 3 — Tell Claude Code what you want

Examples:
```
"Update the hero tagline to: [new text]"
"Add a new section about our team"
"Fix the contact email — it should be [new email]"
"Add a privacy policy page at /privacy.html"
"Update the product description for LifeChiAI"
"Add Open Graph meta tags for social sharing"
```

## After Every Change — Claude Code Will:

1. Edit index.html
2. Run /ui-designer to check design
3. Run /content-reviewer to check copy
4. Commit and push to main
5. Vercel auto-deploys in ~60 seconds

## To Check The Live Site

```
https://enerqubix.com
```

## Agents Available

| Agent | When to use |
|---|---|
| /orchestrator | Start of every session |
| /ui-designer | After any visual change |
| /content-reviewer | After any text change |
| /seo-reviewer | Before major content updates |

## File Structure

```
enerqubix-website/
├── index.html          ← THE ENTIRE WEBSITE
├── CLAUDE.md           ← Claude Code instructions
├── about-murugesh.md   ← Founder context
├── HOW-TO-START-SESSION.md  ← This file
├── orchestrator.md     ← Session start agent
├── ui-designer.md      ← Design review agent
├── content-reviewer.md ← Copy review agent
└── seo-reviewer.md     ← SEO review agent
```
