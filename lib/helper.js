export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url) {
  return getStrapiURL(url);
}
