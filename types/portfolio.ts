export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  client_name: string | null;
  project_url: string | null;
  category: string;
  technologies: string[];
  cover_image: string;
  gallery_images: string[];
  featured: boolean;
  published: boolean;
  display_order: number;
  status: "Completed" | "Ongoing";
  created_at: string;
  updated_at?: string;
}
