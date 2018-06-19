import React, { Component } from 'react';
import { bookComponents as c, ArticleWrapper } from '../.';
import { Img } from '../Shared';
import { pdfCourse, PDF_VERSION } from '../../constants/urls';
import { Link } from 'react-router';

// TODO: author, createdDate, updatedDate
class Article extends Component {
  render() {
    return (
      <ArticleWrapper>
        <c.Bookrow marginBottom={15} center>
          <h1>PDF to Learn Chinese (Beginners)</h1>
        </c.Bookrow>
        <c.Bookrow marginBottom={30} center>
          <h2>A comprehensive introduction to Mandarin Chinese</h2>
        </c.Bookrow>
        <c.Bookrow center>
          <a href={ pdfCourse }>
            <Img
              name="Season_1_PDF.png"
              caption="Download the PDF version of ChineseMe Season 1 The Basics"
            />
          </a>
        </c.Bookrow>
        <c.P>
          <i>Season 1 The basics</i> is a series of ten episodes (or lessons) designed for complete beginners and covering the fundamentals of the Chinese language. It is the first part of our <Link to="/course">integrated course</Link>.
        </c.P>
        <c.P>
          This PDF version ({ PDF_VERSION }) is designed for students and teachers who would like to print the course or read in on any digital device without an Internet connection.
        </c.P>
        <c.P>
          We hope you will find this course both helpful and enjoyable!
        </c.P>
        <c.Bookrow center marginTop={45} marginBottom={45}>
          <a href={pdfCourse}>Download PDF</a>
        </c.Bookrow>

      </ArticleWrapper>
    );
  }
}

export default Article;
