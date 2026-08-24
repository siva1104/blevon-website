"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Answers to the questions we hear most often from ambitious teams
            before they reach out.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is your typical timeline?
            </h2>
            <p>
              Most engagements run from eight to sixteen weeks depending on
              scope. We define a clear schedule during the first week. You will
              know every milestone before we start.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do you price projects?
            </h2>
            <p>
              We work on a fixed project fee based on a defined scope. This
              keeps the focus on the work, not the clock. You get a precise
              proposal before any commitment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with startups?
            </h2>
            <p>
              Yes. We partner with funded startups and established brands alike.
              The common thread is a serious ambition to build something that
              matters.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What does engagement look like?
            </h2>
            <p>
              We assign a dedicated senior team to your project. Communication
              is direct and weekly. No account managers, no handoffs, just the
              people doing the work.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you work with our internal team?
            </h2>
            <p>
              Often we embed with your product and engineering teams. We design
              systems your team can run with. Collaboration is the point, not a
              concession.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
