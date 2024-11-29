class PagesConfig {
  home = '/';
  about = '/about';
  news = '/news';
  masters = '/masters';
  video ='/video';
  services = '/services';
  partners = '/partners';
  contacts = '/contacts';
  // Method to get paths with locale
  getPath(route: keyof PagesConfig, locale: string) {
    // Adding locale in the path (e.g., /en/about)
    return `/${locale}${this[route]}`;
  }
}

export const pageConfig = new PagesConfig();
