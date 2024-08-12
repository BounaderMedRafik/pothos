import React from "react";

const MyLogo = ({ withText }: { withText?: boolean }) => {
  return (
    <div className="flex items-center gap-3 ">
      <img className="w-10" src="/brand/logo.png" alt="" />
      {withText ? (
        <div className="text-xl font-bold text-primary font-Familjen ">
          Pothos
        </div>
      ) : null}
    </div>
  );
};

export default MyLogo;
