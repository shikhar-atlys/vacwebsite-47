import React from "react";
import Button from "@/components/ui-custom/Button";

const HistorySection: React.FC = () => {
  return (
    <section className="bg-neutral-100 px-0 py-[60px]" id="history">
      <div className="max-w-[800px] text-center mx-auto my-0">
        <h2 className="text-2xl font-semibold mb-5">
          Embracing Evolution for over 130 Years
        </h2>
        <p className="text-[#666] leading-[1.6] mb-5">
          With a physical presence across the Middle East, Africa, Europe, and
          Asia, the Seoul branch has grown from a modest beginning to become one
          of the region's leading businesses and strategic partnerships. As one
          of the largest independent family-owned multinationals in the region,
          WM Kanoo has gradually expanded its reach into diverse sectors,
          establishing itself as a highly respected organization that has
          successfully interconnected businesses beyond its home base. WM Kanoo
          fosters a global network of partnerships, strengthening its
          international presence.
        </p>
        <Button variant="link">Learn more</Button>
      </div>
    </section>
  );
};

export default HistorySection;
