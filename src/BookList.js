import React from "react";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default BookList;

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      height="150"
      width="200"
      src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>Interesting Facts For Curious Minds</h1>;

const Author = () => <h4>Jorden Moore</h4>;
