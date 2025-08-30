export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name, tagline, description, email,
  social, ctas
}`;

export const servicesQuery = `*[_type == "service"] | order(_createdAt asc){
  _id, title, desc, icon, ctaLabel, ctaHref
}`;

export const projectsQuery = `*[_type == "project"] | order(_createdAt desc){
  _id, title, blurb, tags, comingSoon,
  "image": mainImage.asset->url,
  linkUrl
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc){
  _id, quote, author
}`;

