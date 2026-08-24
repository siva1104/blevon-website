"use client";

import React from "react";
import { RxChevronLeft } from "react-icons/rx";

export function BlogPostHeader4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.5fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <div className="rb-12 flex flex-col items-start justify-start">
              <a
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mb-6 md:mb-8"
                href={undefined}
              >
                <RxChevronLeft />
                All work
              </a>
              <div className="rb-4 mb-5 flex w-full items-center justify-start md:mb-6">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Logistics
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Northwind Logistics digital transformation for global freight
                operations
              </h1>
              <div className="mt-6 flex size-full flex-col items-start md:mt-8">
                <div className="rb-4 flex items-center sm:mb-8 md:mb-0">
                  <div className="mr-8 md:mr-10 lg:mr-12">
                    <p className="text-sm">Published on 11 Jan 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
