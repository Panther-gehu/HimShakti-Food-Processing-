# Week 7 - AI Prompt Testing Log

## Prompt Variation 1

### Prompt
Generate an attractive e-commerce product listing.

Product Name: {product_name}
Weight: {weight}
Price: {price}
Description: {short_description}
Tone: {tone}

Return:
1. Product Title
2. Marketing Tagline
3. Product Description

### Example Input
- Product Name: Mandua Flour
- Weight: 1 kg
- Price: ₹180
- Tone: Professional

### Example Output
Generated a product title, tagline, and description.

### Observation
The response was good but sometimes included Markdown symbols such as ** and ###.


---

## Prompt Variation 2

### Prompt
You are an expert e-commerce copywriter.

Generate a clean product listing.

Rules:
- Do NOT use Markdown.
- Do NOT use ** or ###.
- Plain text only.

### Example Input
- Product Name: Mandua Flour
- Weight: 1 kg
- Price: ₹180

### Example Output
Generated plain text without Markdown formatting.

### Observation
The formatting improved significantly and became easier to display in the frontend.


---

## Prompt Variation 3 (Final Prompt)

### Prompt
You are an expert e-commerce copywriter.

Generate a product listing.

Rules:
- Plain text only.
- No Markdown.
- No bullets.
- Keep under 180 words.

Return exactly:

Product Title:
...

Marketing Tagline:
...

Product Description:
...

### Example Input
- Product Name: Mandua Flour
- Weight: 1 kg
- Price: ₹180

### Example Output
Product Title:
Premium Organic Mandua Flour

Marketing Tagline:
Pure Himalayan Nutrition in Every Bite

Product Description:
Organic Mandua Flour is sourced from the Himalayan region of Uttarakhand and is rich in fiber, calcium, and essential nutrients. It is an excellent choice for healthy traditional recipes and a balanced lifestyle.

---

## Best Prompt

The third prompt produced the best results because it generated clean, structured, and consistent output without Markdown formatting. The response was concise, easy to display in the React frontend, and suitable for an e-commerce product page. It also required no additional formatting before presenting it to users.

## System Role Used

Expert E-commerce Copywriter