"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/config";

export function DirectorySearchPreview() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All Locations");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 text-balance">
            Discover Businesses Across Sierra Leone
          </h2>
          <div
            className="mx-auto mb-4 h-1 w-12 rounded-full bg-primary"
            aria-hidden="true"
          />
          <p className="text-base sm:text-lg text-dark-gray text-balance">
            Find any business, product, or service, dial{" "}
            <span className="font-bold text-primary">{siteConfig.shortCode}</span>{" "}
            or search online at wisabi.sl.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-lg border border-light-gray p-4 sm:p-5 md:p-6"
            aria-label="Business directory search preview"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative min-w-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-gray/50" />
                <Input
                  type="search"
                  placeholder="Wetin yu de luk fɔ?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                  aria-label="Search query"
                />
              </div>
              <div className="relative sm:w-36 md:w-48 shrink-0">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-gray/50 pointer-events-none" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex h-11 w-full rounded-lg border border-light-gray bg-white pl-10 pr-9 text-base text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary appearance-none cursor-pointer truncate"
                  aria-label="Location"
                >
                  <option>All Locations</option>
                  <option>Freetown</option>
                  <option>Bo</option>
                  <option>Kenema</option>
                  <option>Makeni</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark-gray/50 pointer-events-none" />
              </div>
              <Button type="submit" className="sm:w-auto w-full shrink-0">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-dark-gray/70 mt-4 px-2 text-balance">
            Full directory search coming soon. Or dial{" "}
            <span className="font-bold text-primary">{siteConfig.shortCode}</span>{" "}
            from any network.
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {siteConfig.directoryCategories.map((category) => (
              <span
                key={category}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-light-gray text-xs sm:text-sm font-medium text-dark-gray hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
