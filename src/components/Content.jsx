import React, { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(e.target.text?.value);
    e.target.reset();
  };

  return (
    <main className="main">
      <section className="content">
        <form onSubmit={handleSubmit} className="form">
          <textarea name="text"></textarea>
          <button type="submit">Display Text</button>
        </form>
        {text && <p className="text">{text}</p>}
      </section>
    </main>
  );
};

export default Content;
