import React, { useState } from "react";

import ProductCard from "@/_components/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/_components/ui/pagination"; // Убедитесь, что эти компоненты существуют в вашей библиотеке
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const ProductCardsResult = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(productCardsData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCards = productCardsData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedCards.map(card => {
          return (
            <li key={card.id}>
              <ProductCard cardData={card} />
            </li>
          );
        })}
      </ul>
      <Pagination>
        <PaginationContent>
          {currentPage !== 1 && (
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handlePrevious} />
            </PaginationItem>
          )}

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductCardsResult;
