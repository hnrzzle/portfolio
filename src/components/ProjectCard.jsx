/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import rally from '../images/projects/rally.png';

const Wrapper = styled.div`
  ${tw('shadow-lg relative no-underline rounded-lg px-8 text-white')};
  width: 100%;
  padding-top: 0px;
  background: ${props => props.bg};
  padding-bottom: 1rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding-top: 0;
`;

const Github = styled.div`
  svg {
    color: red;
  }
  &:hover {
    color: blue;
  }
`;

const FeaturedImage = styled.img`
  max-width: 100%;
`;

const ProjectCard = ({ title, link, codeLink, children, bg }) => (
  <Wrapper bg={bg}>
    <Title>
      <h1>{title}</h1>
    </Title>
    <FeaturedImage alt="project screenshot" src={rally} />
    <Text>{children}</Text>
    <Title>
      <h3>Tech Used:</h3>
    </Title>
    <Github>
      <div>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
      </div>
    </Github>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
};
