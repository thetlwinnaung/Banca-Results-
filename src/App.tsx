import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageHome } from './components/PageHome';
import { PageSearch } from './components/PageSearch';
import { ResultModal } from './components/ResultModal';
import { StudentResult } from './types';
import { searchOrGenerateStudent } from './data/students';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search'>('home');
  const [selectedStudent, setSelectedStudent] = useState<StudentResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleNavigateToSearch = () => {
    setCurrentPage('search');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleSearchSubmit = (searchTerm: string) => {
    const result = searchOrGenerateStudent(searchTerm);
    setSelectedStudent(result);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Global Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 flex flex-col w-full">
        {currentPage === 'home' ? (
          <PageHome onNavigateToSearch={handleNavigateToSearch} />
        ) : (
          <PageSearch 
            onSearchSubmit={handleSearchSubmit} 
            onBackToHome={handleBackToHome}
            onSelectStudent={(student) => {
              setSelectedStudent(student);
              setIsModalOpen(true);
            }} 
          />
        )}
      </main>

      {/* Popup Modal for Detailed Result & Marks */}
      <ResultModal 
        student={selectedStudent} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
