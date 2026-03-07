import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";
import backbtn from "../assets/images/back-button.png"
import Notfound from "./404";

import "./styles/readArticle.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const articleId = Number(slug);
	const articleFactory = Number.isInteger(articleId)
		? myArticles[articleId - 1]
		: null;
	const article = useMemo(
		() => (articleFactory ? articleFactory() : null),
		[articleFactory]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	const ArticleStyle = useMemo(() => {
		if (!article) {
			return null;
		}

		return styled.div`
			${article.style}
		`;
	}, [article]);

	if (!article || !ArticleStyle) {
		return <Notfound />;
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article.description} />
				<meta name="keywords" content={article.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src={backbtn}
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article.date}
								</div>
							</div>

							<div className="title read-article-title">
								{article.title}
							</div>

							<div className="read-article-body">
								<ArticleStyle>{article.body}</ArticleStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
