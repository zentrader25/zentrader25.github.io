// Article.jsx
import React from 'react';
import '../styles/tailwind.css';


const Article = () => {
  return (
    <div className="bg-blue-500 rounded-lg shadow-md p-6">
      <h2 className="text-white text-2xl font-bold mb-4">Título del artículo</h2>
      <p className="text-white mb-4">Fecha de publicación: 01/01/2022</p>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor fermentum justo,
        vitae consectetur lectus malesuada id. Mauris ullamcorper mi nec est laoreet, ut
        facilisis nunc auctor. In nec pulvinar metus. Morbi ullamcorper tincidunt felis,
        ac sagittis dolor bibendum sed. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Sed aliquam elit et lacinia condimentum. Integer
        ultrices co
      </p>
    </div>
  );
};

export default Article;
