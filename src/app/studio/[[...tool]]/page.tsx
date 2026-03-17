"use client";
/**
 * Sanity Studio embedded at /studio
 * Must be "use client" + force-dynamic to prevent SSR errors
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
