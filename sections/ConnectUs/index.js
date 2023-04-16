import React from "react";
import Heading from "@/elements/Heading";
import Button from "@/components/Button";

const ConnectUs = () => {
  return (
    <div className="connect">
      <div className="flex outerContainer items-center justify-center lg:h-[192px]  py-[18px]">
        <div className="items-center lg:px-9 px-5">
          <Heading color="text-black" priority={3} leading="12">
            Get a free quote today.
          </Heading>
        </div>

        <Button
          type="tertiary"
          size="xl"
          href="https://sass-lang.com/documentation/syntax#scss"
        >
          Let's Talk
        </Button>
      </div>
    </div>
  );
};

export default ConnectUs;
