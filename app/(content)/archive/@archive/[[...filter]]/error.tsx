"use client";

function page({ error }) {
  return (
    <div id="error">
      <h2>An error ocurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default page;
