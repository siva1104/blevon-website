"use client";

import { Button, Tabs, TabsContent, TabsList } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Work</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              More case studies
            </h1>
            <p className="md:text-md">
              Explore how we have helped other ambitious teams win.
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="view-all"
          className="grid grid-cols-1 gap-x-12 gap-y-12 text-left md:grid-cols-[0.25fr_1fr] md:gap-x-12 lg:grid-cols-[15rem_1fr] lg:gap-x-16"
        >
          <TabsList className="mb-12 flex w-full flex-col md:mb-16">
            <div className="mb-6 text-base font-bold md:text-md">
              Categories
            </div>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Fintech
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Avalon Bank rebuilt its mobile experience from scratch
            </a>
            <p>
              A legacy banking app transformed into a modern digital product
              that customers actually use.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Healthcare
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Medlink patient portal cut wait times in half
                </a>
                <p>
                  A unified patient portal that gave doctors and patients the
                  same clear view.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    SaaS
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Cloudline analytics dashboard for fast-growing startups
                </a>
                <p>
                  A real-time analytics platform that turned raw data into clear
                  decisions.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Logistics
                  </p>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Harbor Freight tracking system for global shipping
                </a>
                <p>
                  A custom tracking solution that gave a global shipper full
                  visibility.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Fintech
                  </p>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Meridian Capital investor portal for private equity
                </a>
                <p>
                  A secure portal that streamlined reporting for investors and
                  fund managers.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Fintech
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Avalon Bank rebuilt its mobile experience from scratch
            </a>
            <p>
              A legacy banking app transformed into a modern digital product
              that customers actually use.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Healthcare
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Medlink patient portal cut wait times in half
                </a>
                <p>
                  A unified patient portal that gave doctors and patients the
                  same clear view.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    SaaS
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Cloudline analytics dashboard for fast-growing startups
                </a>
                <p>
                  A real-time analytics platform that turned raw data into clear
                  decisions.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Logistics
                  </p>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Harbor Freight tracking system for global shipping
                </a>
                <p>
                  A custom tracking solution that gave a global shipper full
                  visibility.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Fintech
                  </p>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Meridian Capital investor portal for private equity
                </a>
                <p>
                  A secure portal that streamlined reporting for investors and
                  fund managers.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Fintech
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Avalon Bank rebuilt its mobile experience from scratch
            </a>
            <p>
              A legacy banking app transformed into a modern digital product
              that customers actually use.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Healthcare
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Medlink patient portal cut wait times in half
                </a>
                <p>
                  A unified patient portal that gave doctors and patients the
                  same clear view.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    SaaS
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Cloudline analytics dashboard for fast-growing startups
                </a>
                <p>
                  A real-time analytics platform that turned raw data into clear
                  decisions.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Logistics
                  </p>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Harbor Freight tracking system for global shipping
                </a>
                <p>
                  A custom tracking solution that gave a global shipper full
                  visibility.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Fintech
                  </p>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Meridian Capital investor portal for private equity
                </a>
                <p>
                  A secure portal that streamlined reporting for investors and
                  fund managers.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Fintech
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Avalon Bank rebuilt its mobile experience from scratch
            </a>
            <p>
              A legacy banking app transformed into a modern digital product
              that customers actually use.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Healthcare
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Medlink patient portal cut wait times in half
                </a>
                <p>
                  A unified patient portal that gave doctors and patients the
                  same clear view.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    SaaS
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Cloudline analytics dashboard for fast-growing startups
                </a>
                <p>
                  A real-time analytics platform that turned raw data into clear
                  decisions.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Logistics
                  </p>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Harbor Freight tracking system for global shipping
                </a>
                <p>
                  A custom tracking solution that gave a global shipper full
                  visibility.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Fintech
                  </p>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Meridian Capital investor portal for private equity
                </a>
                <p>
                  A secure portal that streamlined reporting for investors and
                  fund managers.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Fintech
              </p>
              <p className="inline text-sm font-semibold">4 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              Avalon Bank rebuilt its mobile experience from scratch
            </a>
            <p>
              A legacy banking app transformed into a modern digital product
              that customers actually use.
            </p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Healthcare
                  </p>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Medlink patient portal cut wait times in half
                </a>
                <p>
                  A unified patient portal that gave doctors and patients the
                  same clear view.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    SaaS
                  </p>
                  <p className="inline text-sm font-semibold">5 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Cloudline analytics dashboard for fast-growing startups
                </a>
                <p>
                  A real-time analytics platform that turned raw data into clear
                  decisions.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Logistics
                  </p>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Harbor Freight tracking system for global shipping
                </a>
                <p>
                  A custom tracking solution that gave a global shipper full
                  visibility.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Fintech
                  </p>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Meridian Capital investor portal for private equity
                </a>
                <p>
                  A secure portal that streamlined reporting for investors and
                  fund managers.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
