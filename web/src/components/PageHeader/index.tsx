import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import {FiArrowLeft} from 'react-icons/fi'

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description, children}: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar">
        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar
        </Link>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
          {description && <p>{description}</p>}
          {children }
      </div>
    </header>
  );
};

export default PageHeader;