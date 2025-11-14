# RTR Technologies – Blog Content Brief Template

Use this prompt framework when collaborating with ChatGPT (or any writer) to produce long-form insights that map directly to the Sanity `blogPost` schema. Copy the sections below into your chat, fill in the square-bracket placeholders, and remind the model that the final draft must be **2,000–2,500 words**.

---

## 1. Brand & Audience
- **Voice & tone:** Strategic, confident, data-backed, no fluff.
- **Audience:** Marketing leaders, founders, and growth teams evaluating WordPress, SEO, PPC, or analytics partners.
- **Differentiators to reinforce:** WordPress expertise, SEO-first mindset, GA4/analytics rigor, experimentation culture.

## 2. Required Metadata
- **Working title:** `[Insert provisional headline]`
- **Target slug:** `kebab-case version of the title`
- **Meta description (150–160 chars):** `[One-sentence summary with the main keyword]`
- **Reading time:** `"[8-10] min read"` (adjust once draft is final)
- **Primary keywords (include throughout):**
  - `[Keyword 1]`
  - `[Keyword 2]`
  - `[Keyword 3]`
  - `[Keyword 4]`
- **Tags (1–3 topical labels):** e.g., `["SEO", "WordPress", "Growth"]`

## 3. Article Structure
Ask ChatGPT to deliver the content as an ordered list of sections that match this schema:

```json
[
  {
    "heading": "Section heading (optional for intro)",
    "highlight": false,
    "body": [
      "Paragraph 1 (4–6 sentences)",
      "Paragraph 2",
      "... (individual paragraphs as separate strings)"
    ]
  }
]
```

### Required sections
1. **Intro (no heading):**
   - Two paragraphs framing the topic, pain points, and why it matters now.
2. **3–5 core sections with headings:**
   - Each should dive deep into a specific strategy, framework, or playbook step.
   - Use examples, data points, or short bullet lists for clarity.
3. **Highlighted takeaway:**
   - Set `highlight: true` for a section that summarizes key actions or lessons.
4. **Closing CTA setup:**
   - Final paragraph should naturally lead into a service-oriented CTA.

> Tip: When prompting, tell ChatGPT to return the final answer as JSON so you can paste directly into Sanity or `src/content/blog/posts.ts`.

## 4. Length & Style Guards
- Total word count: **2,000–2,500 words** (remind ChatGPT explicitly).
- Paragraphs: 3–5 sentences each; avoid single-sentence paragraphs unless emphasizing a quote or stat.
- Use subheadings for scannability; avoid generic H2s like “Conclusion”.
- Incorporate the specified keywords organically (no stuffing).
- Keep jargon minimal; explain any advanced concepts in plain English.
- Include actionable steps or frameworks readers can implement.

## 5. Closing CTA Block (Sanity `cta`)
- **Label:** `[e.g., "Plan your SEO roadmap"]`
- **Href:** `[e.g., "/contact" or a services URL]`
- Ensure the preceding section tees up this CTA.

---

### Example Prompt Snippet
```
You are writing for RTR Technologies, a WordPress + SEO agency. Draft a 2,200-word article titled "Preparing WordPress for the Search Generative Experience (SGE)" - explore how generative AI is transforming SEO, from automated content creation to smarter keyword optimization. Target keywords: ["generative AI SEO, search generative experience, AI‑powered content", "conversion rate optimization"]. 

Incorporate the specified keywords organically (no stuffing). Keep jargon minimal; explain any advanced concepts in plain English. Include actionable steps or frameworks readers can implement.

Brand & Audience
- **Voice & tone:** Strategic, confident, data-backed, no fluff.
- **Audience:** Marketing leaders, founders, and growth teams evaluating WordPress, SEO, PPC, or analytics partners.
- **Differentiators to reinforce:** WordPress expertise, SEO-first mindset, GA4/analytics rigor, experimentation culture.

Required Metadata
- **Working title:** `Preparing WordPress for the Search Generative Experience (SGE)`
- **Target slug:** ``
- **Meta description (150–160 chars):** `[One-sentence summary with the main keyword]`
Return JSON matching this schema:
[
  {
    "heading": "Section heading (optional for intro)",
    "highlight": false,
    "body": [
      "Paragraph 1 (4–6 sentences)",
      "Paragraph 2",
      "... (individual paragraphs as separate strings)"
    ]
  }
]
Include: intro (no heading), 5 deep-dive sections, one highlight section summarizing the playbook, and a closing section that transitions into the CTA "Plan your SEO roadmap" linking to "/contact".
```

Customize the placeholders each time, and you’ll have consistent, schema-ready drafts from ChatGPT. Happy publishing!
