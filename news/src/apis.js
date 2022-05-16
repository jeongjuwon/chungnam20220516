import axios from 'axios';

const apiKey = 'e40c9540da594621a4e0e3349a197c63';

export async function renderRelatedArticle(keyword) {
    console.log('순서 1');
    const relatedArticlesContainer = document.getElementById('relatedArticles');

    try {
        // ajax
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${apiKey}`);
        // 성공 핸들링
        let relatedArticles = "";
        console.log('순서 2', response.data.articles);
        response.data.articles.forEach(function(row) {
            relatedArticles += `<li><a href="${row.url}">${row.title}</a></li>`;
        });

        console.log(relatedArticlesContainer)
        // debugger;

        // 숫자형
        // 문자
        // 배열
        relatedArticlesContainer.innerHTML = relatedArticles;
    }
    catch(e) {
        // 에러 핸들링
        // console.log('순서 3', '에러', error);
    }
    finally {
        // 항상 실행되는 영역
        console.log('순서 4', '항상 실행')
    }

    console.log('순서 5', '성공 먼저');
}